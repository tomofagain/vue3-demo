import { ref,reactive } from "vue"

export let userInfo = reactive({    // 存储登录用户信息
     username: "",
     password: ""
})
export let ifLogIn = ref(false)     //判断用户登录状态

export let auth = reactive({})      //存储权限