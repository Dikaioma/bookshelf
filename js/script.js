/* 
    <div class="card d-inline-flex m-3" title="">
        <div class="card-img-top" style="background-image: url('')"></div>
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <a href="" class="btn btn-primary">amazon</a>
        </div>
    </div>  
*/
var Bookshelf = [
    {
        title: 'Man\'s Search for Meaning',
        author: 'Viktor E. Frankl',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51SeNZ7atYL._SX330_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807060100/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1563500214&sr=8-2'
    },
    {
        title: 'The Hobbit and the Lord of the Rings',
        author: 'J. R. R. Tolkien',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41thSfviRBL._BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/J-Tolkien-Tie-Fellowship-Paperback/dp/B01FODEHEM/ref=sr_1_9?keywords=J.R.R.+Tolkien+4-Book+Boxed+Set%3A+The+Hobbit+and+The+Lord+of+the+Rings&qid=1563539905&s=gateway&sr=8-9'
    },
    {
        title: 'The Lord Of The Rings Trilogy',
        author: 'J. R. R. Tolkien',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51nsXf6oNoL._SX332_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Lord-Rings-Trilogy-Omnibus-Fellowship/dp/B01N03HLZZ/ref=sr_1_fkmr0_1?keywords=2001+%E2%80%93+Lord+of+the+Rings+%E2%80%93+Omnibus+%E2%80%93+Book+Club+Edition-+Hardcover+%E2%80%93+SFBC&qid=1563565617&s=gateway&sr=8-1-fkmr0'
    },
    {
        title: 'The Great Tales of Middle-earth',
        author: 'J. R. R. Tolkien',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41Fi3r9w1FL._SY498_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Great-Tales-Middle-earth-Children-Gondolin/dp/0358003911/ref=sr_1_2?crid=2G1JQ4PVHVTOI&keywords=tolkien+books&qid=1563539783&s=gateway&sprefix=tolkien%2Caps%2C135&sr=8-2'
    },
    {
        title: 'The Silmarillion',
        author: 'J. R. R. Tolkien',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51ifglKUJ3L._SX298_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Silmarillion-J-R-R-Tolkien/dp/0345325818/ref=tmm_mmp_swatch_0?_encoding=UTF8&qid=1563540616&sr=8-1'
    },
    {
        title: 'Unfinished Tales of Númenor and Middle-earth',
        author: 'J. R. R. Tolkien',
        image: 'https://images-na.ssl-images-amazon.com/images/I/415xT9twsbL._SX331_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Unfinished-N%C3%BAmenor-Middle-earth-J-R-R-Tolkien/dp/0544337999/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1564577841&sr=8-1'
    },
    {
        title: 'The Book Thief',
        author: 'Markus Zusak',
        image: 'https://i.ebayimg.com/images/a/T2eC16ZHJGoE9nuQgjbWBRIQ,ThU3w~~/s-l640.jpg',
        link: 'https://www.ebay.com/p/Book-ThiefThe-by-Markus-Zusak-Paperback-2007/57571668?iid=401668592143&chn=ps&norover=1&mkevt=1&mkrid=711-117182-37290-0&mkcid=2&itemid=401668592143&targetid=537215840528&device=c&mktype=pla&googleloc=9004348&poi=&campaignid=1881946464&mkgroupid=70435645632&rlsatarget=pla-537215840528&abcId=1139336&merchantid=6296724&gclid=CjwKCAjw-ITqBRB7EiwAZ1c5U0PaUtpPQK1tx6MTnTiNHnGel7xgL1L_00-HbZN1190bvnYs-_OyShoCygcQAvD_BwE&thm=1000'
    },
    {
        title: 'Seven Wonders Book 1: The Colossus Rises',
        author: 'Peter Lerangis',
        image: 'https://images-na.ssl-images-amazon.com/images/I/518qai%2BcFML._SX334_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Seven-Wonders-Book-Colossus-Rises/dp/006207041X/ref=sr_1_1?crid=2YD1BSL58L0I1&keywords=seven+wonders+book+series&qid=1564620134&s=gateway&sprefix=seven+w%2Caps%2C137&sr=8-1'
    },
    {
        title: 'Seven Wonders Book 2: Lost in Babylon',
        author: 'Peter Lerangis',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51B16dGkwvL._SX334_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Seven-Wonders-Book-Lost-Babylon/dp/0062070444/ref=sr_1_3?crid=2YD1BSL58L0I1&keywords=seven+wonders+book+series&qid=1564620134&s=gateway&sprefix=seven+w%2Caps%2C137&sr=8-3'
    },
    {
        title: 'Seven Wonders Book 3: The Tomb of Shadows',
        author: 'Peter Lerangis',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51D8jgqW7nL._SX333_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Seven-Wonders-Book-Tomb-Shadows/dp/0062070479/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1564620134&sr=8-2'
    },
    {
        title: 'Seven Wonders Book 4: The Curse of the King',
        author: 'Peter Lerangis',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51t1YATugmL._SX326_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Seven-Wonders-Book-Curse-King/dp/0062070509/ref=sr_1_16?keywords=seven+wonders+book+4&qid=1564620178&s=gateway&sr=8-16'
    },
    {
        title: 'Seven Wonders Book 5: The Legend of the Rift',
        author: 'Peter Lerangis',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51di-7uhYCL._SX328_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Seven-Wonders-Book-Legend-Rift/dp/0062070533/ref=sr_1_1?keywords=seven+wonders+book+4&qid=1564620178&s=gateway&sr=8-1'
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51Z1JgrcufL._SX290_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Collectors-Library-Melville-Herman-Hardcover/dp/B00IIB4C7U/ref=sr_1_2?keywords=moby+dick+collectors+library+hardcover&qid=1564782731&s=gateway&sr=8-2'
    },
    {
        title: 'Lubavitcher Rabbis Memoirs',
        author: 'Yosef Yitzchok Schneersohn',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41xndYOoOSL._SX331_BO1,204,203,200_.jpg',
        link: 'https://www.amazon.com/Lubavitcher-Rabbis-Memoirs-2-Set/dp/0826606202/ref=sr_1_2?crid=KV4BTEYNEQLV&keywords=lubavitcher+rebbe+memoirs&qid=1564783394&s=gateway&sprefix=lubav%2Caps%2C130&sr=8-2'
    },
    // {
    //     title: '',
    //     author: '',
    //     image: '',
    //     link: ''
    // },
    // {
    //     title: '',
    //     author: '',
    //     image: '',
    //     link: ''
    // },
];
// '<a href="'+book.link+'" target="_blank"><i class="fab fa-ebay"></i></a>'+
// <i class="fab fa-amazon"></i>
$( document ).ready(function() {
    var html = '';
    for(var i=0; i < Bookshelf.length; i++) {
        var book = Bookshelf[i];
        html += '<div class="card d-inline-flex m-3">'+
                    '<img class="card-img-top" src="'+book.image+'" width=100%>'+
                    '<hr>'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">'+book.title+'</h5>'+
                        '<p class="card-text">'+book.author+'</p>'+
                        '<a class="btn btn-primary" href="'+book.link+'" target="_blank">view</a>'+
                    '</div>'+
                '</div>';
    }

    $('.bookshelf').html(html);
    

});

// console.log(modal);
// console.log(Bookshelf[0]);
// var book = '<div>pizza</div>';
// $('body').append('<div>pizza</div>');

// var $newdiv1 = $( "<div id='object1'></div>" ),
//     newdiv2 = document.createElement( "div" ),
//     existingdiv1 = document.getElementById( "foo" );
 
// $( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );
