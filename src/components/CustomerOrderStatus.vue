<template>
  <div>
    <div class="container">
      <div class="waiting_container">
        <div>
          待ち番号
        </div>
      </div>
      <div class="main_container">
        <div>
          呼び出し番号
        </div>
	<div class="display_number">
	  〇〇〇
	</div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions,mapMutations,mapState } from 'vuex'

export default {
  name: 'CustomerOrderStatus',
  computed:{
  },
  components:{
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

html{height:100%;}
body{height:100%; margin:0px;}

.container{
  display: grid;
  grid-template-rows: 12fr;
  grid-template-columns: 3fr 9fr;
  color: white;
  font-size: 14px;
  font-weight: bold;
  height: 100vh;
}

.waiting_container{
  background-color: #001e43;
}

.main_container{
  border-left: solid 1px #a2c2b6;
  background-color: #001e43;
  display:grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 12fr;
}

.display_number{
  font-size: 70px;
  grid-row-start: 2;
  grid-row-end: 3;
  text-align: center;
}

</style>
