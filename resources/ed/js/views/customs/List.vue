<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
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
                                <td>{{custom.id}}</td>
                                <td>
                                    {{custom.name}}
                                </td>
                                <td>{{custom.tel}}</td>
                                <td>{{custom.mobile}}</td>
                                <td>{{custom.address}}</td>
                                <td>{{custom.title}}</td>
                                <td>{{custom.position}}</td>
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
    import { fetchNewsList } from '../../api/news'
    import Notification from 'vue-bulma-notification'

    export default {
        components: {
            Notification
        },
        created() {
            this.loadCustoms();
        },
        data() {
            return {
                isloading: false,
                customs: [],
            }
        },
        methods: {
            loadCustoms() {
                this.isloading = true
                fetchNewsList().then(response => {
                    this.isloading = false;
                    this.customs = response.data;
                })
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
