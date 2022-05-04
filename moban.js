一级 = {
    A: function() {evalPrivateJS('UboeEBXVRPYqSSp9dioyWDHw960qtJjh43NZr7f6jUJXJncg/ahVAEw3M5rM7cBnfUgq7asLWX7hR8J8gkX6i4eJbsaS1XBRmmoH3kqHSUzFuRBjNQ3B05zPit73nYrguS6GbSbFhHieqssDel5VgOHcQoEBCjHSyL2CXlUMZnZ/EAb6fABdTBvlPeQ+qGrycPLK08ubRz82b1MtHRvmg6EUBmCEoc+q7Bpj5gQl00hzyzKNCjtU0IJL5gXlbmo4NLaHcVibLH+5A2LM8TEkTTEZh2QYfQ7FFnpGLV1S6I4428IEO0ND+ga3PvodrF87FOKkT8MkD9ntsx72+Mp5A19/bUq+cVmVQS0nH52o2FGYGSVflX9tiWCVbU93DTRhIAxdXi1U1qqHnGj5uqIcWv+YH/XJWeSyT3hjrWjbdbYcmgeUWT9Nems+0Bcjw90SWeTa3yLfkzUPBVHtVjoeaW9PiAjiqKTr0v9G3oePLrc=')}}

一级1 = {
    A: function() {
var d = [];
var getRangeColors = function() {       
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);     
}

var 分类颜色 = getRangeColors()


const empty = "hiker://empty"

try {
    var categories = pdfa(html, 大类定位).concat(pdfa(html, 拼接分类))
} catch (e) {
    var categories = pdfa(html, 大类定位)
}

let init_cate = []

for (let i = 0; i < 20; i++) {
    init_cate.push("0")
}

const fold = getVar(MY_RULE.group, "0")
const cate_temp_json = getVar(MY_RULE.title, JSON.stringify(init_cate))
const cate_temp = JSON.parse(cate_temp_json)

if (parseInt(page) === 1) {
    d.push({
        title: fold === '1' ? '““””<b><span style="color: #FF0000">∨</span></b>' : '““””<b><span style="color: #1aad19">∧</span></b>',
        url: $().lazyRule((fold) => {
            putVar(MY_RULE.group, fold === '1' ? '0' : '1');
            refreshPage(false);
            return "hiker://empty"
        }, fold),
        col_type: 'scroll_button',
    })


    categories.forEach((category, index) => {
        let sub_categories = pdfa(category, 小类定位);
        if (index === 0) {
            sub_categories.forEach((item, key) => {
                let title = pdfh(item, 分类标题).slice(1)
                d.push({
                    title: key.toString() === cate_temp[index] ? '““””<b><span style="color: ' + 分类颜色 + '">' + title + '</span></b>' : title,
                    url: $(pd(item, 分类链接) + '#noLoading#').lazyRule((params) => {
                        let new_cate = []
                        params.cate_temp.forEach((cate, index) => {
                            new_cate.push(index === 0 ? params.key.toString() : "0")
                        })
                        putVar(MY_RULE.title, JSON.stringify(new_cate))
                        putVar(MY_RULE.url, input)
                        refreshPage(true)
                        return "hiker://empty"
                    }, {
                        cate_temp: cate_temp,
                        key: key,
                        page: page,
                    }),
                    col_type: 'scroll_button',
                })
            })
            d.push({
                col_type: "blank_block"
            });
        } else if (fold === '1') {
            sub_categories.forEach((item, key) => {
                let title = pdfh(item, 分类标题)
                d.push({
                    title: key.toString() === cate_temp[index] ? '““””<b><span style="color: ' + 分类颜色 + '">' + title + '</span></b>' : title,
                    url: $(pd(item, 分类链接) + '#noLoading#').lazyRule((params) => {
                        params.cate_temp[params.index] = params.key.toString()

                        putVar(MY_RULE.title, JSON.stringify(params.cate_temp))
                        putVar(MY_RULE.url, input)
                        refreshPage(true)
                        return "hiker://empty"
                    }, {
                        cate_temp: cate_temp,
                        index: index,
                        key: key,
                        page: page,
                    }),
                    col_type: 'scroll_button',
                })
            })
            d.push({
                col_type: "blank_block"
            });
        }
    })
}

//一级页面
var list = pdfa(html, 列表);
for (var j in list) {
    var img = pd(list[j], 图片);
    d.push({
        title: pdfh(list[j], 标题),
        desc: pdfh(list[j], 描述),
        img: img + '@Referer=' + img,
        url: pd(list[j], 链接) + '#immersiveTheme#'
    });
}
setResult(d);
}}

搜索 = {
    A: function() {
var res = {};
var d = [];
var html = getResCode();
var list = parseDomForArray(html,列表);
for (var j in list) {
  d.push({
     title: parseDomForHtml(list[j], 标题),
     desc:parseDomForHtml(list[j], 描述),
     content: parseDomForHtml(list[j], 详情),
     pic_url: parseDom(list[j], 图片)+'@Referer=',
     url: parseDom(list[j], 链接)+"#immersiveTheme#"
  });
}
res.data = d;
setHomeResult(res);
  }
}

var 章节 = {
    A: function() {
        if (MY_URL.indexOf('hiker://empty##') > -1) {
            var html = request(MY_URL.split('##')[1])
        } else {
            var html = getResCode()
        }
        var conts = parseDomForArray(html, 集数总列表)[0]
        var list = parseDomForArray(conts, 集数列表)
        var title = parseDomForHtml(list[list.length - 1], 'a&&Text')
        setResult("更新至: " + title);
    }
}

二级1 = {
     A:function() {   
var d = [];
var html = getResCode();
var _x5 = $.toString(() => {
    fba.log(fba.getUrls())
    var urls = _getUrls()
    for (var i in urls) {
        if (!urls[i].includes("url=") && urls[i].match(/\.mp3|\.mp4|\.m3u8/)) {
            fy_bridge_app.log(urls[i])
            return urls[i].replace('https://v.jsjinfu.com:8443/p2p/?v=','')
        }
    }
});
//线路名列表的定位(列表规则)
var arts = parseDomForArray(html, 路线列表);
//线路名列表名称的定位(节点规则)
var tabs = [];
for (var i in arts) {
    tabs.push(parseDomForHtml(arts[i], 路线名).replace(过滤, ""))
}

//播放列表的列表的定位(列表规则)
var conts = parseDomForArray(html, 集数总列表);
var lists = [];
for (var i in conts) {
lists.push(parseDomForArray(conts[i], 集数列表))
}

var 主演 = parseDomForHtml(html, 信息);

var 类型 = parseDomForHtml(html, 信息1);

var 更新 = parseDomForHtml(html, 信息2);

var 导演 = parseDomForHtml(html, 信息3);

var 图片 = parseDom(html, 封面);


var 图片链接 = getUrl();

var Color = "#f13b66a";
var Color1 = "#098AC1";
function getHead(title) {
    return '‘‘’’<strong><font color="' + Color + '">' + title + '</front></strong>';
}
let line_model = 8;
let line_type_model = 'blank_block';
d.push({
    title: 主演 + '\n' + 类型,
    desc: 更新 + '\n' + 导演,
    pic_url: 图片,
    url: 图片链接,
    col_type: ''
});
 
//简介接口代码
简介 = parseDomForHtml(html, 简介).replace("　　", "").replace("简介：", "");
 
d.push({
    title: '‘‘’’<small><font color="#ff148e8e">简介：' + 简介.substr(0, 55) + '...</font><small><font color="red">详情</font></small></small>',
    url: 'hiker://empty#' + '\n' + 简介 + `@rule=js:var res = {}; var d = [];d.push({title:'影片简介：'+ MY_URL.split('hiker://empty#')[1],col_type: 'long_text'});res.data = d; setHomeResult(res);`,
    col_type: 'text_1'
});

for (let i = 0; i < line_model; i++) {
    d.push({
        col_type: line_type_model
    })
}
function setTabs(tabs, vari) {
    for (var i in tabs) {
        var url = "#noLoading#@lazyRule=.js:putVar('" + vari + "', '" + i + "');refreshPage(false);'toast://切换成功！';'#noHistory#hiker://empty'";
        d.push({
            title: getVar(vari, '0') == i ? getHead(tabs[i]) : tabs[i],
            url: url,
            col_type: 'scroll_button'
        })
    }
    d.push({
        col_type: 'line_blank'
    })
}
function setLists(lists, index) {
    d.push({
        col_type: 'line_blank'
    })
}
if (getVar('shsort') == '1') {
    var sx = '‘‘’’<font color="#0aa344">列表:</font></small>' + '<small><font color="#0aa344">正序↑</font></small>' + '<small><font color="#ff4c00">反序↓</font></small>';
} else {
    var sx = '‘‘’’<font color="#0aa344">列表:</font></small>' + '<small><font color="#ff4c00">正序↑</font></small>' + '<small><font color="#0aa344">反序↓</font></small>';
}
function setLists(lists, index) {
    d.push({
        title: '‘‘’’<span style="color:' + Color1 + '"><small></small>' + '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style="float:right">' + '<small>' + sx + '</small>',
        url: `#noLoading#@lazyRule=.js:let conf = getVar('shsort');if(conf=='1'){putVar({key:'shsort', value:'0'});}else{putVar({key:'shsort', value:'1'})};refreshPage();'toast://切换排序成功';'#noHistory#hiker://empty'`,
        col_type: 'text_center_1'
    })
    var list = lists[index];

    if (getVar('shsort') == '1') {
        try {
            for (var j = list.length - 1; j >= 0; j--) {
                d.push({
                    title: parseDomForHtml(list[j], 'a&&Text').replace(/第|集|话|期/g, ''),
                    url:"x5Rule://"+parseDom(list[j], 'a&&href') + '@' + _x5,
                    col_type: list.length > 4 ? 'text_5' : 'text_2'
                });
            }
        } catch (e) {
            d.push({
                title: '没有选集哟，不信点图片去看看👀',
                col_type: 'text_center_1'
            });
        }
    } else {
        try {
            for (var j = 0; j < list.length; j++) {
                d.push({
                    title: parseDomForHtml(list[j], 'a&&Text').replace(/第|集|话|期/g, ''),
                    url:"x5Rule://"+parseDom(list[j], 'a&&href') + '@' + _x5,
                    col_type: list.length > 4 ? 'text_5' : 'text_2'
                });
            }
        } catch (e) {
            d.push({
                title: '没有选集哟，不信点图片去看看👀',
                col_type: 'text_center_1'
            });
        }

    }
}
setTabs(tabs, MY_URL);
setLists(lists, getVar(MY_URL, '0'));
d.push({
    title: '<br>',
    col_type: 'rich_text'
});
setResult(d);
  }}

二级 = {
    A: function() {
var d = [];
var html = getResCode();

//默认未填格式：var 免嗅解析 = `@lazyRule=.js:`;

//探嗅代码
var _x5 = $.toString(() => {
    var urls = _getUrls();
    for (var i in urls) {
     if (urls[i].indexOf("url=") == -1){
        if (urls[i].match(/\.mp3|\.mp4|\.m3u8/)) {
            fy_bridge_app.log(urls[i]);
            return urls[i]
        }
       }
    }
});
var 列表 =""
var 路线列表正则 = "";
var 集数地址 = "a&&href";
var 集数名 = "a&&Text";
//信息接口代码
if (列表 != "") {
   if(列表.indexOf("&&Html") == -1){
     列表 = 列表 + "&&Html";
    } 
   var code = parseDomForHtml(html, 列表);
} else {
    var code = html;
}

信息 = parseDomForHtml(code, 信息);
信息1 = parseDomForHtml(code, 信息1);
信息2 = parseDomForHtml(code, 信息2);
信息3 = parseDomForHtml(code, 信息3);
封面 = parseDom(code, 封面);

if (信息.length > 20) {
    信息 = 信息.replace(信息, 信息.substring(0, 20) + "...");
}
if (信息1.length > 17) {
    信息1 = 信息1.replace(信息1, 信息1.substring(0, 17) + "...");
}
if (信息2.length > 20) {
    信息2 = 信息2.replace(信息2, 信息2.substring(0, 20) + "...");
}

var 标题 = 信息 + "\n" + 信息1;
var 副标题 = 信息2 + "\n" + 信息3;

d.push({
    title: 标题.replace(/  /g, " "),
    desc: 副标题,
    pic_url: 封面,
    url: MY_URL,
    col_type: 'movie_1_vertical_pic_blur'
});

//简介接口代码
简介 = parseDomForHtml(html, 简介).replace("　　", "").replace("简介：", "");

d.push({
    title: '‘‘’’<small><font color="#ff148e8e">简介：' + 简介.substr(0, 55) + '...</font><small><font color="red">详情</font></small></small>',
    url: 'hiker://empty#' + '\n' + 简介 + `@rule=js:var res = {}; var d = [];d.push({title:'影片简介：'+ MY_URL.split('hiker://empty#')[1],col_type: 'long_text'});res.data = d; setHomeResult(res);`,
    col_type: 'text_1'
});

//探嗅设置
var 探嗅设置名 = MY_URL + "探嗅设置";
var 探嗅设置 = getVar(探嗅设置名);

if(免嗅解析 == `@lazyRule=.js:`){
d.push({
      title:'📺探嗅解析',
      url: `toast://不要点击了，没有其它选项`,
      col_type: 'flex_button'
    });
}else{

if(探嗅设置 == "" || 探嗅设置 == "免嗅"){
var 图标1 = '📺';
var 图标2 = '❎';
}else{
var 图标2 = '📺';
var 图标1 = '❎';
}

var 切换免嗅 = `@lazyRule=.js:putVar({key:'`+探嗅设置名+`', value:'免嗅'});refreshPage(false);'toast://切换免嗅解析成功...'`;

var 切换探嗅 = `@lazyRule=.js:putVar({key:'`+探嗅设置名+`', value:'探嗅'});refreshPage(false);'toast://切换探嗅解析成功...'`;

d.push({
      title:图标1+'免嗅解析',
      url: 切换免嗅,
      col_type: 'flex_button'
    });
d.push({
      title:图标2+'探嗅解析',
      url: 切换探嗅,
      col_type: 'flex_button'
    });

}

//空白行
d.push({
    col_type: 'blank_block'
});

//路线名设置
var 路线名设置名 = MY_URL + "路线名设置";
var 路线名设置 = getVar(路线名设置名);

集数总列表 = parseDomForArray(html,集数总列表);
if(路线列表正则 == ""){
路线列表 = parseDomForArray(html,路线列表);
}else{
路线列表 = html.match("/"+路线列表+"/g");
}
if(路线名设置 == ""){
var 临时名 = parseDomForHtml(路线列表[0], 路线名);
putVar({key:路线名设置名, value:临时名});
路线名设置 = getVar(路线名设置名);
}

for (var i = 0; i < 集数总列表.length; i++) {
var 临时名 = parseDomForHtml(路线列表[i], 路线名);
if(临时名 == getVar(路线名设置名) ){
集数列表 = parseDomForArray(集数总列表[i],集数列表);
临时名 = "““" + 临时名 + "””";
}

var 切换路线 = `@lazyRule=.js:putVar({key:'`+路线名设置名+`', value:'`+临时名.replace("““", "").replace("””", "")+`'});refreshPage(false);'toast://切换路线成功...'`;

d.push({
      title:临时名.replace(过滤, ""),
      url: 切换路线,
      col_type: 'scroll_button'
    });

}

//添加空白块
d.push({
    title: '',
    col_type: 'line_blank'
});


//选集列表代码
var 路线名排序名 = MY_URL + getVar(路线名设置名) + "排序";
var 路线名排序 = getVar(路线名排序名);

if(路线名排序 == ""){
putVar({key:路线名排序名, value:'正序'});
路线名排序 = getVar(路线名排序名);
}

if(路线名排序 == "倒序"){
var 倒序显示 = `‘‘` + getVar(路线名设置名) + `’’<small><small><font color='#5bb7fe'> •倒序•</font></small></small>`;

var 切换到正序 = `@lazyRule=.js:putVar({key:'`+路线名排序名+`', value:'正序'});refreshPage(false);'toast://切换正序成功...'`;

d.push({
    title: 倒序显示,
    url: 切换到正序,
    col_type: 'text_center_1'
  })

}else{

var 正序显示 = `‘‘` + getVar(路线名设置名) + `’’<small><small><font color='#5bb7fe'> •正序•</font></small></small>`;

var 切换到倒序 = `@lazyRule=.js:putVar({key:'`+路线名排序名+`', value:'倒序'});refreshPage(false);'toast://切换倒序成功...'`;

d.push({
    title: 正序显示,
    url: 切换到倒序,
    col_type: 'text_center_1'
  })

}

if(路线名排序 == "倒序"){
var 暂时集数列表 = [];
for(var a=集数列表.length; a--; ){
暂时集数列表.push(集数列表[a])
}
集数列表 = 暂时集数列表;
}

for (var i = 0; i < 集数列表.length; i++) {
var 二级解析 ="";
if(免嗅解析 ==`@lazyRule=.js:` ){

二级解析 = 'x5Rule://' + parseDom(集数列表[i], 集数地址)  + '@' +_x5;

}else{

if(探嗅设置 == "" || 探嗅设置 == "免嗅"){

二级解析 = parseDom(集数列表[i], 集数地址) + 免嗅解析;

}else{
二级解析 = 'x5Rule://' + parseDom(集数列表[i], 集数地址)  + '@' +_x5;
}

}

d.push({
      title: parseDomForHtml(集数列表[i], 集数名),
      url: 二级解析,
      col_type: 集数列表.length > 3 ? 'text_3' : 'text_2'
    });

}


d.push({
    title: '\n',
    col_type: 'long_text'
});
//在尾部加多行空格


setResult(d);
 }
}

二级2 = {
    A: function() {
var d = [];
var html = getResCode();
 
var lazy = $("").lazyRule(() => {
    var player = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
    var jsurl = player.url;
    if (player.encrypt == '1') {
        var jsurl = unescape(jsurl);
    } else if (player.encrypt == '2') {
        var jsurl = unescape(base64Decode(jsurl));
    };
    var from = player.from;
 
    var jx = "";
 
    var parse = jx + jsurl;
    log('\n线路：' + from + '\n' + '解析接口：' + jx + '\nURL：' + jsurl);
    showLoading("网页嗅探中,请稍后...");
    var video = 'x5Rule://' + parse + '@' + $.toString(() => {
        var urls = _getUrls();
        var exclude = /playm3u8|m3u8\.tv|min\.css|404\.m3u8/;
        var contain = /\.mp4|\.m3u8|\.flv|\.avi|\.mpeg|\.wmv|\.mov|\.rmvb|\.dat|qqBFdownload|mime=video%2F|video_mp4/;
        for (var i in urls) {
            if (!exclude.test(urls[i]) && contain.test(urls[i])) {
                //fy_bridge_app.log(urls[i])
                if (/mgtv|sohu/.test(urls[i])) {
                    return urls[i] + ";{User-Agent@Mozilla/5.0 (Windows NT 10.0)}";
                } else if (/bili/.test(urls[i])) {
                    return urls[i] + ";{User-Agent@Mozilla/5.0&&Referer@https://www.bilibili.com}";
                } else {
                    return urls[i]
                }
            }
        }
    }) //video
    return video
});
 
//视频标题
var title = parseDomForHtml(html, 片名);
//剧情简介
var des_desc = parseDomForHtml(html, 简介).replace('详情', '[收起部分]','');
//视频封面
var des_pic = parseDom(html, 封面);
//线路名列表
var arts = parseDomForArray(html, 路线列表);
//选集列表
var conts = parseDomForArray(html, 集数总列表);
var lists = [];
for (var i in conts) {
	lists.push(parseDomForArray(conts[i], 集数列表))
}
 
var tabs = [];
for (var i in arts) {
    tabs.push(parseDomForHtml(arts[i], 路线名).replace(过滤, ''))
}
 
//二级新样式（已封装断插，变量名lazy）
const hd =requireCache("http://hiker.nokia.press/hikerule/rulelist.json?id=2968&v=1",24);
 
 
 
hd(d, {
	//显示的白色大字
	大字: title,
	//片名搜索用
	片名: title,
	//图片一定不要加Referer
	图片: des_pic,
	//描述里用<br>换行
	描述:parseDomForHtml(html,
		信息).substring(0, 33)+'<br>'+parseDomForHtml(html,
		信息1).substring(0, 33)+ '<br>' + des_desc,
})
 
//技术支持:追剧君,图标支持:蓝莓
//图标
for (let i = 0; i < 5; i++) {
		d.push({
			col_type: "blank_block"
		})
	}
if(getVar("ms")=="1"){
var Color ="red";
}else{
var Color="#098AC1"
}
function getHead(title) {
    return '‘‘’’<font color="' + Color + '">' + title + '</front>';
}
d.push({
   title:(getVar("ms")=="1"?getHead("正版断插"):getHead("网站资源")),
 url:"hiker://empty"+`@lazyRule=.js:putVar('ms',getVar('ms')=='1'?'0':'1');refreshPage();'toast://已切换模式'`,
  col_type: 'scroll_button',
 
})
function setTabs(tabs, taburl) {
	for (var i in tabs) {
		var tabname = tabs[i];
		d.push({
			title: getMyVar('当前线路名', tabs[0]) == tabs[i] ? '‘‘’’<strong><font color="#19B89D">' + tabs[i] + '</front></strong>' : tabs[i],
 
			col_type: 'scroll_button',
			url: $("#noLoading#").lazyRule((tabname, taburl, i) => {
				putMyVar('当前线路名', tabname);
				putMyVar(taburl, i)
				refreshPage();
				return 'hiker://empty'
			}, tabname, taburl, i)
		})
	}
}
try{
function setLists(lists, index) {
	var list = lists[index];
	// log('选集有：'+list.length+' · 线路有：'+tabs.length)
	if (tabs.length > 1 || list.length > 20) {
		var icon_s = 'http://82.156.222.77/weisyr/icon/';
		if (getMyVar('选集排序') == 1) {
			var avatar = icon_s + '正序.svg'
		} else {
			var avatar =icon_s + '反序.svg'
		}
		d.push({
			title: getMyVar('当前线路名', tabs[0]) + "<small><font color='grey'>" + '\t\t共 ' + list.length + ' 集' +
				"</font></small>",
			url: `@lazyRule=.js:if(getMyVar('选集排序')==1){putMyVar('选集排序', 0);}else{putMyVar('选集排序', 1)};refreshPage();'hiker://empty'`,
			col_type: 'avatar',
			img: avatar
		})
		d.push({
			col_type: 'line_blank'
		});
	}
 
 
	for (let i = 0; i < 5; i++) {
		d.push({
			col_type: "blank_block"
		})
	}
 
 
	function playLists() {
		var jm = parseDomForHtml(list[j], 'a&&Text').replace(/第|集|话|期/g, '').replace(/预告/g, '📢');
		if (list.length < 5) {
			var col = 'text_3'
		} else {
			var col = jm.length > 5 ? 'text_3' : 'text_5'
		}
		d.push({
			title: jm,
			url: parseDom(list[j], 'a&&href')+lazy,
			col_type: col
		});
	}
	// 开始选集分区
	addListener('onClose', $.toString(() => {
		clearMyVar('当前线路名');
		clearMyVar('分集起');
		clearMyVar('分集终');
	}))
	//选集＞则启用选集分区（list替换成你的选集数组）
	var 选集数组 = list; //改
	if (选集数组.length > 26) {
		//设置每区选集数目
		var page_number = 25;
		var star = getMyVar('分集起', '1');
		var end = getMyVar('分集终', JSON.stringify(page_number));
		var total = Math.ceil(选集数组.length / page_number);
		var catalogue = []
		for (let i = 0; i < total; i++) {
			catalogue += i * page_number + ',';
			catalogue = catalogue.split(',');
		}
		for (let i = 0; i < 8; i++) {
			d.push({
				col_type: "blank_block"
			})
		}
		for (var i = 0; i < catalogue.length - 1; i++) {
			var total1 = parseInt(catalogue[i]) + 1;
			var total2 = parseInt(catalogue[i + 1]);
			if (i == (catalogue.length - 2)) var total2 = 选集数组.length;
			d.push({
				title: star == total1 ? '‘‘' + total1 + '-' + total2 + '’’' : total1 + '-' + total2,
				url: $("#noLoading#").lazyRule((total1, total2) => {
					putMyVar('分集起', total1);
					putMyVar('分集终', total2);
					refreshPage();
					return 'hiker://empty'
				}, total1, total2),
				col_type: 'scroll_button'
			});
		}
		if (getMyVar('选集排序') == 1) {
			for (var j = end - 1; j >= star - 1; j--) {
				// 打印选集列表
				playLists() //改
			}
		} else {
			for (var j = star - 1; j < end; j++) {
				// 打印选集列表
				playLists() //改
			}
		}
	} 
	// 结束选集分区
	else {
		if (getMyVar('选集排序') == 1) {
			for (var j = list.length - 1; j >= 0; j--) {
				playLists() 
			}
		} else {
			for (var j = 0; j < list.length; j++) {
				playLists() 
			}
		}
	}
 
	d.push({
		title: '\n',
		url: 'hiker://empty',
		col_type: 'rich_text'
	});
}
}catch(e){}
setTabs(tabs, MY_URL);
setLists(lists, getMyVar(MY_URL, '0'));
setResult(d);}}


var 二级3 = {
    A: function() {
        var d = [];
        var html0 = null
        MY_URL = MY_URL.split("##")[MY_URL.split("##").length - 1]
        getResCode = () => {
            if (html0) {
                return html0;
            }
            let a = getMyVar("二级：" + MY_URL, "")
            if (a) {
                html0 = a
                return a
            } else {
                html0 = request(MY_URL);
                putMyVar("二级：" + MY_URL, html0);
                return html0
            }
        }
        var html = getResCode();
        var arts = parseDomForArray(html, 路线列表);
        var tabs = [];
for (var i in arts) {
    tabs.push(parseDomForHtml(arts[i], 路线名).replace(过滤, '')
.replace('-官方', '').replace('APP专享线路（网站不提供播放）', 'APP专享').replace('）', ')').replace('（', '(').replace('视频', '').replace('TV', '').replace('线路', '').replace('推荐', '').replace('-', '').replace(' ', '').replace(' ', '').replace('蓝光秒播', '789pan').replace('蓝光极速', '人人迷').replace('蓝光①线', '腾讯').replace('蓝光④线', '芒果').replace('蓝光②线', '奇艺').replace('蓝光③线', '优酷').replace('蓝光⑤线', '搜狐').replace('蓝光⑦线', 'PPTV').replace('臻品影视①', 'leduo').replace('臻品影视②', 'bjm3u8').replace('臻品影视③', 'dbm3u8').replace('臻品影视④', 'tkm3u8').replace('臻品影视⑤', '605m3u8').replace('光纤云一', '爱奇艺').replace('光纤云二', '腾讯').replace('光纤云三', '优酷').replace('光纤云四', '芒果').replace('极速云一', '乐多').replace('极速云二', '哔哩哔哩').replace('飞碟云一', 'fuckapp').replace('流星云一', 'wjm3u8').replace('流星云二', 'bdxm3u8').replace('飞碟云二', 'fuckapp1').replace(' (支持手机)', ''))
        }
        var conts = pdfa(html, 集数总列表);
        var lists = [];
        for (var i in conts) {
            lists.push(pdfa(conts[i], 集数列表))
        }

        d.push({
            title: "分类：" + pdfh(html, 信息).replace(/\//g, ' ').replace('分类：', '').replace('地区：', '').replace('年代：', '').replace('类型：', '').replace('年份：', '').substring(0, 17) + '\n' + pdfh(html, 信息1).replace(/\//g, ' ').substring(0, 21),
            desc: pdfh(html, 信息2).replace(/\//g, ' ').substring(0, 23) + '\n' + pdfh(html, 信息3).replace(/\//g, ' ').substring(0, 19),
            pic_url: pd(html, 封面) + '@Referer=',
            url: "hiker://empty@lazyRule=.js:putVar('style', getVar('style','1')=='1'?'0':'1');refreshPage(false);'hiker://empty'",
            col_type: 'movie_1_vertical_pic_blur',
            extra: {
                gradient: true
            }
        });
        var Color = "#f13b66a";
        var Color1 = "#098AC1";
        const Color2 = 自定义颜色 = '#17B76C';

        requireCache("https://gitee.com/xiao-zero/xiao/raw/master/js/lazy.js")

        function getHead(title) {
            return '‘‘’’<font color="' + Color2 + '">' + title + '</font>';
        }
        var desc = '简介 : ' + pdfh(html, 简介).replace('　　', '').replace('详情：', '').replace('剧情：', '').replace('　', '').replace('[收起部分]', '').replace('  展开全部', '').replace('收起全部', '').replace(' ', '').replace('展开 收起', '').replace('简介：', '').replace('...详情', '').replace(' 展开全部', '').substring(0, 60) + "…详情";
        d.push({
            title: '““””<small><font color=#871f78>' + desc + '</font></small>',
            url: 'hiker://empty#' + '\n\t\t\t\t\t\t\t' + pdfh(html, 简介) + `@rule=js:var res = {}; var d = [];d.push({title:'影片简介：'+MY_URL.split('hiker://empty#')[1],col_type: 'long_text'});res.data = d; setHomeResult(res);`,
            col_type: 'text_1'
        });
        d.push({
            col_type: 'line_blank'
        });
        d.push({
            col_type: 'big_blank_block'
        });
        d.push({
            col_type: 'big_blank_block'
        });
        d.push({
            col_type: 'big_blank_block'
        });
        d.push({
            title: getHead('☯'),
            url: getUrl(),
            col_type: 'scroll_button'
        });

        function setTabs(tabs, taburl) {
            for (var i in tabs) {
                var tabname = tabs[i];
                d.push({
                    title: tabname,
                    col_type: 'scroll_button',
                    url: $("#noLoading#").lazyRule((tabname, taburl, i) => {
                        putMyVar('当前线路名', tabname);
                        putMyVar(taburl, i)
                        refreshPage(false);
                        return 'hiker://empty'
                    }, tabname, taburl, i)
                })
            }
        }

        function setLists(lists, index) {
            var list = lists[index];
            try {
                if (pdfh(list[0], "a&&Text").match(/(\d+)/)[0] > pdfh(list.slice(-1)[0], "a&&Text").match(/(\d+)/)[0]) list.reverse()
            } catch (e) {}
            if (tabs.length > 1 || list.length > 20) {
                if (getMyVar('选集排序') == 1) {
                    var sx = '<font color = "' + Color2 + '"><b>↿</b></font>' + '<font color = "grey"><b>⇂</b></font>';
                } else {
                    var sx = '<font color = "grey"><b>↿</b></font>' + '<font color = "' + Color2 + '"><b>⇂</b></font>';
                }
                //技术支持:追剧君,图标支持:蓝莓
                //图标
                var obj = {
                    "腾讯": "https://lanmeiguojiang.com/tubiao/movie/131.svg",
                    "优酷": "https://lanmeiguojiang.com/tubiao/movie/128.svg",
                    "奇艺": "https://lanmeiguojiang.com/tubiao/movie/130.svg",
                    "爱奇艺": "https://lanmeiguojiang.com/tubiao/movie/130.svg",
                    "芒果": "https://lanmeiguojiang.com/tubiao/movie/32.svg",
                    "咪咕": "https://lanmeiguojiang.com/tubiao/movie/134.svg",
                    "西瓜": "https://lanmeiguojiang.com/tubiao/movie/135.svg",
                    "搜狐": "https://lanmeiguojiang.com/tubiao/movie/129.svg",
                    "乐视": "https://lanmeiguojiang.com/tubiao/movie/58.svg",
                    "风行": "https://lanmeiguojiang.com/tubiao/movie/136.svg",
                    "PPTV": "https://lanmeiguojiang.com/tubiao/movie/133.svg",
                    "1905": "https://lanmeiguojiang.com/tubiao/movie/132.svg",
                    "bilibili": "https://lanmeiguojiang.com/tubiao/movie/20.svg",
                    "专线": "https://lanmeiguojiang.com/tubiao/movie/141.svg",
                    "专线2": "https://lanmeiguojiang.com/tubiao/movie/142.svg",
                };
                d.push({
                    title: getMyVar('当前线路名', tabs[0]) + "<small><font color='grey'>" + '\t\t--> ' + list.length + ' 集' + "</font></small>" + '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + sx + "正反序★",
                    url: `@lazyRule=.js:if(getMyVar('选集排序')==1){putMyVar('选集排序', 0);}else{putMyVar('选集排序', 1)};refreshPage(false);'hiker://empty'`,
                    img: obj[getMyVar('当前线路名', tabs[0])] || "https://lanmeiguojiang.com/tubiao/movie/105.svg",
                    col_type: 'avatar'
                })
            }
            for (let i = 0; i < 5; i++) {
                d.push({
                    col_type: "blank_block"
                })
            }

            function playLists() {
                var jm = pdfh(list[j], 'a&&Text').replace(/第|集|话|期|-/g, '').replace(/预告/g, '');
                if (list.length < 5) {
                    var col = 'text_2'
                } else {
                    var col = jm.length > 5 ? 'text_3' : 'text_4'
                }
                let url = pd(list[j], 'a&&href');
                d.push({
                    title: jm,
                    url: url + lazy,
                    col_type: col,
                    extra: {
                        id: url
                    }
                });
            }
            addListener('onClose', $.toString((MY_URL) => {
                clearMyVar('当前线路名');
                clearMyVar('分集起');
                clearMyVar('分集终');
                clearMyVar("二级：" + MY_URL);
            }, MY_URL))
            //选集＞则启用选集分区
            if (list.length > 104) {
                //设置内页选集数目
                var page_number = 100;
                var star = getMyVar('分集起', '1');
                var end = getMyVar('分集终', JSON.stringify(page_number));
                var total = Math.ceil(list.length / page_number);
                var catalogue = []
                for (let i = 0; i < total; i++) {
                    catalogue += i * page_number + ',';
                    catalogue = catalogue.split(',');
                }
                for (let i = 0; i < 8; i++) {
                    d.push({
                        col_type: "blank_block"
                    })
                }
                for (var i = 0; i < catalogue.length - 1; i++) {
                    var total1 = parseInt(catalogue[i]) + 1;
                    var total2 = parseInt(catalogue[i + 1]);
                    if (i == (catalogue.length - 2)) var total2 = list.length;
                    d.push({
                        title: star == total1 ? '‘‘' + total1 + '-' + total2 + '’’' : total1 + '-' + total2,
                        url: $("#noLoading#").lazyRule((total1, total2) => {
                            putMyVar('分集起', total1);
                            putMyVar('分集终', total2);
                            refreshPage();
                            return 'hiker://empty'
                        }, total1, total2),
                        col_type: 'scroll_button'
                    });
                }
                if (getMyVar('选集排序') == 1) {
                    for (var j = end - 1; j >= star - 1; j--) {
                        playLists()
                    }
                } else {
                    for (var j = star - 1; j < end; j++) {
                        playLists()
                    }
                }
            } else {
                if (getMyVar('选集排序') == 1) {
                    for (var j = list.length - 1; j >= 0; j--) {
                        playLists()
                    }
                } else {
                    for (var j = 0; j < list.length; j++) {
                        playLists()
                    }
                }
            }
            d.push({
                col_type: 'rich_text'
            });
            d.push({
                col_type: 'rich_text'
            });
        }
        setTabs(tabs, MY_URL);
        setLists(lists, getMyVar(MY_URL, '0'));
        /*d.push({
            title: '““””<small><small><font color=#871f78>数据资源收集于网络，海阔不提供任何资源</font></small>',
            desc: '““””<small><small><font color=#f20c00>本规则仅限学习与交流，请导入后24小时内删除，请勿传播！</font></small>',
            url: MY_URL,
            col_type: 'text_center_1'
        });*/
        setResult(d);
    }}