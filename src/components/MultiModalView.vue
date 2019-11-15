<template>
  <transition name="fade">
    <component v-if="isShow" :is="modal_name"></component>
  </transition>
</template>

<script>
  import { mapState } from 'vuex'
  import ModalNormal from './ModalNormal.vue'
  import ModalNoodle from './ModalNoodle.vue'
  import ModalBaconCheese from './ModalBaconCheese.vue'
  import ModalTunaCornMayo from './ModalTunaCornMayo.vue'
  import ModalNoodleTunaCornMayo from './ModalNoodleTunaCornMayo.vue'
  import ModalNoodleTunaCornMayoKetya from './ModalNoodleTunaCornMayoKetya.vue'
  import ModalZenzai from '../components/ModalZenzai.vue'
  import ModalFinalOrder from '../components/ModalFinalOrder.vue'

  export default {
    name: 'MultiModalView',
    components:{
      ModalNormal,
      ModalNoodle,
      ModalBaconCheese,
      ModalTunaCornMayo,
      ModalNoodleTunaCornMayo,
      ModalNoodleTunaCornMayoKetya,
      ModalZenzai,
      ModalFinalOrder
    },
    computed: {
      ...mapState(['modal_name']),
      isShow () {
        return this.modal_name !== ''
      }
    }
  }
</script>
