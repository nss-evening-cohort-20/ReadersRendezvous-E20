using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication.Negotiate;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using ReadersRendezvous.Interfaces;
using ReadersRendezvous.Repository;

namespace ReadersRendezvous
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddTransient<ILoginRepository, LoginRepository>();
            builder.Services.AddTransient<IBookRepository, BookRepository>();
            builder.Services.AddTransient<IUserRepository, UserRepository>();
            builder.Services.AddTransient<IAdminRepository, AdminRepository>();
            builder.Services.AddTransient<IUserBookRepository, UserBookRepository>();
            builder.Services.AddTransient<IUserRequestRepository, UserRequestRepository>();
            builder.Services.AddTransient<IFavoriteBookRepository, FavoriteBookRepository>();

            builder.Services.AddCors(options =>
            options.AddPolicy("ReadersRendezvousPolicy",
            builder =>
            {
                builder.AllowAnyOrigin();
                builder.AllowAnyMethod();
                builder.AllowAnyMethod();
            }));

            builder.Services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "ReadersRendezvousAPI",
                    Version = "v1",
                });
                //options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                //{
                //    Name = "Authorization",
                //    Type = SecuritySchemeType.ApiKey,
                //    Scheme = "Bearer",
                //    BearerFormat = "JWT",
                //    In = ParameterLocation.Header,
                //    Description = "Enter JWT bearer Token: bearer <token>"
                //});
                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                    new OpenApiSecurityScheme
                    {
                        Reference=new OpenApiReference
                        {
                            Type=ReferenceType.SecurityScheme,
                            Id="Bearer"
                        }
                    },
                    new string[] {}
                    }
                });
            });

            //FirebaseApp.Create(new AppOptions()
            //{
            //    Credential = GoogleCredential.FromFile(builder.Configuration["FirebaseConfig"]),
            //});

            //builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            //{
            //    options.IncludeErrorDetails = true;
            //    options.Authority = "https://securetoken.google.com/readersrendezvous-e20-80a40"; //use your project name
            //    options.TokenValidationParameters = new TokenValidationParameters
            //    {
            //        ValidateIssuer = true,
            //        ValidIssuer = "https://securetoken.google.com/readersrendezvous-e20-80a40", //use your project name
            //        ValidateAudience = true,
            //        ValidAudience = "readersrendezvous-e20-80a40",  //use your project name
            //        ValidateLifetime = true,
            //    };
            //});

            //builder.Services.AddAuthentication(NegotiateDefaults.AuthenticationScheme)
            //    .AddNegotiate();


            //builder.Services.AddAuthorization(options =>
            //{
            //    // By default, all incoming requests will be authorized according to the default policy.
            //    options.FallbackPolicy = options.DefaultPolicy;
            //});

            builder.Services.AddAuthorization();
      
            var app = builder.Build();

            //for react ------------------- 
            app.UseCors(policy => policy.AllowAnyHeader()
                                        .AllowAnyMethod()
                                        .SetIsOriginAllowed(origin => true)
                                        .AllowCredentials());
                                      


            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors("ReadersRendezvousPolicy");

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseExceptionHandler(options =>
            {
                options.Run(async context =>
                {
                    context.Response.StatusCode = 500;
                    context.Response.ContentType = "application/json";
                    var ex = context.Features.Get<ExceptionHandlerFeature>();
                    if (ex != null)
                    {
                        await context.Response.WriteAsync(ex.Error.Message);
                    }
                });
            });


            app.MapControllers();

            app.Run();
        }
    }
}