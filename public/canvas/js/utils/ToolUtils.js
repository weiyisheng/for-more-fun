/**
 * Created by germini on 7/28/15.
 */
var Constants = require('../constants/ActionConstant');

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

function setMoveStatus(move, status, clickDrop, d) {
    if (move) {
        status.moveDrop = clickDrop;
        status.moveDirection = d;
        status.dropIdChangeTo = status.currentEmpty;
        status.currentEmpty = clickDrop;
    } else {
        status.moveDrop = null;
        status.moveDirection = null;
        status.dropIdChangeTo = null;
    }

    return status;
}


module.exports = {

    colorRandom: function () {
        var c = '#';
        for (var i = 0; i < 6; i++) {
            c += getHexRandom();
        }
        return c;
    },

    calculateMoveStatus: function (clickDrop, status) {

        switch (clickDrop) {
            case '1':
                if (status.currentEmpty == '2') {
                    status = setMoveStatus(true, status, clickDrop, Constants.RIGHT)
                } else if (status.currentEmpty == '4') {
                    status = setMoveStatus(true, status, clickDrop, Constants.DOWN)
                } else {
                    status = setMoveStatus(false, status)
                }
                break;

            case '2':
                if (status.currentEmpty == '1') {
                    status = setMoveStatus(true, status, clickDrop, Constants.LEFT)
                } else if (status.currentEmpty == '3') {
                    status = setMoveStatus(true, status, clickDrop, Constants.RIGHT)
                } else if (status.currentEmpty == '5') {
                    status = setMoveStatus(true, status, clickDrop, Constants.DOWN)
                } else {
                    status = setMoveStatus(false, status)
                }
                break;

            case '3':
                if (status.currentEmpty == '2') {
                    status = setMoveStatus(true, status, clickDrop, Constants.LEFT)
                } else if (status.currentEmpty == '6') {
                    status = setMoveStatus(true, status, clickDrop, Constants.DOWN)
                } else {
                    status = setMoveStatus(false, status)
                }
                break;

            case '4':
                if (status.currentEmpty == '1') {
                    status = setMoveStatus(true, status, clickDrop, Constants.UP)
                } else if (status.currentEmpty == '5') {
                    status = setMoveStatus(true, status, clickDrop, Constants.RIGHT)
                } else if (status.currentEmpty == '7') {
                    status = setMoveStatus(true, status, clickDrop, Constants.DOWN)
                } else {
                    status = setMoveStatus(false, status)
                }
                break;

            case '5':
                if (status.currentEmpty == '2') {
                    status = setMoveStatus(true, status, clickDrop, Constants.UP)
                } else if (status.currentEmpty == '4') {
                    status = setMoveStatus(true, status, clickDrop, Constants.LEFT)
                } else if (status.currentEmpty == '6') {
                    status = setMoveStatus(true, status, clickDrop, Constants.RIGHT)
                } else if (status.currentEmpty == '8') {
                    status = setMoveStatus(true, status, clickDrop, Constants.DOWN)
                } else {
                    status = setMoveStatus(false, status)
                }
                break;

            case '6':
                if (status.currentEmpty == '3') {
                    status = setMoveStatus(true, status, clickDrop, Constants.UP)
                } else if (status.currentEmpty == '5') {
                    status = setMoveStatus(true, status, clickDrop, Constants.LEFT)
                } else if (status.currentEmpty == '9') {
                    status = setMoveStatus(true, status, clickDrop, Constants.DOWN)
                } else {
                    status = setMoveStatus(false, status)
                }
                break;

            case '7':
                if (status.currentEmpty == '4') {
                    status = setMoveStatus(true, status, clickDrop, Constants.UP)
                } else if (status.currentEmpty == '8') {
                    status = setMoveStatus(true, status, clickDrop, Constants.RIGHT)
                } else {
                    status = setMoveStatus(false, status)
                }
                break;

            case '8':
                if (status.currentEmpty == '5') {
                    status = setMoveStatus(true, status, clickDrop, Constants.UP)
                } else if (status.currentEmpty == '7') {
                    status = setMoveStatus(true, status, clickDrop, Constants.LEFT)
                } else if (status.currentEmpty == '9') {
                    status = setMoveStatus(true, status, clickDrop, Constants.RIGHT)
                } else {
                    status = setMoveStatus(false, status)
                }
                break;

            case '9':
                if (status.currentEmpty == '6') {
                    status = setMoveStatus(true, status, clickDrop, Constants.UP)
                } else if (status.currentEmpty == '8') {
                    status = setMoveStatus(true, status, clickDrop, Constants.LEFT)
                } else {
                    status = setMoveStatus(false, status)
                }
                break;

            default :
                break;
        }

        return status
    }
};
















