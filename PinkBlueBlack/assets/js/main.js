function initMenu() {
  $('.questions div').hide();
  //$('.questions ul:first').show();
  $('.questions li a').click(
    function() {
      var checkElement = $(this).next();
      if((checkElement.is('div')) && (checkElement.is(':visible'))) {
        return false;
        }
      if((checkElement.is('div')) && (!checkElement.is(':visible'))) {
        $('.questions div:visible').slideUp(300);
        checkElement.slideDown(300);
        return false;
        }
      }
    );
  }

$(document).ready(
				  	function(){
					  		initMenu();
							
							$("#caHead").click(function(){
									$("#caHead").removeClass('wFHDact')
									$("#lfHead").addClass('wFHDactU')
									$("#createAC").show(700);
									$("#forgotForm").hide();
									$("#loginform").show();
									$("#lfForm").hide(700);
							});	
							$("#lfHead").click(function(){
									$("#lfHead").removeClass('wFHDactU')
									$("#caHead").addClass('wFormHead wFHDact')
									$("#lfForm").show(700);
									$("#createAC").hide(700);
							});	
							$("#forgot").click(function(){
									$("#forgotForm").show(700);
									$("#loginform").hide(700);
							});	
							$("#loginhere").click(function(){
									$("#loginform").show(700);
									$("#forgotForm").hide(700);
							});	
					});