<template>
  <div class="home">
    <language-changer />
    <div class="top">
      <div class="info">
        <h1>World2Space</h1>
        <p>{{ $t('home.description') }}</p>
      </div>
      <app-logo />
    </div>
    <info-component />
  </div>
</template>
<style>
.home {
  padding-bottom: 5rem;
}

pre{
  white-space: break-spaces;
}

.top {
  flex-direction: revert;
  height: 90vh;
}

@media only screen and (max-width: 768px) {
  .top .info {
    margin: 0 30px;
  }
}
</style>
<style lang="scss">
@import '@/static/assets/style/scss/mixins.scss';
@import '@/static/assets/style/scss/colors.scss';
.top {
  @include center-item($mobile: 'column-reverse');
  justify-content: space-evenly;
}

h1 {
  color: $sideColor;
}
</style>
