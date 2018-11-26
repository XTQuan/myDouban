<template>
  <div class="home-view has-header">
    <subNav></subNav>
    <list :items="events"></list>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

import subNav from "../components/SubNav";
import list from "../components/List";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      events: state => state.activities.events
    })
  },
  components: {
    subNav,
    list
  },
  mounted: function() {
    this.loadList();
  },
  methods: {
    ...mapActions(["loadMore", "loadList"])
  }
};
</script>