<template>
  <div class="upload-container">
    <el-row :gutter="1">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-upload
          :data="dataObj"
          :multiple="false"
          :show-file-list="false"
          :on-success="handleImageSuccess"
          class="image-uploader"
          drag
          action="https://httpbin.org/post"
        >
          <i class="el-icon-upload" />
          <div class="el-upload__text">
            Carregar Imagem
          </div>
        </el-upload>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="image-preview image-app-preview">
          <div v-show="imageUrl.length>1" class="image-preview-wrapper">
            <img :src="imageUrl">
            <div class="image-preview-action">
              <i class="el-icon-delete" @click="rmImage" />
            </div>
          </div>
        </div>
      </el-col>      
    </el-row>   
  </div>
</template>

<script>
import { getToken } from '@/api/qiniu'

export default {
  name: 'SingleImageUpload3',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tempUrl: '',
      dataObj: { token: '', key: '' }
    }
  },
  computed: {
    imageUrl() {
      return this.value
    }
  },
  methods: {
    rmImage() {
      this.emitInput('')
    },
    emitInput(val) {
      this.$emit('input', val)
    },
    handleImageSuccess(file) {
      this.emitInput(file.files.file)
    },
    beforeUpload() {
      const _self = this
      return new Promise((resolve, reject) => {
        getToken().then(response => {
          const key = response.data.qiniu_key
          const token = response.data.qiniu_token
          _self._data.dataObj.token = token
          _self._data.dataObj.key = key
          this.tempUrl = response.data.qiniu_url
          resolve(true)
        }).catch(err => {
          console.log(err)
          reject(false)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.upload-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .image-uploader {
    width: 35%;
    float: left;
  }
  .image-preview {
    width: 400px;
    height: 400px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
    .image-preview-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .image-preview-action {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      cursor: default;
      text-align: center;
      color: #fff;
      opacity: 0;
      font-size: 20px;
      background-color: rgba(0, 0, 0, .5);
      transition: opacity .3s;
      cursor: pointer;
      text-align: center;
      line-height: 200px;
      .el-icon-delete {
        font-size: 36px;
      }
    }
    &:hover {
      .image-preview-action {
        opacity: 1;
      }
    }
  }
  .image-app-preview {
    width: 420px;
    height: 280px;
    position: relative;
    border: 3px dashed #d9d9d9;
    float: left;
    margin-left: 0px;
    .app-fake-conver {
      height: 44px;
      position: absolute;
      width: 100%; // background: rgba(0, 0, 0, .1);
      text-align: center;
      line-height: 64px;
      color: #fff;
    }
  }
  .emptyGif {
    display: block;
    width: 15%;
    margin: 0 auto;
  }
}
</style>
