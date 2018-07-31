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
                            <th colspan="2">動作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="manager in managers">
                                <td>{{manager.mid}}</td>
                                <td>
                                    {{manager.mname}}
                                </td>
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
    import { fetchMangerList } from '../../api/manager'
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
                managers: [],
            }
        },
        methods: {
            loadCustoms() {
                this.isloading = true
                fetchMangerList().then(response => {
                    this.isloading = false;
                    this.managers = response.data;
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
