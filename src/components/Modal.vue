<template>
    <div class="modal" :style="showModal ? 'z-index: 105; opacity: 1;' : 'opacity: 0; z-index: -1;'">
        <div class="card">
            <header class="card_header">
                <div class="card_title">Update This App</div>
                <button class="flat-btn" @click="toggleModal">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </header>
            <div class="content">
                <p class="info">
                    Adjust your selections for advanced options as desired before continuing. <a>Learn more</a>
                </p>
                <form>
                    <div class="field">
                        <input type="checkbox" id="c1">
                        <label for="c1">Import previous settings and preferences</label>
                    </div>
                    <div class="field">
                        <input type="checkbox" id="c2">
                        <label for="c2">Remove old versions</label>
                    </div>
                    <div class="actions">
                        <button type="button" class="inactive" @click="toggleModal">Cancel</button>
                        <button type="button" class="active" @click="toggleModal">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: ['showModal'],
    methods: {
        toggleModal() {
            this.$emit('closeModal');
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: -40px;
    left: -40px;
    width: calc(100% + 80px);
    height: calc(100% + 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.295);
    opacity: 0;
    transition: 0.3s;
    .card {
        padding: 20px 40px;
        overflow-y: auto;
        box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.4);
        transition: all 0.3s;
        background-color: rgb(22, 25, 37);
        width: 450px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        .card_header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--border-color);
            .flat-btn {
                font-size: 20px;
            }
        }
        .content {
            padding-top: 20px;
            .info {
                font-weight: 400;
                font-size: 15px;
                line-height: 1.7em;
                color: #ebecec;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: left;
                margin-bottom: 14px;
                a {
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            form {
                display: flex;
                flex-direction: column;
                grid-gap: 10px;
                .field {
                    display: flex;
                    grid-gap: 10px;
                    align-items: center;
                    input {
                        width: 15px;
                        height: 15px;
                    }
                }
                .actions {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    grid-gap: 10px;
                    .active {
                        background-color: #3a6df0;
                        border: none;
                        padding: 8px 26px;
                        color: #fff;
                        border-radius: 20px;
                        cursor: pointer;
                        transition: 0.3s;
                        white-space: nowrap;
                        &:hover {
                        background-color: #1e59f1;
                        }
                    }
                    .inactive {
                        border: 1px solid var(--inactive-color);
                        border-radius: 20px;
                        background-color: transparent;
                        padding: 8px 26px;
                        color: var(--inactive-color);
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>