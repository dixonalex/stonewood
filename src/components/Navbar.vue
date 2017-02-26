// navbar.vue
<template>
  <div class="header">
    <nav id="nav" class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <router-link tag="li" style="list-style:none;color:#EBEDEE;border-bottom:none;" class="nav-title" to="/">STONEWOOD<br/>SALES</router-link>
          <ul class="nav nav-pills">
            <router-link tag="li" to="/about">About</router-link>
            <router-link tag="li" to="/residential">Residential</router-link>
            <router-link tag="li" to="/multifamily">Multifamily</router-link>
            <!-- <router-link tag="li" to="/partners">Partners</router-link>
            <router-link tag="li" to="/countertops">Countertops</router-link> -->
            <router-link tag="li" to="/contact-us">Contact</router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  $nav-primary-color: #EBEDEE;
  $nav-subtitle-color: #918d8e;
  $breakpoint-sm-desktop: 1068px;
  $breakpoint-tablet: 768px;
  $breakpoint-phone: 480px;
  $breakpoint-iphone6: 400px;
  $logo-fullsize: "/static/img/logo-nav.png";
  $logo-phone: "/static/img/logo-nav-iphone.png";

  // .logo-nav {
  //   content:url("/static/img/logo-nav.png");
  // }
  .header {
    margin-bottom: 0;
  }
    .container-fluid {
      margin-bottom: 1em;
      max-width: 1100px;
    }
    .h3 {
      text-align: center;
    }
    .nav-title {
      position: absolute;
      left: 75px;
      margin-top: 5px;
      color: $nav-primary-color;
    }
  // .site-logo {
  //   display: table;
  //     height: 100%;
  //     float: left;
  //     position: absolute;
  //     left: 50%;
  //     margin-left: -140.5px;
  //     width: 225px;
  //     top: 7.5px;
  // }
  .nav > li {
    padding: 10px 10px;
    text-align: center;
  }
  .nav > li:hover, .nav > li:focus, .nav > h3 > li:hover, .nav > h3 > li:focus {
    text-decoration: none;
  }
  .navbar-default {
    border-color: transparent;
    height: 90px;
    background-color: inherit;
  }
  .navbar {
    margin-bottom: 0;
    width: 100%;
    position: absolute;
    padding-top: 25px;
    color: red;
    font-size: 40px;
    z-index: 10;
    top: 0;
  }
  nav
    {
      background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))
    }
    ul {
      display: flex;
      justify-content: center;
    }
  nav
    li {
      cursor: pointer;
      text-align: center;
      font-size: 15px;
      line-height: 16px;
      color: $nav-primary-color;
      padding: 0;
      text-transform: uppercase;
      text-decoration: none;
      text-align: center;
      font-weight: 550;
      letter-spacing: 1px;
      font-family: 'helvetica';
      &:hover, &:focus {
        background-color: inherit;
        transition: color 0.25s ease;
        color: red;
        }
      }
        span.sub-title {
              color: $nav-subtitle-color;
              display: block;
              font-family: "linux_libertine_oitalic";
              font-size: 13px;
              letter-spacing: 1px;
              line-height: 14px;
              text-transform: lowercase;
              cursor: pointer;
        }
    li.router-link-active {
      border-bottom: 2px solid;
      color: red;
      background-color: inherit;
      &:focus, &:visited, &:hover{
        border-bottom: 2px solid;
        color: red;
        background-color: inherit;
        }
      
      }
</style>