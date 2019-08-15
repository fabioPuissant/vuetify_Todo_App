<template>
  <nav>
    <!-- SNACKBAR -->
    <v-snackbar :timeout="4000" v-model="snackbar" color="success" top>
      <span>Awesome you added a new project</span>
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <!-- /SNACKBAR -->
    <!-- TOOLBAR -->
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer= !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">TODO</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- DROPDOWN MENU -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text color="grey ligthen-2">
            <v-icon>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- /DROPDOWN MENU -->
      <!-- LOGOUT BUTTON -->
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      <!-- /LOGOUT BUTTON -->
    </v-app-bar>
    <!-- /TOOLBAR -->
    <!-- SIDE MENU -->
    <v-navigation-drawer v-model="drawer" class="success" app>
      <v-layout column align-center>
        <v-flex mt-5>
          <v-avatar size="100">
            <img src="/avatar-6.JPG" />
          </v-avatar>
          <p class="white--text text-capitalize subheading mt-1">The net ninja</p>
        </v-flex>
        <v-flex>
          <pop-up @projectAdded="snackbar = true" class="mt-3 mb-3" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="(link, i) in links" :key="i" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- /SIDE MENU -->
  </nav>
</template>

<script>
import PopUp from "../components/PopUp.vue";
export default {
  components: {
    PopUp
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ],
      snackbar: false
    };
  }
};
</script>

<style scoped>
</style>