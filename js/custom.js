jQuery( document ).ready(function($) {
    $('.acctoggle').click(function(e) {
	  	e.preventDefault();
	  
	    var $this = $(this);

	    if ($this.next().hasClass('show')) {
	        $this.next().removeClass('show');
	        $this.next().slideUp(250);
	        $this.toggleClass('plus');
	        $this.find('.acctoggle').addClass('plus');
	        $this.removeClass('minus');
	        
	    } else {
	        $this.parent().parent().find('.inner').removeClass('show');
	        $this.parent().parent().find('.inner').slideUp(250);
	        $this.parent().parent().find('.acctoggle').addClass('plus');
	        $this.next().toggleClass('show');
	        $this.next().slideToggle(250);
	        $this.removeClass('plus');
	        $this.parent().parent().find('.acctoggle').removeClass('minus');
	        $this.toggleClass('minus');
	    }
	});

	if (window.File && window.FileList && window.FileReader) {
      $("#upload_thumbnail_images").on("change", function(e) {

        var files = e.target.files,
          filesLength = files.length;
        for (var i = 0; i < filesLength; i++) {
          var f = files[i]
          var fileReader = new FileReader();
          fileReader.onload = (function(e) {
            var file = e.target;
            $(".uploadbox-inn-image").html("<span class=\"pip\">" +
              "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
              "<span class=\"remove\">Remove</span>" +
              "</span>");

            $(".remove").click(function(){
              $(this).parent(".pip").remove();
            }); 
          });
          fileReader.readAsDataURL(f);
        }
      });
    } else {
      alert("Your browser doesn't support to File API")
    }

    if (window.File && window.FileList && window.FileReader) {
      $("#upload_thumbnail_videos").on("change", function(e) {

        var files = e.target.files,
          filesLength = files.length;
        for (var i = 0; i < filesLength; i++) {
          var f = files[i]
          var fileReader = new FileReader();
          fileReader.onload = (function(e) {
            var file = e.target;
            $(".uploadbox-inn-video").html("<span class=\"pip\">" +
              "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
              "<span class=\"remove\">Remove</span>" +
              "</span>");

            $(".remove").click(function(){
              $(this).parent(".pip").remove();
            }); 
          });
          fileReader.readAsDataURL(f);
        }
      });
    } else {
      alert("Your browser doesn't support to File API")
    }

    if (window.File && window.FileList && window.FileReader) {
      $("#upload_csv_files").on("change", function(e) {

        var files = e.target.files,
          filesLength = files.length;
        for (var i = 0; i < filesLength; i++) {
          var f = files[i]
          var fileReader = new FileReader();
          fileReader.onload = (function(e) {
            var file = e.target;
            $(".uploadbox-inn-csv").html("<span class=\"pip\">" +
              "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
              "<span class=\"remove\">Remove</span>" +
              "</span>");

            $(".remove").click(function(){
              $(this).parent(".pip").remove();
            }); 
          });
          fileReader.readAsDataURL(f);
        }
      });
    } else {
      alert("Your browser doesn't support to File API")
    }


    $(".editimage").click(function(e) {
      $("#imageUpload").click();
    });

    function fasterPreview( uploader ) {
        if ( uploader.files && uploader.files[0] ){
              $('#profileImage').attr('src', 
                 window.URL.createObjectURL(uploader.files[0]) );
        }
    }

    $("#imageUpload").change(function(){
        fasterPreview( this );
        
    });

    if($(window).innerWidth() <= 991) {
      $('.mobilemenu').click(function(e) {
        $(".mwrap").toggleClass("show");
      });
      $(".closenav").click(function(){
        $(".mwrap").removeClass("show");
      });
    };

    $(".username a").click(function() {
        $(this).next(".logoutbox").toggleClass('show');
      });

});