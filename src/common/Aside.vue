<template>
    <div>
        <el-row class="tac">
            <el-col :span="24">
                <el-menu
                :default-active="onRoutes"
                :class="[isCollapse ? 'maxWidth': 'minWidth']"
                background-color="#545c64"
                text-color="#fff"
                :collapse="isCollapse"
                @select="AsideSelect"
                :unique-opened="true"
                :router="true"
                 >
                <template v-for="item in items">
                    <template v-if="item.children">
                        <el-submenu :index="item.path" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.name }}</span>
                        </template>
                        <template v-for="childItem in item.children">
                            <el-submenu v-if="childItem.children" :index="childItem.path" :key="childItem.index">
                                <template slot="title">{{ childItem.name }}</template>
                                <el-menu-item v-for="(threeItem,i) in childItem.children" :key="i" :index="threeItem.path">
                                    {{ threeItem.name }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="childItem.path" :key="childItem.index" style="padding-left:80px">
                                {{ childItem.name }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.path" :key="item.index">
                             <i :class="item.icon"></i><span slot="title">{{ item.name }}</span>
                        </el-menu-item>
                    </template>
                </template>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import bus from '../common/bus';
import routes from '@/router/routers'
// console.log(routes[1].children)
    export default {
        name: 'Aside',
        data() {
            return {
                 isCollapse: false,
                 items:routes[1].children
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            },
            AsideSelect(e){
                // console.log(e)

                // bus.$emit('addToTabs',e)
            }
        },
         computed:{
            onRoutes(){
                return this.$route.path.replace('/Dashboard','');
            }
        },
         created(){
            // this.getshopId();
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.isCollapse = msg;
            })
        },
    }
</script>

<style lang="" scoped>
     .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
        height: 100vh;
    }
    .sidebar > ul {
        height:100%;
    }
    
    .maxWidth{
        color: red;
        /* width: 200px; */
        height: 100vh;
    }
    .minWidth{
        color: blue;
        /* width: 60px; */
        height: 100vh;
    }
</style>