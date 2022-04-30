<template>
  <div>
    {{ posts.name }}
    {{ posts.email }}
    {{ posts.phone }}

    <router-link :to="postsLink">Posts</router-link>
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
  computed: {
    postsLink() {
      return `/user/${this.$route.params.id}/posts`;
    },
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((users) => {
        this.posts = users;
      });
  },
};
</script>
