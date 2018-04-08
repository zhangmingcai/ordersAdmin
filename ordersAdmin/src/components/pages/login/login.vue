<template>
    <div class="login-layout">
        <Card class="login-box" shadow>
            <div slot="title">
               <span>优点</span>
               <sapn>登陆</sapn>
            </div>
            <Form>
                <Form-item>
                    <Input type="text" size="large">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Input type="password" size="large">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" long @click="login">登录</Button>
                </Form-item>
                
                <Form-item>
                    <Row>
                        <Col span="12">
                            <Button type="success" long>免费加盟使用优点</Button>
                        </Col>
                        
                        <Col span="12">
                            <Button type="info" long>找回密码</Button>
                        </Col>
                    </Row>
                </Form-item>

                
                
                
            </Form>
        </Card>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$router.push('/home');
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less" scoped>
    .login-layout {
        height: 100%;
        background: url("./login_bg.jpeg") no-repeat;
        background-size: cover;
    
        .login-box {
            position: relative;
            top: 33%;
            display: block;
            max-width: 330px;
            margin: 0 auto;
        }
    }
</style>
