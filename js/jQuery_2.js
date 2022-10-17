function click_1() {
    let btn_1 = $('div.Kategorie>ul>li:nth-child(1)');
    let btn_2 = $('div.Kategorie>ul>li:nth-child(2)');
    let btn_3 = $('div.Kategorie>ul>li:nth-child(3)');
    let btn_4 = $('div.Kategorie>ul>li:nth-child(4)');
    let button = $('div.box>p');

    btn_1.on('click', function () {
        $('.bed').hide();
        $('.closet').hide();
        $('.table').hide();
        $('.chair').show();
        button.hide();
    });
    btn_2.on('click', function () {
        $('.bed').hide();
        $('.closet').hide();
        $('.table').show();
        $('.chair').hide();
        button.hide();
    });
    btn_3.on('click', function () {
        $('.bed').show();
        $('.closet').hide();
        $('.table').hide();
        $('.chair').hide();
        button.hide();
    });
    btn_4.on('click', function () {
        $('.bed').hide();
        $('.closet').show();
        $('.table').hide();
        $('.chair').hide();
        button.hide();
    });

}

function color() {
    let color_1 = $('div.color>dl>dd:nth-child(2)');
    let color_2 = $('div.color>dl>dd:nth-child(3)');
    let color_3 = $('div.color>dl>dd:nth-child(4)');
    let color_4 = $('div.color>dl>dd:nth-child(5)');
    let color_5 = $('div.color>dl>dd:nth-child(6)');

    color_1.on('click', function () {
        $('.white').show();
        $('.ivory').hide();
        $('.gray').hide();
        $('.brown').hide();
        $('.color_sub').hide();
    });
    color_2.on('click', function () {
        $('.white').hide();
        $('.ivory').show();
        $('.gray').hide();
        $('.brown').hide();
        $('.color_sub').hide();
    });
    color_3.on('click', function () {
        $('.white').hide();
        $('.ivory').hide();
        $('.gray').show();
        $('.brown').hide();
        $('.color_sub').hide();
    });
    color_4.on('click', function () {
        $('.white').hide();
        $('.ivory').hide();
        $('.gray').hide();
        $('.brown').show();
        $('.color_sub').hide();
    });
    color_5.on('click', function () {
        $('.white').hide();
        $('.ivory').hide();
        $('.gray').hide();
        $('.brown').hide();
        $('.color_sub').show();
    });
}