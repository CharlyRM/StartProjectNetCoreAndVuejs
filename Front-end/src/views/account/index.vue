<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="9" :xs="24">
          <user-card :user="user" />
        </el-col>

        <div>
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Assinatura" name="signature">
              </el-tab-pane>   

            </el-tabs>
          </el-card>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getInfo } from '@/api/user'
import { getEmail } from '@/utils/auth'

export default {
  name: 'Profile',
  components: { },
  data() {
    return {
      user: {},
      activeTab: 'signature',
      idUser: 0
    }
  },
  computed: {
    ...mapGetters([
      'email',
      'name',
      'avatar',
      'roles',
      'token'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      getInfo(getEmail()).then(response => {   
        let status = false;

        if (response.data.user.status == 1){
          status = true;  
        }else{
          status = false;
        } 

        this.user = {
          idUser: response.data.user.idUser,
          name: this.name,
          email: response.data.user.email,
          password: response.data.user.password,
          newPassword: '',
          avatar: this.avatar,
          status: status,
          dateLicenceExpiration: response.data.user.dateLicenceExpiration.slice(0, 10),
          licenceValid: response.data.user.licenceValid,   
          licenceTrial: response.data.user.licenceTrial,       
          administrator: response.data.user.administrator, 
          codeLastPayment: response.data.user.codeLastPayment,
          paymentConfirmed: response.data.user.paymentConfirmed,
          roles: this.roles.join(' | ')
        }

      }).catch(err => {
        console.log(err)
      })    
    }
  }
}
</script>
