
var projectName = '汽车租赁网站';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
    name: '个人中心',
    url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}
]


var indexNav = [

{
	name: '车辆信息',
	url: './pages/cheliang/list.jsp'
}, 
{
	name: '新闻资讯',
	url: './pages/news/list.jsp'
},
]

var adminurl =  "http://localhost:8080/diandongchezulin/index.jsp";

var cartFlag = false

var chatFlag = false


chatFlag = true
cartFlag = true


var menu = [{
    "backMenu": [{
        "child": [{
            "buttons": ["新增", "修改", "删除"],
            "menu": "用户信息",
            "menuJump": "列表",
            "tableName": "yonghu"
        }],
        "menu": "用户信息"
    }, {
        "child": [{
            "buttons": ["新增", "修改", "删除"],
            "menu": "车辆信息",
            "menuJump": "列表",
            "tableName": "cheliang"
        }],
        "menu": "车辆管理"
    }, {
        "child": [{
            "buttons": ["删除"],
            "menu": "租赁信息",
            "menuJump": "列表",
            "tableName": "zulin"
        }],
        "menu": "租赁管理"
    }, {
        "child": [{
            "buttons": ["新增", "修改", "删除"],
            "menu": "新闻资讯",
            "menuJump": "列表",
            "tableName": "news"
        },
            {
                "buttons": ["新增", "修改", "删除"],
                "menu": "轮播图",
                "menuJump": "列表",
                "tableName": "lunbotuguanli"
            },
            {
                "buttons": ["新增", "修改", "删除"],
                "menu": "客服资讯",
                "menuJump": "列表",
                "tableName": "kefuguanli"
            }],
        "menu": "系统设置"
    }],
    "frontMenu": [],
    "hasBackLogin": "是",
    "hasBackRegister": "否",
    "hasFrontLogin": "否",
    "hasFrontRegister": "否",
    "roleName": "管理员",
    "tableName": "users"
},
    {
        "backMenu": [{
            "child": [{
                "buttons": ["租赁"],
                "menu": "车辆信息",
                "menuJump": "列表",
                "tableName": "cheliang"
            }],
            "menu": "车辆管理"
        }, {
            "child": [{
                "buttons": [],
                "menu": "租赁信息",
                "menuJump": "列表",
                "tableName": "zulin"
            }],
            "menu": "租赁管理"
        }, {
            "child": [{
                "buttons": [],
                "menu": "合同信息",
                "menuJump": "列表",
                "tableName": "hetong"
            }],
            "menu": "合同管理"
        }, {
            "child": [{
                "buttons": [],
                "menu": "新闻资讯",
                "menuJump": "列表",
                "tableName": "news"
            }],
            "menu": "新闻资讯"
        }],
        "frontMenu": [],
        "hasBackLogin": "是",
        "hasBackRegister": "否",
        "hasFrontLogin": "否",
        "hasFrontRegister": "否",
        "roleName": "用户",
        "tableName": "yonghu"
    }
];
var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
