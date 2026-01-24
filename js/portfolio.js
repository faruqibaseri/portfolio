$(document).ready(function() {
    
    // 1. Initialize Isotope
    var $grid = $('.gallery-list').isotope({
        itemSelector: '.gallery-grid',
        layoutMode: 'fitRows' // Use 'masonry' if images have different heights
    });

    // 2. Bind filter button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // 3. Change 'active' class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.active').removeClass('active');
            $( this ).addClass('active');
        });
    });
    
});