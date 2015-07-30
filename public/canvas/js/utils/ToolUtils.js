/**
 * Created by germini on 7/28/15.
 */
function getHexRandom() {
    var h = Math.ceil(Math.random() * 15);
    if (h > 9) {
        switch (h) {
            case 10:
                h = 'A';
                break;

            case 11:
                h = 'B';
                break;

            case 12:
                h = 'C';
                break;

            case 13:
                h = 'D';
                break;

            case 14:
                h = 'E';
                break;

            case 15:
                h = 'F';
                break;

            default :
                h = 'A';
                break;
        }
    }

    return h;
}


module.exports = {

    colorRandom: function () {
        var c = '#';
        for (var i = 0; i < 6; i++) {
            c += getHexRandom();
        }
        return c;
    }
};