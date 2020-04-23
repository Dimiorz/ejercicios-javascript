$('.div1').attr('id','id1');
console.log($('.div1').attr('class'));
console.log($('#id1').attr('id'));

var link = $('#link').attr('href');
console.log(link);

$('#link').click(function(e){
    e.preventDefault();
    location.href = link;
});