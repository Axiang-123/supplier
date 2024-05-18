<template>
    <div class="login-container">
        <div class="loginBox">
            <el-form class="login-form" autocomplete="on" :model="loginForm" :rules="loginRules" ref="ruleFormRef"
                label-position="left">
                <div class="title-container">
                    <div class="logoInfo clearfix">
                        <em class="logo"></em>
                        <span class="logoFontZ">供应商系统</span>
                        <span>用户登录</span>
                    </div>
                </div>
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" type="text" autocomplete="on" :prefix-icon="User"
                        class="hig" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" type="text" autocomplete="on" show-password class="hig"
                        :prefix-icon="Lock" placeholder="Please input password" />
                </el-form-item>
                <el-button type="primary" style="width:100%;margin:20px 0;height: 46px;" :loading="loading"
                    @click="submitForm(ruleFormRef)">登录</el-button>
                    <p style="text-align: center;"> <a href="/404">去注册</a></p>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
const loading = ref(false)
interface RuleForm {
    username: string
    password: string
}
const loginForm = reactive<RuleForm>({
    username: 'root@admin.com',
    password: '123456'
})
const ruleFormRef = ref<FormInstance>()
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid) => {
        loading.value = valid
        if (valid) {
            ElMessage.success('登录成功')
            router.push('/home')
        } else {
            ElMessage.error('请填写必填')
        }
    })
}

const loginRules = reactive<FormRules<RuleForm>>({
    username: [
        {
            required: true,
            message: '请填写用户名',
            trigger: 'change',
        },
    ],
    password: [
        { required: true, message: '请填写密码', trigger: 'change' },
    ],
})

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #333;

.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;

    background: url('../../assets/login/bg.jpg');
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .loginBox {
        height: 100%;
        width: 100%;
        background: url('../../assets/login/logingBg.png') no-repeat 100% 100%;
        position: relative;
    }

    .login-form {
        position: absolute;
        left: 20%;
        top: 50%;
        width: 520px;
        padding: 35px 35px 15px 35px;
        margin: -200px 0 0 0;
        background: #f5f5f5;
    }

    .tips {
        font-size: 14px;
        // color: #fff;
        margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .title-container {
        position: relative;
        height: 50px;

        .title {
            font-size: 26px;
            // font-weight: 400;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }

        .set-language {
            // color: #fff;
            position: absolute;
            top: 5px;
            right: 0px;
        }
    }

    // .show-pwd {
    //     position: absolute;
    //     right: 10px;
    //     top: 7px;
    //     font-size: 16px;
    //     color: $dark_gray;
    //     cursor: pointer;
    //     user-select: none;
    // }

    .thirdparty-button {
        position: absolute;
        right: 35px;
        bottom: 28px;
    }
}

.logoInfo {
    padding-bottom: 15px;
}

.logoInfo span {
    font-size: 22px;
    padding: 0 10px;
    float: left;
}

.logoInfo .logo {
    background: url('../../assets/login/loginLogo.png') no-repeat;
    display: inline-block;
    width: 35px;
    height: 26px;
    float: left;
}

.hig {
    height: 46px;
}
</style>