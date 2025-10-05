<template>
  <LowerHeader />
  <Modal :showModal="showModal" @closeModal="showModal = false" />
  <div class="all-apps page">
    <section class="land">
      <div class="content">
        <h3 class="land_title">
          <svg viewBox="0 0 512 512">
            <path d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z" fill="#d6355b" data-original="#ff468c"></path>
            <path xmlns="http://www.w3.org/2000/svg" d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z" fill="#d6355b" data-original="#d72878"></path>
            <path xmlns="http://www.w3.org/2000/svg" d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z" fill="#2e000a" data-original="#700029"></path>
            <path xmlns="http://www.w3.org/2000/svg" d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z" fill="#2e000a" data-original="#4d0e06"></path>
            <path xmlns="http://www.w3.org/2000/svg" d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z" fill="#d6355b" data-original="#ff468c"></path>
            <path xmlns="http://www.w3.org/2000/svg" d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z" fill="#d6355b" data-original="#d72878"></path>
          </svg>
          Adobe Stock
        </h3>
        <p class="land_desc">
          Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan and find perfect image, that will help you with your new project.
        </p>
        <button class="trail_btn">Start free trail</button>
      </div>
      <img src="https://limewire.com/decrypt?downloadUrl=https%3A%2F%2Flimewire-filesharing-production.b61cdfd8cf17f52ddc020162e738eb5d.r2.cloudflarestorage.com%2Fbuckets%2F83ff1588-4cdf-4f0e-9df9-1d8f8561d0aa%2F0fdb73a3-5ac5-4955-a584-6076d9f8d932%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20251005T212604Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Credential%3Da1868571dfad6d4fe293ee5b945a0ad5%252F20251005%252Fauto%252Fs3%252Faws4_request%26X-Amz-Expires%3D14400%26X-Amz-Signature%3Dc0e6e83be394a1797f08307917303e19e26501900847cc4eafabc281ed484737&mediaType=image%2Fpng&decryptionKeys=eyJhZXNHY21Kd2siOnsiYWVzS2V5VHlwZSI6IlNZTU1FVFJJQ19BRVMtR0NNX0tFWSIsImp3ayI6eyJhbGciOiJBMjU2R0NNIiwiZXh0Ijp0cnVlLCJrIjoiejA5Y3lpVTNfVnJtOTFpMGtxaC1USjgxYjZyaDJUN3pmTGcxOHRZekxHayIsImtleV9vcHMiOlsiZW5jcnlwdCIsImRlY3J5cHQiXSwia3R5Ijoib2N0In19LCJhZXNDdHJKd2siOnsiYWVzS2V5VHlwZSI6IlNZTU1FVFJJQ19BRVMtQ1RSX0tFWSIsImp3ayI6eyJhbGciOiJBMjU2Q1RSIiwiZXh0Ijp0cnVlLCJrIjoiejA5Y3lpVTNfVnJtOTFpMGtxaC1USjgxYjZyaDJUN3pmTGcxOHRZekxHayIsImtleV9vcHMiOlsiZW5jcnlwdCIsImRlY3J5cHQiXSwia3R5Ijoib2N0In19fQ" class="land_image" alt="land_image">
    </section>
    <section class="installed-apps">
      <h3 class="section_title">Installed</h3>
      <div class="content">
        <ul>
          <li>
            <h4 class="app_title">
              <svg viewBox="0 0 52 52" style="border:1px solid #3291b8">
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#061e26" data-original="#393687"></path>
                  <path d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z" fill="#c1dbe6" data-original="#89d3ff"></path>
                </g>
              </svg>
              Photoshop
            </h4>
            <div class="status">
              <span class="green"></span>
              Updated
            </div>
            <div class="actions">
              <button class="inactive">
                Open
              </button>
              <div class="drop-down-container">
                <button class="flat-btn" @click="toggleDropDowns(1)">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
                <DropDown :op="dropDownActive == 1 ? '1' : '0'" />
              </div>
            </div>
          </li>
          <li>
            <h4 class="app_title">
              <svg viewBox="0 0 52 52" style="border:1px solid #b65a0b">
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#261400" data-original="#6d4c13"></path>
                  <path d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z" fill="#e6d2c0" data-original="#ffbd2e"></path>
                </g>
              </svg>
              Illustrator
            </h4>
            <div class="status">
              <span class="blue"></span>
              Update Available
            </div>
            <div class="actions">
              <button class="active" @click="showModal = true">
                Update this app
              </button>
              <div class="drop-down-container">
                <button class="flat-btn" @click="toggleDropDowns(2)">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
                <DropDown :op="dropDownActive == 2 ? '1' : '0'" />
              </div>
            </div>
          </li>
          <li>
            <h4 class="app_title">
              <svg viewBox="0 0 52 52" style="border: 1px solid #C75DEB">
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#3a3375" data-original="#3a3375"></path>
                  <path d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z" fill="#e4d1eb" data-original="#e7adfb"></path>
                </g>
              </svg>
              After Effects
            </h4>
            <div class="status">
              <span class="green"></span>
              Updated
            </div>
            <div class="actions">
              <button class="inactive">
                Open
              </button>
              <div class="drop-down-container">
                <button class="flat-btn" @click="toggleDropDowns(3)">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
                <DropDown :op="dropDownActive == 3 ? '1' : '0'" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="your-apps">
      <h3 class="section_title">Apps in your plan</h3>
      <div class="content">
        <div class="app">
          <h4 class="app_title">
            <svg viewBox="0 0 52 52" style="border:1px solid #3291b8">
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#061e26" data-original="#393687"></path>
                <path d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z" fill="#c1dbe6" data-original="#89d3ff"></path>
              </g>
            </svg>
            Photoshop
          </h4>
          <p class="app_desc">
            Industry Standart motion graphics & visual effects
          </p>
          <div class="actions">
            <button class="active" @click="showModal = true">
              Update
            </button>
            <div class="drop-down-container">
              <button class="flat-btn" @click="toggleDropDowns(4)">
                <i class="fa-solid fa-ellipsis"></i>
              </button>
              <DropDown :op="dropDownActive == 4? '1' : '0'" />
            </div>
          </div>
        </div>
        <div class="app">
          <h4 class="app_title">
            <svg viewBox="0 0 52 52" style="border:1px solid #b65a0b">
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#261400" data-original="#6d4c13"></path>
                <path d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z" fill="#e6d2c0" data-original="#ffbd2e"></path>
              </g>
            </svg>
            Illustrator
          </h4>
          <p class="app_desc">
            Industry Standart motion graphics & visual effects
          </p>
          <div class="actions">
            <button class="active" @click="showModal = true">
              Update
            </button>
            <div class="drop-down-container">
              <button class="flat-btn" @click="toggleDropDowns(5)">
                <i class="fa-solid fa-ellipsis"></i>
              </button>
              <DropDown :op="dropDownActive == 5 ? '1' : '0'" />
            </div>
          </div>
        </div>
        <div class="app">
          <h4 class="app_title">
            <svg viewBox="0 0 52 52" style="border: 1px solid #C75DEB">
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#3a3375" data-original="#3a3375"></path>
                <path d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z" fill="#e4d1eb" data-original="#e7adfb"></path>
              </g>
            </svg>
            After Effects
          </h4>
          <p class="app_desc">
            Industry Standart motion graphics & visual effects
          </p>
          <div class="actions">
            <button class="active" @click="showModal = true">
              Update
            </button>
            <div class="drop-down-container">
              <button class="flat-btn" @click="toggleDropDowns(6)">
                <i class="fa-solid fa-ellipsis"></i>
              </button>
              <DropDown :op="dropDownActive == 6 ? '1' : '0'" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LowerHeader from "../components/LowerHeader.vue";
import DropDown from "../components/DropDown.vue";
import Modal from "../components/Modal.vue";

export default {
  name: 'AllApps',
  data() {
    return {
      dropDownActive: null,
      showModal: false,
    };
  },
  components: {
    LowerHeader,
    DropDown,
    Modal
  },
  methods: {
    toggleDropDowns(n) {
      if (!this.dropDownActive) {
        this.dropDownActive = n;
      } else if (this.dropDownActive == n) {
        this.dropDownActive = null;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.all-apps {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  .land {
    padding: 20px 40px;
    background-image: url(https://www.transparenttextures.com/patterns/cubes.png), linear-gradient(to right top, #cf4af3, #e73bd7, #f631bc, #fd31a2, #ff3a8b, #ff4b78, #ff5e68, #ff705c, #ff8c51, #ffaa49, #ffc848, #ffe652);
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content {
      max-width: 350px;
      .land_title {
        font-weight: 500;
        font-size: 17px;
        display: flex;
        align-items: center;
        margin: 0;
        svg {
          width: 28px;
          margin-right: 14px;
          align-items: center;
        }
      }
      .land_desc {
        font-weight: 400;
        font-size: 14px;
        margin-top: 16px;
        line-height: 1.7em;
        color: #ebecec;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .trail_btn {
        background-color: #3a6df0;
        border: none;
        padding: 8px 26px;
        color: #fff;
        border-radius: 20px;
        margin-top: 16px;
        cursor: pointer;
        transition: 0.3s;
        white-space: nowrap;
        &:hover {
          background-color: #1e59f1;
        }
      }
    }
    .land_image {
      width: 186px;
      margin-top: -25px;
    }
  }
  .installed-apps {
    .content {
      width: 100%;
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        border-radius: 20px;
        border: 1px solid var(--bg-color);
        background-color: rgba(146, 151, 179, 0.13);
        li {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          padding: 15px;
          cursor: pointer;
          transition: 0.3s;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          &:hover {
            background-color: var(--bg-color);
          }
          &:first-child {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-top: none;
            border-bottom: none;
          }
          &:last-child {
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            border-top: none;
            border-bottom: none;
          }
          .app_title {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 14px;
            font-weight: 500;
            svg {
              width: 28px;
              border-radius: 6px;
              margin-right: 10px;
            }
          }
          .status {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-left: 50px;
            span {
              margin-right: 10px;
              padding: 3px;
              border-radius: 50%;
              &.green {
                background-color: var(--green-color);
              }
              &.blue {
                background-color: #3a6df0;
              }
            }
          }
          .actions {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .inactive {
              border: 1px solid var(--inactive-color);
              border-radius: 20px;
              background-color: transparent;
              padding: 8px 26px;
              color: var(--inactive-color);    
              margin-right: 10px;
            }
            .active {
              background-color: #3a6df0;
              border: none;
              padding: 8px 26px;
              color: #fff;
              border-radius: 20px;
              cursor: pointer;
              transition: 0.3s;
              white-space: nowrap;
              margin-right: 10px;
              &:hover {
                background-color: #1e59f1;
              }
            }
            .drop-down-container {
              position: relative;
              .flat-btn {
                font-size: 20px;
                color: var(--inactive-color);
              }
              ul {
                background-color: #21242d;
              }
            }
          }
        }
      }
    }
  }
  .your-apps {
    .content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      .app {
        padding: 20px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        transition: 0.3s;
        background-color: rgba(146, 151, 179, 0.13);
        border: 1px solid var(--bg-color);
        height: fit-content;
        cursor: pointer;
        z-index: 82;
        &:hover {
          background-color: var(--bg-color);
        }
        .app_title {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 17px;
          font-weight: 500;
          svg {
            border-radius: 6px;
            width: 28px;
            margin-right: 15px;
          }
        }
        .app_desc {
          font-weight: 400;
          font-size: 14px;
          margin-top: 20px;
          line-height: 1.7em;
          color: #ebecec;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .actions {
          border-top: 1px solid var(--border-color);
          margin-top: 20px;
          padding-top: 20px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .active {
            background-color: #3a6df0;
            border: none;
            padding: 8px 26px;
            color: #fff;
            border-radius: 20px;
            cursor: pointer;
            transition: 0.3s;
            white-space: nowrap;
            margin-right: 10px;
            &:hover {
              background-color: #1e59f1;
            }
          }
          .drop-down-container {
            position: relative;
            .flat-btn {
              font-size: 20px;
              color: var(--inactive-color);
            }
            ul {
              background-color: #21242d;
              top: -120px;
              right: 0px;
              z-index: 104;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 570px) {
  .all-apps .land .land_image {
    width: 110px;
  }
}

@media (max-width: 1017px) {
  .all-apps .installed-apps .content ul li{ 
    grid-template-columns: repeat(2, 1fr);
    .status {
      display: none;
    }
  }
}

@media (max-width: 1200px) {
  .all-apps .your-apps .content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .all-apps .your-apps .content {
    grid-template-columns: 1fr;
  }
}
</style>
