<template>
<div class="col-md-offset-3 col-md-6" style="float: none; padding-top: 7.5%">
  <form class="form-horizontal" role="form" method="post" action="/_gdForm/webformmailer.asp">
  <input type="hidden" name="subject" value="Submission" />
  <input type="hidden" name="redirect" value="" />
    <div class="form-group">
      <label for="FirstName" class="col-sm-2 control-label">Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="FirstName" name="FirstName" placeholder="First & Last Name" value="">
      </div>
    </div>
    <div class="form-group">
      <label for="email" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="">
      </div>
    </div>
    <div class="form-group">
      <label for="comments" class="col-sm-2 control-label">Message</label>
      <div class="col-sm-10">
        <textarea class="form-control" rows="4" id="comments" type="comments" name="comments"></textarea>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-10 col-sm-offset-2">
        <input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
      </div>
    </div>
    <input type="hidden" name="form_order" value="alpha"/>
    <input type="hidden" name="form_interval" value="default"/>
    <input type="hidden" name="form_format" value="html"/>
    <div class="form-group">
      <div class="col-sm-10 col-sm-offset-2">
        <!-- <! Will be used to display an alert to the user> -->
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {

  name: 'Contact',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
input {
  margin-top: 10px;
}
</style>