<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a href="/" class="navbar-brand">MEVN Stack</a>
    </nav>

    <div class="container">
      <div class="row pt-5">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit="">
                <div class="form-group">
                  <input type="text" placeholder="Insert a new task" class="form-control">
                </div>
                <div class="form-group pt-2">
                  <textarea cols="30" rows="10" class="form-control" placeholder="Insert a description"></textarea>
                </div>
                <div class="form-group pt-2">
                  <button class="btn btn-primary btn-block">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: ''
      }
    }
  }
}
</script>