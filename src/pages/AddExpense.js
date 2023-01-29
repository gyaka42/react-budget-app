import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/styles/addExpense.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const navigate = useNavigate();
  const getCurrentDateInput = () => {
    const dateObj = new Date();

    //Current Date in Date Picker
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();

    const shortDate = `${year}-${month}-${day}`;

    return shortDate;
  };

  const [form, setForm] = useState({
    price: "",
    place: "",
    title: "",
    description: "",
    date: getCurrentDateInput(),
    categoryId: "",
  });

  const [categories, setCategories] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3004/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {});
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    /* validation */
    if (
      form.price === "" ||
      form.title === "" ||
      form.categoryId === "" ||
      form.place === "" ||
      form.description === "" ||
      form.date === ""
    ) {
      alert("Butun alanlar zorunludur");
      return;
    }
    axios
      .post("http://localhost:3004/expenses", {
        ...form,
        id: String(new Date().getTime()),
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {});
  };
  if (categories === null) return null;
  return (
    <div>
      <Header whichPage={"addExpense"} />
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="formElement">
            <label htmlFor="price">Fiyat</label>
            <input
              id="price"
              type={"number"}
              value={form.price}
              onChange={(event) =>
                setForm({ ...form, price: event.target.value })
              }
            />
          </div>
          <div className="formElement">
            <label htmlFor="place">Mekan</label>
            <input
              id="place"
              type={"text"}
              value={form.place}
              onChange={(event) =>
                setForm({ ...form, place: event.target.value })
              }
            />
          </div>
          <div className="formElement">
            <label htmlFor="title">Baslik</label>
            <input
              id="title"
              type={"text"}
              value={form.tile}
              onChange={(event) =>
                setForm({ ...form, title: event.target.value })
              }
            />
          </div>
          <div className="formElement">
            <label htmlFor="description">Aciklama</label>
            <input
              id="description"
              type={"text"}
              value={form.description}
              onChange={(event) =>
                setForm({ ...form, description: event.target.value })
              }
            />
          </div>
          <div className="formElement">
            <label htmlFor="date">Tarih</label>
            <input
              id="date"
              type={"date"}
              value={form.date}
              onChange={(event) =>
                setForm({ ...form, date: event.target.value })
              }
            />
          </div>
          <div className="formElement">
            <label htmlFor="date">Kategori</label>
            <select
              defaultValue={categories[0].id}
              onChange={(event) =>
                setForm({ ...form, categoryId: event.target.value })
              }
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="submitBtnWrapper">
            <button className="submitBtn" type="submit">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
