
<template>
  <transition>
    <div class="modal">
        <p>麺入りツナコーンマヨ</p>
        <div class="modal-container">
          <div class="b1">
            <div @click="callAction(1)">1</div>
          </div>
          <div class="b2">
            <div @click="callAction(2)">2</div>
          </div>
          <div class="b3">
            <div @click="callAction(3)">3</div>
          </div>
          <div class="b4">
            <div @click="callAction(4)">4</div>
          </div>
          <div class="b5">
            <div @click="callAction(5)">5</div>
          </div>
          <div class="close">
            <div @click="hideModal">閉じる</div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    name: 'ModalNoodleTunaCornMayo',
    computed: {
      ...mapState(['isShow'])
    },
    methods: {
      callAction(value) {
        this.$store.dispatch('updateNoodleTunaCornMayoCount',{noodle_tuna_corn_mayo_count:value})
      },
      ...mapMutations(['hideModal'])
    }
  }
</script>

<style scoped>

.modal{
  margin: 5px;
  font-size:16px;
  color: #627295;
  font-weight:bold;
  background-color: #dfdfdf;
  border-radius: 4px;
}

.modal-container{
  font-size: 14px;
  color: #627295;
  font-weight: bold;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
}

.b1{
  border: solid 2px #627295;
  border-radius:4px;
  margin:5px;
  text-align: center;
}
.b2{
  border: solid 2px #627295;
  border-radius:4px;                                                                           margin:5px;
  text-align: center;
}

.b3{
  border: solid 2px #627295;
  border-radius:4px;                                                                           margin:5px;
  text-align: center;
}

.b4{
  border: solid 2px #627295;
  border-radius:4px;                                                                           margin:5px;
  text-align: center;
}

.b5{
  border: solid 2px #627295;
  border-radius:4px;                                                                           margin:5px;
  text-align: center;
}

.close{
  border: solid 2px #627200;
  border-radius:4px;                                                                           margin:5px;
  text-align: center;
  background-color: #627295;
  color: white;
}

</style>

