<template>
  <div id="app">
    <property-bar></property-bar>
    <tool-box></tool-box>
    <view-port></view-port>
    <info-bar></info-bar>
  </div>
</template>

<script>

import ToolBox from './components/toolBox';
import ViewPort from './components/viewPort';
import PropertyBar from './components/propertyBar';
import InfoBar from './components/infoBar';

export default {
  name: 'app',
  components: {
    ToolBox,
    ViewPort,
    PropertyBar,
    InfoBar,
  },
};
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    background: #233849;
  }
  #app{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
</style>
