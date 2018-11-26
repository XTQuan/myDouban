<template>
     <div class="list" id="subNav">
         <template v-for="item in items">
             <div :key="item.id" >
                <div class="listItem">
                    <img class='listImg' :src="item.image_hlarge"></img>
                    <h3>{{item.title}}</h3>
                    <p>{{item.content| subStr}}</p>
                </div>            
             </div>

         </template>
    </div>

</template>
<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
      require: true
    }
  },
  data() {
    return {};
  },
  filters:
  {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
};
</script>
<style lang="less" scoped>
.listImg{
  float:right;
  width:10rem;
  height:10rem;

}
.list{


 .listItem{
   height:10rem;
   margin-top:2rem;
 }
}
 
</style>
