<template>
  <section class="statement" id="landing-schedule">
    <div class="schedule-heading">
      <h2>SCHEDULE AN APPOINTMENT</h2>
    </div>
    <div class="container">
      <a href="/contact-us"  class="btn btn-md btn-primary">CONTACT</a>
    </div>
  </section>
</template>

<script>
export default {

  name: 'contact',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
  #landing-schedule.statement{
    background-position: 50% 100px;
    background-image: url("/images/vendors/contact_bg.png");
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    padding: 100px 0 !important;
    width: 100% !important;
    position: relative;
    h2 {
      text-align: center;
      color: white;
    }
    a.btn {
      margin: 0 auto;
      display: table;
    }
  }
</style>