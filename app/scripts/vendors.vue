<template>
	<section class="container">
    <div class="vendors_heading">
      <h2>VENDORS</h2>
      <ul class="vendors">
        <li>
          <a href="http://www.mwccabinetry.com/" target='_blank'>
            <img id="mwc" class="vendor-logo">
          </a>
        </li>
        <li>
          <a href="http://www.legacycabinetsllc.com/index.htm/" target='_blank'>
            <img id="legacy" class="vendor-logo">
          </a>
        </li>
        <li>
          <a href="http://www.woodharbor.com/" target='_blank'>
            <img id="wh" class="vendor-logo">
          </a>
        </li>
      </ul>
    </div> 
  </section>
</template>

<script>
export default {

  name: 'vendors',

  data () {
    return {

    };
  }
};
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
    }
    #mwc {
      content:url("/images/vendors/mwc_b.png");
      &:hover{
        content:url("/images/vendors/mwc_c.png");
      }
    }
    #legacy {
      content:url("/images/vendors/legacy_b.png");
      &:hover{
        content:url("/images/vendors/legacy_c.png");
      }
    }
    #wh {
      content:url("/images/vendors/wh_b.png");
      &:hover{
        background-color:lightgray;
        content:url("/images/vendors/wh_c.png");
      }
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
        content:url("/images/vendors/mwc_c.png");
      }
      #legacy {
        content:url("/images/vendors/legacy_c.png");
      }
    }
  }
</style>