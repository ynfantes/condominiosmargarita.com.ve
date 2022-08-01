$(document).ready(function() {
    
    /* ======= CSS Animated Hamburger Icon for Bootstrap ======= */
    /* Ref: http://codepen.io/impondesk/pen/EaKoXY */
    
    $(".navbar-toggle").on("click", function () {
         $(this).toggleClass("active");
    });  
    
    
    /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -62, 'axis':'y'});
		
	});
	
	$('.scrollto-no-offset').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
		
	});
	
	/* ======= Fixed page nav when scrolled ======= */    
    $(window).on('scroll', function() {
        
        $('#page-nav-wrapper').removeClass('fixed');
         
         var scrollTop = $(this).scrollTop();
         var topDistance = $('#page-nav-wrapper').offset().top;
         
         if ( (topDistance) > scrollTop ) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
         }
         else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
         }

    });
	
	/* ======= Stop Video Playing When Close the Modal Window ====== */
    $("#modal-video .close").on("click", function() {
        $("#modal-video iframe").attr("src", $("#modal-video iframe").attr("src"));        
    });
    
    /* ======= FAQ accordion ======= */
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find('.panel-title a')
        .toggleClass('active')
        .find("i.fa")
        .toggleClass('fa-plus-square fa-minus-square');
    }
    $('.panel').on('hidden.bs.collapse', toggleIcon);
    $('.panel').on('shown.bs.collapse', toggleIcon); 
    
    /* ======= Toggle between Signup & Login & ResetPass Modals ======= */ 
    $('#signup-link').on('click', function(e) {
        $('#login-modal').modal('toggle');
        $('#signup-modal').modal();
        
        e.preventDefault();
    });
    
    $('#login-link').on('click', function(e) {
        $('#signup-modal').modal('toggle');
        $('#login-modal').modal();
        
        e.preventDefault();
    });
    
    $('#back-to-login-link').on('click', function(e) {
        $('#resetpass-modal').modal('toggle');
        $('#login-modal').modal();
        
        e.preventDefault();
    });
    
    $('#resetpass-link').on('click', function(e) {
        $('#login-modal').modal('hide');
        e.preventDefault();
    });
     
    
     /* ======= Testimonial Bootstrap Carousel ======= */
     /* Ref: http://getbootstrap.com/javascript/#carousel */
    $('#testimonials-carousel').carousel({
      interval: 8000 
    });

    $("#login-form").validate({
    rules : {
    cedula : {
    required : true
    },
    password : {
    required : true,
    minlength : 4,
    maxlength : 20
    }
    },
    messages : {
    cedula : {
    required : 'Ingrese su código de usuario'
    },
    password : {
    required : 'Ingrese su clave de acceso',
    minlength: 'Deben ser mínimo 4 caracteres',
    maxlength:  'No pueden ser más de 20 caracteres'
    }
    },
    submitHandler: function(form) {
        $.ajax({
            type: 'POST',
            url: 'login.php',
            dataType: 'json',
            data: $(form).serialize(),
            beforeSend: function() {
                $("#login-form").find("button").button('loading');
                $('#login-messages').removeClass('alert alert-danger');
            }
        })
        .done(function(obj) {
            if (obj.suceed == false) {
                $('#login-messages').removeClass('alert alert-success').addClass('alert alert-danger');
                $("#login-form").find("button").button('reset');
                $('#login-messages').text(obj.error);

            } else {

                $('#login-messages').removeClass('alert alert-danger');
                $('#login-messages').addClass('alert alert-success');
                $('#login-messages').text('Propietario verificado con éxito. Lo estamos redireccionando.....');
                console.log("redireccionando...")
                location.href = $(form).attr('data-destination');
            }

        })
        .fail(function(data) {
            $('#login-messages').removeClass('alert alert-success');
            $('#login-messages').addClass('alert alert-danger');
            $('#login-messages').text(data);
            console.log('error' + data);
            $("#login-form").find("button").button('reset');
        });
    },
    errorPlacement : function(error, element) {
    error.insertBefore(element.parent());
    }
    });
    
    $("#resetpass-form").validate({
    rules : {
    email : {
    required : true,
    email : true
    }
    },
    messages : {
    email : {
    required : 'Ingrese un correo electrónico',
    email : 'Debe ser un correo válido'
    }
    },
    submitHandler: function(form) {
        $.ajax({
            type: 'POST',
            url: 'login.php',
            dataType: 'json',
            data: $(form).serialize(),
            beforeSend: function() {
                $("#resetpass-form").find("button").button('loading');
                $('#resetpass-messages').removeClass('alert alert-danger');
            }
        })
        .done(function(obj) {
            if (obj.suceed == false) {
                $('#resetpass-messages').removeClass('alert alert-success').addClass('alert alert-danger');
                $('#resetpass-messages').text(obj.error);

            } else {

                $('#resetpass-messages').removeClass('alert alert-danger');
                $('#resetpass-messages').addClass('alert alert-success');
                $('#resetpass-messages').text('Se han enviado las credenciales de acceso al correo indicado');
            }
            $("#resetpass-form").find("button").button('reset');

        })
        .fail(function(data) {
            $('#resetpass-messages').removeClass('alert alert-success');
            $('#resetpass-messages').addClass('alert alert-danger');
            $('#resetpass-messages').text(data);
            console.log('error' + data);
            $("#resetpass-form").find("button").button('reset');
        });
    },
    errorPlacement : function(error, element) {
    error.insertBefore(element.parent());
    }
    });
    
    $("#contact-form").validate({
    rules : {
    nombre : {required : true },
    email : {
    required : true,
    email : true
    },
    telefono : {
    required : true,
    minlength : 4,
    maxlength : 20,
    number : true,
    }
    },
    messages : {
    nombre : 'Ingrese su nombre y apellido',
    email : {
    required : 'Ingrese su correo electrónico',
    email : 'Ingrese un correo electrónico válido'
    },
    telefono : {
    required : 'Ingrese un número de contacto',
    minlength: 'Deben ser mínimo 4 caracteres',
    maxlength:  'No pueden ser más de 20 caracteres',
    number: 'Ingrese solo números'
    }
    },
    submitHandler: function(form) {
        $.ajax({
            type: 'POST',
            url: 'includes/enviar_email.php',
            dataType: 'json',
            data: $(form).serialize(),
            beforeSend: function() {
                $("#contact-form").find("button").button('loading');
                $('#contact-messages').removeClass('alert alert-danger');
            }
        })
        .done(function(obj) {
            $('#contact-messages').removeClass('alert alert-success').removeClass('alert alert-danger').addClass('alert alert-'+obj.resultado);
            $("#contact-form").find("button").button('reset');
            $('#contact-messages').text(obj.mensaje);

        })
        .fail(function(data) {
            $('#contact-messages').removeClass('alert alert-success');
            $('#contact-messages').addClass('alert alert-danger');
            $('#contact-messages').text(data);
        });
    },
    errorPlacement : function(error, element) {
    error.insertBefore(element.parent());
    }
    });
    
    $("#contactenos-form").validate({
    rules : {
    nombres : {required : true },
    apellidos : {required : true },
    email : {
    required: function() {
        return $("input[name|='telefono']").val() === '';
    },
    email : true
    },
    telefono : {
    /*required : true,*/
    minlength : 7,
    maxlength : 20,
    number : true,
    },
    mensaje : { required : true }
    },
    messages : {
    nombres : 'Ingrese su nombre',
    apellidos : 'Ingrese su apellido',
    email : {
    required : 'Ingrese su correo electrónico',
    email : 'Ingrese un correo electrónico válido'
    },
    telefono : {
    required : 'Ingrese un número de contacto',
    minlength: 'Deben ser mínimo 7 caracteres',
    maxlength:  'No pueden ser más de 20 caracteres',
    number: 'Ingrese solo números'
    },
    mensaje : 'Escriba un mensaje'
    },
    submitHandler: function(form) {
        $.ajax({
            type: 'POST',
            url: 'includes/contactenos.php',
            dataType: 'json',
            data: $(form).serialize(),
            beforeSend: function() {
                $("#contactenos-form").find("button").button('loading');
                $('#contactenos-messages').removeClass('alert alert-danger');
            }
        })
        .done(function(obj) {
            $('#contactenos-messages').removeClass('alert alert-success').removeClass('alert alert-danger').addClass('alert alert-'+obj.resultado);
            $("#contactenos-form").find("button").button('reset');
            $('#contactenos-messages').text(obj.mensaje);

        })
        .fail(function(data) {
            $('#contactenos-messages').removeClass('alert alert-success');
            $('#contactenos-messages').addClass('alert alert-danger');
            $('#contactenos-messages').text(data);
        });
    },
    errorPlacement : function(error, element) {
    error.insertBefore(element);
    }
    });
});