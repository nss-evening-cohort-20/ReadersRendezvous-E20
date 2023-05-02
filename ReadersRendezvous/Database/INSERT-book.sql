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




--{
--  "id": 4,
--  "imageUrl": "https://catalog.library.nashville.org/bookcover.php?id=0f552e70-fb51-cb33-7e91-c6cd8b8500ee-eng&size=medium&type=grouped_work&category=eBook",
--  "title": "A Weird Western Fantasyg",
--  "quantity": 1,
--  "author": "Campbell, Amy",
--  "publisher": "Amy Campbell",
--  "language": "English",
--  "description": "Walking Disaster. Ruiner. Spook. Sorcerer. The reason we can't have nice things. The citizens in the town of Bristle have called Blaise every name in the book. Born a Breaker, his unbridled magic wreaks havoc with a touch. As his peers land apprenticeships, Blaise faces the reality that no one wants a mage who destroys everything around him. When enemy soldiers storm the town hunting for spellcasters, he has no choice but to escape and rush headlong into the unknown.",
--  "isbN13": "9781736141816",
--  "ageRange": {
--    "id": 1,
--    "range": "Children"
--  },
--  "genre": {
--    "id": 1,
--    "description": "Fiction"
--  }
--}