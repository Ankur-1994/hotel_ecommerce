import React, { useState } from "react";
import "./orderDetail.css";
import { VEGETARIAN, NONVEGETARIAN, CHAMPAGNE, SPRAKLINGWINE, WHITEWINE, REDWINE, VODKA, RUM, TEQUILA, WHISKY, BEER } from "../../../constants";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  const [product, setProduct] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [vegDetail, setVegDetail] = useState(VEGETARIAN);
  const [nonVegDetail, setNonVegDetail] = useState(NONVEGETARIAN);
  const [champagneDetail, setchampagne] = useState(CHAMPAGNE);
  const [sparkwineDetail, setSparkwine] = useState(SPRAKLINGWINE);
  const [whitewineDetail, setWhitewineDetail] = useState(WHITEWINE);
  const [redwineDetail, setRedwhine] = useState(REDWINE);
  const [vodkaDetail, setVodka] = useState(VODKA);
  const [rumDetail, setRum] = useState(RUM);
  const [tequilaDetail, setTequila] = useState(TEQUILA);
  const [whiskyDetail, setWhisky] = useState(WHISKY);
  const [beerDetail, setBeer] = useState(BEER);

  const getFilteredData = category => {
    if (category === "veg") {
      return vegDetail;
    } else if (category === "nonveg") {
      return nonVegDetail;
    } else if (category === "champagne") {
      return champagneDetail;
    } else if (category === "sparkwine") {
      return sparkwineDetail;
    } else if (category === "whitewine") {
      return whitewineDetail;
    } else if (category === "redwine") {
      return redwineDetail;
    } else if (category === "vodka") {
      return vodkaDetail;
    } else if (category === "rum") {
      return rumDetail;
    } else if (category === "tequila") {
      return tequilaDetail;
    } else if (category === "whisky") {
      return whiskyDetail;
    } else if (category === "beer") {
      return beerDetail;
    }
  };

  const getCloneData = data => {
    if (data.category === "veg") {
      return [...vegDetail];
    } else if (data.category === "nonveg") {
      return [...nonVegDetail];
    } else if (data.category === "champagne") {
      return [...champagneDetail];
    } else if (data.category === "sparkwine") {
      return [...sparkwineDetail];
    } else if (data.category === "whitewine") {
      return [...whitewineDetail];
    } else if (data.category === "redwine") {
      return [...redwineDetail];
    } else if (data.category === "vodka") {
      return [...vodkaDetail];
    } else if (data.category === "rum") {
      return [...rumDetail];
    } else if (data.category === "tequila") {
      return [...tequilaDetail];
    } else if (data.category === "whisky") {
      return [...whiskyDetail];
    } else if (data.category === "beer") {
      return [...beerDetail];
    }
  };

  const setCloneData = (category, data) => {
    if (category === "veg") {
      setVegDetail(data);
    } else if (category === "nonveg") {
      setNonVegDetail(data);
    } else if (category === "champagne") {
      setchampagne(data);
    } else if (category === "sparkwine") {
      setSparkwine(data);
    } else if (category === "whitewine") {
      setWhitewineDetail(data);
    } else if (category === "redwine") {
      setRedwhine(data);
    } else if (category === "vodka") {
      setVodka(data);
    } else if (category === "rum") {
      setRum(data);
    } else if (category === "tequila") {
      setTequila(data);
    } else if (category === "whisky") {
      setWhisky(data);
    } else if (category === "beer") {
      setBeer(data);
    }
  };

  const decrementQty = data => {
    const filterItem = getFilteredData(data.category);
    const filteredData = filterItem.filter(item => item.title === data.title);
    const clone_data = getCloneData(data);
    const index = clone_data.indexOf(filteredData[0]);
    if (clone_data[index].qty > 0) {
      clone_data[index].qty -= 1;
      setVegDetail(clone_data);
      setCloneData(data.category, clone_data);
      const addItem = filterItem.filter(item => item.title === data.title);
      const { title, qty, rate } = addItem[0];
      const obj = Object.assign({}, product);
      if (qty === 0) {
        delete obj[title];
      } else {
        obj[title] = [qty, rate];
      }
      setProduct(obj);
    }
  };

  const incrementQty = data => {
    const filterItem = getFilteredData(data.category);
    const filteredData = filterItem.filter(item => item.title === data.title);
    const clone_data = getCloneData(data);
    const index = clone_data.indexOf(filteredData[0]);
    clone_data[index].qty += 1;
    setCloneData(data.category, clone_data);
    const addItem = filterItem.filter(item => item.title === data.title);
    const { title, qty, rate } = addItem[0];
    const obj = Object.assign({}, product);
    obj[title] = [qty, rate];
    setProduct(obj);
  };

  const vegList = () =>
    vegDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const nonvegList = () =>
    nonVegDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const champagne = () =>
    champagneDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const sparkwine = () =>
    sparkwineDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const whitewine = () =>
    whitewineDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const redwine = () =>
    redwineDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const vodka = () =>
    vodkaDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const rum = () =>
    rumDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const tequila = () =>
    tequilaDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const whisky = () =>
    whiskyDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const beer = () =>
    beerDetail.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
            {data.qty > 0 ? (
              <span style={{ position: "relative", left: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => decrementQty(data)}>
                -
              </span>
            ) : null}
            <button className="add_cart_btn">
              <span>{data.qty > 0 ? data.qty : "Add"}</span>
            </button>
            <span style={{ position: "relative", right: "-15px", fontSize: "2rem", cursor: "pointer" }} onClick={() => incrementQty(data)}>
              +
            </span>
          </div>
        </div>
      );
    });

  const displayCartList = () => {
    return Object.keys(product).map((item, index) => {
      return (
        <>
          <p className="cart_item_title">{item}</p>
          <p className="cart_rate_plan">
            {product[item][0]} x ₹{product[item][1]}
          </p>
        </>
      );
    });
  };

  const getTotalCost = () => {
    let total_price = 0;
    Object.keys(product).map(item => {
      total_price += product[item][0] * product[item][1];
    });
    return total_price;
  };

  return (
    <div className="order_container">
      <div className="order_box">
        <h1 className="order_heading">Orders</h1>
        <div className="order_detail">
          <div className="order_list">
            <h3 className="menu_title">VEGETARIAN</h3>
            {vegList()}

            <h3 className="menu_title">NON-VEGETARIAN</h3>
            {nonvegList()}

            <h3 className="menu_title">CHAMPAGNE</h3>
            {champagne()}

            <h3 className="menu_title">SPARKLING WINE</h3>
            {sparkwine()}

            <h3 className="menu_title">WHITE WINE</h3>
            {whitewine()}

            <h3 className="menu_title">RED WINE</h3>
            {redwine()}

            <h3 className="menu_title">VODKA</h3>
            {vodka()}

            <h3 className="menu_title">RUM</h3>
            {rum()}

            <h3 className="menu_title">TEQUILA</h3>
            {tequila()}

            <h3 className="menu_title">WHISKY</h3>
            {whisky()}

            <h3 className="menu_title">BEER</h3>
            {beer()}
          </div>

          <div className="cart">
            <h3 className="cart_title">{Object.keys(product).length > 0 ? "CART" : "CART EMPTY"}</h3>
            {Object.keys(product).length > 0 ? (
              <>
                {Object.keys(product).length > 9 ? <button className="checkout">Checkout</button> : null}
                <br />
                <div className="cart_list">{displayCartList()}</div>
                <div className="subtotal_box">
                  <p className="subtotal_title">
                    Subtotal: <br /> ** Extra charges may apply
                  </p>
                  <p>₹ {getTotalCost()}</p>
                </div>
                <Link to="/register">
                  <button className="checkout">Checkout</button>
                </Link>
              </>
            ) : (
              <>
                <div className="cart_img" />
                <p className="cart_title">Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
