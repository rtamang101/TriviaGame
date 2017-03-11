var panel = $('#quiz-area'); 
var countStartNumber = 15;

$("#start").click(function() {
    console.log("Start Game");
    game.start();
})

$(document).on('click', '.check-guess', function(e) {
    game.clicked(e);
})

$(document).on('click', '#start-over', function() {
   location.reload()
});
$(document).on('click', '#submit', function() {
    game.done()
});

    var randomQuestion = Math.floor(Math.random()*(questionsArray));
    var questionsArray = [{
    	question: "Of Pink Floyd's four most popular albums, which one came out first ?",
    	choices: ["Animals", "Dark Side of the Moon", "The Wall", "Wish You Were Here"],
    	correctChoice: "Dark Side of the Moon"
    }, {	
    	question: "When Jimi Hendrix moved to England, which guitarist took him in and watched as he became famous within a week ?",
    	choices: ["Eric Clapton", "Paul McCartney", "Jimmy Page", "Peter Frampton"],
    	correctChoice: "Eric Clapton"
    }, {
    	question: "Which band's guitarist was known for the windmill style stroking of the guitar ?",
    	choices: ["Creedence Clearwater Revival(CCR)", "The Doors", "Led Zeppelin", "The Who"],
    	correctChoice: "The Who"
    }, {
    	question: "Which band's singer was '... Born a ramblin' man' ?",
    	choices: ["Lynrd Skynrd", "The Allman Brothers", "The Doobie Brothers", "Bob Seger and the Silver Bullet Band"],
    	correctChoice: "The Allman Brothers"
    }, {	
    	question: "Which was not a member of the traveling Wilburys ?",
    	choices: ["Rob Dylan", "Roy Orbison", "Tom Petty", "Eric Clapton"],
    	correctChoice: "Eric Clapton"
    }, {
    	question: "Which band has the single most sold album of all time ?",
    	choices: ["The Eagles", "Pink Floyd", "Michael Jackson", "The Beatles"],
    	correctChoice: "The Eagles"
    }, {
    	question: "Which Beatle song was never a number one hit ?",
    	choices: ["Ticket to Ride", "Hello, Goodbye", "I am the Walrus", "Lady Madonna"],
    	correctChoice: "I am the Walrus"
    }, {
    	question: "Which guitarist asked 'Are you experienced ?' ?",
    	choices: ["Stevie Ray Vaughn", "Bob Dylan", "Jimi Hendrix", "Santana"],
    	correctChoice: "Jimi Hendrix"
    }, {	
    	question: "Which band had a greatest hits album called '10 from 6' ?",
    	choices: ["Boston", "Journey", "Bad Company", "Cheap Trick"],
    	correctChoice: "Bad Company"

    }, {	
    	question: "Which band hits include 'The Big Money', 'Red Sector A', 'Show Dont Tell' and '2112 Overture' ?",
    	choices: ["The Eagles", "The Rolling Stones", "Rush", "Fleetwood Mac"],
    	correctChoice: "Rush"
    }]


var game = {
  correct:0,
  incorrect:0,
  counter:100,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);
    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend('<h2>Time:<span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();

  for(var i=0; i < questionsArray.length; i++) {
        $('#quiz-area').append('<h2>' + questionsArray[i].question + '</h2>');
    for(var j=0; j < questionsArray[i].choices.length; j++) {
        $('#quiz-area').append('<input type="radio" name="answer'+i+'" value="'+questionsArray[i].choices[j]+'"> ' + questionsArray[i].choices[j] );
    }
  }
    
  },
  done: function() {
    $.each($("input[name='answer0']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[0].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
    $.each($("input[name='answer1']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[1].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer2']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[2].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer3']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[3].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer4']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[4].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer5']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[5].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer6']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[6].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer7']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[7].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer8']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[7].correctChoice) {
        game.correct++;
        } else {
        game.incorrect++;
        }
    });

        $.each($("input[name='answer8']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[8].correctChoice) {
        game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer9']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[9].correctChoice) {
        game.correct++;
        } else {
        game.incorrect++;
        }
    });
    game.result();
  },
        result: function() {
        clearInterval(timer);
         $("#quiz-area").empty();
        $("#quiz-area").append("Correct Answers: "+ game.correct + "<br />");
        $("#quiz-area").append("Incorrect Answers: "+ game.incorrect);
      }
  }