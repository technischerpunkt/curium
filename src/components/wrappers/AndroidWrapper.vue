<template>
  <div class="mobile-wrapper">
    <div class="mobile-outline-top"></div>
    <div class="mobile-outline-body">
      <div class="mobile-body-inner">
        <slot />
      </div>
    </div>
    <div class="mobile-outline-bottom"></div>
  </div>
</template>

<style scoped lang="scss">
// credits go to https://codepen.io/HerrBertling/pen/zGZypy?editors=1100
// for this one

.mobile-wrapper {
  box-shadow: 2px 2px 20px rgba(#111,0.6);
  border-radius: 16px;
  border: 1px solid var(--device-color);
  overflow: hidden;
  display: inline-block;
  width: 100%;
}

.mobile-outline-top,
.mobile-outline-bottom {
  background-color: var(--device-color);
  height: 54px;
  margin: 0 auto;
  width: 100%;
  position: relative;

  &:before,
  &:after {
    display: block;
    content: '';
    background-color: #666;
    position: absolute;
  }
}

.mobile-outline-top {
  border-radius: 15px 15px 0 0;

  &:before {
    width: 16px;
    height: 16px;
    border-radius: 30px;
    top: 19px;
    left: calc(50% - 30px);
  }
  &:after {
    width: 42px;
    height: 4px;
    border-radius: 30px;
    top: 25px;
    left: calc(50% - 5px);
  }
}

.mobile-outline-bottom {
  border-radius: 0 0 15px 15px;

  &:before {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    bottom: 12px;
    left: calc(50% - 15px);
  }
}

.mobile-outline-body {
  border-left: 10px solid var(--device-color);
  border-right: 10px solid var(--device-color);
  margin: 0 auto;
  width: 100%;
  height: 0;
  position: relative;
  overflow: hidden;
  // pixel 3a aspect ratio
  padding-top: 192%;
}

.mobile-body-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
