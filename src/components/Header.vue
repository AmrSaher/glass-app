<template>
  <header class="header">
    <div class="logo">
      <span class="red"></span>
      <span class="yellow"></span>
      <span class="green"></span>
    </div>
    <div class="content" :style="searching ? 'justify-content: center' : ''">
      <nav class="links" v-if="!searching">
        <a :class="links_num == 1 ? 'active' : ''" @click="links_num = 1">Apps</a>
        <a :class="links_num == 2 ? 'active notifi' : 'notifi'" @click="links_num = 2">Your work</a>
        <a :class="links_num == 3 ? 'active' : ''" @click="links_num = 3">Discover</a>
        <a :class="links_num == 4 ? 'active notifi' : 'notifi'" @click="links_num = 4">Market</a>
      </nav>
      <form class="search-bar" :style="searching ? 'justify-content: center; max-width: 600px;' : ''">
        <input type="search" class="search-inp" placeholder="Search" @focus="searching = true" @blur="searching = false" />
      </form>
      <div class="actions" v-if="!searching">
        <button class="flat-btn notifi">
          <i class="fa-solid fa-bell"></i>
        </button>
        <button class="flat-btn">
          <i class="fa-solid fa-cloud"></i>
        </button>
        <button class="flat-btn profile">
          <img src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="user_image">
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
      return {
          searching: false,
          links_num: 1,
      };
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid var(--border-color);
  padding: 0 40px;
  .logo {
    display: flex;
    align-items: center;
    width: 250px;
    height: 58px;
    grid-gap: 10px;
    span {
      border-radius: 50%;
      width: 15px;
      height: 15px;
    }
    .red {
      background-color: var(--red-color);
    }
    .yellow {
      background-color: var(--yellow-color);
    }
    .green {
      background-color: var(--green-color);
    }
  }
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .links {
      width: 400px;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      a {
        color: var(--inactive-color);
        width: 100px;
        animation: fade 1.5s;
        height: 58px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s color ease-in-out;
        position: relative;
        cursor: pointer;
        &:hover,
        &.active {
          color: var(--color);
          border-bottom: 2px solid var(--color);
        }
        &.notifi:after {
            content: "";
            position: absolute;
            top: 10px;
            right: 0;
            width: 6px;
            height: 6px;
            background-color: #3a6df0;
            border-radius: 50%;
        }
      }
    }
    .search-bar {
      height: 40px;
      display: flex;
      width: 100%;
      max-width: 400px;
      border-radius: 4px;
      padding-left: 16px;
      transition: var(--main-transition);
      input {
        width: 100%;
        height: 100%;
        border: none;
        background-color: #14162b;
        border-radius: 4px;
        font-size: 15px;
        font-weight: 500;
        padding: 0 20px 0 40px;
        box-shadow: var(--main-box-shadow);
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
        background-size: 14px;
        background-repeat: no-repeat;
        background-position: 16px 48%;
        color: var(--color);
        &::placeholder {
          color: var(--inactive-color);
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 58px;
      grid-gap: 20px;
      padding-left: 16px;
      animation: fade 1.5s;
      button {
        font-size: 20px;
        position: relative;
        &.profile {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 30px;
            height: 30px;
            border: 2px solid var(--color);
            border-radius: 50%;
          }
        }
        &.notifi::after {
          content: "1";
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: -6px;
          right: -8px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          color: var(--color);
          background-color: #3a6df0;
          font-size: 10px;
          font-weight: 600;
        }
      }
    }
  }
}

@media (max-width: 1150px) {
    .header .content .links a:nth-child(3),
    .header .content .links a:nth-child(4) {
        display: none;
    }
}

@media (max-width: 820px) {
    .header .logo {
        display: none;
    }
}

@media (max-width: 570px) {
    .header .content {
      .links {
        display: none;
      }
      .search-bar {
        padding-left: 0;
      }
    }
}
</style>
