import React, { useState } from "react";
import styles from "./Cookbook.module.scss";
import recipes from "../../data/recipes";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import CardList from "../../components/CardList/CardList";

const Cookbook = () => {
  const [favourites, setFavourites] = useState(recipes.filter(recipe => recipe.isFav))

  const removeFromFav = (recipe) => {
    recipe.isFav = false;
    setFavourites(recipes.filter((recipe) => recipe.isFav));
  };

  const contentJsx = favourites.length ? (
    <CardList recipes={favourites} toggleFav={removeFromFav} />
  ) : (
    <FeedbackPanel
      header="No favourites"
      text="Try returning to dahsboard and searching for your meal of choice"
    />
  );

  return <section className={styles.cookbook}>{contentJsx}</section>;
};

export default Cookbook;