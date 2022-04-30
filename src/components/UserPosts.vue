<template>
  <div>
    <template v-for="post in posts">
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "UserPosts",
  data: function () {
    return {
      posts: {},
    };
  },
  computed: {},
  created() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`
    )
      .then((response) => response.json())
      .then((datas) => {
        this.posts = datas;
      });
  },
};
</script>
