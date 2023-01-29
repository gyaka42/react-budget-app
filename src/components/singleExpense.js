import React from "react";
import "../assets/styles/singleExpenses.css";
import editIcon from "../assets/imgs/editIcon.gif";
import deleteIcon from "../assets/imgs/deleteIcon.gif";

const SingleExpense = ({ expense, categories = [] }) => {
  const myCatergory = categories.find((item) => item.id === expense.categoryId);

  return (
    <div className="expenseWrapper">
      <h2 className="expenseTitle">{expense.title}</h2>
      <p className="expenseDescription">{expense.description}</p>
      <h1 className="expensePrice">{expense.price} &#8378;</h1>
      <div className="btnsWrapper">
        <div>
          <img className="expenseIcon" src={deleteIcon} alt="Delete Icon" />
        </div>
        <div>
          <img className="expenseIcon" src={editIcon} alt="Edit Icon" />
        </div>
      </div>
      <p className="expenseCategoryName">{myCatergory.name}</p>
    </div>
  );
};

export default SingleExpense;
