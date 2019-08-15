<template>
  <div class="projects">
    <h1 class="text-capitalize subheading grey--text">Projects view</h1>

    <v-container class="my-5">
      <v-expansion-panels focusable>
        <v-expansion-panel flat v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content class="pd-4 grey--text">
            <div class="font-weight-bold">{{project.due}}</div>
            <div>{{project.content}}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import database from "@/fb.js";

export default {
  data() {
    return {
      projects: []
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(p => {
        return p.person === "Fabio";
      });
    }
  },
  created() {
    database.collection("projects").onSnapshot(response => {
      const changes = response.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
},
}
</script>

<style scoped>
</style>