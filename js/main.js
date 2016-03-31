jQuery(function( $ ){
    $( document ).ready(function() {

        var config = {
            1: {
                id: 1,
                name: "Villanova",
                mastcot: "Wildcats",
                logo: '<img title="Villanova" src="/img/Villanova.svg">',
                seed: 2
            },
            2: {
                id: 2,
                name: "Oklahoma",
                mascot: "Sooners",
                logo: '<img title="Oklahoma" src="/img/OKU.svg">',
                seed: 2
            },
            3: {
                id: 3,
                name: "North Carolina",
                mascot: "Tarheels",
                logo: '<img title="North Carolina" src="/img/UNC.svg">',
                seed: 1
            },
            4: {
                id: 4,
                name: "Syracuse",
                mascot: "Orange",
                logo: '<img title="Syracuse" src="/img/Syracuse.svg">',
                seed: 10
            }
        };

        $('input').prop('checked', false);

        fadeIn();
        function fadeIn(){

        }

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
            if($('input[name=game-1-option]').is(':checked')){
                $('#game-1 button.button-next').attr('disabled', false).html('Next');
            } else{
                $('#game-1 button.button-next').attr('disabled', true).html('&nbsp;&nbsp;&nbsp;Pick a Winner&nbsp;&nbsp;&nbsp;');
            }
        }

        function checkGame2(){
            if($('input[name=game-2-option]').is(':checked')){
                $('#game-2 button.button-next').attr('disabled', false).html('Next');
            } else{
                $('#game-2 button.button-next').attr('disabled', true).html('&nbsp;&nbsp;&nbsp;Pick a Winner&nbsp;&nbsp;&nbsp;');
            }
        }

        function checkFinals(){
            if($('#finals-game-option-1').val() && $('#finals-game-option-2').val() && $('input[name=game-3-option]').is(':checked')){
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