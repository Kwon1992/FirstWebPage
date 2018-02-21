// $(CSS Selector).doSomething(); - jQuery 기본 문법

// $("header").click(function () {
//     console.log("header clicked");
// });

// 위와 아래의 코드가 같음.
// header.addEventListener("click", function() {
//     console.log("header clicked");
// });

//*************************************************************************************

// jQuery가 생각보다 용량이 크기 때문에 간단한 작업을 할 때 굳이 jQuery를 쓸 필요가 없을 수도 있다.
// http://youmightnotneedjquery.com 를 참고하면 jQuery -> vanilla 로 사용하는 방법에 대해 적혀있다. (You Might Not Need jQuery)
// api.jquery.com

//*************************************************************************************

// (동적인 styling이 가능)

// $("header").css(background-color);
// $("header").css({"background-color":"black"});
// css("propertyName") :: 해당 property가 가지고 있는 현재 값을 반환.
// css( {propertyName : value} ) :: 해당 property가 value를 가지도록 함.


// $("header").addClass("border");
// $("header").click(function() {
//     $("header").removeClass("border");
// })
// css를 이용해 직접 변경하는 것 보다는 class를 추가 / 제거 하면서 동작시키는 방법도 있다.
// 이 떄 class란 css에 미리 정의해둔 class를 사용한다.

//*************************************************************************************

// $("header").click(function () {
//     $(this).toggleClass("ClassName");
// });
// header를 클릭하면 className이 add되었다 remove되었다 한다 - jQeury에서 지원해줌!

//*************************************************************************************

// $("header").hover(
//     function () {
//        $(this).addClass();// mouse가 올라갔을 때 동작
//     },
//
//     function () {
//        $(this).addClass();// mouse가 나왔을 때 동작
//     });

//*************************************************************************************

// {
//     name : "Ford";
//     color : "black";
//
//     // border-top : "solid 2px black";
//     // "border-top" : "solid 2px black";
//     // 위에 것은 안되는데 아래 것은 가능함.
//
//     whattodo : function(){}; // 함수가 javascript에서 1차 자료형이므로 이런 식으로 사용도 가능하다.
// }

// var carObject = {};
// var func = function() {};
//
// carObject.name = "Ford";
// carObject.color = "black";
// carObject["border-top"] = "solid 2px black"; // Map인것처럼 Key - Value 처럼 저장 (javascript의 obejct는 Map이다)
// // 동적으로 객체에 var 추가 가능
//
// delete carObject.color;
// // 동적으로 객체의 var 삭제 가능

//*************************************************************************************
//*************************************************************************************
//*************************************************************************************

// real implementation parts below.

// $("#logo").click(function () {
//    // $("#moveUp").toggleClass("hidden");
//     $("#moveUp").animate({"top" : "110%"},1000);
// });

function moveUp() {
    console.log("clicked");
    $("html, body").animate({"scrollTop" : 100});
    if (!animating) {
        animating = true;
        $("#moveUp").animate({"opacity": 1, "top": "90%"}, 300, function () { animating = false; } );
        // 마지막 function은 animating이 끝났을 때 할 행동을 지시함.
    }

    // 마지막 function은 animating이 끝났을 때 할 행동을 지시함.

}

$("#moveUp").click(moveUp);



var animating = false;

$(window).scroll(function () {
    var scrolled = $(this).scrollTop();
    console.log(scrolled);
    if (scrolled >= 800 && !animating) {
            animating = true;
            $("#moveUp").animate({"opacity": 1, "top": "90%"}, 300, function () { animating = false; } );
            // 마지막 function은 animating이 끝났을 때 할 행동을 지시함.
    } else if (scrolled <= 500  && !animating) {
        animating = true;
        $("#moveUp").animate({"opacity": 0, "top": "100%"}, 300, function () { animating = false; } );
        // 마지막 function은 animating이 끝났을 때 할 행동을 지시함.
    }
});

// 어느 정도 위로 올라오면 화살표를 제거하기 위해 else if문을 추가 했더니 제대로 동작하지 않음.
// 제대로 동작하지 않음 -> 매우 느리게 동작!!!
// scroll할 때마다 동작해서 계속해서 animate가 호출되어서....



// .animate( properties [, duration ] [, easing ] [, complete ] )

// properties
// Type: PlainObject
// An object of CSS properties and values that the animation will move toward.

// duration (default: 400)
// Type: Number or String
// A string or number determining how long the animation will run. (몇 초동안 ANIMATION을 동작하게 할 것인가)

// easing (default: swing)
// Type: String
// A string indicating which easing function to use for the transition.

// complete
// Type: Function()
// A function to call once the animation is complete, called once per matched element.

