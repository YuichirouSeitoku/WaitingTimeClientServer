<template>
  <transition>
    <div class="modal">
      <p>注文内容に誤りはないですか？</p>
      <p v-if=this.normal_count_show>ノーマル : {{ normal_count }}</p>
      <p v-if=this.noodle_count_show>麺入り : {{ noodle_count }}</p>
      <p v-if=this.bacon_cheese_count_show>ベーコンチーズ : {{ bacon_cheese_count }}</p>
      <p v-if=this.tuna_corn_mayo_count_show>ツナコーンマヨ : {{ tuna_corn_mayo_count }}</p>
      <p v-if=this.noodle_tuna_corn_mayo_count_show>麺入りツナコーンマヨ : {{ noodle_tuna_corn_mayo_count }}</p>
      <p v-if=this.noodle_tuna_corn_mayo_ketya_count_show>麺入りツナコーンマヨ(ケチャップ) : {{ noodle_tuna_corn_mayo_ketya_count }}</p>
      <p v-if=this.zenzai_count_show>ぜんざい : {{ zenzai_count }}</p>
      <div class="b-container">
        <div class="boxA" @click="submitOrder">はい</div>
        <div class="boxB" @click="hideModal">戻る</div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    name: 'ModalFinalOrder',
    data(){
      return {
          order_data:[],
          normal_data:{menu:"normal",count:this.$store.state.normal_count},
          noodle_data:{menu:"noodle",count:this.$store.state.noodle_count},
          bacon_cheese_data:{menu:"bacon_cheese",count:this.$store.state.bacon_cheese_count},
          tuna_corn_mayo_data: {menu:"tuna_corn_mayo",count:this.$store.state.tuna_corn_mayo_count},
	  noodle_tuna_corn_mayo_data:{menu:"noodle_tuna_corn_mayo",count:this.$store.state.noodle_tuna_corn_mayo_count},
	  noodle_tuna_corn_mayo_ketya_data:{menu:"noodle_tuna_corn_mayo_ketya",count:this.$store.state.noodle_tuna_corn_mayo_ketya_count},
	  zenzai_data:{menu:"zenzai",count:this.$store.state.zenzai},
          normal_count_show:false,
          noodle_count_show:false,
	  bacon_cheese_count_show:false,
	  tuna_corn_mayo_count_show:false,
          noodle_tuna_corn_mayo_count_show:false,
          noodle_tuna_corn_mayo_ketya_count_show:false,
          zenzai_count_show:false
      }
    },
    mounted(){
        if(this.$store.state.normal_count!=0){
          this.normal_count_show=true
          this.order_data.push(this.normal_data)
        }
        if(this.$store.state.noodle_count!=0){
	  this.noodle_count_show=true
          this.order_data.push(this.noodle_data)
        }
        if(this.$store.state.bacon_cheese_count!=0){
	  this.bacon_cheese_count_show=true
          this.order_data.push(this.bacon_cheese_data)
        }
        if(this.$store.state.tuna_corn_mayo_count!=0){
	  this.tuna_corn_mayo_count_show=true
          this.order_data.push(this.tuna_corn_mayo_data)
        }
        if(this.$store.state.noodle_tuna_corn_mayo_count!=0){
	  this.noodle_tuna_corn_mayo_count_show=true
          this.order_data.push(this.noodle_tuna_corn_mayo_data)
        }
        if(this.$store.state.noodle_tuna_corn_mayo_ketya_count!=0){
 	  this.noodle_tuna_corn_mayo_ketya_count_show=true
          this.order_data.push(this.noodle_tuna_corn_mayo_ketya_count)
        }
        if(this.$store.state.zenzai_count!=0){
	  this.zenzai_count_show=true
          this.order_data.push(this.zeznai_data)
        }
    },

    computed: {
      ...mapState(['isShow']),
      ...mapState(['normal_count']),
      ...mapState(['noodle_count']),
      ...mapState(['bacon_cheese_count']),
      ...mapState(['tuna_corn_mayo_count']),
      ...mapState(['noodle_tuna_corn_mayo_count']),
      ...mapState(['noodle_tuna_corn_mayo_ketya_count']),
      ...mapState(['zenzai_count'])
    },
    methods: {
      submitOrder: function(){
        this.$axios.post('localhost/api/v1/orders',this.order_data)
      },
      callAction(e) {
        this.$store.dispatch('updateNormalCount',{normal_count:e.target.value})
      },
      ...mapMutations(['hideModal'])
    }
  }
</script>

<style scoped>
.modal{
  margin: 5px;
  font-size:25px;
  color:#627295;
  font-weight:bold;
  background-color:#dfdfdf;
  border-radius:4px;
  padding: 10px;
}

.b-container{
  display: grid;
  grid-template-rows:1fr;
  grid-template-columns:6fr 6fr;
}

.boxA{
  border: solid 2px #627200;
  border-radius:4px;
  text-align: center;
  background-color: #627295;
  color: white;
  margin: 5px;
  padding: 7px;
}

.boxB{
  border: solid 2px #627295;
  border-radius: 4px;
  text-align: center;
  margin: 5px;
  padding: 7px;
}


</style>
