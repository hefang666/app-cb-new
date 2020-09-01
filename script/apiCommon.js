/*
* @method onEvent  事件监听绑定
* @param {Object} options 事件监听需要的内容
* 接受事件名(name)  事件其他项(extra)  成功回调(success)  失败回调（error） 不管成功还是失败都回调complete
*/

function onEvent(options) {
    if(!options.name) return false;
    var eventOption = Object.assignNew({}, {name: options.name}, options.extra || {});
    //console.log(JSON.stringify(eventOption));
    api.addEventListener(eventOption, function(ret, err){
        console.log(ret, err)
        if(!err) {
            options.success ? options.success(ret) : ''
        } else {
            options.error ? options.error(err) : ''
        }
        options.complete ? options.complete() : ''
    });
}

/*
* @method sendEvent  自定义事件广播
* @param {String} name 广播事件名称
* @param {Object} extra 广播传递的参数
*/
function sendEvent(name, extra) {
    if(!name) return false;
    api.sendEvent(Object.assignNew({}, {"name":name}, extra || {}));
}

/*
* @method sendEvent  页面跳转
* @param {String} name 页面名称
* @param {String} url  页面路径
* @param {Object} extra 其他参数
*/
function openWin(name, url, extra) {
    if(!name || !url) return false;
    api.openWin(Object.assignNew({},{"name":name,"url":url}, extra || {}))
}

/*
* @method backWin  返回上一页面
*/
function backWin() {
    api.closeWin({});
}

/*
* @method showProgress  显示进度提示框
* @param {String} title 标题
* @param {Object} extra 其他参数
*/
function showProgress(title,extra) {
  if(!title) return false;
  api.showProgress(Object.assignNew({},{"title":title}, extra || {}));
}
