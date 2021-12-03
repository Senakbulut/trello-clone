<template>
    <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" align="center">
      <v-card class="elevation-4 text-left" >
        <v-card-title class="fancy-title align-center justify-center">Jello</v-card-title><v-card-text>
          <v-form>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              v-model="auth.email"
            ></v-text-field>

            <v-text-field
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="auth.password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="text-center">
          <v-btn
            class="login-button"
            @click="login"
            depressed
            large
            >Login</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-snackbar
        :timeout="4000"
        v-model="snackbar"
        absolute
        bottom
        center
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-col>
  </v-row>

</template>

<script>
    export default {
        layout: 'signin',
        data(){
            return{
            snackbar:false,
            snackbarText: 'No error message',
            auth:{
                email: '',
                password: '',
            }
            }

        },
        methods:{
            login(){
                let that = this
                this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
                .catch(function(error){
                    that.snackbarText = error.message
                    that.snackbar = true
                }).then((user)=>{
                    $nuxt.$router.push('/')
                })
            }
        }
    }
</script>

<style lang="scss">
.theme--light.v-card{
    background-color: #E6EDF6;
}
.theme--light.v-btn.v-btn--has-bg{
    background-color: #9498A1;
}
.v-icon.v-icon::after{
background-color: #809181;
}
.v-text-field > .v-input__control > .v-input__slot:after{
    background-color: #809181;
    border-color: #809181;
}
.v-application .primary--text{
    color: #809181 !important;
    caret-color: #809181 !important;
}
.v-text-field .v-label--active{
    color: #809181 !important;
    caret-color: #809181 !important;
}
</style>