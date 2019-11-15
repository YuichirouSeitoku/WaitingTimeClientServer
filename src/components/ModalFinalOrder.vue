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
    </div>
  </transition>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    name: 'ModalFinalOrder',
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
      callAction(e) {
        this.$store.dispatch('updateNormalCount',{normal_count:e.target.value})
      },
      ...mapMutations(['hideModal'])
    }
  }
</script>
