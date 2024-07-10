<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span v-if="user.status == 1">Ativo</span>
      <span v-if="user.status == 0">Desativado</span>
      <el-checkbox v-model="user.status" disabled></el-checkbox>   
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'140px'" :width="'140px'" :hoverable="false">
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ user.name }}</div>
        <div class="user-role text-center text-muted">{{ user.roles }}</div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"></div>
        <el-form>    
          <el-form-item label="Email">
            <el-input v-model="user.email"/>
          </el-form-item>                                      
          <el-form-item v-if="alterPassword" label="Senha Atual">
            <el-input v-model="passwordUser" maxlength="20" type="forgot"/>
          </el-form-item>
          <el-form-item v-if="alterPassword" label="Nova Senha">
            <el-input v-model="newPassword" maxlength="20" type="forgot"/>
          </el-form-item>     
          <el-form-item v-if="alterPassword" label="Confirme a Senha">
            <el-input v-model="confirmPassword" maxlength="20" type="forgot"/>
          </el-form-item>

          <p v-if="!alterPassword"><b><a class="forgot" @click="alterPassword = true">Atualizar Senha</a></b></p>
          <p v-if="alterPassword"><b><a class="forgot" @click="CancelDefinitionPassword">Cancelar</a></b></p>                           
          <el-form-item>
            <el-button type="primary" @click="saveUser">Recarregar</el-button>
          </el-form-item>       
        </el-form>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import Swal from 'sweetalert2'
import { saveChangeUser } from '@/api/user'

export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          idUser: 0,
          name: '',
          email: '',
          forgot: '',
          newPassword: '',
          avatar: '',
          status: false,
          administrator: '', 
          role: ''
        }
      }
    }
  },
  data() {
    return {
      alterPassword: false,
      passwordUser: '',
      newPassword: '',
      confirmPassword: ''
    }
  },  
  created() {

  },
  methods: {
    CancelDefinitionPassword() {
      this.alterPassword = false;
    },
    saveUser(){

      if ((this.alterPassword) && (this.passwordUser == '')){
        this.$notify({
          title: 'Verifique o campo',
          message: 'É necessário inserir a senha atual!',
          type: 'warning',
          position: 'bottom-right'
        });         

        return;
      }        

      if ((this.alterPassword) && (this.newPassword == '')){
        this.$notify({
          title: 'Verifique o campo',
          message: 'É necessário inserir a nova senha!',
          type: 'warning',
          position: 'bottom-right'
        });         

        return;
      }   

      if ((this.alterPassword) && (this.confirmPassword == '')){
        this.$notify({
          title: 'Verifique o campo',
          message: 'É necessário inserir a senha de confirmação!',
          type: 'warning',
          position: 'bottom-right'
        });         

        return;
      }      

      if ((this.alterPassword) && (this.confirmPassword != this.newPassword)){
        this.$notify({
          title: 'Verifique o campo',
          message: 'A confirmação da senha está incorreta!',
          type: 'warning',
          position: 'bottom-right'
        });         

        return;
      } 

      if (this.alterPassword){
        this.user.forgot = this.passwordUser;
        this.user.newPassword = this.newPassword;
      }         

      Swal.fire({
        title: 'Deseja salvar o usuário?',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#008080',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {                    
          let status;

          if (this.user.status){
            status = 1;  
          }else{
            status = 0;
          }

          let data = {
            idUser: this.user.idUser,
            name: this.user.name,
            email: this.user.email,
            forgot: this.user.forgot,
            newPassword: this.user.newPassword,
            avatar: this.user.avatar,
            status: status,
            administrator: this.user.administrator
          };

          saveChangeUser(data).then(() => {   
            Swal.fire({
              title: 'Alterações salvas com sucesso!',
              type: 'success',
              confirmButtonColor: '#008080',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Ok',
            }).then((result) => {
              if (result.value) {
                window.location.reload();         
              }
            })
          }).catch(err => {
            console.log(err)
          })
        }
      })
    }    
  }    
}
</script>

<style lang="scss" scoped>
  .forgot { 
    text-decoration: underline; 
    font-size:12px
  }

 .box-center {
   margin: 0 auto;
   display: table;
 }

 .text-muted {
   color: #777;
 }

 .user-profile {
   .user-name {
     font-weight: bold;
   }

   .box-center {
     padding-top: 10px;
   }

   .user-role {
     padding-top: 10px;
     font-weight: 400;
     font-size: 14px;
   }

   .box-social {
     padding-top: 30px;

     .el-table {
       border-top: 1px solid #dfe6ec;
     }
   }

   .user-follow {
     padding-top: 20px;
   }
 }

 .user-bio {
   margin-top: 20px;
   color: #606266;

   span {
     padding-left: 4px;
   }

   .user-bio-section {
     font-size: 14px;
     padding: 15px 0;

     .user-bio-section-header {
       border-bottom: 1px solid #dfe6ec;
       padding-bottom: 10px;
       margin-bottom: 10px;
       font-weight: bold;
     }
   }
 }
</style>
