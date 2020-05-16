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
                    $('.modal').modal('show');
                    $('.modal-body>p').text('输入不能为空，请重新输入...')
                    return;
                }
            },
            success: function (res) {
                $('.modal').modal('show');
                $('.modal-body>p').text(res.msg)
                if (res.code == 200) {
                    $('.modal').on('hidden.bs.modal', function (e) {
                        localStorage.setItem('token', res.token)
                        location.href = './index.html'
                    })
                }
            }
        })
    })
})