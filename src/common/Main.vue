<template>
    <div>
        <transition name="fade-transform" mode="out-in">
            <keep-alive :include="tagsList">
                        <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        name: 'Main',
        data() {
            return {
                tagsList:[]
            }
        },
        computed: {
            key(){
                return this.$router.path
            }
        },
        
        created(){
            bus.$on('tags', msg => {
                let arr = [];
                for(let i = 0,len = msg.length; i <len; i++){
                    msg[i].name && arr.push(msg[i].name);
                }
                this.tagsList = arr
            })
            
        },
    }
</script>

<style lang="" scoped>
    
</style>