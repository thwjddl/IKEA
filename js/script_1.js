function btn_1() {
    let button_1 = document.querySelector('div#box01>article>ul.point>li:nth-child(1)');
    let button_2 = document.querySelector('div#box01>article>ul.point>li:nth-child(2)');
    let button_3 = document.querySelector('div#box01>article>ul.point>li:nth-child(3)');

    let num = 0;
    let target = document.querySelector('div#box01>article>ul>li').clientWidth;

    button_1.addEventListener('click', move_1);
    button_2.addEventListener('click', move_2);
    button_3.addEventListener('click', move_3);

    function move_1() {
        num = 0;
        setTimeout(motion, 10);
    }
    function move_2() {
        num = target;
        setTimeout(motion, 10);
    }
    function move_3() {
        num = target * 2;
        setTimeout(motion, 10);
    }
    function motion() {
        document.querySelector('div#box01>article>ul:nth-child(1)').style.left = -num + 'px';
    }

    let i = 0;
    function hap() {
        console.log(i++);
        if (i == 1) {
            num = 0;
            setTimeout(motion, 100);
        }
        if (i == 2) {
            num = target;
            setTimeout(motion, 100);
        }
        if (i == 3) {
            num = (target * 2);
            setTimeout(motion, 100);
        }
        if ((i > 3)) {
            num = 0;
            i = 0;
        }
    }
    hap();
    let timer = setInterval(hap, 3000);

}
function btn_2() {
    let num = 0;
    let target = document.querySelector('div#box02 article.main>section>figure').clientWidth;

    let button_1 = document.querySelector('div#box02 article.show>ul>li:nth-child(1)');
    let button_2 = document.querySelector('div#box02 article.show>ul>li:nth-child(2)');
    let button_3 = document.querySelector('div#box02 article.show>ul>li:nth-child(3)');
    let button_4 = document.querySelector('div#box02 article.show>ul>li:nth-child(4)');
    let button_5 = document.querySelector('div#box02 article.show>ul>li:nth-child(5)');


    button_1.addEventListener('click', move_1);
    button_2.addEventListener('click', move_2);
    button_3.addEventListener('click', move_3);
    button_4.addEventListener('click', move_4);
    button_5.addEventListener('click', move_5);

    function move_1() {
        num = (target * 0);
        setTimeout(act, 10);
    }
    function move_2() {
        num = (target * 1);
        setTimeout(act, 10);
    }
    function move_3() {
        num = (target * 2);
        setTimeout(act, 10);
    }
    function move_4() {
        num = (target * 3);
        setTimeout(act, 10);
    }
    function move_5() {
        num = (target * 4);
        setTimeout(act, 10);
    }

    function act() {
        document.querySelector('div#box02 article.main>section').style.left = -num + 'px';
    }
}

function btn_3() {
    let num = 0;
    let article = document.querySelector('div#box03 article');

    let box = document.querySelector('div#box03 article');
    let temp = document.querySelector('div#box03 article>ul').cloneNode(true);
    box.append(temp);

    article.addEventListener('mouseout', play);
    article.addEventListener('mouseover', stop);
    play();
    function play() {
        pMove = setInterval(move, 10);

    }
    function stop() {
        clearInterval(pMove);
    }

    function move() {
        num += 1;
        article.style.left = -num + 'px';

    }

}

function btn_5() {
    let pre = document.querySelector('div#box05>article>p.prev');
    let next = document.querySelector('div#box05>article>p.next');

    let num = 0;
    let target = document.querySelector('div#box05 div#all>figure').clientWidth;
    console.log(target);

    pre.addEventListener('click', Prev);
    next.addEventListener('click', Next);

    //복제
    let box = document.querySelector('div#box05 div#show');
    let temp = document.querySelector('div#box05 div#show>div#all').cloneNode(true);
    box.append(temp);

    function motion() {
        document.querySelector('div#box05 div#show').style.left = num + 'px';
    }

    function Prev() {
        num -= target;
        if (num <= -(target * 5)) {
            num = 0;
        }
        setTimeout(motion, 10);
    }
    function Next() {
        num += target;
        if (num >= 0) {
            num = -(target * 4)
        }
        setTimeout(motion, 10);
    }
}
btn_1();
btn_2();
btn_3();
btn_5();