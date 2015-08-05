/**
 * Created by germini on 7/29/15.
 */


module.exports = {
    getTranslate: function (ele) {
        var transform = ele.style.transform;

        if (transform) {
            var a = transform.split(' ');
            var tx;
            var ty;
            for (var i = 0; i < a.length; i++) {
                if (a[i].indexOf('translateY') > -1) {
                    ty = parseFloat(a[i].split('(')[1])
                } else {
                    tx = parseFloat(a[i].split('(')[1])
                }
            }

            return {
                x: tx,
                y: ty
            }
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }


}