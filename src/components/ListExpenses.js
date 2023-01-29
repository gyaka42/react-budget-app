import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/listExpenses.css";

import SingleExpense from "./singleExpense";
import add from "../assets/imgs/add.png";
import addIconHover from "../assets/imgs/addHover.png";

const ListExpenses = ({ expenses = [], categories, selectedCategory }) => {
  const [filterExpenses, setFitlerExpenses] = useState(expenses);
  const [addBtnHovered, setAddBtnHovered] = useState(false);
  const navigate = useNavigate();
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += Number(expenses[i].price);
  }

  useEffect(() => {
    if (selectedCategory.id === "0") {
      setFitlerExpenses(expenses);
    } else {
      let tempExpenses = expenses.filter(
        (item) => item.categoryId === selectedCategory.id
      );
      setFitlerExpenses(tempExpenses);
    }
  }, [selectedCategory]);
  return (
    <div>
      <div className="expensesContainer">
        <div className="totalPriceWrapper">
          <p>
            <span>Toplam:</span>
            <span>{total} &#8378;</span>
          </p>
        </div>
        <button
          onMouseEnter={() => setAddBtnHovered(true)}
          onMouseLeave={() => setAddBtnHovered(false)}
          onClick={() => navigate("/add-expense")}
          className="addBtn"
        >
          {addBtnHovered === true ? (
            <img src={addIconHover} alt="icon" />
          ) : (
            <img src={add} alt="icon" />
          )}
        </button>
        <div className="expensesWrapper">
          {filterExpenses.length === 0 ? (
            <div className="emptyList">
              Aradiginiz Kategoride bir harcama yoktur
            </div>
          ) : (
            <>
              {filterExpenses.map((expense) => (
                <SingleExpense
                  key={expense.id}
                  expense={expense}
                  categories={categories}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ListExpenses;
