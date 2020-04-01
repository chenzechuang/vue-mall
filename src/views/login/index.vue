<template>
  <div>
    <button @click="testReq">test</button>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  methods: {
    testReq() {
      Axios.post("/api/test")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
