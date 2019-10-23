<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8" style="text-align:left">
                <div class="collapse-btn grid-content bg-purple-light" @click="collapseChage">
                    <i class="el-icon-s-fold" v-show="this.collapse===false" ></i> 
                    <i class="el-icon-s-unfold" v-show="this.collapse===true"></i>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    &nbsp;
                </div>
            </el-col>
            <el-col :span="8" style="text-align:right">
                <div class="grid-content bg-purple">
                    <i class="el-icon-full-screen"  @click="handleFullScreen"></i>
                      &nbsp;
                     <i class="el-icon-user"></i>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        name: 'Header',
        data() {
            return {
                collapse: false,
                fullscreen: false,
            }
        },
        methods: {
             // 侧边栏折叠
            collapseChage(){
                // console.log('1')
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
            // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            },
        },
    }
</script>

<style lang="" scoped>
    
</style>