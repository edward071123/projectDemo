<template>
    <div class="tile is-ancestor">
        <div class="tile is-parent is-4 ">
        <article class="tile is-child box">
          <div class="block">
            <label class="label">姓名</label>
            <p class="control">
              <input class="input" v-model="senddata.name" type="text" placeholder="請輸入客戶姓名">
            </p>
            <label class="label">市話</label>
            <p class="control has-icon has-icon-right">
              <input class="input" v-model="senddata.tel" type="text" placeholder="請輸入客戶市話">
            </p>
           <label class="label">手機</label>
            <p class="control has-icon has-icon-right">
              <input class="input" v-model="senddata.mobile" type="text" placeholder="請輸入客戶手機">
            </p>
            <label class="label">地址</label>
            <p class="control has-icon has-icon-right">
              <input class="input" v-model="senddata.address" type="text" placeholder="請輸入客戶地址">
            </p>
             <label class="label">頭銜</label>
            <p class="control has-icon has-icon-right">
              <input class="input" v-model="senddata.title" type="text" placeholder="請輸入客戶頭銜">
            </p>
             <label class="label">職稱</label>
            <p class="control has-icon has-icon-right">
              <input class="input" v-model="senddata.position" type="text" placeholder="請輸入客戶職稱">
            </p>
            <p class="control">
              <button class="button is-primary" @click="addCustom">送出</button>
              <button class="button is-primary" @click="cleae">取消</button>
            </p>
          </div>
        </article>
      </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { createCustom } from '../../api/news'
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
                    name: '',
                    tel: '',
                    mobile: '',
                    address: '',
                    title: '',
                    position: ''
                },
            }
        },
        methods: {
            addCustom() {
                if(this.senddata.name.length == 0 || this.senddata.tel.length == 0){
                    this.openNotificationWithType('danger','請先填寫欄位');
                    return false
                }
                this.isloading = true
                createCustom(this.senddata).then(response => {
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
                this.senddata.name="";
                this.senddata.tel="";
                this.senddata.mobile="";
                this.senddata.address="";
                this.senddata.title="";
                this.senddata.position="";
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
