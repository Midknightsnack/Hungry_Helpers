USE hungryhelpers;
CREATE TABLE Recipe (
  RecipeID     BIGINT UNSIGNED NOT NULL,
  RecipeName         VARCHAR(50),
  RecipePrepTimeMins	INT,
  RecipeCookTimeMins	INT,
  RecipeCals		INT,
  RecipeSkillLevel	VARCHAR(15),
  RecipePicture 	BLOB,
  CuisineType	VARCHAR(40),
  DietType		VARCHAR(50),
  RecipeMealOfDay 	VARCHAR(15),
  PRIMARY KEY (RecipeID)
  );

  CREATE TABLE Ingredients (
  RecipeIngredientID BIGINT UNSIGNED NOT NULL,
  RecipeID			BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (RecipeIngredientID),
  FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID)
);
