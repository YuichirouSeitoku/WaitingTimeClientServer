<template>
  <div>
    <div class="menu">
      <RouterLink to ='/'><p>注文状況を表示する</p></RouterLink>
    </div>
    <multi-modal-view></multi-modal-view>
    <div class="main_container">
      <div class="boxA" @click="showNormal">
        <p>ノーマル {{ normal_count }}個</p>
      </div>
      <div class="boxB" @click="showNoodle">
        <p>麺入り {{ noodle_count }}個</p>
      </div>
      <div class="boxC" @click="showBaconCheese">
          <p>ベーコンチーズ {{ bacon_cheese_count }}個</p>
      </div>
      <div class="boxD" @click="showTunaCornMayo">
        <p>ツナコーンマヨ {{ tuna_corn_mayo_count }}個</p>
      </div>
      <div class="boxE" @click="showNoodleTunaCornMayo">
        <p>麺入りツナコーンマヨ {{ noodle_tuna_corn_mayo_count }}個</p>
      </div>
      <div class="boxF" @click="showNoodleTunaCornMayoKetya">  
        <p>麺入りツナコーンマヨ(ケチャップ) {{ noodle_tuna_corn_mayo_ketya_count }}個</p>
      </div>
      <div class="boxG" @click="showZenzai">
        <p>ぜんざい {{ zenzai_count }}個</p>
      </div>
      <div class="space">
      </div>
    </div>

    <div class="dec" @click="showFinalOrder">
      <p>注文を確定する</p>
    </div>

  </div>
</template>


<script>
import { mapActions,mapMutations,mapState } from 'vuex'
import MultiModalView from '../components/MultiModalView.vue'
import ModalNormal from '../components/ModalNormal.vue'
import ModalNoodle from '../components/ModalNoodle.vue'
import ModalBaconCheese from '../components/ModalBaconCheese.vue'
import ModalTunaCornMayo from '../components/ModalTunaCornMayo.vue'
import ModalNoodleTunaCornMayo from '../components/ModalNoodleTunaCornMayo.vue'
import ModalNoodleTunaCornMayoKetya from '../components/ModalNoodleTunaCornMayoKetya.vue'
import ModalZenzai from '../components/ModalZenzai.vue'
import ModalFinalOrder from '../components/ModalFinalOrder'

export default {
  name: 'OrderTop',
  computed:{
    ...mapState(['normal_count']),
    ...mapState(['noodle_count']),
    ...mapState(['bacon_cheese_count']),
    ...mapState(['tuna_corn_mayo_count']),
    ...mapState(['noodle_tuna_corn_mayo_count']),
    ...mapState(['noodle_tuna_corn_mayo_ketya_count']),
    ...mapState(['zenzai_count'])
  },
  components:{
    MultiModalView,
    ModalNormal,
    ModalNoodle,
    ModalBaconCheese,
    ModalTunaCornMayo,
    ModalNoodleTunaCornMayo,
    ModalNoodleTunaCornMayoKetya,
    ModalZenzai,
    ModalFinalOrder
  },
  methods: {
    showNormal(){
      this.$store.dispatch("showModalNormal");
    },
    showNoodle(){
      this.$store.dispatch("showModalNoodle");
    },
    showBaconCheese(){
      this.$store.dispatch("showModalBaconCheese");
    },
    showTunaCornMayo(){
      this.$store.dispatch("showModalTunaCornMayo");
    },
    showNoodleTunaCornMayo(){
      this.$store.dispatch("showModalNoodleTunaCornMayo");
    },
    showNoodleTunaCornMayoKetya(){
      this.$store.dispatch("showModalNoodleTunaCornMayoKetya");
    },
    showZenzai(){
      this.$store.dispatch("showModalZenzai");
    },
    showFinalOrder(){
      this.$store.dispatch("showModalFinalOrder");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.menu{
  background-color: gray;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  font-size: 20px;
}

a{text-decoration: none;}
a:link{color: white;}
a:visited{color: white;}
a:hover{color: white;}
a:active{color: white;}


.main_container {
  display: grid;
  grid-template-rows: 3fr 3fr 3fr 3fr;
  grid-template-columns: 6fr 6fr;
  width: 100%;
  border-radius: 10px;
}

.boxA{
 display: inline-block;
  text-align: left;
  border: 2px solid #627295;
  font-size: 20px;
  color: #627295;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 12px;
}

.boxB{
 display: inline-block;
  text-align: left;
  border: 2px solid #627295;
  font-size: 20px;
  color: #627295;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 12px;
}

.boxC{
 display: inline-block;
  text-align: left;
  border: 2px solid #627295;
  font-size: 20px;
  color: #627295;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 12px;
}

.boxD{
 display: inline-block;
  text-align: left;
  border: 2px solid #627295;
  font-size: 20px;
  color: #627295;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 12px;

}

.boxE{
 display: inline-block;
  text-align: left;
  border: 2px solid #627295;
  font-size: 20px;
  color: #627295;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 12px;
}

.boxF{
 display: inline-block;
  text-align: left;
  border: 2px solid #627295;
  font-size: 20px;
  color: #627295;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 12px;
}
.boxG{

  display: inline-block;
  text-align: left;
  border: 2px solid #627295;
  font-size: 20px;
  color: #627295;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 12px;
}

.dec{
  display: inline-block;
  text-align: center;
  border: 2px solid #627200;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 12px;
  background-color: #627295;
  color: white;
}


</style>
