<template>
  <div v-if="showTabs">
    <el-tabs type="card" v-model="CurrentTabsValue" closable @tab-remove="removeTab" @tab-click="activeTab">
        <el-tab-pane
            v-for="item in ListTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            >
          <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="ListTabs">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        name: 'Tabs',
        data() {
            return {
                CurrentTabsValue: '仪表盘',
                ListTabs: [],
                tabIndex: 2
            }
        },
        created() {
            this.addTab(this.$route)
        },
        watch:{
            $route(newValue, oldValue){
                // console.log(oldValue)
                // console.log(newValue)
                if(newValue.name === oldValue.name){
                    return false
                }else{
                    this.CurrentTabsValue = newValue.name
                    this.addTab(newValue);
                }
            }
        },
        computed: {
            showTabs(){
                return this.ListTabs.length > 0;
            }
        },
        methods: {
            // 添加一个
            addTab(route) {
                const isExist = this.ListTabs.some(item => {
                    return item.path === route.fullPath
                });
                if(!isExist){
                    if(this.ListTabs.length >= 8){
                        this.ListTabs.shift();
                    }
                    this.ListTabs.push({
                        title:route.name,
                        path:route.fullPath,
                        name: route.name
                    })
                }
                
                this.CurrentTabsValue = route.name;
                bus.$emit('tags', this.ListTabs)
            },
            // 关闭单个
            removeTab(index) {
                console.log(index)
                let ListTabsCopy = this.ListTabs
                let ActiveCurrent = this.CurrentTabsValue
                if(ActiveCurrent === index){
                    ListTabsCopy.forEach((tab,index) => {
                        if(tab.name === ActiveCurrent){
                            let nextTab = ListTabsCopy[index+1] || ListTabsCopy[index-1];
                            if(nextTab){
                                ActiveCurrent = nextTab.name
                                this.$router.push(nextTab.path)
                            }
                        }
                    });
                }
                this.CurrentTabsValue = ActiveCurrent;
                this.ListTabs = ListTabsCopy.filter(tab => tab.name !== index)

            },
            // 点击单个切换vue
            activeTab(e){
                this.$router.push(this.ListTabs[e.index].path)
            }
        },
    }
</script>

<style lang="" scoped>
    .content{
        width: 96%;
        margin: 0 auto;
        border: 1px solid red;
    }
</style>