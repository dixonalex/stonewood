<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Contact</h3>
          <a href="https://www.google.com/maps/place/b,+3000+E+Moody+Blvd,+Bunnell,+FL+32110/@29.476444,-81.2405577,17z/data=!3m1!4b1!4m5!3m4!1s0x88e6eb682b8abf27:0xa1bc8fee3ee4f7d!8m2!3d29.476444!4d-81.238369">3000 E Moody BLVD Unit B, Bunnell, FL</a>
          <br>
          <strong>Phone:</strong> <a href="tel:386-586-3540">(386) 586-3540</a>
        </div>
        <div class="col-md-6">
          <h3>Showroom Hours</h3>
          Monday – Friday: 9:00 a.m. – 5:00 p.m.
          <br>Saturday: By appointment only.
          <br>Sunday: Closed
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

  name: 'footer',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
  footer {
    margin-top: 5%;
    background-color: black;
    color: #d9d9d9;
    a {
      color: #d9d9d9;
    }
    .container {
      padding-top: 69px;
      padding-bottom: 62px;
    }
    h3 {
      margin-bottom: 38px;
    }
  }
</style>