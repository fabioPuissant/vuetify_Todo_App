<template>
<div class="home">
  <h1 class="text-capitalize">buttons and icons examples</h1>

    <v-btn class="pink white--text">Click me!</v-btn>
    <br>
    <br>
    <v-btn dark depressed="true" color="primary">Click me!</v-btn>
    <br>
    <br>
    <v-btn text >Click me!</v-btn>
    <br>
    <br>
    <v-btn color="white--text pink" depressed="">
        <v-icon left>
            email
        </v-icon>
        <span> Email me!</span>
    </v-btn>
<br>
<br>
 <v-btn color="white--text pink" small depressed="">
        <v-icon small left>
            email
        </v-icon>
        <span> Email me!</span>
    </v-btn>
<br>
<br>
 <v-btn color="white--text pink" large depressed="">
        <span> Email me!</span>
        <v-icon large right>email</v-icon>
    </v-btn>
<br>
<br>
 <v-btn class="purple" fab small dark >
        <v-icon>favorite</v-icon>
    </v-btn>
</div>
</template>

<script>
export default {
};
</script>