<template>
  <div class="dashboard">
    <h1 class="text-capitalize subheading grey--text">Dashboard view</h1>
    <v-container my-5>
      <v-layout row mb-3>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" small text color="grey" @click="sortBy('title')">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">by project title</span>
            </v-btn>
          </template>
          <span class="caption">Sort projects by title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" small text color="grey" @click="sortBy('person')">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span class="captian">Sort by person name</span>
        </v-tooltip>
      </v-layout>
      <v-card class="pa-1" flat v-for="project in projects" :key="project.id">
        <v-layout row wrap :class="`project ${project.status} pa-3`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div class="text-capitalize">{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div class="text-capitalize">{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2 text-end>
            <div class="right">
              <v-chip :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
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
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
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
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>