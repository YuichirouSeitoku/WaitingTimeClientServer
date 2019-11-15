<template>
  <transition name="fade">
    <div>
        <p>麺入り</p>
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
    name: 'ModalNoodle',
    computed: {
      ...mapState(['isShow'])
    },
    methods: {
      callAction(e) {
        this.$store.dispatch('updateNoodleCount',{noodle_count:e.target.value})
      },
      ...mapMutations(['hideModal'])
    }
  }
</script>
