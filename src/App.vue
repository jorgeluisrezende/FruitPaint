<template>
  <div id="app">
    <property-bar></property-bar>
    <tool-box></tool-box>
    <view-port></view-port>
    <info-bar></info-bar>
    <new-file-dialog></new-file-dialog>
  </div>
</template>

<script>

import ToolBox from './components/toolBox';
import ViewPort from './components/viewPort';
import PropertyBar from './components/propertyBar';
import InfoBar from './components/infoBar';
import NewFileDialog from './components/dialogs/newFileDialog';

export default {
  name: 'app',
  components: {
    ToolBox,
    ViewPort,
    PropertyBar,
    InfoBar,
    NewFileDialog,
  },
};
</script>

<style>
  @import "vodal/common.css";
  @import "vodal/door.css";
  body{
    margin: 0;
    padding: 0;
    background: #101f28;
  }
  #app{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .unselectable{
    -webkit-user-select:none;
    user-select: none;
  }
  * {
    outline: none; 
    font-family: sans-serif;
  } 
</style>
