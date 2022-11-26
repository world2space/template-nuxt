<template>
  <div class="info-container">
    <div class="info-component background-color">
      <div class="info-top">
        <h3>{{ $t('home.info.title') }}</h3>
        <hr>
      </div>
      <div class="config-container">
        <span v-for="(config, id) in configs" :key="id + '_config'">
          <b>{{ config.title }}:</b>
          {{ config.value }}
        </span>

        <span>
          <b>{{ $t('home.info.config') }}:</b>
          <pre>{{ $config | pretty }}</pre>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  filters: {
    pretty: function (value) {
      return JSON.stringify(value, null, 2)
    },
  },
  data() {
    return {
      configs: {
        colorMode: {
          title: this.$t('home.info.color'),
          value: this.$colorMode.value,
        },
        languages: {
          title: this.$t('home.info.languages'),
          value: this.$i18n.locales.map((k) => k.code),
        },
      },
    }
  },

  watch: {
    $colorMode: {
      handler: function (val) {
        this.configs.colorMode.value = val.value
      },
      deep: true,
    },
  },
  mounted() {
    console.log(process.env.GOOGLE_TAG_MANAGER_ID)
  },
}
</script>
<style>
h3 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 5px;
  width: fit-content;
}

.info-top{
  width: fit-content;
  margin:  0 auto;
}

.info-top hr{
  width: 3rem;
  margin-bottom: 3rem;
  margin-left: -1.5rem;
}

.info-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-component {
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 40px 30px;
  margin: 30px;
  width: calc(100% - 120px);
}

.config-container {
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
<style scoped>
span {
  display: block;
  font-size: 21px;
}

span:not(:last-child) {
  margin-bottom: 15px;
}
</style>
<style lang="scss">
@import '/static/assets/style/scss/variables';
.info-top hr{
  border-color: #{$sideColor};
}
@each $mainColorName, $mainColor in $mainColors {
  html.#{$mainColorName}-mode span b {
    color: lighten($sideColor, 5%);
  }
}
</style>
