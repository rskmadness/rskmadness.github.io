jQuery(function( $ ){
    $( document ).ready(function() {

        var config = {
            1: {
                id: 1,
                name: "South Carolina",
                mastcot: "Gamecocks",
                logo: '<img title="South Carolina" src="/img/2017/SC.svg">',
                seed: 7
            },
            2: {
                id: 2,
                name: "Gonzaga",
                mascot: "Bulldogs",
                logo: '<img title="Gonzaga" src="/img/2017/ZAGA.svg">',
                seed: 1
            },
            3: {
                id: 3,
                name: "Oregon",
                mascot: "Ducks",
                logo: '<img title="Oregon" src="/img/2017/O.svg">',
                seed: 3
            },
            4: {
                id: 4,
                name: "North Carolina",
                mascot: "Tar Heels",
                logo: '<img title="North Carolina" src="/img/2017/UNC.svg">',
                seed: 1
            }
        };

        $('input').prop('checked', false);

        fadeIn();
        function fadeIn(){

        }

        $('.game label').on('click', function( ev ){
            if ($(this).attr("for") != "") {
                $("#" + $(this).attr("for")).click();
            }
        });

        $('#game-1 input, #game-2 input').on('change', function( ev ){
            ev.preventDefault();
            var data = $(this).serializeArray();
            var data = data[0];
            //
            var winner = config[data.value];
            setFinalsTeam(winner);
            checkFinals();
            checkGame1();
            checkGame2();
        });

        $('#pre-game button.button-next').on('click', function(){
            $('#pre-game').fadeOut('normal', function(){
                $('#game-1').fadeIn();
                $('.logo').fadeIn();
            });
        });

        $('#game-1 button.button-next').on('click', function(){
            $('#game-1').fadeOut('normal', function(){
                $('#game-2').fadeIn();
            });
        });

        $('#game-2 button.button-next').on('click', function(){
            $('#game-2').fadeOut('normal', function(){
                $('#finals').fadeIn();
            });
        });


        $('#finals input').on('change', function( ev ){
            var id = $(this).val();
            var winner = config[id];
            setWinner(winner);
            checkFinals();
        });

        function checkGame1(){
            if($('input[name=game1option]').is(':checked')){
                $('#game-1 button.button-next').attr('disabled', false).html('Next');
            } else{
                $('#game-1 button.button-next').attr('disabled', true).html('&nbsp;&nbsp;&nbsp;Pick a Winner&nbsp;&nbsp;&nbsp;');
            }
        }

        function checkGame2(){
            if($('input[name=game2option]').is(':checked')){
                $('#game-2 button.button-next').attr('disabled', false).html('Next');
            } else{
                $('#game-2 button.button-next').attr('disabled', true).html('&nbsp;&nbsp;&nbsp;Pick a Winner&nbsp;&nbsp;&nbsp;');
            }
        }

        function checkFinals(){
            if($('#finals-game-option-1').val() && $('#finals-game-option-2').val() && $('input[name=game3option]').is(':checked')){
                $('button#submit').attr('disabled', false).html('&nbsp;&nbsp;&nbsp;Submit your Bracket&nbsp;&nbsp;&nbsp;');
            } else{
                $('button#submit').attr('disabled', true).html('&nbsp;&nbsp;&nbsp;Pick a Winner&nbsp;&nbsp;&nbsp;');
            }
        }

        function setFinalsTeam(winner){
            if(winner.id == 1 || winner.id == 2){
                console.log('Game 1', winner);
                $('#final-detail-1').html( winner.seed + ' <b>'+ winner.name +'</b>');
                $('#finals-team-1 label').html(winner.logo);
                $('#finals-team-1 input').val(winner.id).prop('checked', false).attr('disabled', false);
            } else if(winner.id == 3 || winner.id == 4){
                console.log('Game 2', winner);
                $('#final-detail-2').html( winner.seed + ' <b>'+ winner.name +'</b>');
                $('#finals-team-2 label').html(winner.logo);
                $('#finals-team-2 input').val(winner.id).prop('checked', false).attr('disabled', false);
            } else{
                alert('Something went wrong!')
            }
        }

        function setWinner(winner){
            console.log('Winner is set!', winner);
        }

        checkFinals();
    });
});