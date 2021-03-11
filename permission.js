import { childroute } from '/@/router/childNode'

export let JoinRoute = []
function toRoute(arr){
    arr.forEach( item => {
        if(item.children){
             toRoute(item.children)
        }else{
             JoinRoute.push({
                 path: item.path,
                 name: item.name,
                 component: () => import(`/@/views${item.path}.vue`)
             })
        }
    })
}
toRoute(childroute)

