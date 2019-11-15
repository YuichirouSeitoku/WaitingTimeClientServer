<template>
  <transition>
    <div class="modal">
        <p>麺入りツナコーンマヨ</p>
        <button :value="1" @click="callAction">1</button>
        <button :value="2" @click="callAction">2</button>
        <button :value="3" @click="callAction">3</button>
        <button :value="4" @click="callAction">4</button>
        <button :value="5" @click="callAction">5</button>
        <button @click="hideModal">閉じる</button>
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
      callAction(e) {
        this.$store.dispatch('updateNoodleTunaCornMayoCount',{noodle_tuna_corn_mayo_count:e.target.value})
      },
      ...mapMutations(['hideModal'])
    }
  }
</script>
