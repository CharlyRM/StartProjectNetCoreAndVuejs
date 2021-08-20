<template>
  <!--
    Developer Linkedin Inglish : https://br.linkedin.com/in/charly-milhomem-76156637/en
    Developer Linkedin Português : https://br.linkedin.com/in/charly-milhomem-76156637
  -->
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="9" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="15" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Manage Accounts" name="accounts">
                <accounts />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Accounts from './components/Accounts'
import { getInfo } from '@/api/user'
import { getEmail } from '@/utils/auth'

export default {
  name: 'Profile',
  components: { Accounts },
  data() {
    return {
      user: {},
      activeTab: 'accounts',
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
          administrator: response.data.user.administrator, 
          roles: this.roles.join(' | ')
        }

      }).catch(err => {
        console.log(err)
      })    
    }
  }
}
</script>
