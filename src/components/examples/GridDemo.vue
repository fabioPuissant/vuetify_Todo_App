<template>
    <div class="dashboard">
        <h1 class="text-capitalize subheading grey--text">Grid demo view</h1>

        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs12 md6 >
                    <v-btn outlined block class="error">1</v-btn>
                </v-flex>
                <v-flex xs4 md2 >
                    <v-btn outlined block class="error">2</v-btn>
                </v-flex>
                <v-flex xs4 md2 >
                    <v-btn outlined block class="error">3</v-btn>
                </v-flex>
                <v-flex xs4 md2 >
                    <v-btn outlined block class="error">4</v-btn>
                </v-flex>
            </v-layout>

            <v-layout row wrap justify-space-around>
                <v-flex xs4 md3>
                    <v-btn outlined block class="primary">1</v-btn>
                </v-flex>
                <v-flex xs4 md3>
                    <v-btn outlined block class="primary">2</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>