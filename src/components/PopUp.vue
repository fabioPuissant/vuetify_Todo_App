<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn color="primary lighten-2" v-on="on">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" class="pd-3">
          <v-text-field prepend-icon="folder" label="Title" v-model="title" :rules="inputRules"></v-text-field>
          <v-textarea prepend-icon="edit" label="Information" v-model="content" :rules="inputRules"></v-textarea>
          <v-menu>
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="formattedDate"
                v-on="on"
                label="Due date"
                prepend-icon="date_range"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn text class="success mx-0 mt-3" :loading="loading" @click="submit">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import database from "@/fb.js";
export default {
  data() {
    return {
      loading: false,
      dialog: false,
      title: "",
      content: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content:
            this.content +
            "FABIO (should be authenticated to see which person is creating this project!!)",
          due: format(this.due, "Do MMM YYYY"),
          person:
            "Fabio",
          status: "ongoing"
        };
        database
          .collection("projects")
          .add(project)
          .then(() => (this.loading = false))
          .then(() => (this.dialog = false))
          .then(()=> this.$emit('projectAdded'));
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>

<style scoped>
</style>