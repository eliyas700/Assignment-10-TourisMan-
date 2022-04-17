import React from "react";
import "./Checkout.css";
const Checkout = () => {
  return (
    <main className="checkout">
      <h1>Checkout</h1>
      <p>Select one of these payment methods</p>
      <div className="alternate-payment">
        <button className="btn btn-paypal" type="button">
          Paypal
        </button>
        <button className="btn btn-coinbase" type="button">
          Coinbase
        </button>
      </div>
      <p>Or enter your credit card information</p>
      <form className="ccjs-card">
        <div className="row">
          <fieldset className="number">
            <label className="ccjs-number">
              Card Number
              <input
                className="ccjs-number"
                name="cc-number"
                placeholder="•••• •••• •••• ••••"
              />
            </label>
          </fieldset>
          <fieldset className="security">
            <label className="ccjs-csc">
              Security Code
              <input className="ccjs-csc" name="csc" placeholder="•••" />
            </label>
          </fieldset>
        </div>
        <div className="row">
          <fieldset className="name">
            <label className="ccjs-name">
              Cardholder's Name
              <input
                className="ccjs-name"
                name="cc-name"
                placeholder="John Dough"
              />
            </label>
          </fieldset>
          <fieldset className="ccjs-expiration">
            <legend className="expiration">Expiration</legend>
            <div className="row">
              <select className="ccjs-month" name="month">
                <option selected="" disabled="">
                  MM
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select className="ccjs-year" name="year">
                <option selected="" disabled="">
                  YY
                </option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
              </select>
            </div>
          </fieldset>
        </div>
        <select className="ccjs-hidden-card-type" name="card-type">
          <option className="ccjs-amex" value="amex">
            American Express
          </option>
          <option className="ccjs-discover" value="discover">
            Discover
          </option>
          <option className="ccjs-mastercard" value="mastercard">
            MasterCard
          </option>
          <option className="ccjs-visa" value="visa">
            Visa
          </option>
          <option className="ccjs-diners-club" value="diners-club">
            Diners Club
          </option>
          <option className="ccjs-jcb" value="jcb">
            JCB
          </option>
        </select>
      </form>
      <button className="btn btn-primary" type="button">
        Checkout
      </button>
    </main>
  );
};

export default Checkout;
