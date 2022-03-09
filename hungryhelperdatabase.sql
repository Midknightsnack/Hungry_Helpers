USE hungryhelpers;
CREATE TABLE Recipes (
  RecipeID     BIGINT UNSIGNED NOT NULL,
  Type         ENUM('Recipe'),
  SellPrice    DECIMAL(6,2),
  Date         DATE,
  Instructions TEXT,
  PRIMARY KEY (RecipeID),
  FOREIGN KEY (RecipeID, Type) REFERENCES RecipeItems (ItemID, Type)
  );
  
  CREATE TABLE Ingredients (
  IngredientID BIGINT UNSIGNED NOT NULL,
  Type         ENUM('Ingredient'),
  CostPrice    DECIMAL(6,2),
  PRIMARY KEY (IngredientID),
  FOREIGN KEY (IngredientID, Type) REFERENCES RecipeItems (ItemID, Type)
);

CREATE TABLE RecipeItems (
  ItemID       SERIAL,
  Type         ENUM('Ingredient', 'Recipe'),
  Name         VARCHAR(255) NOT NULL,
  Quantity     FLOAT NOT NULL,
  INDEX (ItemID, Type)
);