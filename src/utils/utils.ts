import router from "@/router"
// 公共方法
import { RouteLocationRaw } from 'vue-router';
export const goToLike = (str: RouteLocationRaw) => {
    router.push(str)
}