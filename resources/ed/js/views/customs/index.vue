<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <a class="button is-primary is-large modal-button" @click="openModalAdd()">新增客戶</a>
                    <div class="table-responsive">
                        <table class="table is-bordered is-striped is-narrow" :class="{'is-loading': isloading}">
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>姓名</th>
                            <th>市話</th>
                            <th>手機</th>
                            <th>地址</th>
                            <th>頭銜</th>
                            <th>職稱</th>
                            <th colspan="2">動作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="custom in customs">
                                <td>{{custom.no}}</td>
                                <td>
                                    {{custom.name}}
                                </td>
                                <td>{{custom.tel}}</td>
                                <td>{{custom.mobile}}</td>
                                <td>{{custom.address}}</td>
                                <td>{{custom.title}}</td>
                                <td>{{custom.type}}</td>
                                <td>
                                    <a href="#">修改</a>
                                </td>
                                <td>
                                    <a href="#">刪除</a>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import AddCustomModal from './addCustomModal'
    const AddCustomModalComponent = Vue.extend(AddCustomModal)
    const openAddCustomModal = (
        propsData = {
        visible: true
        }) => {
        return new AddCustomModalComponent({
            el: document.createElement('div'),
            propsData
        })
    }
    export default {
        created() {
            this.loadCustoms();
        },
        data() {
            return {
                api: '/customs',
                isloading: false,
                customs: [],
                addModal: null,
            }
        },
        methods: {
            loadCustoms() {
                this.isloading = true
                this.$http({
                    url: this.api
                }).then((response) => {
                    this.isloading = false
                    this.customs = response.data;
                }).catch((error) => {
                    this.isloading = false
                    console.log(error)
                })
            },
            openModalAdd () {
                const addModal = this.addModal || (this.addModal = openAddCustomModal({
                    title: '新增客戶'
                }))
                addModal.$children[0].$on('ok', () => {
                    console.log('do task')
                })
                addModal.$children[0].$on('cancel', () => {
                    console.log('no task')
                })
                addModal.$children[0].active()
            }
        }
    }
</script>
<style lang="scss">
.table-responsive {
  display: block;
  width: 100%;
  min-height: .01%;
  overflow-x: auto;
}
</style>
