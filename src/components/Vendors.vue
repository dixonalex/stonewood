<template>
  <section class="container">
    <div class="vendors_heading">
      <h2>VENDORS</h2>
      <ul class="vendors">
        <li>
          <a href="http://www.mwccabinetry.com/" target='_blank'>
            <img id="mwc" class="vendor-logo">
            <span>Master Wood Craft</span>
          </a>
        </li>
        <li>
          <a href="http://www.legacycabinetsllc.com/" target='_blank'>
            <img id="legacy" class="vendor-logo">
            <span>Legacy Cabinets</span>
          </a>
        </li>
        <li>
          <a href="http://www.woodharbor.com/" target='_blank'>
            <img id="wh" class="vendor-logo">
            <span>Wood Harbor</span>
          </a>
        </li>
        <li>
          <a href="http://www.fieldstonecabinetry.com/Pages/home.aspx" target='_blank'>
            <img id="field-stone" class="vendor-logo">
            <span>Field Stone</span>
          </a>
        </li>
        <li>
          <a href="http://www.istone.biz/Pages/isthomepg.html" target='_blank'>
            <img id="istone" class="vendor-logo">
            <span>iStone</span>
          </a>
        </li>
      </ul>
    </div> 
  </section>
</template>

<script>
export default {

  name: 'Vendors',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
$breakpoint-phone: 480px;

  div.vendors_heading {
    color: #0a0a0a;
    text-align: center;
    font-family: PT Sans;
    font-weight: 400;
    font-style: normal;
  }
  .vendors {
    border: 1px solid #e5e5e5;
    border-style: solid none;
    display: table;
    max-width: 910px;
    margin: 10px auto;
    padding: 25px 0;
    li {
      display: table-cell;
      list-style: none;
      padding: 0 20px;
      text-align: center;
      vertical-align: middle;
    }
    a {
      -webkit-backface-visibility: hidden;
      display: block;
      position: relative;
      img {
        display: block;
        margin: 0 auto;
        width: 100px;
      }
    }
    #mwc {
      content:url("/static/images/vendors/mwc_c.png");
    }
    #legacy {
      content:url("/static/images/vendors/legacy_c.png");
    }
    #wh {
      content:url("/static/images/vendors/wh_b.png");
    }
    #field-stone {
      content:url("/static/images/vendors/fieldstone-logo.jpg");
    }
    #istone {
      content:url("/static/images/vendors/istone-logo.gif");
    }
  }
  @media(max-width:$breakpoint-phone){
    div.vendors_heading > ul.vendors {
      display: block;
      li {
        display: list-item;
        margin: 20px 0;
      }
      #mwc {
        content:url("/static/images/vendors/mwc_c.png");
      }
      #legacy {
        content:url("/static/images/vendors/legacy_c.png");
      }
    }
  }
</style>