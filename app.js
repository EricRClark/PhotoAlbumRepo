$(document).ready(function() {
    var albumPhotos = "";
    photos.forEach(function(element) {
        albumPhotos += '<div class="phAlbDiv"rel="' + element.albumRel + '">' + '<img src =" ' +
            element.albumCover + '">' + "<h5>" + element.albumName + "</h5>" + "</div>"
    });
    $('.topAlbumLayout').append(albumPhotos);
    // photosTwo.forEach(function(element) {
    //     albumPhotosTwo += '<div class="phAlbDiv" rel="' + element.albumRel + '">' + '<img src =" ' +
    //         element.albumCover + '">' + "<h5>" + element.albumName + "</h5>" + "</div>"
    // });
    // $('.bottomAlbumLayout').append(albumPhotosTwo);
    $(".topAlbumLayout").on("click", "img", function(event) {
        event.preventDefault();
        // console.log("IMG",this)
        $('section').removeClass('active');
        $('albumPage').addClass('active');
        var getAlbumPhotos = function(clickedAlbum) {
            var photoArr = photos.filter(function(el) {
                return el.albumRel === clickedAlbum;
            });
            return photoArr[0].photos;
        }
        var setPhotoDis = function(albumSelected) {
            var photoDisplay = "";
            var items = getAlbumPhotos(albumSelected);
            _.each(items, function(item) {
                    photoDisplay += "div class = 'photoDiv' rel='" + item.photo + "'>" +
                        "<img src ='" + item.photo + "'>" + "<p>" + item.photoName + "</p>" +
                        "</div>"
                })
                ('.photoPage').html(photoDisplay)

        };
        var albumChoice = $(this).parent().attr('rel');
        var photosAlbs = getAlbumPhotos(albumChoice);
        var photoAlbStr = "";
        photosAlbs.forEach(function(el) {
            photoAlbStr += "<h5>" + el.photoName + "</h5><img src='" + el.photoURL + "' >"
        });
        $('.photoPage').append(photoAlbStr);
        $('.photoPage').addClass('active');
        $('.albumPage').removeClass('active');
    });
    $('.photoPage').on("click", "img", function(selectedPhoto) {
        event.preventDefault();
        $('.photoViewer').append(selectedPhoto);
        $('.photoPage').removeClass("active");
        $('.photoViewer').addClass("active");
        var selectedPhoto = $(this).attr("src");
        console.log(selectedPhoto)
            // $('.photoViewer').html(selectedPhoto)
        var photosFull = "";
        // photosFull.forEach(function(el) {
        photosFull += "<img src='" + selectedPhoto + "' >"
        console.log(photosFull);
            $('.photoLarge').append(photosFull);
            $('.photoLarge').addClass('active');
            $('.photoViewer').removeClass('active');
    })
  });
