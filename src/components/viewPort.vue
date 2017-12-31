<template>
  <div id="view-port">
    <multipane class="vertical-panes" layout="vertical">
      <div class="pane" :style="{ width: '70%', maxWidth: '70%' }">
        
      </div>
      <multipane-resizer></multipane-resizer>
      <div class="pane" :style="{ flexGrow: 1 }">
        
      </div>
    </multipane>
  </div>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';

// const { ipcRenderer } = window.require('electron');

export default {
  name: 'view-port',
  components: {
    Multipane,
    MultipaneResizer,
  },
};

</script>

<style lang="scss">
  #view-port{
    display: inline-block;
    width: 100%;
    overflow: auto;
    position: fixed;
    height: 100%;
    left: 4em;
  }
.vertical-panes {
  width: 100%;
  height: 100%;
  // border: 1px solid #ccc;
}
.vertical-panes > .pane {
  text-align: left;
  padding: 15px;
  overflow: hidden;
  background: #172a3a;
}
.vertical-panes > .multipane-resizer {
  margin: 0; left: 0;
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 2px;
    height: 50px;
    position: absolute;
    top: 45%;
    left: 30%;
    margin-top: -20px;
    border-left: 1px solid #294F66;
    border-right: 1px solid #294F66;
  }
}
</style>
