<template>
  <div>
    <div class="wrap__top">
      <h1>LIST</h1>
    </div>
    <div v-for="item in data" v-bind:key="item.id" class="wrap__data">
      <p>{{ item.first_name }}</p>
      <p>{{ item.email }}</p>
      <img :src="item.avatar" alt="avatar" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
    };
  },

  methods: {
    getData() {
      axios.get("https://reqres.in/api/users").then((res) => {
        this.data = res.data.data;
        console.log(this.data);
      });
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style>
.wrap__data {
  display: inline-block;
  padding: 1rem 1rem 1rem 1rem;
}
</style>
