<template>
<div class="home">
  <h1 class="text-capitalize">breakpoints and visibility examples</h1>
<h4 class="caption">Resize the window for this demo...</h4>
    <v-btn class="hidden-md-and-down">Visible for more then medium sized screens!</v-btn>
    <v-btn class="hidden-md-and-up">Visible for less then medium sized screens!</v-btn>
    <v-btn class="hidden-sm-only">Not Visible for devices with a small screen ONLY (xs = visible!)</v-btn>
</div>
</template>

<script>
export default {
};
</script>