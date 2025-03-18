<template>
  <v-app>
    <v-main>
      <VisualizeInformation/>
    </v-main>
  </v-app>
</template>

<script>

import VisualizeInformation from './components/VisualizeInformation.vue';

export default {
  name: 'App',

  components: {
    VisualizeInformation,
  },

  data: () => ({
    //
  }),
};
</script>
