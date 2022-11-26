<template>
  <div>
    <theme-changer />
    <check-offline />
    <Nuxt />
  </div>
</template>
<script>
export default {
  head() {
    return this.$nuxtI18nHead !== null
      ? this.$nuxtI18nHead({ addSeoAttributes: true })
      : {}
  },
}
</script>
<style>
#theme-changer{
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	z-index: 999;
	cursor: pointer;
}
</style>