<template>
  <div>
    <div v-if="!userValid && !process">
      <div class="w3-panel w3-pale-yellow w3-border w3-border-yellow">
        <p>Licence</p>
      </div>     
    </div>   
  </div>  
</template>

<script>
  import Swal from 'sweetalert2'
  import Pagination from '@/components/Pagination'
  import { getPagedSearchBasic } from '@/api/search'
  import clip from '@/utils/clipboard'
  import { getInfo } from '@/api/user'
  import { getEmail, getIdUser } from '@/utils/auth'

  export default {
    name: "search",
    components: {
      Pagination
    },
    data() {
      return {
        user: {},
        userValid: false,        
        search: '',
        showSearch: false,
        searchGeneral: [],
        searchFilter: [],
        searchSelect: []
      }
    },
    created() {

    },    
    methods: {    
   
    },
  }
</script>

<style>
  .emptyGif {
    display: block;
    width: 15%;
    margin: 0 auto;
  }
</style>

