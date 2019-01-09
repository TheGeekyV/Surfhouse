<template>
  <div id="TopBar">
    <div class="container">
      <img class="shop-logo" src="../assets/logoWText.png" alt="Logo">
      <div class="cart">
        <div class="cart-top">
          <a href="#" class="log-in">LOG IN</a>
          <a href="#" class="whishlist">WISHLIST (0)</a>
        </div>
        <div class="cart-mid">
          <img class="cart-logo" src="../assets/cart.png" alt="cart">
          <div class="cart-info">
            <p class="price">€ 1,459.50</p>
            <p class="items">2 items</p>
          </div>
        </div>
        <div class="cart-bottom">
          <a href="#" class="view-cart">VIEW CART</a>
          <a href="#" class="checkout">CHECKOUT</a>
        </div>
        <div class="cart-search">
          <input class="cart-search__searchField" type="text" placeholder="SEARCH">
          <button class="cart-search__searchButton" type="submit">S</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
#TopBar {
  background-color: #26d2fc;
  border-top: 13px solid #333333;
  height: 150px;
  width: 100%;

  .container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;

    .shop-logo {
      height: 110px;
      margin-left: 73px;
    }

    .cart {
      background-color: #fb4d01;
      width: 270px;

      .cart-top {
        background-color: white;
        height: 25px;

        a {
          color: #fb4d01;
          display: inline-block;
          height: 100%;
          line-height: 25px;
          width: 50%;
          text-align: center;
          text-decoration: none;
        }
      }

      .cart-mid {
        align-items: center;
        display: flex;
        flex-direction: row;
        height: 70px;
        padding-left: 20px;

        .cart-logo {
          height: 35px;
        }

        .cart-info {
          padding-left: 10px;

          .price {
            color: white;
          }
          .items {
            color: #faef03;
          }
        }
      }

      .cart-bottom {
        height: 25px;

        .view-cart {
          color: white;
          display: inline-block;
          height: 100%;
          line-height: 25px;
          width: 50%;
          text-align: center;
          text-decoration: none;
        }

        .checkout {
          background-color: #e24602;
          color: white;
          display: inline-block;
          height: 100%;
          line-height: 25px;
          width: 50%;
          text-align: center;
          text-decoration: none;
        }
      }

      .cart-search {
        height: 30px;

        .cart-search__searchField {
          background-color: #e9e9e9;
          border: none;
          line-height: 30px;
          padding-left: 10px;
          width: 85%;
        }

        .cart-search__searchButton {
          background-color: #333333;
          border: none;
          color: white;
          line-height: 30px;
          width: 11.3%;
        }
      }
    }
  }
}
</style>
