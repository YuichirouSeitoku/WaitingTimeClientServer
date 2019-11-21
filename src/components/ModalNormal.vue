<template>
  <transition>
    <div class="modal">
        <p>ノーマルたません</p>
	<div class="modal-container">
	  <div @click="callAction(1)" class="b1">                                                                                                                                                        <p>1</p>                                                                                                                                                                                   </div>                                                                                                                                                                                       <div @click="callAction(2)" class="b2">                                                                                                                                                        <p>2</p>                                                                                                                                                                                   </div>
          <div @click="callAction(3)" class="b3">                                                                                                                                                        <p>3</p>                                                                                                                                                                                   </div>
          <div @click="callAction(4)" class="b4">                                                                                                                                                        <p>4</p>                                                                                                                                                                                   </div>
          <div class="b5" @click="callAction(5)">
            <p>5</p>                                                                                                                                                                                   </div>
          <div class="close" @click="hideModal">
           <p>閉じる</p>                                                                                                                                                                               </div>
	</div>
    </div>
  </transition>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    name: 'ModalNormal',
    computed: {
      ...mapState(['isShow'])
    },
    methods: {
      callAction(value) {
        this.$store.dispatch('updateNormalCount',{normal_count:value})
      },
      ...mapMutations(['hideModal'])
    }
  }
</script>

<style scoped>

.modal{
  margin: 5px;
  font-size:25px;
  color: #627295;
  font-weight:bold;
  background-color: #dfdfdf;
  border-radius: 4px;
  padding: 8px 10px;
  height: 85vh;
}

.modal-container{
  font-size: 30px;
  color: #627295;
  font-weight: bold;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 6fr 6fr;
  height: 75vh;
}

.b1{
  border: solid 2px #627295;
  border-radius:4px;
  margin:20px;
  text-align: center;
  padding: 20px;
}

.b2{
  border: solid 2px #627295;
  border-radius:4px;
  margin:20px;
  text-align: center;
  padding: 20px;
}

.b3{
  border: solid 2px #627295;
  border-radius:4px;
  margin:20px;
  text-align: center;
  padding: 20px;
}

.b4{
  border: solid 2px #627295;
  border-radius:4px;
  margin:20px;
  text-align: center;
  padding: 20px;
}


.b5{
  border: solid 2px #627295;
  border-radius:4px;
  margin:20px;
  text-align: center;
  padding: 20px;
}

.close{
  border: solid 2px #627200;
  border-radius:4px;
  margin:20px;
  padding: 20px;
  text-align: center;
  background-color: #627295;
  color: white;
}

</style>
