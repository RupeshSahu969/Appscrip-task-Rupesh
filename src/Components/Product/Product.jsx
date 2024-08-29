import React, { useEffect, useState } from "react";
import "./product.css";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGet();
  }, []);

  const handleGet = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(data);
  return (
    <>
      <div className="container1">
        <div>
          <div className="countter-pro">123 Items</div>
          <div style={{ display: "flex", marginLeft: 20 }}>
            <IoIosArrowBack />
            HIDE FILTER
          </div>
        </div>
        <div>
          <select className="select-box">
            <option value="RECOMMENDED">RECOMMENDED</option>
            <option value="NEWEST FIRST">NEWEST FIRST</option>
            <option value="POPULAR">POPULAR</option>
            <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
            <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar-div">
        <div className="sidebar-left">
          <input type="checkbox" /> CUSTOMIZABLE
          <hr />
          <div>
            <select>
              <option value="IDEALFOR">IDEALFOR</option>
            </select>
            <p>All</p>
          </div>
          <hr />
          <div>
            <select>
              <option value="OCCASION">OCCASION</option>
            </select>
            <p>All</p>
          </div>
          <hr />
          <div>
            <select>
              <option value="WORK">WORK</option>
            </select>
            <p>All</p>
          </div>
          <hr />
          <div>
            <select>
              <option value="FABRIC">FABRIC</option>
            </select>
            <p>All</p>
          </div>
          <hr />
          <div>
            <select>
              <option value="SEGMENT">SEGMENT</option>
            </select>
            <p>All</p>
          </div>
          <hr />
          <div>
            <select>
              <option value="SUITABLEFOR">SUITABLEFOR</option>
            </select>
            <p>All</p>
          </div>
          <hr />
          <div>
            <select>
              <option value="RAW MATERIALS">RAW MATERIALS</option>
            </select>
            <p>All</p>
          </div>
          <hr />
          <div>
            <select>
              <option value="PATTERN">PATTERN</option>
            </select>
            <p>All</p>
          </div>
          <hr />
        </div>
        <div className="sidebar-right">
          <h2>NEW PRODUCT</h2>
          <div className="card-data">
            {data.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{item.category}</h3>
                  <div className="footer-card">
                    <a href="" className="signup-button">
                      Sign in
                    </a>
                    <span> or Create an account to see pricing </span>
                    <span className="custom-span">
  <CiHeart className="custom-spans" size={24} />
</span>
                  </div>
                </div>
                <div className="card-icon"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
