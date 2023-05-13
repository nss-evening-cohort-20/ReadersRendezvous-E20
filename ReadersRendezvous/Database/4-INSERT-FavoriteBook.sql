CREATE TABLE [FavoriteBook] (
  [Id] int PRIMARY KEY IDENTITY not null,
  [UserId] int not null,
  [BookId] int not null
)
GO

ALTER TABLE [FavoriteBook] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO

ALTER TABLE [FavoriteBook] ADD FOREIGN KEY ([BookId]) REFERENCES [Book] ([Id])
GO

USE [ReadersRendezvous]
GO

INSERT INTO [dbo].[FavoriteBook]
           (
           [UserId],[BookId])
     VALUES
            (1,1),(1,2),(1,3)
GO