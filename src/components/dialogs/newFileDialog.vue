<template>
  <vodal class="unselectable" :show="show" animation="door" @hide="show = false" :mask="true"
         :closeOnEsc="true" :closeButton="false" :closeOnClickMask="false" :height="190">

    <div class="dialog-header">New File</div>

    <div class="content">
      <div class="sets">
          <label for="name">Name: <input type="text" name="name"></label>
          <div class="dimentions">
            <div class="row">
              <label for="width">Width: <input @input="calculateSize()" placeholder="Pixel Size" v-model="width" type="number" name="width">
              </label>
            </div>
            <div class="row">
              <label for="height">Height: <input @input="calculateSize()" placeholder="Pixel Size" v-model="height" type="number" name="height">
              </label>
            </div>
            <div class="presets">
              <div class="row">
                 <label for="presets">Presets: <select></select></label>
              </div>
            </div>
          </div>
      </div>
      <div class="btns">
        <button @click="newCanvas()" class="confirm-btn">Ok</button>
        <button @click="closeModal()" class="cancel-btn">Cancel</button>
      </div>
      <div class="info">
        <span>Estimated Image Size:</span>
        <span>{{fileSize}}</span>
      </div>
    </div>

  </vodal>
</template>
<script>
import CanvasFabric from '../canvas/canvas-fabric';

const ipcRenderer = window.require('electron').ipcRenderer;

ipcRenderer.on('newFile', () => {
  window.vm.$data.show = true;
});

export default {
  name: 'new-file-dialog',
  components: {
    CanvasFabric,
  },
  data() {
    return {
      show: false,
      width: null,
      height: null,
      fileSize: '',
    };
  },
  mounted() {
    window.vm = this;
  },
  methods: {
    calculateSize: function calculateSize() {
      window.vm.$data.fileSize = `${(window.vm.$data.width * window.vm.$data.height * 4) * 0.001}K`;
    },
    closeModal: function closeModal() {
      window.vm.$data.show = false;
    },
    newCanvas: function newCanvas() {

    },
  },
};
</script>
<style>
  .vodal-dialog{
    padding: 0px;
  }
  .dialog-header{
    text-align: center;
    background: lightgray;
    color: #12202e;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .content{
    font-size: 14px;
    text-align: right;
  }
  .sets{
    display: inline-block;
    width: 65%;
    height: 75%;
    left: 0;
    position: absolute;
    padding: 15px;
    color: #12202e;
  }
  .sets input{
    padding: 2px;
    border-radius: 2px;
    border: 1px solid #12202e;
  }
  .sets .dimentions{
    border-radius: 3px;
    width: 90%;
    height: 50%;
    display: inline-block;
    padding: 10px;
    padding-right: 5px;
  }
  .row{
    width: 100%;
    height: 25px;
    line-height: 25px;
    position: relative;
  }
  .dimentions input{
    width: 150px;
  }
  .dimentions select{
    width: 156px;
    padding: 2px;
  }
  .btns{
    display: inline-block;
    right: 0;
    position: absolute;
    padding: 10px;
  }
  .confirm-btn,.cancel-btn{
    width: 70px;
    border: none;
    border-radius: 4px;
    padding: 4px 15px;
    font-size: 14px;
    transition: background .2s;
    background: #12202e;
    color: #fff;
    cursor: pointer;
    display: block;
    margin: 5px;
  }
  .confirm-btn:hover,.cancel-btn:hover{
    background: lightgray;
    color: #12202e;
  }
  .info{
    position: absolute;
    bottom: 20%;
    right: 5%;
    text-align: center;
    width: 20%;
  }
  .info span{
    display: block;
  }
</style>
