function box_4() {
    let btn_1 = $('div#box04 div.all ul>li:nth-child(1)');
    let btn_2 = $('div#box04 div.all ul>li:nth-child(2)');
    let btn_3 = $('div#box04 div.all ul>li:nth-child(3)');
    let dt = $('div#box04 div.all dl>dt');
    let dd = $('div#box04 div.all dl>dd:nth-child(2)');
    let img = $('div#box04 img');

    btn_1.on('click', function () {
        img.attr('src', 'image/new1 (1).png');
        dt.text('ÄPPLARYD 에플라뤼드');
        dd.text('25,000 사이클의 마모성 테스트를 완료한 커버입니다. 15,000 사이클 이상을 견디는 커버는 일반적인 가정용으로 적합합니다.')
    })
    btn_2.on('click', function () {
        img.attr('src', 'image/new1 (2).png');
        dt.text('OLDERDALEN 올데르달렌');
        dd.text('SJÖMÄRKE 셰메르케 무선충전기는 지저분한 케이블이 보이지 않도록 침대협탁에 설치할 수 있어요.')
    })
    btn_3.on('click', function () {
        img.attr('src', 'image/new1 (3).png');
        dt.text('NYMÅNE 뉘모네');
        dd.text('클래식하지만 감각적인 디자인이 매력적인 NYMÅNE/뉘모네 시리즈는 어떤 스타일과도 잘 어울립니다. 시리즈에 포함된 여러 조명을 함께 사용해 통일감 있는 인테리어를 연출해보세요.');
    })

}