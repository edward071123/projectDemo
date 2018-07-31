<template>
    <div class="tile is-ancestor">
        <div class="tile is-parent is-4 ">
        <article class="tile is-child box">
          <div class="block">
            <label class="label">姓名</label>
            <p class="control">
              <input class="input" v-model="senddata.mname" type="text" placeholder="請輸入經理人姓名">
            </p>
            <p class="control">
              <button class="button is-primary" @click="add">送出</button>
              <button class="button is-primary" @click="cleae">取消</button>
            </p>
          </div>
        </article>
      </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { createManger } from '../../api/manager'
    import Notification from 'vue-bulma-notification'
    const NotificationComponent = Vue.extend(Notification)

    const openNotification = (propsData = {
    title: '',
    message: '',
    type: '',
    direction: '',
    duration: 4500,
    container: '.notifications'
    }) => {
        return new NotificationComponent({
            el: document.createElement('div'),
            propsData
        })
    }
    export default {
        components: {
            Notification
        },
        data() {
            return {
                isloading: false,
                senddata: {
                    mname: '',
                },
            }
        },
        methods: {
            add() {
                if(this.senddata.mname.length == 0 ){
                    this.openNotificationWithType('danger','請先填寫欄位');
                    return false
                }
                this.isloading = true
                createManger(this.senddata).then(response => {
                    this.isloading = false;
                    if(response.statusText == "OK"){
                        this.openNotificationWithType('success','新增成功');
                        this.cleae();
                    }
                })
            },
            openNotificationWithType (type,message) {
                openNotification({
                    message: message,
                    type: type
                })
            },
            cleae(){
                this.senddata.mname="";
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
