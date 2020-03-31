import React from "react";
import "./menuDetail.css";
import {
  VEGETARIAN,
  NONVEGETARIAN,
  CHAMPAGNE,
  SPRAKLINGWINE,
  WHITEWINE,
  REDWINE,
  VODKA,
  RUM,
  TEQUILA,
  WHISKY,
  BEER
} from "../../../constants";

const MenuDetail = () => {
  const vegList = () =>
    VEGETARIAN.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });

  const nonvegList = () =>
    NONVEGETARIAN.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });

  const champagne = () =>
    CHAMPAGNE.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });

  const sparkwine = () =>
    SPRAKLINGWINE.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });

  const whitewine = () =>
    WHITEWINE.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });

  const redwine = () =>
    REDWINE.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });

  const vodka = () =>
    VODKA.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });

  const rum = () =>
    RUM.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });

  const tequila = () =>
    TEQUILA.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });

  const whisky = () =>
    WHISKY.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });

  const beer = () =>
    BEER.map((data, index) => {
      return (
        <div key={index} className="menu_detail">
          <div className="menu_dish">
            <h5>{data.title}</h5>
            <h6>{data.subtitle}</h6>
          </div>
          <div className="menu_rate">
            <h5>₹{data.rate}</h5>
          </div>
        </div>
      );
    });
  return (
    <div className="menu_container">
      <div className="menu_intro">
        <h1 className="menu_heading">MENU</h1>
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
    </div>
  );
};

export default MenuDetail;
