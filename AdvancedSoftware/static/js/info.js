
function updateUserInfo(user_id){
    $.ajax({
        url: '/updateUserInfo'+'?user_id='+user_id,
        data: {user_id:user_id},
        method: 'GET',
        success: function (data) {
          // alert("success!")
          document.getElementById('user_id').innerHTML= data.user_id;
          document.getElementById('user_brief').innerHTML= data.user_brief;
          // document.getElementById('user_label').innerHTML= data.user_label;
          document.getElementById('user_name').innerHTML= data.user_name;

          // document.getElementById('user_birthday').innerHTML= data.user_birthday;
          // alert("data.user_birthday")
          // alert(data.user_level)
          document.getElementById('user_level').innerHTML= data.user_level;


          document.getElementById('user_fans').innerHTML= data.user_fans;
          document.getElementById('user_follows').innerHTML= data.user_follows;
          document.getElementById('user_view').innerHTML= data.user_view;
 
          document.getElementById('user_likes').innerHTML= data.user_likes;
          
          document.getElementById('recent_works_num').innerHTML= data.recent_works_num;
          document.getElementById('hot_works_num').innerHTML= data.hot_works_num;

          document.getElementById('fans_num').innerHTML= data.fans_num;
          document.getElementById('avg_playback').innerHTML= data.avg_playback;

          document.getElementById('avg_interaction').innerHTML= data.avg_interaction;
          document.getElementById('interaction_rate').innerHTML= data.interaction_rate;

          document.getElementById('commercial_work').innerHTML= data.commercial_work;
          document.getElementById('recent_promotions').innerHTML= data.recent_promotions;
          document.getElementById('recent_lanyard_ads').innerHTML= data.recent_lanyard_ads;
          document.getElementById('implant_video').innerHTML= data.implant_video;

          document.getElementById('customized_video').innerHTML= data.customized_video;
          document.getElementById('cpe').innerHTML= data.cpe;
          document.getElementById('cpm').innerHTML= data.cpm;
        
        }
      });
}
