<template>
    <div class="container">
        <h1>{{!editId ? '新建' : '修改'}}文章页面</h1>
        <div>
            <el-form :model="editData" :rules="rules" ref="editForm" label-width="100px" class="form-edit">
                <el-form-item label="文章标题" prop="title">
                    <el-input v-model="editData.title"></el-input>
                </el-form-item>
                <el-form-item label="文章类型" prop="type">
                    <el-select v-model="secValue" clearable placeholder="请选择文章类型" @blur="onSecBlur($event)" @change="onSecChange($event)">
                        <el-option
                        v-for="item in secOptions"
                        :key="item.secValue"
                        :label="item.label"
                        :value="item.secValue">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="作者" prop="author">
                    <el-input v-model="editData.author"></el-input>
                </el-form-item>
                <el-form-item label="文章内容" prop="content">
                    <div class="quill-editor"
                        :content="editData.content"
                        @change="onEditorChange($event)"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                        v-quill:myQuillEditor="editorOption">
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button style="margin-bottom:20px" type="primary" @click="submitNews('editForm')">立即发表</el-button>
                    <el-button @click="resetForm('editForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import 'quill/dist/quill.core.css'
export default {
    data() {
        return {
            editData: {
                title: '',
                type: '',
                author: 'dez',
                date: '',
                content: ''
            },
            rules: {
                title: [
                    { required: true, message: '请输入文章标题', trigger: 'blur' },
                    { min: 5, message: '长度在不得少于5个字符', trigger: 'blur' }
                ],
                type: [
                    { required: true, message: '请输入文章类型', trigger: 'blur' }
                ],
                author: [
                    { required: false, message: '请输入文章作者', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '请输入文章内容', trigger: 'blur' }
                ]
            },
            editorOption: {
            // some quill options
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                        ['blockquote', 'code-block'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                        [{ 'direction': 'rtl' }],                         // text direction
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                        [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean']
                    ]
                }
            },
            secOptions:[
                {secValue: 0,label: '黄金糕'}, 
                {secValue: 1,label: '双皮奶'}, 
                {secValue: 2,label: '蚵仔煎'}, 
                {secValue: 3,label: '龙须面'}, 
                {secValue: 4,label: '北京烤鸭'}
            ],
            
            secValue: '',
            list: [
                {id:0,title:'dez老帅了',author: 'dez',date:'2018/8/27',content:'哈哈哈哈哈哈，比心'},
                {id:1,title:'老帅了',author: 'dez',date:'2018/8/28',content:'哈哈哈哈哈哈'},
                {id:2,title:'hahah',author: 'dez',date:'2018/8/28',content:'哈哈哈哈哈哈'},
                {id:3,title:'真棒',author: 'dez',date:'2018/8/28',content:'哈哈哈哈哈哈'},
                {id:4,title:'五月天',author: 'cz',date:'2018/8/28',content:'哈哈哈哈哈哈'}
            ]
        }
    },
    computed: {
        editId() {
            return this.$route.params.id
        }
    },
    methods: {
        submitNews(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                console.log("submit!!");
                } else {
                console.log("error submit!!");
                return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        onEditorBlur(editor) {
            console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
            console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
            console.log('editor ready!', editor)
        },
        onEditorChange({ editor, html, text }) {
    //        console.log('editor change!', editor, html, text)
            this.editData.content = html
        },
        onSecBlur(sec) {
            console.log(sec)
            
        },
        onSecChange(sec) {
            console.log(sec)
        }
    },
    mounted() {
        this.$nextTick(()=>{
            this.list.forEach(item => {
                if(item.id === Number(this.editId)) {
                    this.editData.title = item.title
                    this.editData.author = item.author
                    this.editData.date = item.date
                    this.editData.content = item.content
                }
            })
        })
    }
}
</script>
<style lang="scss" scoped>
  .form-edit{
    max-width: 72%;
  }
  .quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>
<style>
  .ql-picker-label:before {
      position: relative;
      top: -9px;
  }
  .ql-picker-label svg {
      position: relative;
      top: -7px;
      right: 0!important; 
  }
</style>



