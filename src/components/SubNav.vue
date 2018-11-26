<template>
   
        <ul class="quickNav"> 
            <li>
                <router-link :to="{name:'MovieView'}" >院线热映</router-link></li>
                 <li>   <router-link :to="{name:'MovieView'}" >欧美新碟榜</router-link></li>
                  <li>   <router-link :to="{name:'MovieView'}" >注册账号</router-link></li>
                    <li>  <router-link :to="{name:'MovieView'}">立即登录</router-link>
            </li>
        </ul>
   


</template>
<script>
export default {
  name: "SubNav",
  props: {},
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@larger: 4.8rem;
.quickNav{
  height:10rem;
  margin-top: 4.8rem;
   li {
    width: 50%;
    float: left;
    box-sizing: border-box;
    font-size: 1.5rem;
    padding: 0.3rem;
    a {
      display: block;
     
      padding: 1.2rem 0;
      line-height: 2rem;
      text-align: center;
      background-color: #f6f6f6;
      color: #494949;
      border-radius: 0.2rem;
      //  max-width: 100%;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
      // word-wrap: normal;
    }
  }
}
</style>
