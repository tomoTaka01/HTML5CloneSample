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
    // create by JavaScript
    document.getElementById('createJs').addEventListener('click', function(){
        var startTime = Date.now();
        var cloneCnt = document.getElementById('cloneCount').value;
        var target = document.getElementById('clonebody');
        for (var i = 0; i < cloneCnt; i++) {
            var nextNo = noFunc.getNo();
            var newTr = document.createElement('tr');
            // No
            var noTd = document.createElement('td');
            noTd.appendChild(document.createTextNode(nextNo));
            newTr.appendChild(noTd);
            // Name
            var nameTd = document.createElement('td');
            var nameIn = document.createElement('input');
            nameIn.type = 'text';
            nameIn.name = 'name';
            nameIn.maxlength = 10;
            nameIn.value = "name" + nextNo;
            nameTd.appendChild(nameIn);
            newTr.appendChild(nameTd);
            // age
            var ageTd = document.createElement('td');
            var ageIn = document.createElement('select');
            for(var ix=1;ix<=6;ix++){
                var opt = document.createElement('option');
                opt.text = ix;
                opt.value=ix;
                ageIn.add(opt);
            }
            ageIn.value = 1;
            ageTd.appendChild(ageIn);
            newTr.appendChild(ageTd);
            // gender
            var genderTd = document.createElement('td');
            var genderIn1 = document.createElement('input');
            genderIn1.type = 'radio';
            genderIn1.name = 'gender' + nextNo;
            genderIn1.value = 'male';
            genderIn1.text = 'male';
            var genderIn2 = document.createElement('input');
            genderIn2.type = 'radio';
            genderIn2.name = 'gender' + nextNo;
            genderIn2.value = 'female';
            genderIn2.text = 'female';
            genderTd.appendChild(genderIn1);
            genderTd.appendChild(document.createTextNode('male'));
            genderTd.appendChild(genderIn2);
            genderTd.appendChild(document.createTextNode('female'));
            newTr.appendChild(genderTd);
            // lanuage
            var langTd = document.createElement('td');
            var langIn1 = document.createElement('input');
            langIn1.type = 'checkbox';
            langIn1.name = 'Java';
            langIn1.value = 'Java';
            var langIn2 = document.createElement('input');
            langIn2.type = 'checkbox';
            langIn2.name = 'JavaScrip';
            langIn2.value = 'JavaScrip';
            langTd.appendChild(langIn1);
            langTd.appendChild(document.createTextNode('Java'));
            langTd.appendChild(langIn2);
            langTd.appendChild(document.createTextNode('JavaScript'));
            newTr.appendChild(langTd);
            // delete(js)
            var delJsTd = document.createElement('td');
            var delJs = document.createElement('input');
            delJs.type = 'button';
            delJs.name = 'delButtonJs';
            delJs.value = "delete(js)";
            delJs.setAttribute('data-Ix', nextNo - 1);
            delJs.addEventListener('click', function(){
                deleteTr(this);
            });
            delJsTd.appendChild(delJs);
            newTr.appendChild(delJsTd);
            // delete(jQuery)
            var delJqTd = document.createElement('td');
            var delJq = document.createElement('input');
            delJq.type = 'button';
            delJq.name = 'delButtonJq';
            delJq.value = "delete(jQuery)";
            delJqTd.appendChild(delJq);
            newTr.appendChild(delJqTd);
            // add tr to tbody
            target.appendChild(newTr);
        }
        var endTime = Date.now();
        calcTime(startTime, endTime);
    });
    // create by JavaScript()
    document.getElementById('createJs2').addEventListener('click', function(){
        var startTime = Date.now();
        var cloneCnt = document.getElementById('cloneCount').value;
        var target = document.getElementById('clonebody');
        var frag1 = document.createDocumentFragment();
        
        for (var i = 0; i < cloneCnt; i++) {
            var nextNo = noFunc.getNo();
            var newTr = document.createElement('tr');
            // No
            var noTd = document.createElement('td');
            noTd.appendChild(document.createTextNode(nextNo));
            newTr.appendChild(noTd);
            // Name
            var nameTd = document.createElement('td');
            var nameIn = document.createElement('input');
            nameIn.type = 'text';
            nameIn.name = 'name';
            nameIn.maxlength = 10;
            nameIn.value = "name" + nextNo;
            nameTd.appendChild(nameIn);
            newTr.appendChild(nameTd);
            // age
            var ageTd = document.createElement('td');
            var ageIn = document.createElement('select');
            for(var ix=1;ix<=6;ix++){
                var opt = document.createElement('option');
                opt.text = ix;
                opt.value=ix;
                ageIn.add(opt);
            }
            ageIn.value = 1;
            ageTd.appendChild(ageIn);
            newTr.appendChild(ageTd);
            // gender
            var genderTd = document.createElement('td');
            var genderIn1 = document.createElement('input');
            genderIn1.type = 'radio';
            genderIn1.name = 'gender' + nextNo;
            genderIn1.value = 'male';
            genderIn1.text = 'male';
            var genderIn2 = document.createElement('input');
            genderIn2.type = 'radio';
            genderIn2.name = 'gender' + nextNo;
            genderIn2.value = 'female';
            genderIn2.text = 'female';
            genderTd.appendChild(genderIn1);
            genderTd.appendChild(document.createTextNode('male'));
            genderTd.appendChild(genderIn2);
            genderTd.appendChild(document.createTextNode('female'));
            newTr.appendChild(genderTd);
            // lanuage
            var langTd = document.createElement('td');
            var langIn1 = document.createElement('input');
            langIn1.type = 'checkbox';
            langIn1.name = 'Java';
            langIn1.value = 'Java';
            var langIn2 = document.createElement('input');
            langIn2.type = 'checkbox';
            langIn2.name = 'JavaScrip';
            langIn2.value = 'JavaScrip';
            langTd.appendChild(langIn1);
            langTd.appendChild(document.createTextNode('Java'));
            langTd.appendChild(langIn2);
            langTd.appendChild(document.createTextNode('JavaScript'));
            newTr.appendChild(langTd);
            // delete(js)
            var delJsTd = document.createElement('td');
            var delJs = document.createElement('input');
            delJs.type = 'button';
            delJs.name = 'delButtonJs';
            delJs.value = "delete(js)";
            delJs.setAttribute('data-Ix', nextNo - 1);
            delJs.addEventListener('click', function(){
                deleteTr(this);
            });
            delJsTd.appendChild(delJs);
            newTr.appendChild(delJsTd);
            // delete(jQuery)
            var delJqTd = document.createElement('td');
            var delJq = document.createElement('input');
            delJq.type = 'button';
            delJq.name = 'delButtonJq';
            delJq.value = "delete(jQuery)";
            delJqTd.appendChild(delJq);
            newTr.appendChild(delJqTd);
            // add tr to tbody
            frag1.appendChild(newTr);
        }
        target.appendChild(frag1);
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
