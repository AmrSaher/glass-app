<template>
    <aside class="sidebar">
        <div class="field">
            <h3 class="title">Apps</h3>
            <nav class="links">
                <a>
                    <i class="fa-solid fa-ellipsis"></i>
                    All Apps
                </a>
                <a>
                    <i class="fa-solid fa-arrow-rotate-right"></i>
                    Updates
                </a>
            </nav>
        </div>
        <div class="field">
            <h3 class="title">Categories</h3>
            <nav class="links">
                <a>
                    <i class="fa-solid fa-camera"></i>
                    Photography
                </a>
                <a>
                    <i class="fa-solid fa-shapes"></i>
                    Graphic Design
                </a>
                <a>
                    <i class="fa-solid fa-clapperboard"></i>
                    Video
                </a>
                <a>
                    <i class="fa-solid fa-paintbrush"></i>
                    Illustrations
                </a>
                <a>
                    <i class="fa-solid fa-laptop"></i>
                    UI/UX
                </a>
                <a>
                    <i class="fa-solid fa-cubes"></i>
                    3D/AR
                </a>
            </nav>
        </div>
        <div class="field">
            <h3 class="title">Fonts</h3>
            <nav class="links">
                <a>
                    <i class="fa-brands fa-fonticons-fi"></i>
                    Manage Fonts
                </a>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style lang="scss" scoped>
.sidebar {
    position: absolute;
    top: 58px;
    left: 0;
    width: 240px;
    padding: 20px;
    border-right: 1px solid var(--border-color);
    height: calc(100vh - 138px);
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    overflow: auto;
    animation: fade 1.5s;
    .field {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        grid-gap: 5px;
        .title {
            color: var(--inactive-color);
            font-size: 16px;
        }
        .links {
            display: flex;
            flex-direction: column;
            width: 100%;
            a {
                display: flex;
                align-items: center;
                padding: 7px;
                padding-left: 15px;
                grid-gap: 10px;
                width: 100%;
                transition: var(--main-transition);
                border-radius: 10px;
                cursor: pointer;
                i {
                    font-size: 20px;
                }
                &:hover {
                    background-color: rgba(12, 15, 25, 0.3);
                }
            }
        }
    }
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(1, 2, 3, 0.4);
        border-radius: 10px;
    }
}

@media (max-width: 820px) {
    .sidebar {
        display: none;
    }
}
</style>