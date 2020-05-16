$(document).ready(function () {
    $.ajax({
        type: 'get',
        // url: 'http://localhost:8080/api/v1/admin/user/info',
        url: BigNew.user_info,
        headers: { 'Authorization': localStorage.getItem('token') },
        success: function (res) {
            if (res.code == 200) {
                $('.user_info>img').attr('src', res['data'].userPic)
                $('.user_info>span>i').text(res['data'].nickname)
                $('.user_center_link>img').attr('src', res['data'].userPic)
            }
        }
    })

})