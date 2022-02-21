<template>
  <main class="app">
    <Header />
    <Sidebar />
    <router-view/>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar
  }
}
</script>
