/**
 * banner数据
 */ 
function getBannerData(){
    var arr = ['../../images/house.png']
    return arr
}
/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                icon:"../../images/维修.png",
                title:"维修"
            },
            {
                id:2,
                icon:"../../images/保洁.png",
                title:"保洁"
            },
            {
                id:3,
                icon:"../../images/洗衣.png",
                title:"洗衣"
            }
            // {
            //     id:4,
            //     icon:"../../images/nav_icon_04.png",
            //     title:"美发"
            // },
            // {
            //     id:5,
            //     icon:"../../images/nav_icon_05.png",
            //     title:"美睫"
            // }
        ]
    return arr
}
/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
    var arr = [
                [
                    {
                        
                        subject:"高级保洁员 张阿姨",
                        coverpath:"../../images/aunt.png",
                        price:'¥68',
                        message:'我们追求的是最干净！'
                    },
                    {
                        
                      subject:"高级保洁员 张阿姨",
                      coverpath:"../../images/aunt.png",
                      price:'¥68',
                      message:'我们追求的是最干净！'
                    },
                    {
                        
                      subject:"高级保洁员 张阿姨",
                      coverpath:"../../images/aunt.png",
                      price:'¥68',
                      message:'我们追求的是最干净！'
                    },
                    {
                        
                      subject:"高级保洁员 张阿姨",
                      coverpath:"../../images/aunt.png",
                      price:'¥68',
                      message:'我们追求的是最干净！'
                    },
                    {
                        
                      subject:"高级保洁员 张阿姨",
                      coverpath:"../../images/aunt.png",
                      price:'¥68',
                      message:'我们追求的是最干净！'
                    }
                ],
                [
                    {
                        artype:'nails',
                        subject:"高级保洁员 张阿姨",
                        coverpath:"../../images/aunt.png",
                        price:'¥68',
                        message:'我们追求的是最干净！'
                    }
                ],
                [
                    {
                        artype:'beauty',
                        ssubject:"高级保洁员 张阿姨",
                        coverpath:"../../images/aunt.png",
                        price:'¥68',
                        message:'我们追求的是最干净！'
                    },
                    {
                        artype:'beauty',
                        subject:"高级保洁员 张阿姨",
                        coverpath:"../../images/aunt.png",
                        price:'¥68',
                        message:'我们追求的是最干净！'
                    }
                ],
                [
                    
                    {
                        artype:'hair',
                        subject:"伊本造型",
                        coverpath:"../../images/recommend_img_05.png",
                        price:'¥1588',
                        message:'伊本造型是由著名形象设计师杨进先生创办。'
                    }
                ],
                [
                    {
                        artype:'eyelash',
                        subject:"睫毛稀疏 种睫毛来帮忙",
                        coverpath:"../../images/recommend_img_02.png",
                        price:'¥1888',
                        message:'我们追求的是没有最长只有更长！'
                    }
                ] 
            ]
    return arr
}
/**
 * 技师 数据
 * */ 
function getSkilledData(){
    var arr = [
                {
                        company:"海南大学海甸校区",
                        avatar:"../../images/aunt.png",
                        nickname:'张保洁员',
                        price:'¥200',
                        message:'从事保洁行业60余年，有丰富经验',
                        distance:'100m'
                    },
                    {
                        company:"圆月亮维修公司",
                        avatar:"../../images/aunt.png",
                        nickname:'包维修工',
                        price:'¥400',
                        message:'从事美发行业60余年，有丰富经验',
                        distance:'200m'
                    },
                    {
                        company:"璀璨洗衣会所",
                        avatar:"../../images/aunt.png",
                        nickname:'王洗衣师',
                        price:'¥200',
                        message:'从事洗衣行业60余年，有丰富经验',
                        distance:'100m'
                    },
                    {
                        company:"柔丝妮保洁公司",
                        avatar:"../../images/aunt.png",
                        nickname:'黄师傅',
                        price:'¥300',
                        message:'从事保洁行业60余年，有丰富经验',
                        distance:'400m'
                    }
            ]
    return arr
}

/**
 * 选择器 数据
 */ 
function getPickerData(){
    var arr =[
        {
            name:'张三',
            phone:'13812314563',
            province:'北京',
            city:'北京',
            addr:'朝阳区望京悠乐汇A座8011'
        },
        {
            name:'李四',
            phone:'13812314563',
            province:'北京市',
            city:'北京市',
            addr:'朝阳区望京悠乐汇A座4020'
        }
    ]
    return  arr
}
/**
 * 查询 地址
 * */ 
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}
/**
 * 用户数据
 * */ 
function userData(){
    var arr = {
                uid:'1',
                nickname:'山风',
                name:'张三',
                phone:'13833337998',
                avatar:'../../images/avatar.png',
                addrs:[
                   {
                        addrid:'1',
                        name:'张三',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区望京悠乐汇A座8011'
                    },
                    {
                        addrid:'2',
                        name:'李四',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区望京悠乐汇A座4020'
                    } 
                ]
            }
    return arr
}
/**
 * 省
 * */ 
function provinceData(){
    var arr = [
        // {pid:1,pzip:'110000',pname:'北京市'},
        // {pid:2,pzip:'120000',pname:'天津市'}
        '请选择省份','福建省'
    ]
    return arr
}
/**
 * 市
 * */ 
function cityData(){
    var arr = [
        // {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
        // {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
        '请选择城市','福州市','厦门市','宁德市'
    ]
    return arr
}
/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  getPickerData : getPickerData,
  getSkilledData :getSkilledData,
  userData : userData,
  provinceData : provinceData,
  cityData : cityData,
  searchAddrFromAddrs : searchAddrFromAddrs

}