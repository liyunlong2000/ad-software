function updateUrl(user_id){
    //更新url
    let searchParams = new URLSearchParams(window.location.search);
    // 修改参数值
    searchParams.set('user_id', user_id);
    // 创建一个新的 URL，替换当前的 URL 但不刷新页面
    window.history.replaceState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
 }
 
 function updateHref(user_id){
   //更新href链接
   const queryStr = window.location.search; 
   const home_href = document.getElementById('home_href'); 
   home_href.href = '/index'+'?user_id='+user_id;
   const fan_href = document.getElementById('fan_href'); 
   fan_href.href = '/fanPortrait'+'?user_id='+user_id;
   const analysis_href = document.getElementById('analysis_href'); 
   analysis_href.href = '/workAnalysis'+'?user_id='+user_id;
 }
 
 