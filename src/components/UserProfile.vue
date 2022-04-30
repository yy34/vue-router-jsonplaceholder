<template>
  <div class="container">
    <h3 class="pb-4">User Info</h3>

    <div class="row">
      <div class="col-md-4 offset-md-4 mb-3">
        <ul class="list-group">
          <li class="list-group-item">
            <strong>Username :</strong> <small>{{ posts.name }}</small>
          </li>
          <li class="list-group-item">
            <strong>Mail :</strong> <small>{{ posts.email }}</small>
          </li>
          <li class="list-group-item">
            <strong>Phone :</strong> <small>{{ posts.phone }}</small>
          </li>
        </ul>

        <div
          class="w-100 mt-2 d-flex align-items-center justify-content-between flex-wrap"
        >
          <router-link class="btn btn-light" :to="prevUser"
            >Prev User</router-link
          >
          <router-link class="btn btn-light" :to="nextUser"
            >Next User</router-link
          >
          <router-link class="btn btn-dark w-100 my-3" :to="postsLink"
            >User's Posts</router-link
          >
          <a class="btn btn-light w-100" @click="goBack"> Go Back</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data: function () {
    return {
      posts: [],
    };
  },
  methods: {
    fetchData() {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.posts = data;
        });
    },
    goBack() {
      // this.$router.go(-1)
      this.$router.push({ name: "home" });
    },
  },
  watch: {
    $route: "fetchData",
  },
  computed: {
    postsLink() {
      return `/user/${this.$route.params.id}/posts`;
    },
    nextUser() {
      return `/user/${parseInt(this.$route.params.id, 10) + 1}`;
    },
    prevUser() {
      return `/user/${parseInt(this.$route.params.id, 10) - 1}`;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
