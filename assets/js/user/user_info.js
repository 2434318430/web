$(function() {
    var form = layui.form

    form.verify({
        nickname: function(value) {
            if (value.length > 6) {
                return '昵称长度必须在1-6'
            }
        }
    })
    initUserInfo()

    function initUserInfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('获取用户信息失败！')
                }
                console.log(res);
                form.val('formUserInfo', res.data)
            }
        })
    }
})