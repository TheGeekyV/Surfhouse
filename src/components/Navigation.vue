<template>
  <div id="nav">
    <p class="navTitle">MENU</p>
    <a href="#">Apparel</a>
    <a href="#">Surf Apparel</a>
    <a href="#">Windsurf</a>
    <a href="#">Kitesurf</a>
    <a href="#">Accessories</a>
    <a href="#">Sale</a>
    <a href="#">Brands</a>
    <a href="#">Blog</a>
    <a href="#">Gadgets</a>
    <router-link to="/Contact">Contact</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
#nav {
  background-color: #26d2fc;
  display: flex;
  flex-direction: column;
  font-size: 10pt;
  text-transform: uppercase;

  height: 476px;
  margin-left: 165px;
  margin-top: 40px;
  width: 228px;

  .navTitle {
    background-color: #333333;
    color: #ffffff;
    height: 65px;
    line-height: 65px;
    padding-left: 42px;
  }

  a {
    color: #000000;
    line-height: 41px;
    padding-left: 42px;
    text-decoration: none;
  }

  a:hover {
    background-color: #333333;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
