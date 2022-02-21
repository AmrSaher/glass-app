<template>
    <ul class="drop-down" :style="op == '1' ? 'z-index: 102; opacity: 1;' : 'opacity: 0; z-index: -1;'">
        <li>Go to discover</li>
        <li>Learn more</li>
        <li>Uninstall</li>
    </ul>
</template>

<script>
export default {
    name: "DropDown",
    props: ['op']
}
</script>

<style lang="scss" scoped>
.drop-down {
    position: absolute;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 120px;
    max-width: 120px;
    height: 110px;
    bottom: -100pxpx;
    right: -10px;
    transition: 0.3s;
    z-index: -1;
    opacity: 0;
    li {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 12px;
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        cursor: pointer;
        &:first-child,
        &:last-child {
            border-top: none;
            border-bottom: none;
        }
        &:first-child {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
        &:last-child {
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
        }
        &:hover {
            background-color: rgb(42, 46, 60);
        }
    }
}
</style>