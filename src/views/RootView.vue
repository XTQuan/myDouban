<template>
    <div>
        <HeaderBar></HeaderBar>
        <router-view></router-view>    
    </div>
</template>
<script>
import HeaderBar from "../components/HeaderBar";
export default {
  name: "root-view",
  data() {
    return {
      talion: ""
    };
  },
  components:{HeaderBar}
};
</script>
    

