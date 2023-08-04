"use strict";(self["webpackChunkkube_manage_web"]=self["webpackChunkkube_manage_web"]||[]).push([[4],{7004:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var s=t(3396),n=t(7139);const l={class:"node"},i=(0,s.Uk)("创建"),o=(0,s.Uk)("搜索"),d=(0,s.Uk)("刷新"),r={class:"node-body-nodename"},m={class:"node-body-ip"},p=(0,s.Uk)("YAML"),u=(0,s.Uk)("详情"),c={class:"dialog-footer"},g=(0,s.Uk)("取 消"),h=(0,s.Uk)("更 新");function w(e,a,t,w,f,_){const b=(0,s.up)("el-button"),y=(0,s.up)("el-col"),D=(0,s.up)("el-input"),C=(0,s.up)("el-row"),N=(0,s.up)("el-card"),W=(0,s.up)("el-table-column"),k=(0,s.up)("el-tag"),z=(0,s.up)("el-table"),v=(0,s.up)("el-pagination"),x=(0,s.up)("codemirror"),L=(0,s.up)("el-dialog"),T=(0,s.Q2)("loading");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,{span:24},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(N,{class:"node-head-card",shadow:"never","body-style":{padding:"10px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,{span:2},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(b,{disabled:"",style:{"border-radius":"2px"},icon:"Edit",type:"primary"},{default:(0,s.w5)((()=>[i])),_:1})])])),_:1}),(0,s.Wm)(y,{span:6},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(D,{class:"node-head-search",clearable:"",placeholder:"请输入",modelValue:f.searchInput,"onUpdate:modelValue":a[0]||(a[0]=e=>f.searchInput=e)},null,8,["modelValue"]),(0,s.Wm)(b,{style:{"border-radius":"2px"},icon:"Search",type:"primary",plain:"",onClick:a[1]||(a[1]=e=>_.getNodes())},{default:(0,s.w5)((()=>[o])),_:1})])])),_:1}),(0,s.Wm)(y,{span:2,offset:14},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(b,{style:{"border-radius":"2px"},icon:"Refresh",plain:"",onClick:a[2]||(a[2]=e=>_.getNodes())},{default:(0,s.w5)((()=>[d])),_:1})])])),_:1})])),_:1})])),_:1})])])),_:1}),(0,s.Wm)(y,{span:24},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(N,{class:"node-body-card",shadow:"never","body-style":{padding:"5px"}},{default:(0,s.w5)((()=>[(0,s.wy)(((0,s.wg)(),(0,s.j4)(z,{style:{width:"100%","font-size":"12px","margin-bottom":"10px"},data:f.nodeList},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{width:"20"}),(0,s.Wm)(W,{align:"left",label:"Node名"},{default:(0,s.w5)((e=>[(0,s._)("p",r,(0,n.zw)(e.row.metadata.name),1),(0,s._)("p",m,(0,n.zw)(e.row.status.addresses[0].address),1)])),_:1}),(0,s.Wm)(W,{align:"center",label:"规格"},{default:(0,s.w5)((e=>[(0,s.Wm)(k,{type:"warning"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(e.row.status.capacity.cpu)+"核"+(0,n.zw)(_.specTrans(e.row.status.capacity.memory))+"G",1)])),_:2},1024)])),_:1}),(0,s.Wm)(W,{align:"center",label:"POD-CIDR"},{default:(0,s.w5)((e=>[(0,s._)("span",null,(0,n.zw)(e.row.spec.podCIDR),1)])),_:1}),(0,s.Wm)(W,{align:"center",label:"版本"},{default:(0,s.w5)((e=>[(0,s._)("span",null,(0,n.zw)(e.row.status.nodeInfo.kubeletVersion),1)])),_:1}),(0,s.Wm)(W,{align:"center","min-width":"100",label:"创建时间"},{default:(0,s.w5)((e=>[(0,s.Wm)(k,{type:"info"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(_.timeTrans(e.row.metadata.creationTimestamp)),1)])),_:2},1024)])),_:1}),(0,s.Wm)(W,{align:"center",label:"操作","min-width":"120"},{default:(0,s.w5)((a=>[(0,s.Wm)(b,{size:"small",style:{"border-radius":"2px"},icon:"Edit",type:"primary",plain:"",onClick:e=>_.getNodeDetail(a)},{default:(0,s.w5)((()=>[p])),_:2},1032,["onClick"]),(0,s.Wm)(b,{disabled:"",size:"small",style:{"border-radius":"2px"},icon:"Document",type:"warning",plain:"",onClick:t=>_.handleConfirm(a,"删除",e.delIngress)},{default:(0,s.w5)((()=>[u])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[T,f.appLoading]]),(0,s.Wm)(v,{class:"node-body-pagination",background:"",onSizeChange:_.handleSizeChange,onCurrentChange:_.handleCurrentChange,"current-page":f.currentPage,"page-sizes":f.pagesizeList,"page-size":f.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:f.nodeTotal},null,8,["onSizeChange","onCurrentChange","current-page","page-sizes","page-size","total"])])),_:1})])])),_:1})])),_:1}),(0,s.Wm)(L,{title:"YAML信息",modelValue:f.yamlDialog,"onUpdate:modelValue":a[5]||(a[5]=e=>f.yamlDialog=e),width:"45%",top:"5%"},{footer:(0,s.w5)((()=>[(0,s._)("span",c,[(0,s.Wm)(b,{onClick:a[3]||(a[3]=e=>f.yamlDialog=!1)},{default:(0,s.w5)((()=>[g])),_:1}),(0,s.Wm)(b,{disabled:"",type:"primary",onClick:a[4]||(a[4]=e=>_.updateNode())},{default:(0,s.w5)((()=>[h])),_:1})])])),default:(0,s.w5)((()=>[(0,s.Wm)(x,{value:f.contentYaml,border:"",options:f.cmOptions,height:"500",style:{"font-size":"14px"},onChange:_.onChange},null,8,["value","options","onChange"])])),_:1},8,["modelValue"])])}var f=t(7973),_=t(5959),b=t(1391),y=t(9330),D=t(3794),C={data(){return{cmOptions:f.Z.cmOptions,contentYaml:"",currentPage:1,pagesize:10,pagesizeList:[10,20,30],searchInput:"",namespaceValue:"default",namespaceList:[],appLoading:!1,nodeList:[],nodeTotal:0,getNodesData:{params:{filter_name:"",namespace:"",page:"",limit:""}},nodeDetail:{},getNodeDetailData:{params:{name:"",namespace:""}},yamlDialog:!1,updateNodeData:{params:{namespace:"",content:""}},delNodeData:{params:{name:"",namespace:""}}}},methods:{transYaml(e){return b.stringify(e)},transObj(e){return _.ZP.load(e)},onChange(e){this.contentYaml=e},handleSizeChange(e){this.pagesize=e,this.getNodes()},handleCurrentChange(e){this.currentPage=e,this.getNodes()},handleClose(e){this.$confirm("确认关闭？").then((()=>{e()})).catch((()=>{}))},ellipsis(e){return e.length>15?e.substring(0,15)+"...":e},timeTrans(e){let a=new Date(new Date(e).getTime()+288e5);return a=a.toJSON(),a=a.substring(0,19).replace("T"," "),a},specTrans(e){if(-1==e.indexOf("Ki"))return e;let a=e.slice(0,-2)/1024/1024;return a.toFixed(0)},getNamespaces(){(0,D.I1)().then((e=>{this.namespaceList=e.data.items})).catch((e=>{this.$message.error({message:e.msg})}))},getNodes(){this.appLoading=!0,this.getNodesData.params.filter_name=this.searchInput,this.getNodesData.params.page=this.currentPage,this.getNodesData.params.limit=this.pagesize,(0,y.bS)(this.getNodesData.params).then((e=>{this.nodeList=e.data.items,this.nodeTotal=e.data.total})).catch((e=>{this.$message.error({message:e.msg})})),this.appLoading=!1},getNodeDetail(e){this.getNodeDetailData.params.name=e.row.metadata.name,this.getNodeDetailData.params.namespace=this.namespaceValue,(0,y._j)(this.getNodeDetailData.params).then((e=>{this.nodeDetail=e.data,this.contentYaml=this.transYaml(this.nodeDetail),this.yamlDialog=!0})).catch((e=>{this.$message.error({message:e.msg})}))},updateNode(){let e=JSON.stringify(this.transObj(this.contentYaml));this.updateNodeData.params.namespace=this.namespaceValue,this.updateNodeData.params.content=e,(0,y.X0)(this.updateNodeData.params).then((e=>{this.$message.success({message:e.msg})})).catch((e=>{this.$message.error({message:e.msg})})),this.yamlDialog=!1},delNode(e){this.delNodeData.params.name=e.row.metadata.name,this.delNodeData.params.namespace=this.namespaceValue,(0,y.Qk)(this.delNodeData.params).then((e=>{this.getNodes(),this.$message.success({message:e.msg})})).catch((e=>{this.$message.error({message:e.msg})}))},handleConfirm(e,a,t){this.confirmContent="确认继续 "+a+" 操作吗？",this.$confirm(this.confirmContent,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((()=>{t(e)})).catch((()=>{this.$message.info({message:"已取消操作"})}))}},beforeMount(){this.getNodes()}},N=t(89);const W=(0,N.Z)(C,[["render",w],["__scopeId","data-v-926899d2"]]);var k=W}}]);
//# sourceMappingURL=4.ba0f0475.js.map