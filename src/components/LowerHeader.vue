<template>
    <header class="lower-header">
        <h2 class="page-title">All Apps</h2>
        <nav class="links">
            <a :class="links_num == 1 ? 'active' : ''" @click="links_num = 1">DeskTop</a>
            <a :class="links_num == 2 ? 'active' : ''" @click="links_num = 2">Mobile</a>
            <a :class="links_num == 3 ? 'active' : ''" @click="links_num = 3">Web</a>
        </nav>
    </header>
</template>

<script>
export default {
    name: "LowerHeader",
    data() {
        return {
            links_num: 1,
        };
    }
} 
</script>

<style lang="scss" scoped>
.lower-header {
    position: absolute;
    top: 58px;
    left: 240px;
    width: calc(100% - 240px);
    height: 58px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    .page-title {
        padding: 0 30px;
        font-size: 15px;
        font-weight: 600;
        animation: fade 1.5s;
    }
    .links {
        display: flex;
        padding-left: 150px;
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
        }
    }
}

@media (max-width: 820px) {
    .lower-header {
        left: 0;
        width: 100%;
    }
}

@media (max-width: 1150px) {
    .lower-header {
        justify-content: center;
        .page-title {
            display: none;
        }
        .links {
            padding-left: 0;
            justify-content: center;
        }
    }
}
</style>