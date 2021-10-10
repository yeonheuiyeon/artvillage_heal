$('.button').click(function(){
  var $btn = $(this),
      $step = $btn.parents('.modal-body'),
      stepIndex = $step.index(),
      $pag = $('.modal-header span').eq(stepIndex);

  if(stepIndex === 0 || stepIndex === 1||stepIndex === 2 || stepIndex===3|| stepIndex===4|| stepIndex===5|| stepIndex===6) { step1($step, $pag); }
  else { step3($step, $pag); }
  
});


function step1($step, $pag){
console.log('step1');
  // animate the step out
  $step.addClass('animate-out');
  
  // animate the step in
  setTimeout(function(){
    $step.removeClass('animate-out is-showing')
         .next().addClass('animate-in');
    $pag.removeClass('is-active')
          .next().addClass('is-active');
  }, 600);
  
  // after the animation, adjust the classes
  setTimeout(function(){
    $step.next().removeClass('animate-in')
          .addClass('is-showing');
    
  }, 1200);
}


function step3($step, $pag){
console.log('6');

  // animate the step out
  $step.parents('.modal-wrap').addClass('animate-up');

  setTimeout(function(){
    $('.rerun-button').css('display', 'inline-block');
  }, 700);
}

$('.rerun-button').click(function(){
 $('.modal-wrap').removeClass('animate-up')
                  .find('.modal-body')
                  .first().addClass('is-showing')
                  .siblings().removeClass('is-showing');

  $('.modal-header span').first().addClass('is-active')
                          .siblings().removeClass('is-active');
 $(this).hide();
});

