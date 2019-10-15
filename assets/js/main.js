jQuery(document).ready(function() {
    
    jQuery('#constitution').hide();
    jQuery('.rv_button_constitution').click(function(e){
    e.preventDefault();jQuery("#constitution").slideToggle();
    jQuery('.rv_button_constitution').toggleClass('opened closed');
    });

    jQuery('#by-laws').hide();
    jQuery('.rv_button_laws').click(function(e){
    e.preventDefault();jQuery("#by-laws").slideToggle();
    jQuery('.rv_button_laws').toggleClass('opened closed');
    });

    jQuery('#members').hide();
    jQuery('.rv_button_members').click(function(e){
    e.preventDefault();jQuery("#members").slideToggle();
    jQuery('.rv_button_members').toggleClass('opened closed');
    });

    jQuery('#favorite-links').hide();
    jQuery('.rv_button_favorite-links').click(function(e){
    e.preventDefault();jQuery("#favorite-links").slideToggle();
    jQuery('.rv_button_favorite-links').toggleClass('opened closed');
    });

    jQuery('#rothermel').hide();
    jQuery('.rv_button_rothermel').click(function(e){
    e.preventDefault();jQuery("#rothermel").slideToggle();
    jQuery('.rv_button_rothermel').toggleClass('opened closed');
    });

    jQuery('#cotter').hide();
    jQuery('.rv_button_cotter').click(function(e){
    e.preventDefault();jQuery("#cotter").slideToggle();
    jQuery('.rv_button_cotter').toggleClass('opened closed');
    });

    jQuery('#president').hide();
    jQuery('.rv_button_president').click(function(e){
    e.preventDefault();jQuery("#president").slideToggle();
    jQuery('.rv_button_president').toggleClass('opened closed');
    });

});
