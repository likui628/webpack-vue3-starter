<script setup lang="ts">

</script>

<template>
  <div>
    <div class="header">
      <router-link
        class="link"
        active-class="active"
        to="/"
      >
        Home
      </router-link>
      <router-link
        class="link"
        active-class="active"
        to="/about"
      >
        About
      </router-link>
    </div>

    <router-view />
  </div>
</template>
<style>
.link {
  text-decoration: none;
  padding-bottom: 3px;
  white-space: nowrap;
  padding: 0;
  line-height: 24px;
  font-size: .9rem;
  font-weight: 500;
  margin: 0 0.6em;
}

.active {
  border-bottom: 3px solid #42b983;
}
</style>