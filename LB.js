function banner(d, blist, time, id) {
    if (MY_PAGE == 1) {
        if (id == undefined || typeof(id) != 'string') {
            id = MY_RULE.title + 'a';
        }
        if (time == undefined || time < 100) {
            time = 3000
        }
        var  arrs  =   []
        for  (let  ii  in  blist)  {        
            arrs.push(blist[ii].img);   
        }
        let j = getMyVar('j', '0')
        clearMyVar('j')
        if (j > blist.length - 1) {
            j = 0;
        }
        d.push({
            img: blist[j].img,
            desc: '0',
            url: $('#noLoading#').lazyRule((j, blist) => {
                return blist[j].img
            }, j, blist),
            col_type: 'card_pic_1',
            extra: {
                id: id,
                longClick: [{
                    title: getItem("ms", "0") == "1" ? "▶️开关轮播" : "⏸开关轮播",
                    js: $.toString((id, time, blist, arrs) => {
                        setItem('ms', getItem('ms', '0') == '0' ? '1' : '0');
                        if (getItem("ms", "0") == "1") {
                            setItem('停止', '0')
                            unRegisterTask(id);
                            toast('轮播已停止')
                        } else
                        if (getItem("ms", "1") == "0") {
                            clearItem('停止');
                            registerTask(id, time, $.toString((blist, id, arrs) => {
                                let k = getMyVar(id + 'k', '0')
                                clearMyVar(id + 'k')
                                if (k > blist.length - 1) {
                                    k = 0
                                }
                                //log(k);
                                try {
                                    updateItem(id, {
                                        img: blist[k].img,
                                        url: $('#noLoading#').lazyRule((k, arrs) => {
                                            return 'pics://' + arrs.slice(0).join('&&')
                                        }, k, arrs),
                                        desc: '0',
                                    })
                                } catch (e) {
                                    //log(e.message)
                                    unRegisterTask('banner')
                                }
                                k++
                                putMyVar(id + 'k', k)
                            }, blist, id, arrs))
                            toast('轮播已打开');
                        }
                    }, id, time, blist, arrs)
                }, {
                    title: '🍁添网址',
                    js: $.toString(() => {
                        return $('https://t.mwm.moe/moe/', "请输入随机图片网址，API").input(() => {
                            if (/http/.test(input)) {
                                clearItem('list');
                                clearItem('pic');
                                setItem('img', input);
                                setItem('pic', '网址');
                                refreshPage();
                                toast('图片已更换');
                            } else {
                                toast('不是正确网址')
                            }
                        });
                    })
                }, {
                    title: '🔥选网站',
                    js: $.toString((id) => {
                        var list = ["🌴本地图片", "🌲彼岸壁纸", "🍎3G壁纸", "🍊壁纸之家", "🍌回车桌面", "🍇壁纸360", "🍉摄图网", "🍀高清壁纸", "🌿千叶网", "🌺典雅壁纸", "🌻觅知网", "🌹亿图网", "💐壁纸社", "🌾4K桌面", "🍄墨鱼部落", "🌵元气桌面", "🥦漫锋网.动", "🍓视觉中国.动"];
                        list[getItem('list')] = '‘‘’’<span style="color:red">' + list[getItem('list')] + '</span>';
                        return 'select://' + JSON.stringify({
                            "title": "选择图片网站",
                            "options": list,
                            col: 2,
                            js: $.toString((list) => {
                                let index = list.indexOf(input).toString();
                                if (input == list[index]) {
                                    setItem('list', index);
                                    clearItem('pic');
                                    setItem('pic', index);
                                    refreshPage();
                                    toast('图片已更换');
                                }
                            }, list)
                        });
                    }, id)
                }]
            }
        })
        j++
        putMyVar('j', j);
        registerTask(id, time, $.toString((blist, id, arrs) => {
            let k = getMyVar(id + 'k', '0')
            clearMyVar(id + 'k')
            if (k > blist.length - 1) {
                k = 0
            }
            //log(k);
            try {
                updateItem(id, {
                    img: blist[k].img,
                    url: $('#noLoading#').lazyRule((k, arrs) => {
                        return 'pics://' + arrs.slice(0).join('&&')
                    }, k, arrs),
                    desc: '0',
                })
            } catch (e) {
                //log(e.message)
                unRegisterTask('banner')
            }
            k++
            putMyVar(id + 'k', k)
        }, blist, id, arrs))
        if (getItem('停止') == 0) {
            unRegisterTask(id);
        }
        return d
    }
}
var arr = []

function cw() {
    if (arr == '' || arr[0].img == '') {
        toast('网站获取失败,切换到默认API');
        clearItem('pic');
        clearItem('list');
    }
}
switch (getItem('pic')) {
    case '网址':
        for (let i = 0; i < 10; i++) {
            arr.push({
                img: getItem('img') + '#' + Math.random(),
            })
        }
        break
    case '0':
        try {
            var javaImport = new JavaImporter();
            javaImport.importPackage(
                Packages.com.example.hikerview.utils,
                Packages.java.io,
            );
            with(javaImport) {
                var file = new File('/storage/emulated/0/Pictures/');
                var fileList = file.listFiles().filter(h => h.isFile() && /\.(jpg|jpeg|png|gif|webp)/.test(h));
            }
            for (let i in fileList) {
                arr.push({
                    img: fileList[i],
                });
            }
        } catch (e) {}
        if (arr == '') {
            toast('目录不存在或空,或检查下海阔文件读取权限，切换到默认API');
            clearItem('pic');
            clearItem('list');
        }
        break
    case '1':
        var x = Math.floor(Math.random() * 1069) + 2
        var html = request('http://www.netbian.com/index_' + x + '.htm', {})
        var list = pdfa(html, '.list&&img')
        for (let i = 0; i < list.length; i++) {
            arr.push({
                img: pdfh(list[i], 'img&&src').replace('small', '') //.replace(/\d{10}\.jpg/, '.jpg')
            })
        }
        cw()
        break
    case '2':
        var x = Math.floor(Math.random() * 136);
        var dd = []
        var html = request('https://m.desk.3gbizhi.com/index_' + x + '.html');
        var list = pdfa(html, '.contlistw&&li');
        list.forEach(data => {
            dd.push({
                url: pdfh(data, 'a&&href')
            })
        })
        var data = batchFetch(dd);
        data.forEach(item => {
            arr.push({
                img: pdfh(item, '#mobile_c_img&&img&&src')
            })
        })
        cw()
        break
    case '3':
        var x = Math.floor(Math.random() * 1117)
        var html = request('https://www.bizhi3.com/diannaobizhi/list_' + x + '.html');
        var list = pdfa(html, '.po_ul&&img');
        list.forEach(data => {
            arr.push({
                img: 'https:' + pdfh(data, 'img&&src')
            })
        })
        cw()
        break
    case '4':
        var x = Math.floor(Math.random() * 709)
        var html = request('https://m.hczm1.com/zhuomianbizhi/' + x + '.html', {
            headers: {
                'X-requested-With': 'cn.nr19.mbrowser'
            }
        });
        var list = pdfa(html, '.mbig_pic_list&&img');
        for (let i = 0; i < list.length; i++) {
            arr.push({
                img: pdfh(list[i], 'img&&src') + "@Referer="
            })
        }
        cw()
        break
    case '5':
        var x = Math.floor(Math.random() * 473) + 2;
        var html = request('http://www.bizhi360.com/desk/list_' + x + '.html');
        var list = pdfa(html, '.pic-list&&li');
        list.forEach(data => {
            var id = pdfh(data, 'img&&src').match(/.*(\d{2})\./)[1];
            var img = pdfh(data, 'img&&src') //.replace('litimg', 'bbpic/' + id);
            arr.push({
                img: img
            })
        })
        cw()
        break
    case '6':
        var x = Math.floor(Math.random() * 16)
        var html = request('https://m.699pic.com/sousuo-diannaobizhi-0-complex-horizontal-0-all-all-' + x + '-0-0-0-0-0-0-all-all-739-0.html');
        var list = pdfa(html, '.res-list&&img');
        list.forEach(data => {
            arr.push({
                img: 'https:' + pdfh(data, 'img&&src')
            })
        })
        cw()
        break
    case '7':
        var x = Math.floor(Math.random() * 350) * 20
        try {
            var html = request('https://vt.sm.cn/api/pic/list?query=%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8&tag=&limit=20&start=' + x, {});
            var list = JSON.parse(html).data.hit.imgInfo.item
            list.forEach(data => {
                arr.push({
                    img: data.bigPicUrl,
                })
            })
        } catch (e) {}
        cw()
        break
    case '8':
        var x = Math.floor(Math.random() * 411);
        var html = request('http://qianye88.com/3840x2160/' + x + '.html');
        var list = pdfa(html, '.flex-images&&img');
        list.forEach(data => {
            arr.push({
                img: pdfh(data, 'img&&data-original') //.replace(/(.*?)\?.*/, '$1')
            })
        })
        cw()
        break
    case '9':
        var x = Math.floor(Math.random() * 394) + 1;
        var html = request('https://www.dianyabizhi.com/diannaobizhi/list_' + x + '.html');
        var list = pdfa(html, '.po_ul&&img');
        list.forEach(data => {
            arr.push({
                img: pdfh(data, 'img&&src').includes('http') ? pdfh(data, 'img&&src') : 'https://www.dianyabizhi.com' + pdfh(data, 'img&&src')
            })
        })
        cw()
        break
    case '10':
        var x = Math.floor(Math.random() * 50) + 1;
        try {
            var html = request('https://m.51miz.com/api/SearchList/?keyword=%E5%A3%81%E7%BA%B8&plate_path=sucai&orderby=&page=' + x, {});
            var list = JSON.parse(html).data;
            list.forEach(data => {
                arr.push({
                    img: 'https:' + data.thumb_url //.replace(/!.*/, '')
                })
            })
        } catch (e) {}
        cw()
        break
    case '11':
        var x = Math.floor(Math.random() * 20) + 2;
        var x1 = Math.floor(Math.random() * 11) + 2;
        var htmls = request('https://www.yeitu.com/bizhi/mingxingbz/' + x1 + '.html');
        var html = request('https://www.yeitu.com/bizhi/meinvbz/' + x + '.html');
        var lists = pdfa(htmls, '.wall-list&&img');
        var list = pdfa(html, '.wall-list&&img');
        var list = lists.concat(list);
        list.forEach(data => {
            arr.push({
                img: pdfh(data, 'img&&data-src')
            })
        })
        cw()
        break
    case '12':
        var x = Math.floor(Math.random() * 244) + 1
        var host = 'https://www.toopic.cn'
        var html = request(host + '/dnbz/?page=' + x);
        var list = pdfa(html, '.pic-list&&img');
        list.forEach(data => {
            arr.push({
                img: host + pdfh(data, 'img&&data-original')
            })
        })
        cw()
        break
    case '13':
        var x = Math.floor(Math.random() * 1107) + 2
        var html = request('https://www.4kdesk.com/pc/index_' + x + '.html');
        var list = pdfa(html, '.pic-list&&img');
        list.forEach(data => {
            arr.push({
                img: pdfh(data, 'img&&data-original') + '@Referer=https://www.4kdesk.com/pc/'
            })
        })
        cw()
        break
    case '14':
        var x = Math.floor(Math.random() * 2140) + 2
        var html = request('https://www.moyublog.com/hdwallpapers/index_' + x + '.html');
        var list = pdfa(html, '.slist&&img');
        list.forEach(data => {
            arr.push({
                img: pdfh(data, 'img&&data-original')
            })
        })
        cw()
        break
    case '15':
        var x = Math.floor(Math.random() * 113)
        var html = request('https://mbizhi.cheetahfun.com/tag_93/index_' + x + '.shtml');
        var list = pdfa(html, '.justify-between&&img');
        list.forEach(data => {
            arr.push({
                img: pdfh(data, 'img&&src').replace(/(.*?)\?.*/, '$1')
            })
        })
        cw()
        break
    case '16':
        var x = Math.floor(Math.random() * 19)
        var html = request('https://zhutix.com/animated/page/' + x + '/');
        var list = pdfa(html, '.b2_gap&&img');
        list.forEach(data => {
            arr.push({
                img: pdfh(data, 'img&&src')
            })
        })
        cw()
        break
    case '17':
    if(arr == '' && getMyVar('ts', '1') != 0) {
confirm({
        title: '提示',
        content: '动图费流量，注意流量😅',
        confirm: $.toString(() => {            
            return putMyVar('ts', '0')
        }),
    })
}
        var x = Math.floor(Math.random() * 2) + 1
        var i = Math.floor(Math.random() * 7)
        var a = ["bizhi", "diannaobizhi", "bizhifengjing", "bizhidongman", "keai", "katong", "jianyue"]
        var html = request('https://www.vcg.com/creative-image/' + a[i] + '/?orientType%5B0%5D=1&assetFormat%5B0%5D=5&page=' + x);
        var list = pdfa(html, '.gallery_inner&&img');
        list.forEach(data => {
            arr.push({
                img: 'https:' + pdfh(data, 'img&&src')
            })
        })
        cw()
        break    
}
if (arr == '' || arr[0].img == '') {
    var arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push({
            img: 'https://www.dmoe.cc/random.php' + '#' + Math.random()
        })
    }
}
var gengxin = '新增, "🥦漫锋网.动", "🍓视觉中国.动"俩个动态图网站(2024.01.30)'
