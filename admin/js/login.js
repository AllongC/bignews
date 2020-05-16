$(function () {
    $('.login_form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/user/login',
            data: $(this).serialize(),
            beforeSend: function () {
                var flag = true;
                $('.login_form input[name]').each(function (index, ele) {
                    if ($.trim($(ele).val()) == '') {
                        flag = false;
                    }
                })
                if (!flag) {
                    alert('输入不能为空，请重新输入...')
                    return;
                }
            },
            success: function (res) {
                if (res.code == 200) {
                    alert('登录成功...');
                    location.href = './index.html'
                } else {
                    alert('账户或密码输入有误，请重新输入...')
                }
            }
        })
    })
})