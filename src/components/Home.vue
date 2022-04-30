<template>
  <div class="container">
    <h3 class="pb-4">Select User</h3>
    <div class="row">
      <template v-for="user in users">
        <div class="col">
          <user-item :user="user"></user-item>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  name: "Home",
  data: function () {
    return {
      users: [],
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.users = users;
      });
  },
  components: {
    UserItem,
  },
};
</script>
