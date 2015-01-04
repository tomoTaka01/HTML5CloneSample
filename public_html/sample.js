$(function () {
    // regist delete(jQuery) button event
    $('input[name="delButtonJq"]').on('click', function () {
        $(this).closest('tr').remove();
    });
    // clone by JavaScript
    document.getElementById('cloneJs').addEventListener('click', function () {
        var startTime = Date.now();
        var cloneCnt = document.getElementById('cloneCount').value;
        var target = document.getElementById('clonebody');
        var firstTr = target.getElementsByTagName('tr')[0];
        for (var i = 0; i < cloneCnt; i++) {
            var nextNo = noFunc.getNo();
            var clonedTr = firstTr.cloneNode(true);
            // set no
            clonedTr.childNodes[1].textContent = nextNo;
            // get gender input
            var genderInput = clonedTr.childNodes[7];
            // set gender input name
            genderInput.children[0].name = "gender" + nextNo;
            genderInput.children[1].name = "gender" + nextNo;
            // get delete button
            clonedTr.childNodes[11].children[0].setAttribute('data-ix', nextNo - 1);
            // append cloned tr
            target.appendChild(clonedTr);
        }
        var endTime = Date.now();
        calcTime(startTime, endTime);
    });
    // clone by jQuery
    $('#cloneJq').on('click', function () {
        var startTime = Date.now();
        var cloneCnt = $('#cloneCount').val();
        var target = $('#clonebody');
        var firstTr = target.children('tr:first');
        for (var i = 0; i < cloneCnt; i++) {
            var nextNo = noFunc.getNo();
            var clonedTr = firstTr.clone(true);
            // set no
            clonedTr.find('td:first').text(nextNo);
            // get gender input
            var genders = clonedTr.find('[name="gender0"]');
            var len = genders.length;
            for (var y = 0; y < len; y++) {
                // set gender input name
                genders[y].name = 'gender' + nextNo;
            }
            // append cloned tr
            clonedTr.appendTo(target);
        }
        var endTime = Date.now();
        calcTime(startTime, endTime);
    });

    function calcTime(startTime, endTime) {
        var time = endTime - startTime;
        var mill = time % 1000;
        var sec = ((time - mill) / 1000) % 60;
        $('#clonetime').text("time is " + sec + ":" + mill);
    }
});

function deleteTr(targetEle) {
    var dataIx = targetEle.getAttribute('data-ix');
    var targetTr = document.getElementsByTagName('tr')[dataIx];
    targetTr.remove();
}

/*
 * Numbering function
 */
var noFunc = {
    nowNo: 1,
    addNo: function () {
        this.nowNo++;
    },
    getNo: function () {
        this.nowNo++;
        return this.nowNo;
    }
};
