<template>
  <div>
      <!--
        Layout das colunas de base
        
        xs	< 768px Celulares
        sm	≥ 768px Tablet	
        md	≥ 992px Tablet e Notebook de 13 polegadas
        lg	≥ 1200px PC
        xl	≥ 1920px PC
      -->
      <div align="right" class="botao-voltar">
        <el-button @click="$emit('back')" type="danger" round>Cancelar</el-button>
      </div>
    
      <div class="app-container"><el-card>
        <el-form label-width="10px">
          
          <el-steps :active="active" finish-status="success">
            <el-step title="Categoria"></el-step>
            <el-step title="Cidade"></el-step>
            <el-step title="Bairro"></el-step>
            <el-step title="Revisão"></el-step>
          </el-steps></br></br>

          <!-- Inicio Categoria -->
          <el-form-item v-show="active == 0">
            <el-select 
              v-model="category"
              filterable
              remote
              reserve-keyword
              placeholder="Insira uma palavra-chave"
              :remote-method="remoteMethodCategory"
              :loading="loading">
              <el-option
                v-for="item in optionsCategory"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button @click="addCategorySelect">Adicionar</el-button>
            <el-empty v-if="categorySelect.length == 0" :image-size="100"></el-empty>
            <el-table     
              v-if="categorySelect.length > 0"
              :data="categorySelect"
              style="width: 100%">
              <el-table-column
                width="380" label="Categoria">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.label }}</span>
                </template>
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="removeCategorySelect">Remover</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>          
          <!-- Fim Categoria -->

          <!-- Inicio Cidade -->
          <el-form-item v-show="active == 1">
            <el-select
              v-model="city"
              filterable
              remote
              reserve-keyword
              placeholder="Insira uma palavra-chave"
              :remote-method="remoteMethodCity"
              :loading="loading">
              <el-option
                v-for="item in optionsCity"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button @click="addCitySelect">Adicionar</el-button> 
            <el-empty v-if="citySelect.length == 0" :image-size="100"></el-empty>
            <el-table
              v-if="citySelect.length > 0"
              :data="citySelect"
              style="width: 100%">
              <el-table-column
                width="380" label="Cidade">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.label }}</span>
                </template>
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="removeCitySelect">Remover</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>     
          <!-- Fim Cidade -->

          <!-- Inicio Bairro -->
          <el-form-item v-show="active == 2">
            <el-select
              v-model="district"
              filterable
              remote
              reserve-keyword
              placeholder="Insira uma palavra-chave"
              :remote-method="remoteMethodDistrict"
              :loading="loading">
              <el-option
                v-for="item in optionsDistrict"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button @click="addDistrictSelect">Adicionar</el-button> 
            <el-empty v-if="districtSelect.length == 0" :image-size="100"></el-empty>
            <el-table
              v-if="districtSelect.length > 0"
              :data="districtSelect"
              style="width: 100%">
              <el-table-column
                width="380" label="Bairro">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.label }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="tag"
                label="Cidade"
                width="300"
                filter-placement="bottom-end">
                <template slot-scope="scope">
                  <el-tag>{{citySelect[0].label}}</el-tag>
                </template>
              </el-table-column>              
              <el-table-column>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="removeCitySelect">Remover</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>     
          <!-- Fim Bairro -->        

          <!-- Inicio Revisão -->
          <el-form-item v-show="active == 3">
            <el-row :gutter="12">
              <el-col :span="16">
                <el-card shadow="never">
                  <div class="block">
                    <el-timeline>
                      <el-timeline-item timestamp="Categoria" placement="top">
                        <el-card>
                          <h4 v-if="categorySelect.length > 0">{{ categorySelect[0].label }}</h4>
                        </el-card>
                      </el-timeline-item>
                      <el-timeline-item timestamp="Cidade" placement="top">
                        <el-card>
                          <h4 v-if="citySelect.length > 0">{{ citySelect[0].label }}</h4>
                        </el-card>
                      </el-timeline-item>
                      <el-timeline-item timestamp="Bairro" placement="top">
                        <el-card>
                          <h4 v-if="districtSelect.length > 0">{{ districtSelect[0].label }}</h4>
                        </el-card>
                      </el-timeline-item>
                    </el-timeline>
                  </div>

                  <div class="w3-container w3-center">
                    <el-button type="success" @click="executeSearch" round>Executar Pesquisa</el-button>
                  </div>

                </el-card>
              </el-col>
              <el-col :span="8">
                <div>
                  <el-statistic :value="searchParameter.quantityCredit" title="Meus Créditos">
                    <template slot="suffix">
                      <span class="like">
                        <i class="el-icon-s-flag" style="color: blue"></i>
                      </span>
                    </template>
                  </el-statistic>
                </div>               
              </el-col>
            </el-row>
          </el-form-item>     
          <!-- Fim Revisão -->              

          <el-form-item >
            <el-button-group>
              <el-button round :disabled="active == 0" icon="el-icon-arrow-left" @click="lastPage">Voltar</el-button>
              <el-button round :disabled="active == 3" type="primary" @click="nextPage">Avançar <i class="el-icon-arrow-right"></i></el-button>
            </el-button-group>          
          </el-form-item>
        </el-form></el-card>
      </div>
    </div>  
  </template>
  
  <script>
    import Swal from 'sweetalert2'
    import { getIdUser } from '@/utils/auth'
    import clip from '@/utils/clipboard'
    import { saveExecuteSearch } from '@/api/search'
    import searchDataCity from '@/utils/searchDataCity'
    import searchDataCategory from '@/utils/searchDataCategory'
  
    export default {
      name: "editSearch",
      props: {
        searchParameter: []
      },
      data() {
        return {        
          active: 0,
          loading: false,
          optionsCategory: [],
          category: [],
          listCategory: [],
          categorySelect: [],

          optionsCity: [],
          city: [],
          listCity: [],
          citySelect: [],
            
          optionsDistrict: [],
          district: [],
          listDistrict: [],
          districtSelect: [],
          listDistrictGeneral: [],

          cadastroSearch: {
            idCadastroSearch: 0,
            idUser: 0,
            idCategory: 0,
            quantityResult: 0,
            idCity: 0,
            idDistrict: 0,
            searchText: "",
            searchLocal: "",
            searchLocation: "",
            dateRegister: ""
          }
        }
      },   
      mounted() {
        for (let i = 0; i < searchDataCity.city.length; i++) {
          this.listCity.push({value: searchDataCity.city[i].id_municipio, label: searchDataCity.city[i].municipio + ' - ' + searchDataCity.city[i].uf}); 
        }

        for (let i = 0; i < searchDataCategory.category.length; i++) {
            this.listCategory.push({value: i, label: searchDataCategory.category[i].name}); 
        }
      },   
      methods: {    
        handleDelete(index, row) {
            console.log(index, row);
        },        
        nextPage() {
          if (this.categorySelect.length == 0 && this.active == 0){
            this.$notify({
              title: 'Verifique o campo',
              message: 'Selecione a Categoria!',
              type: 'warning',
              position: 'bottom-right'
            });                
            return;
          }

          if (this.citySelect.length == 0 && this.active == 1){
            this.$notify({
              title: 'Verifique o campo',
              message: 'Selecione a Cidade!',
              type: 'warning',
              position: 'bottom-right'
            });                
            return;
          }          

          if (this.districtSelect.length == 0 && this.active == 2){
            this.$notify({
              title: 'Verifique o campo',
              message: 'Selecione o Bairro!',
              type: 'warning',
              position: 'bottom-right'
            });                
            return;
          }                    

          if (this.active++ > 2) return;
        },
        lastPage() {
          this.active--;
        },
        removeCitySelect(){
          this.citySelect = [];
        },
        addCitySelect(){
          if (this.city == ""){
            this.$notify({
              title: 'Verifique o campo',
              message: 'Selecione a Cidade!',
              type: 'warning',
              position: 'bottom-right'
            });                
            return;
          }

          if (this.citySelect.length > 0){
            this.citySelect = [];
          }

          for (let i = 0; i < this.listCity.length; i++) {
            if (this.listCity[i].value == this.city){
              this.citySelect.push(this.listCity[i]); 
              this.optionsCity = [];
              this.city = [];
              this.listDistrict = [];
              this.districtSelect = [];
       
              for (let y = 0; y < searchDataCity.city.length; y++) {
                if (searchDataCity.city[y].id_municipio == this.citySelect[0].value){
                  for (let x = 0; x < searchDataCity.city[y].bairro.length; x++) {
                    this.listDistrict.push({value: searchDataCity.city[y].bairro[x].id_bairro, label: searchDataCity.city[y].bairro[x].bairro});
                  }  
                } 
              }                
              
              break;
            }
          }          
        },        
        remoteMethodCity(query) {
          this.optionsCity = [];
  
          if (query !== '') {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.optionsCity = this.listCity.filter(item => {
                return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
              });
            }, 200);
          } else {
            this.optionsCity = [];
          }
        },        
        removeCategorySelect(){
          this.categorySelect = [];
        },
        addCategorySelect(){
          if (this.category == ""){
            this.$notify({
              title: 'Verifique o campo',
              message: 'Selecione a Categoria!',
              type: 'warning',
              position: 'bottom-right'
            });                
            return;
          }

          if (this.categorySelect.length > 0){
            this.categorySelect = [];
          }

          for (let i = 0; i < this.listCategory.length; i++) {
            if (this.listCategory[i].value == this.category){
              this.categorySelect.push(this.listCategory[i]); 
              this.optionsCategory = [];
              this.category = [];
              return;
            }
          }          

        },
        remoteMethodCategory(query) {
          this.optionsCategory = [];
  
          if (query !== '') {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.optionsCategory = this.listCategory.filter(item => {
                return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
              });
            }, 200);
          } else {
            this.optionsCategory = [];
          }
        },
        removeDistrictSelect(){
          this.districtSelect = [];
        },
        addDistrictSelect(){
          if (this.district == ""){
            this.$notify({
              title: 'Verifique o campo',
              message: 'Selecione o Bairro!',
              type: 'warning',
              position: 'bottom-right'
            });                
            return;
          }

          if (this.districtSelect.length > 0){
            this.districtSelect = [];
          }

          for (let i = 0; i < this.listDistrict.length; i++) {
            if (this.listDistrict[i].value == this.district){
              this.districtSelect.push(this.listDistrict[i]); 
              this.optionsDistrict = [];
              this.district = [];
              return;
            }
          }          

        },        
        remoteMethodDistrict(query) {
          this.optionsDistrict = [];
  
          if (query !== '') {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.optionsDistrict = this.listDistrict.filter(item => {
                return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
              });
            }, 200);
          } else {
            this.optionsDistrict = [];
          }
        },
        extractLocation(){
          let localization = "";

          for (let y = 0; y < searchDataCity.city.length; y++) {
            if (searchDataCity.city[y].id_municipio == this.citySelect[0].value){
              if (this.districtSelect.length > 0){
                for (let x = 0; x < searchDataCity.city[y].bairro.length; x++) {
                  if (this.districtSelect[0].value == searchDataCity.city[y].bairro[x].id_bairro)
                    localization = "@" + searchDataCity.city[y].bairro[x].latitude + "," + searchDataCity.city[y].bairro[x].longitude + ",11z";
                }  
              }else{
                localization = "@" + searchDataCity.city[y].latitude + "," + searchDataCity.city[y].longitude + ",11z";
              }
            } 
          }
          
          return localization;
        },
        executeSearch() {
 
          Swal.fire({
          title: 'Executar a Pesquisa',
          type: 'question',
          showCancelButton: true,
          confirmButtonColor: '#008080',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim',
          cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {

              this.cadastroSearch.idUser = getIdUser();
              this.cadastroSearch.idCategory = this.categorySelect[0].value;
              this.cadastroSearch.idCity = this.citySelect[0].value;
              this.cadastroSearch.idDistrict = this.districtSelect[0].value;
              this.cadastroSearch.searchLocal = this.categorySelect[0].label;
              this.cadastroSearch.searchLocation = this.extractLocation();   
              
              saveExecuteSearch(
                this.cadastroSearch.idUser, 
                this.cadastroSearch.idCategory,
                this.cadastroSearch.idCity,
                this.cadastroSearch.idDistrict,
                this.cadastroSearch.searchLocal, 
                this.cadastroSearch.searchLocation
              ).then(response => {
                Swal.fire({
                  title: 'Gerado com sucesso!',
                  type: 'success',
                  confirmButtonColor: '#008080',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Ok',
                }).then((result) => {
                  window.location.reload();  
                })
              }).catch(err => {

              })              

            }
          })
        }                  
      }
    }
  </script>
  
  <style>
  
  </style>
  
  