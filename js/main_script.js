var textclassifier = { "img": "null", 
                       "title": "Document Classification using Backpropagation Networks",
                       "details": " to be updated soon;to be updated soon;to be updated soon;to be updated soon;to be updated soon",
                       "date" : "Fall 2013" };
var ads = { "img": "null", 
                       "title": "Alumni Database System",
                       "details": " to be updated soon;to be updated soon;to be updated soon;to be updated soon;to be updated soon",
                       "date" : "Spring 2012" };
var chatroom = { "img": "null", 
                       "title": "Chat Room",
                       "details": " to be updated soon;to be updated soon;to be updated soon;to be updated soon;to be updated soon",
                       "date" : "Spring 2012" };


var ProjectDetails = [ textclassifier,ads, chatroom];


$(document).ready(function() {
    $("div.tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.project-tab>div.project-tab-content").removeClass("active");
        $("div.project-tab>div.project-tab-content").eq(index).addClass("active");
    });
});


$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        
});

$("#pro1").click (function(e){
var json = ProjectDetails[0];

$("#ProjectContent").append( '<img src=" img\neural_network.gif">Hello</img>');

});

$("#1").click(function(e) {
        
        $("#home").show();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#2").click(function(e) {
          
        $("#home").hide();
        $("#bio").show();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#3").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").show();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#4").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").show();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#5").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").show();
        $("#contact").hide();
        
});
$("#6").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").show();
        
});
$("#down_to_bio").click(function(e) {
        
        $("#home").hide();
        $("#bio").show();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#down_to_work").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").show();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#down_to_projects").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").show();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#down_to_research").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").show();
        $("#contact").hide();
        
});
$("#down_to_contact").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").show();
        
});

$("#to_home").click(function(e) {
        
        $("#home").show();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#to_bio").click(function(e) {
        
        $("#home").hide();
        $("#bio").show();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#to_work").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").show();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#to_projects").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").show();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#to_research").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").show();
        $("#contact").hide();
        
});

$("#btnContactUs").click(function(e) {



var from =  $("#email").val();
var sub = $("#subject").val();
var name = $("#name").val();
var msg = $("#message").val();
var msg_p  = msg  + ' ' +name;


var json = {
  type: "POST",
  url: "https://mandrillapp.com/api/1.0/messages/send.json",
  data: {
    'key': 'jrD1SkCG5Jwa7AkSwzq7fw',
    'message': { 
        'to': [ {
            'email': 'kirankannarkk.lris@gmail.com',
            'name': 'Kiran Kannar',
            'type': 'to'
          }
            ]

        }
    }
    };
json.data.message['from_email'] = from;
json.data.message['autotext'] = 'true';
json.data.message['subject'] = sub;
json.data.message['html'] = msg_p;

$.ajax(json).done(function(response) {
   
   var x = response[0]["status"];
   if(x == "sent")
        alert("Sent!");
    else
        alert("Failed!");

   console.log(response); // if you're into that sorta thing
 });

});



