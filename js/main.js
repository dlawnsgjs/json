// 드롭다운 메뉴
$('nav > ul > .menu').mouseenter(function () {
    $('.sub').stop().show();
});
$('nav > ul > .menu').mouseleave(function () {
    $('.sub').stop().hide();
});





// 슬라이드
$(document).ready(function () {
    function prev() {
        $('.slidelist li:last').prependTo('.slidelist');
        $('.slidelist').css('margin-left', -1600);
        $('.slidelist').stop().animate({ marginLeft: 0 }, 1000);
    }

    function next() {
        $('.slidelist').stop().animate({ marginLeft: -1600 }, function () {
            $('.slidelist li:first').appendTo('.slidelist');
            $('.slidelist').css({ marginLeft: 0 });
        });
    }

    function slide() {
        $('.slidelist').stop().animate({ marginLeft: -1600 }, function () {
            $('.slidelist li:first').appendTo('.slidelist');
            $('.slidelist').css({ marginLeft: 0 });
        });
    }
    setInterval(slide, 3000);

    $('.prev').click(function () {
        prev();
    });

    $('.next').click(function () {
        next();
    });
});



// 카테고리 json
$(document).ready(function(){
    $.ajax({
        url: "json/category.json",
        dataType: "json",
        success : function(data){
            console.log('Number of .category elements:', $('.category').length);
            console.log('Data length:', data.length);
            
            if(data.length > 0){
                for(let i = 0; i < data.length; i++){
                    if(i < $('.category').length) {
                        $('.category').eq(i).prepend(`
                            <div class="cate">
                                <a href="sub1.html">
                                    <img src="${data[i].url}" class="imgbox">
                                    <h3 class="gory">${data[i].title}</h3>
                                </a>
                            </div>
                        `);
                    } else {
                        console.warn(`No .category element available for index ${i}`);
                    }
                }
            }
        }
    });
});


// NEW json
$(document).ready(function(){
    $.ajax({
        url: "json/new.json",
        dataType: "json",
        success : function(data){
            console.log('Number of .new_product elements:', $('.new_product').length);
            console.log('Data length:', data.length);
            
            if(data.length > 0){
                for(let j = 0; j < data.length; j++){
                    if(j < $('.new_product').length) {
                        $('.new_product').eq(j).prepend(`
                            <div class="article">
                                <a href="sub1.html">
                                    <img src="${data[j].url}" class="imgbox2">
                                    <br><br>
                                    <h6 class="title">${data[j].title}</h6>
                                </a>
                                <br>
                                <p class="sale">
                                    <del>${data[j].salePrice}</del>
                                    <span>${data[j].sale}</span>
                                    ${data[j].price}
                                </p>
                            </div>
                        `);
                    } else {
                        console.warn(`No .new_product element available for index ${j}`);
                    }
                }
            }
        }
    });
});



// 시즌 json
$(document).ready(function(){
    $.ajax({
        url: "json/season.json",
        dataType: "json",
        success : function(data){
            console.log('Number of .box elements:', $('.box').length);
            console.log('Data length:', data.length);
            
            if(data.length > 0){
                for(let k = 0; k < data.length; k++){
                    if(k < $('.box').length) {
                        $('.box').eq(k).prepend(`
                            <div class="season_box">
                                <a href="sub1.html">
                                    <img src="${data[k].url}" class="imgbox3">
                                </a>
                            </div>
                        `);
                    } else {
                        console.warn(`No .box element available for index ${k}`);
                    }
                }
            }
        }
    });
});