<template>
  <div>
    <div v-if="!editUser && !showUserAddition && !showUserPermission" class="w3-container"><br>
      <ul class="w3-ul">      
        <el-empty v-if="userGeneral.length == 0 && !processing" description="Nenhuma Conta Adicionado!"></el-empty>

        <li class="w3-bar" v-for="user in userGeneral">    
          <div class="w3-bar-item">
            <span class="w3-large">{{user.name}}</span><br>
            <span>{{user.email}}</span>
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
      <div class="w3-left">
        <el-row>
          <el-button @click="AddNewUser" type="primary">Adicionar</el-button>
        </el-row>
      </div><br><br>  
    </div>

    <el-form v-if="showUserAddition || showUserEdition" :model="user">     
      <el-form-item label="Nome">
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
  
      <div v-if="editUser">
        <el-form-item>
          <el-checkbox v-model="userFirstAcess">Reset Senha</el-checkbox>
        </el-form-item>             
      </div>
      <div v-if="editUser">
        <el-form-item>
          <el-checkbox v-model="blockUser">Bloquear Usuário</el-checkbox>
        </el-form-item>             
      </div>
      <el-form-item>
        <el-button type="primary" @click="saveUser" round>Salvar</el-button>
        <el-button v-if="showUserAddition" type="info" @click="CancelAddingUser" round>Cancelar</el-button>
        <el-button v-if="showUserEdition" type="info" @click="CancelUsername" round>Cancelar</el-button>
      </el-form-item>
    </el-form>
  </div>  
</template>

<script>
import Swal from 'sweetalert2'
import { getUser, deleteUser, saveUser, saveChangeUser, saveUserTemp} from '@/api/user'
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
        alterPassword: 'N',
        firstAccess: 'N'
      },
      confirmPassword: '',
      editUser: false,
      userGeneral: [],
      userSelect: [],
      processing: false,
      showUserEdition: false,
      showUserAddition: false,
      showUserPermission: false,
      userFirstAcess: false,
      blockUser: false
    }
  },
  created() {
    this.process();
  },
  methods: {
    process(){
      this.processing = true;

      getUser().then(response => {
        this.userGeneral = Object.assign([], response.data.users);
      }).catch(err => {
        console.log(err)
      });

      this.processing = false; 
    },    
    ClearObjUser(){
      this.user = {
        idUser: 0,
        name: '',
        email: '',
        password: '',
        avatar: '',
        status: 0,
        administrator: '',
        firstAccess: ''
      }; 
    },
    AddNewUser(){
      this.showUserAddition = true;
      this.ClearObjUser();
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
      this.user.firstAccess = user.firstAccess

      this.showUserEdition = true;
      this.editUser = true;   
    },     
    saveUser(){
      if (this.user.name == ''){
        this.$notify({
          title: 'Verifique o campo',
          message: 'O nome deve ser inserido!',
          type: 'warning',
          position: 'bottom-right'
        });                

        return;
      }       

      if (this.user.email == ''){
        this.$notify({
          title: 'Verifique o campo',
          message: 'O e-mail deve ser inserido!',
          type: 'warning',
          position: 'bottom-right'
        });                

        return;
      }              

      if (this.alterPassword || !this.editUser){
        if (this.user.password == ''){
          this.$notify({
            title: 'Verifique o campo',
            message: 'A senha deve ser inserida!',
            type: 'warning',
            position: 'bottom-right'
          });             

          return;
        }   

        if (this.user.password.lenght < 6){
          this.$notify({
            title: 'Verifique o campo',
            message: 'A senha deve conter pelo menos 6 caracteres!',
            type: 'warning',
            position: 'bottom-right'
          });             

          return;
        }        

        if (this.confirmPassword.lenght < 6){
          this.$notify({
            title: 'Verifique o campo',
            message: 'A senha de confirmação deve conter pelo menos 6 caracteres!',
            type: 'warning',
            position: 'bottom-right'
          });             

          return;
        }          

        if (this.confirmPassword == ''){
          this.$notify({
            title: 'Verifique o campo',
            message: 'A confirmação da senha do usuário deve ser digitada!',
            type: 'warning',
            position: 'bottom-right'
          });             

          return;
        }        

        if ((this.user.password != this.confirmPassword)){
          this.$notify({
            title: 'Verifique o campo',
            message: 'A confirmação da senha está incorreta!',
            type: 'warning',
            position: 'bottom-right'
          });         

          return;
        }   
      }      

      if (this.userFirstAcess || this.user.firstAccess == 'S')
        this.user.firstAccess = 'S';
      else
      this.user.firstAccess = 'N';
      
      Swal.fire({
        title: 'Gostaria de Salvar?',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#008080',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {                    
          if (this.editUser){

            saveChangeUser(this.user).then(() => {   
              Swal.fire({
                title: 'Usuário Alterado com Sucesso!',
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

            })            
          }
          else{

            saveUserTemp(this.user).then(response => {
              Swal.fire({
                title: 'Usuário Inserido com Sucesso!',
                type: 'success',
                confirmButtonColor: '#008080',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok',
              }).then((result) => {
                if (result.value) {
                  this.ClearObjUser();    
                  this.confirmPassword = '';
                }
                this.CancelAddingUser();
                this.process(); 
              })
            }).catch(err => {

            })
          }
        }
      })
    },
    deleteUserSelected(user_id){
      if (user_id == undefined)
        return;

      Swal.fire({
        title: 'Deseja Excluir o Usuário',
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
              title: 'Excluído com sucesso!',
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

  #InputUpper {
    text-transform:uppercase
  }
</style>  