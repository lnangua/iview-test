<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
    <FormItem prop="user">
      <Input type="text" v-model="formInline.user" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
    </FormItem>
    <FormItem>
      <router-link :to="{name:'menuLeft',query:{remark:'登陆了！'}}">点击验证动画效果 </router-link> 
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!")
          console.log('----',this.formInline)
          this.$router.push({//核心语句
            path: "/menuLeft", //跳转的路径
            query: {
              //路由传参时push和query搭配使用 ，作用时传递参数
              formInline: this.formInline
            }
          })
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

