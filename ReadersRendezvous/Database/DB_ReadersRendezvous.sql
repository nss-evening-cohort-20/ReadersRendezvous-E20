USE [master]
GO
IF db_id('ReadersRendezvous') IS NULL
  CREATE DATABASE [ReadersRendezvous]
GO
USE [ReadersRendezvous]
GO

--DROP TABLE IF EXISTS [Login];
--DROP TABLE IF EXISTS [User];
--DROP TABLE IF EXISTS [Admin];
--DROP TABLE IF EXISTS [Genre];
--DROP TABLE IF EXISTS [CoverType];
--DROP TABLE IF EXISTS [Book];
--DROP TABLE IF EXISTS [UserBook];
--DROP TABLE IF EXISTS [UserRequest];
--DROP TABLE IF EXISTS [UserRequestType];

CREATE TABLE [Login] (
  [Id] int PRIMARY KEY IDENTITY,
  [PasswordHash] varchar(50) not null,
  [AdminId] int not null,
  [UserId] int not null
)
GO

CREATE TABLE [User] (
  [Id] int PRIMARY KEY IDENTITY not null,
  [FirstName] varchar(50) not null,
  [LastName] varchar(50) not null,
  [Email] varchar(255) not null,
  [LibraryCardNumber] int not null,
  [IsActive] bit not null,
  [PhoneNumber] varchar(50) not null,
  [AddressLineOne] varchar(255) not null,
  [AddressLineTwo] varchar(255) not null,
  [City] varchar(255) not null,
  [State] varchar(255) not null,
  [Zip] int not null
)
GO

CREATE TABLE [Admin] (
  [Id] int PRIMARY KEY identity not null,
  [FirstName] varchar(50) not null,
  [LastName] varchar(50) not null,
  [Email] varchar(255) not null
)
GO

CREATE TABLE [Genre] (
  [Id] int PRIMARY KEY IDENTITY not null,
  [Description] varchar(500) not null
)
GO

CREATE TABLE [CoverType] (
  [Id] int PRIMARY KEY IDENTITY not null,
  [Description] varchar(500) not null
)
GO

CREATE TABLE [Book] (
  [Id] int PRIMARY KEY IDENTITY not null,
  [ImageUrl] varchar(2048) not null,--
  [AgeRangeId] int not null,--
  [GenreId] int not null,
  [Title] varchar(255) not null,
  [CoverTypeId] int not null,
  [Quantity] int not null,
  [Author] varchar(200) not null,
  [Publisher] varchar(500) not null,
  [Language] varchar(500) not null,
  [Description] varchar(2048) not null,
  [ISBN13] varchar(50) not null,
)
GO

CREATE TABLE [UserBook] (
  [Id] int PRIMARY KEY IDENTITY not null,
  [UserId] int not null,
  [BookId] int not null,
  [RentalStartDate] DateTime not null,
  [DueDate] DateTime not null,
  [LateFee] decimal(15, 2),
  [ReturnDate] DateTime 
)
GO

CREATE TABLE [UserRequest] (
  [Id] int PRIMARY KEY IDENTITY not null,
  [UserId] int not null,
  [BookId] int not null,
  [RequestTS] DateTime not null,
  [RequestTypeId] int not null
)
GO

CREATE TABLE [UserRequestType] (
  [Id] int PRIMARY KEY IDENTITY not null,
  [Description] varchar(500) not null
)
GO


CREATE TABLE [AgeRange] (
  [Id] int PRIMARY KEY IDENTITY not null,
  [Range] varchar(500) not null
)
GO

ALTER TABLE [Book] ADD FOREIGN KEY ([GenreId]) REFERENCES [Genre] ([Id])
GO

ALTER TABLE [Book] ADD FOREIGN KEY ([CoverTypeId]) REFERENCES [CoverType] ([Id])
GO

ALTER TABLE [UserBook] ADD FOREIGN KEY ([BookId]) REFERENCES [Book] ([Id])
GO

ALTER TABLE [UserBook] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [UserRequest] ADD FOREIGN KEY ([RequestTypeId]) REFERENCES [UserRequestType] ([Id])
GO

ALTER TABLE [UserRequest] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [UserRequest] ADD FOREIGN KEY ([BookId]) REFERENCES [Book] ([Id])
GO

ALTER TABLE [Login] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [Login] ADD FOREIGN KEY ([AdminId]) REFERENCES [Admin] ([Id])
GO

ALTER TABLE [Book] ADD FOREIGN KEY ([AgeRangeId]) REFERENCES [AgeRange] ([Id])
GO


---------------------------------------------------------------------------------------
-- starter Data for AgeRange table

INSERT INTO [dbo].[AgeRange]
           (
           [Range])
     VALUES
           ('Children'),
           ('Teens'),
           ('Adults')
GO

-- starter Data for Genre table

INSERT INTO [dbo].[Genre]
           (
           [Description])
     VALUES
           ('Fiction'),
           ('Non-Fiction'),
           ('Poetry'),
           ('Drama'),
           ('Comedy'),
           ('Romance'),
           ('Mystery'),
           ('Science fiction'),
           ('Fantasy'),
           ('Horror')
GO

-- starter Data for CoverType table

INSERT INTO [dbo].[CoverType]
           (
           [Description])
     VALUES
           ('Hardcover'),
           ('Paperback')
GO

-- starter Data for Book table

INSERT INTO [dbo].[Book]
           (
           [ImageUrl]
           ,[AgeRangeId]
           ,[GenreId]
           ,[Title]
           ,[CoverTypeId]
           ,[Quantity]
           ,[Author]
           ,[Publisher]
           ,[Language]
           ,[Description]
           ,[ISBN13])
     VALUES
           (
           'https://catalog.library.nashville.org/bookcover.php?size=medium&id=a57c2f8e-1974-e7ca-e0ca-c9c00c2ba5ea-eng'
           ,1
           ,2
           ,'Just a Girl'
           ,2
           ,1
           ,'Lia Levi'
           ,'Varies, see individual formats and editions'
           ,'English'
           ,'In this award-winning memoir translated
           from Italian to English, a Jewish girl grows
           up during a difficult time of racial discrimination
           and war, and discovers light in unexpected places.
           This classic, powerful story from Lia Levi is adapted
           for young readers, with beautiful black-and-white
           illustrations, a family photo album.'
           ,9780063065086),
           (
           'https://catalog.library.nashville.org/bookcover.php?id=67e57785-d088-efcb-ac56-46511ed300d5-eng&size=medium&type=grouped_work&category=Books'
           ,1
           ,2
           ,'Animal feeding time'
           ,1
           ,1
           ,'Davis, Lee'
           ,'DK Publishing'
           ,'English'
           ,'Watch out for some wild weather!
           Make reading your superpower,
           leveled nonfiction. Use your reading 
           superpowers to learn all about how animals
           in the wild in Africa find and eat their 
           food - a high-quality, fun, non-fiction reader 
           - carefully leveled to help children progress.
           Feeding Time is a beautifully designed reader 
           all about the stunning animals found in the wild
           in Africa and what they eat.' 
           ,9780744066944),
           (
           'https://catalog.library.nashville.org/bookcover.php?id=67e57785-d088-efcb-ac56-46511ed300d5-eng&size=medium&type=grouped_work&category=Books'
           ,1
           ,3
           ,'Shout: a poetry memoir'
           ,1
           ,1
           ,'Anderson, Laurie Halse'
           ,'Varies, see individual formats and editions'
           ,'English'
           ,'A New York Times bestseller and one of 2019
           best-reviewed books, a poetic memoir and call
           to action from the award-winning author of Speak ,
           Laurie Halse Anderson!.' 
           ,9780670012107)

GO
