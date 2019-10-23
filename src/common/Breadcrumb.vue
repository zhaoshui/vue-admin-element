<template>
    <div class="adminBread">
        <el-breadcrumb class="another-breadClass" separator-class="el-icon-arrow-right">
             <el-breadcrumb-item v-for="item in BreadcrumbList" :key="item.index" :to="item.to">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'Breadcrumb',
        data() {
            return {
                BreadcrumbList:[]
            }
        },
        created() {
              this.BreadcrumbList = this.$route.matched
        },
        watch: {
             $route(newValue, oldValue){
               this.BreadcrumbList = newValue.matched
            }
        },
    }
</script>

<style lang="" scoped>
    .adminBread{
        height: 60px;
        line-height: 60px;
    }
    .another-breadClass{
        line-height: 60px;
        margin-left: 20px;
    }
</style>