<template>
  <!--
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
  -->
  <div>
    <div v-if="!editUser && !showUserAddition && !showUserPermission" class="w3-container">    
      <div class="w3-left">
        <el-row>
          <el-button @click="showUserAddition = true">New</el-button>
        </el-row>
      </div><br><br>  
      <ul class="w3-ul w3-card-4">
        <el-card v-if="userGeneral.length == 0 && !processing" class="box-card">
          <p>No registered users yet! </p>
        </el-card>      

        <li class="w3-bar" v-for="user in userGeneral">
          <img :src="user.avatar" class="w3-bar-item w3-circle w3-hide-small" style="width:95px">      
          <div class="w3-bar-item">
            <span class="w3-large">{{user.name}}</span><br>
            <span v-if="user.administrator == 'S'">admin</span>
          </div>
          <div class="w3-right">
            <el-row>

              <el-popover
                placement="top-start"
                width="200"
                trigger="hover"
                content="Editar usuário.">
                <el-button slot="reference" type="primary" @click="SelectUser(user)" icon="el-icon-edit" circle></el-button>
              </el-popover>  

              <el-button type="danger" @click="deleteUserSelected(user.idUser)" icon="el-icon-delete" circle></el-button>                                               
            </el-row>
          </div>       
        </li>
      </ul><br>    
    </div>

    <el-form v-if="showUserAddition || showUserEdition" :model="user">     
      <el-form-item label="name">
          <el-input style="text-transform: uppercase" v-model="user.name" maxlength="100"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="user.email" type="email"/>
      </el-form-item>
      <div v-if="showUserAddition">
        <el-form-item label="Senha">
            <el-input style="text-transform: uppercase" v-model="user.password" maxlength="20" type="password"></el-input>
        </el-form-item>            
        <el-form-item label="Confirmar Senha">
            <el-input style="text-transform: uppercase" v-model="confirmPassword" maxlength="20" type="password"></el-input>
        </el-form-item>  
      </div>
      <div v-if="showUserEdition">
        <el-form-item v-if="alterPassword" label="Senha Atual">
          <el-input v-model="userPassword" maxlength="20" type="password"/>
        </el-form-item>
        <el-form-item v-if="alterPassword" label="Nova Senha">
          <el-input v-model="newPassword" maxlength="20" type="password"/>
        </el-form-item>     
        <el-form-item v-if="alterPassword" label="Confirmar Senha">
          <el-input v-model="confirmPassword" maxlength="20" type="password"/>
        </el-form-item>   
      </div>       
      <p v-if="!alterPassword"><b><a class="esqueci-password" @click="alterPassword = true">Change password</a></b></p>
      <p v-if="alterPassword"><b><a class="esqueci-password" @click="alterPassword = false">Cancel</a></b></p>         
      <div>
        <el-form-item>
          <el-checkbox v-model="userAdditionAdministrator">Administrator</el-checkbox>
        </el-form-item>             
      </div>
      <el-form-item>
        <el-button type="primary" @click="saveUser" round>Save</el-button>
        <el-button v-if="showUserAddition" type="info" @click="CancelAddingUser" round>Cancel</el-button>
        <el-button v-if="showUserEdition" type="info" @click="CancelUsername" round>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>  
</template>

<script>
import Swal from 'sweetalert2'
import { getUser, deleteUser, saveUser, saveChangeUser} from '@/api/user'
import {getEmail} from '@/utils/auth'

export default {
  name: 'Accounts',
  data () {
    return {
      user: {
        idUser: 0,
        name: '',
        email: '',
        password: '',
        avatar: '',
        status: 0,
        administrator: '',
        alterPassword: 'N'
      },
      alterPassword: false,
      userPassword: '',
      newPassword: '',
      confirmPassword: '',
      editUser: false,
      userGeneral: [],
      userSelect: [],
      processing: false,
      showUserEdition: false,
      showUserAddition: false,
      showUserPermission: false,
      userEditionAdministrator: false,
      userAdditionAdministrator: false
    }
  },
  created() {
    this.process();
  },
  methods: {
    process(){
      this.processing = true;

      getUser().then(response => {
        let users = [];
        let emailUserLogin = getEmail();
        let list_user = Object.assign([], response.data.users);

        for (let i = 0; i < list_user.length; i++) {
          if (emailUserLogin != list_user[i].email){
            users.push(list_user[i]);
          } 
        } 

        this.userGeneral = Object.assign([], users);      
      }).catch(err => {
        console.log(err)
      });

      this.processing = false; 
    },    
    CancelUsername(){

      this.showUserEdition = false;
      this.showUserAddition = false;
      this.editUser = false;
    },    
    CancelAddingUser(){

      this.showUserAddition = false;
    },
    CancelSelectionUser(){
  
      this.editUser = false; 
      this.showUserPermission = false;
    },
    SelectUser(user){

      this.user.idUser = user.idUser
      this.user.name = user.name
      this.user.email = user.email
      this.user.password = user.password
      this.user.avatar = user.avatar
      this.user.status = user.status
      this.user.administrator = user.administrator

      this.showUserEdition = true;
      this.editUser = true;   
    },     
    saveUser(){
      if (this.user.name == ''){
        this.$notify({
          title: 'Check the field',
          message: 'Name must be entered!',
          type: 'warning',
          position: 'bottom-right'
        });                

        return;
      }       

      if (this.user.email == ''){
        this.$notify({
          title: 'Check the field',
          message: 'Email must be entered!',
          type: 'warning',
          position: 'bottom-right'
        });                

        return;
      }              

      if (this.alterPassword || !this.editUser){
        if (this.user.password == ''){
          this.$notify({
            title: 'Check the field',
            message: 'Password must be entered!',
            type: 'warning',
            position: 'bottom-right'
          });             

          return;
        }   

        if (this.user.password.lenght < 6){
          this.$notify({
            title: 'Check the field',
            message: 'A password must contain at least 6 characters!',
            type: 'warning',
            position: 'bottom-right'
          });             

          return;
        }        

        if (this.confirmPassword.lenght < 6){
          this.$notify({
            title: 'Check the field',
            message: 'The confirmation password must contain at least 6 characters!',
            type: 'warning',
            position: 'bottom-right'
          });             

          return;
        }          

        if (this.confirmPassword == ''){
          this.$notify({
            title: 'Check the field',
            message: 'User password confirmation must be entered!',
            type: 'warning',
            position: 'bottom-right'
          });             

          return;
        }        

        if ((this.user.password != this.confirmPassword)){
          this.$notify({
            title: 'Check the field',
            message: 'Password confirmation is incorrect!',
            type: 'warning',
            position: 'bottom-right'
          });         

          return;
        }   
      }

      if (this.editUser && this.alterPassword)
        this.user.alterPassword = 'S';
      else
        this.user.alterPassword = 'N';
      
      Swal.fire({
        title: 'Do you want to save?',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#008080',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {                    
          if (this.editUser){
            if (this.userEditionAdministrator)
              this.user.administrator = 'S'
            else 
              this.user.administrator = 'N'  

            saveChangeUser(this.user).then(() => {   
              Swal.fire({
                title: 'User changed successfully!',
                type: 'success',
                confirmButtonColor: '#008080',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok',
              }).then((result) => {
                if (result.value) {
                  this.CancelUsername();    
                  this.process();   
                }
              })
            }).catch(err => {
              this.$notify.error({
                title: 'Request problem',
                message: 'It was not possible to change the User!',
                position: 'bottom-right'
              });
            })            
          }
          else{
            if (this.userAdditionAdministrator)
              this.user.administrator = 'S'
            else 
              this.user.administrator = 'N'  

            saveUser(this.user).then(response => {
              Swal.fire({
                title: 'User successfully inserted!',
                type: 'success',
                confirmButtonColor: '#008080',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok',
              }).then((result) => {
                if (result.value) {
                  this.user = {
                    idUser: 0,
                    name: '',
                    email: '',
                    password: '',
                    avatar: '',
                    status: 0,
                    administrator: ''
                  };       
                  this.confirmPassword = '';
                }
                this.CancelAddingUser();
                this.process(); 
              })
            }).catch(err => {
              this.$notify.error({
                title: 'Request problem',
                message: 'Could not save User!',
                position: 'bottom-right'
              });
            })
          }
        }
      })
    },
    deleteUserSelected(user_id){
      if (user_id == undefined)
        return;

      Swal.fire({
        title: 'Do you want to delete the user',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#008080',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {
          deleteUser(user_id).then(response => {   
            Swal.fire({
              title: 'Successfully deleted!',
              type: 'success',
              confirmButtonColor: '#008080',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Ok',
            }).then((result) => {
              if (result.value) {
                this.CancelUsername();    
                this.process();          
              }
            })
          }).catch(err => {
            this.$notify.error({
              title: 'Error',
              message: 'There was an error deleting the user!',
            });
          })  
        }
      });
    } 
  }
}
</script>

<style lang="scss" scoped>
  .esqueci-password { 
    text-decoration: underline; 
    font-size:12px
  }
</style>  