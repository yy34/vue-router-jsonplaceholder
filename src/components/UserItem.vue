<template>
  <router-link :to="profileLink">
    <span
      class="alert alert-dark d-flex align-items-center flex-column"
      role="alert"
    >
      <strong class="mb-1">{{ user.name }}</strong>
      <small> @{{ user.username }}</small>
    </span>
  </router-link>
</template>

<script>
export default {
  name: "UserItem",
  props: ["user"],
  computed: {
    profileLink() {
      return `/user/${this.user.id}`;
    },
  },
};
</script>

<style scoped>
.alert-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}
.alert-primary strong {
  font-size: 0.875rem;
}
</style>
