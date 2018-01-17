<template>
    <canvas ref="canvas" id="canvas"></canvas>
</template>
<script>

export default {
  name: 'canvas-fabric',
  data() {
    return {
      width: 0,
      height: 0,
    };
  },
  mounted() {
    window.vm = this;
    if (window.vm.$data.width <= 0 && !window.vm.$data.width <= 0) {
      return;
    }
    const fabric = window.fabric;

    const canvas = new fabric.Canvas('canvas', {
      backgroundColor: '#fff',
    });
    canvas.setHeight(window.vm.$data.height);
    canvas.setWidth(window.vm.$data.width);
  },
};
</script>
<style>
.upper-canvas{
   left: 1em !important;
}
</style>
