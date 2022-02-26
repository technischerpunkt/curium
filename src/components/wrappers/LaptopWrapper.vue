<template>
  <div class="laptop-wrapper">
    <div class="body">
      <div class="screen">
        <div class="screen-content">
          <slot />
        </div>
      </div>
    </div>
    <div class="base"></div>
  </div>
</template>

<style scoped lang="scss">
// inspired by Brittany Walker (https://codepen.io/trekkiegirl/pen/ZeONRJ)

.laptop-wrapper {
  position: relative;
  width: 100%;
}

.body {
  position: relative;
  margin-left: 5%;
  width: 90%;
  border-radius: 15px;
  border: 3px solid #000;
  background: var(--device-color);
  padding: 4%;

  &:after {
    position: absolute;
    content: '';
    top: 2%;
    left: calc(50% - 0.5rem);
    height: 1rem;
    width: 1rem;
    background: var(--primary-color);
    border-radius: 50%;
  }
}

.screen {
  position: relative;
  width: 100%;
  padding-top: 58.6%;
  background: #ffffff20;
  border: 10px solid #ffffff25;;
  border-radius: 5px;
}

.screen-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.base {
  position: relative;
  top: -1%;
  height: 5.5%;
  width: 100%;
  margin-bottom: 3%;
  border-radius: 0 0 15px 15px;
  border: 3px solid #000;
  background: #161f28;

  &:before {
    position: absolute;
    content: '';
    left: 42.5%;
    height: 40%;
    width: 15%;
    background: var(--primary-color);
    border-radius: 0 0 15px 15px;
  }
}
</style>
