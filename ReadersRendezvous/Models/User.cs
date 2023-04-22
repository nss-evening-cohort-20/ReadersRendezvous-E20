using ReadersRendezvous.Model;

namespace ReadersRendezvous.Model
{
    public class User
    {
        internal object userId;

        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? LibraryCardNumber { get; set; }
        public bool IsActive { get; set; }
        public string? PhoneNumber { get; set; }
        public string? AddressLineOne { get; set; }
        public string? AddressLineTwo { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public int Zip { get; set; }
        public int Id { get; internal set; }
    }
}


//SELECT TOP(1000) [Id]
//      ,[FirstName]
//      ,[LastName]
//      ,[Email]
//      ,[LibraryCardNumber]
//      ,[IsActive]
//      ,[PhoneNumber]
//      ,[AddressLineOne]
//      ,[AddressLineTwo]
//      ,[City]
//      ,[State]
//      ,[Zip]
//FROM[ReadersRendezvous].[dbo].[User]