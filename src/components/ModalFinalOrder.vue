<template>
  <transition>
    <div class="modal">
      <p>注文内容に誤りはないですか？</p>
      <p>ノーマル : {{ normal_count }}</p>
      <p>麺入り : {{ noodle_count }}</p>
      <p>ベーコンチーズ : {{ bacon_cheese_count }}</p>
      <p>ツナコーンマヨ : {{ tuna_corn_mayo_count }}</p>
      <p>麺入りツナコーンマヨ : {{ noodle_tuna_corn_mayo_count }}</p>
      <p>麺入りツナコーンマヨ(ケチャップ) : {{ noodle_tuna_corn_mayo_ketya_count }}</p>
      <p>ぜんざい : {{ zenzai_count }}</p>
      <button @click="submitOrder">はい</button>
      <button @click="hideModal">戻る</button>
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
	  noodle_tuna_corn_mayo_ketya_data:{menu:"noodle_tuna_corn_mayo_ketya",count:this.$store.state.noodle_tuna_corn_mayo_ketya
        },
	  zenzai_data:{menu:"zenzai",count:this.$store.state.zenzai}
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
        if(this.$store.state.normal_count!=0){
	  this.order_data.push(this.normal_data)
        }
        if(this.$store.state.noodle_count!=0){
          this.order_data.push(this.noodle_data)
        }
        if(this.$store.state.bacon_cheese_count!=0){
          this.order_data.push(this.bacon_cheese_data)
        }
        if(this.$store.state.tuna_corn_mayo_count!=0){
          this.order_data.push(this.tuna_corn_mayo_data)
        }
        if(this.$store.state.noodle_tuna_corn_mayo_count!=0){
          this.order_data.push(this.noodle_tuna_corn_mayo_data)
        }
        if(this.$store.state.noodle_tuna_corn_mayo_ketya_data!=0){
          this.order_data.push(this.noodle_tuna_corn_mayo_ketya_count)
        }
        if(this.$store.state.zenzai_count!=0){
          this.order_data.push(this.zeznai_data)
        }

        this.$axios.post('localhost/api/v1/orders',this.order_data)
      },
      callAction(e) {
        this.$store.dispatch('updateNormalCount',{normal_count:e.target.value})
      },
      ...mapMutations(['hideModal'])
    }
  }
</script>
