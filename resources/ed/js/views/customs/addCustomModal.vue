<template>
  <card-modal :visible="visible" @close="close" :title="title" transition="zoom">
     <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="columns">
            <div class="column">
              <div class="control">
                <label class="label">姓名</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">市話</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">手機</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
            </div>
            <div class="column">
              <div class="control">
                <label class="label">頭銜</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">職稱</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
            </div>
            <div class="column">
              <div class="control">
                <label class="label">地址</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
            </div>
          </div>
        </article>
      </div>
  </card-modal>
</template>

<script>
import { CardModal } from 'vue-bulma-modal'

export default {
  components: {
    CardModal
  },

  props: {
    visible: Boolean,
    title: String,
    url: String
  },

  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';

.button {
  margin: 5px 0 0;
}

.control .button {
  margin: inherit;
}

.control.has-addons {
  @include mobile() {
    input {
      width: 100%;
    }

    input.is-expanded {
      flex-shrink: 1;
    }
  }
}
</style>
