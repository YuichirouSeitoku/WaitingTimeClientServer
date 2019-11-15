<template>


</template>

<script>
export default {
  name: 'JsonTest',
  data () {
    return {
      this.noraml=""
    }
  },
  mounted () {
    this.$axios.get('/api/v1/orders', {timeout: 2000})
      .then(response => {
        console.log(response.data)
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
