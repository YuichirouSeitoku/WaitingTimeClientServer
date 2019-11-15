<template>
  <div>
    <multi-modal-view></multi-modal-view>
    <div @click="showNormal">
      <p>ノーマル {{ normal_count }}個</p>
    </div>

    <div @click="showNoodle">
      <p>麺入り {{ noodle_count }}個</p>
    </div>

    <div @click="showBaconCheese">
        <p>ベーコンチーズ {{ bacon_cheese_count }}個</p>
    </div>

    <div @click="showTunaCornMayo">
      <p>ツナコーンマヨ {{ tuna_corn_mayo_count }}個</p>
    </div>

    <div @click="showNoodleTunaCornMayo">
        <p>麺入りツナコーンマヨ {{ noodle_tuna_corn_mayo_count }}個</p>
    </div>

    <div @click="showNoodleTunaCornMayoKetya">
      <p>麺入りツナコーンマヨ(ケチャップ) {{ noodle_tuna_corn_mayo_ketya_count }}個</p>
    </div>

    <div @click="showZenzai">
        <p>ぜんざい {{ zenzai_count }}個</p>
    </div>

    <div @click="showFinalOrder">
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
</style>
