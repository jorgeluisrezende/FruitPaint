<template>
  <div id="view-port">
      <canvas></canvas>
  </div>
</template>

<script>
 export default {
   name: 'view-port',
 };
</script>

<style>
  #view-port{
    background: #2c3e50;
    display: inline-block;
    width: 75%;
    overflow: auto;
    position: fixed;
    height: 100%;
    left: 5em;
  }
</style>
