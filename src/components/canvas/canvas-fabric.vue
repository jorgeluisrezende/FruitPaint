<template>
    <canvas ref="canvas" id="canvas"></canvas>
</template>
<script>

export default {
  name: 'canvas-fabric',
  mounted() {
    window.vm = this;
    const fabric = window.fabric;

    const canvas = new fabric.Canvas('canvas', {
      backgroundColor: '#fff'
    });
    canvas.setHeight(500);
    canvas.setWidth(800); 
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });
    canvas.add(rect);
  },
};
</script>
<style>
</style>
