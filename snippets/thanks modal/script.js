$(document).ready(function() {

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            var inst = $('[data-remodal-id=modal-thanks]').remodal();
            inst.open();
            
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Thumb change
    $('.reviews__thumb').click(function() {
        var newImg = $(this).find('img').attr('src');

        $(this).parent().parent().find('.reviews__picture img').attr('src', newImg);
    });

    //Which Form
    $("a[data-remodal-target='modal']").click(function(e) {
        e.preventDefault();
        var whatForm = $(this).attr('data-form');
        
        $('.remodal[data-remodal-id="modal"] input[name="whatform"]').val(whatForm);
    });

    $("a[data-remodal-target='modal-img']").click(function(e) {
        e.preventDefault();
        var newImg = $(this).children().attr('src');
        
        $('.remodal[data-remodal-id="modal-img"] img').attr('src', newImg);
    });
});