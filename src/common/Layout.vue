<template>
    <div>
        <el-container>
            <Aside/>
            <el-container>
                <el-header>
                    <Header />
                </el-header>
                <Breadcrumb />
                <Tabs />
                <!-- <el-main>
                    <Main />
                </el-main> -->
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import bus from '../common/bus';
    import Aside from './Aside'
    import Header from './Header'
    import Breadcrumb from './Breadcrumb'
    import Tabs from './Tabs'
    import Main from './Main'
    export default {
        name: 'layout',
        components:{
            Aside, Header,Main,Tabs,Breadcrumb
        },
        data() {
            return {
                isCollapse:false
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.isCollapse = msg;
                // console.log(this.isCollapse)
            })
        },
    }
</script>

<style lang="" scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        height: calc(100vh);
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
        height: calc(100vh-60px);
    }
    
    body > .el-container {
        margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
