<template>
  <h1 style="text-align:center;">Contact Us</h1>
  <section id="contact">
  
    <div class="container">

      <form name="htmlform" method="post" action="sendmail.php">

        <input type="text" name="name" placeholder="NAME" required>

        <input  type="email" name="email" placeholder="MAIL" required>

        <textarea name="message" placeholder="MESSAGE" required ></textarea>

        <button name="send" type="submit" class="submit">SEND</button>

      </form>

    </div>
  </section>
</template>

<script>
export default {

  name: 'contact-us',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>

  #contact { width:60%; height:100%; margin: 20px auto; background: #DDD; padding: 50px 0; }

  #contact .container form input, #contact .container form textarea {
    width:97.4%;
    height:30px;
    padding:5px 10px;
    font-size: 12px;
    color:#999;
    letter-spacing:1px;
    background: #FFF;
    border:2px solid #FFF;
    margin-bottom:25px;
    -webkit-transition:all .1s ease-in-out;
    -moz-transition:all .1s ease-in-out;
    -ms-transition:all .1s ease-in-out;
    -o-transition:all .1s ease-in-out;
    transition:all .1s ease-in-out;
  }

  #contact .container form input:focus, #contact .container form textarea:focus {
    border:2px solid #dd4545;
    color:#999;
  }

  #contact .container form textarea {
    height:150px;
  }

  #contact .container form .submit {
    width:100%;
    padding:5px 10px;
    font-size: 12px;
    letter-spacing:1px;
    background:#dd4545;
    height:40px;
    text-transform:uppercase;
    letter-spacing:1px;
    color:#FFF;
    border:2px solid #b43838;
    -webkit-transition:all .1s ease-in-out;
    -moz-transition:all .1s ease-in-out;
    -ms-transition:all .1s ease-in-out;
    -o-transition:all .1s ease-in-out;
    transition:all .1s ease-in-out;
  }

  #contact .container form .submit:hover {
    color:#FFF;
    border:2px solid #dd4545;
    background: #b43838;
    cursor:pointer;
  }

  #contact .container form .required {
    color:#b43838;
  }
</style>