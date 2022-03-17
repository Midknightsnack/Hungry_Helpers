USE hungryhelpers;

CREATE TABLE Recipe (
  RecipeID     INT NOT NULL AUTO_INCREMENT,
  RecipeName         VARCHAR(50),
  RecipePrepTimeMins	INT,
  RecipeCookTimeMins	INT,
  RecipeCals		INT,
  RecipeCarbs		INT,
  RecipeProtein		INT,
  RecipeFats		INT,
  RecipeSkillLevel	VARCHAR(15),
  RecipePicture 	BLOB,
  CuisineType	VARCHAR(40),
  DietType		VARCHAR(50),
  RecipeMealOfDay 	VARCHAR(15),
  PRIMARY KEY (RecipeID)
  );

 CREATE TABLE RecipeIngredients (
  RecipeIngredientsID INT NOT NULL AUTO_INCREMENT,
  RecipeID			INT,
  IngredientAmount  VARCHAR(30),
  IngredientPrepInfo VARCHAR(50),
  PRIMARY KEY (RecipeIngredientsID),
  FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID)
);

CREATE TABLE Ingredient (
  IngredientID INT NOT NULL AUTO_INCREMENT,
  RecipeIngredientsID	INT,
  IngredientName VARCHAR(64),
  IngredientDescription VARCHAR(64),
  IngredientPrice FLOAT,
  PRIMARY KEY (IngredientID),
  FOREIGN KEY (RecipeIngredientsID) REFERENCES RecipeIngredients(RecipeIngredientsID)

  );
   
  
  INSERT INTO Recipe (RecipeName)
  VALUES ('Fish and Rice');
  
SELECT * FROM Recipe;
 
INSERT INTO RecipeIngredients (RecipeID, IngredientAmount)
VALUES (1, '1 pound'),
		    (1, '2 cups');
        
SELECT * FROM RecipeIngredients;

INSERT INTO Recipe (RecipePrepTimeMins,RecipeCookTimeMins,RecipeCals,RecipeCarbs,RecipeProtein,RecipeFats,RecipeSkillLevel)
VALUES (20),
       (20),
       (200),
       (25),
       (15),
       (12),
       ('Medium');

