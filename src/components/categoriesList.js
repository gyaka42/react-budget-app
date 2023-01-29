import React from "react";
import "../assets/styles/categoriesList.css";

const CategoriesList = ({
  categories = [],
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="categoriesContainer">
      <div className="categoriesWrapper">
        <p
          onClick={() => setSelectedCategory({ id: "0", name: "Hepsi" })}
          className={`categoriesItem ${
            selectedCategory.id === "0" ? "categoriesItemActive" : ""
          }`}
        >
          Hepsi
        </p>
        {categories.map((categories) => (
          <p
            key={categories.id}
            onClick={() => setSelectedCategory(categories)}
            className={`categoriesItem ${
              selectedCategory.id === categories.id
                ? "categoriesItemActive"
                : ""
            }`}
          >
            {categories.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
