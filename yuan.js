二级 = {
    C: function() {
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

var 路线列表正则 = "";

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
信息4 = parseDomForHtml(code, 信息4);
封面 = parseDom(code, 封面);

if (信息.length > 20) {
    信息 = 信息.replace(信息, 信息.substring(0, 20) + "...");
}
if (信息1.length > 17) {
    信息1 = 信息1.replace(信息1, 信息1.substring(0, 17) + "...");
}
if (信息3.length > 20) {
    信息3 = 信息3.replace(信息3, 信息3.substring(0, 20) + "...");
}

var 标题 = 信息 + "\n" + 信息1 + "\n" + 信息2;
var 副标题 = 信息3 + "\n" + 信息4;

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
    title: "　　" +简介 + "\n ",
    col_type: 'long_text'
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
      title:临时名,
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
}}