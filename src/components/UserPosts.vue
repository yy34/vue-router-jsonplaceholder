<template>
  <div class="container">
    <h3 class="pb-4">User's posts</h3>
    <router-link class="btn btn-light mb-4" :to="userLink"
      >Back To User</router-link
    >
    <div class="row">
      <template v-for="(post, index) in posts" :key="index">
        <div class="col-12 col-md-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h6 class="badge badge-dark mb-1">{{ index }}</h6>
              <h5 class="card-title p-3 font-weight-bold text-capitalize">
                {{ post.title }}
              </h5>
              <p class="card-text text-secondary limit-line">{{ post.body }}</p>
            </div>
          </div>
        </div>
      </template>
    </div>
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
  computed: {
    userLink() {
      return `/user/${this.$route.params.userId}`;
    },
  },
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

<style scoped>
.card-title {
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-text {
  font-size: 0.875rem;
}
.limit-line {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
