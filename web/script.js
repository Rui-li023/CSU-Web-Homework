// 获取日期
var today = new Date();
// 获取当前年月日
var year  = today.getFullYear();
var month = today.getMonth();
var data  = today.getDate();
 
// window.onload = function(){
//     // 循环年份并且显示到页面
//     for( var i = year ; i >= year-40 ; i--){
//         var option = new Option( i , i );
//         // 如果年份等于当前年份 就默认选择
//         // if( i == year ){
//         //     option.selected = true;
//         // }
//         // 添加到id为year的select中
//         $('year').add(option);
//         console.log($('year').value)
//     }
//     // 循环月份
//     for(var j = 1 ; j <= 12 ;j++){
//         var option = new Option( j , j );
//         if( ( j - 1 ) == month ) {
//             option.selected = true;
//         }
//         $('month').add(option);
//     }
//     // 页面加载调用doChange事件
//     doChange();
// }
 
window.onload = function(){
    // 循环年份并且显示到页面
    for( var i = year ; i >= year-40 ; i--){
        var option = new Option( i , i );
        // 如果年份等于当前年份 就默认选择
        // if( i == year ){
        //     option.selected = true;
        // }
        // 添加到id为year的select中
        $('years').add(option);
        console.log($('years').value)
    }
    // 循环月份
    for(var j = 1 ; j <= 12 ;j++){
        var option = new Option( j , j );
        // if( ( j - 1 ) == month ) {
        //     option.selected = true;
        // }
        $('months').add(option);
    }
    // 页面加载调用doChange事件
    doChange();
    
}

 
function doChange(){
    // 把$('date')中的option长度变为0
    $('dates').options.length = 0;
    var length = 31;
    // 获取月份
    var mon = $('months').value;
    // 如果是2月
    if(mon == 2)
    {
        // 平年就是28
        length = 28;
        // 获取年份
        var num = $('years').value;
        // 判断是不是闰年 闰年就是29
        if(( num % 4  == 0 && num % 100 != 0 ) ||  num % 400 == 0 )
        {
            length++; 
        }
    }
    // 定义正则判断月份 4 6 9 11 月
    var reg = / [469]|^11$/;
    // 符合条件就是30天
    if(reg.test(mon))
    {
        length = 30;
    }
    // 然后循环 把值塞进去
    var tmp = new Option("日","")
    $('dates').add(tmp);

    for( var k = 1 ; k <= length ; k++ ){
        var option = new Option( k , k );
        $('dates').add(option);
    }
}
 
// 封装获取id的简化函数
function $(id) {
    return document.getElementById(id);

}