// Globals.
const delay = 50
const schools = Object.keys(data)
var buildings = null
const cycleSFX = new Howl({ src: ['wav/cycle.wav'], loop: true })
const selectSFX = new Howl({ src: ['wav/select.wav'] })

// Page startup.
window.onload = function() {

    // Reset interface state.
    $('#school').val(-2)
    $('#school').prop('disabled', true)
    $('#go').prop('disabled', true)
    $('.info-1').addClass('d-none')
    $('.info-2').addClass('d-none')

    // Append school options.
    schools.forEach(function(school, index) {
        $('#school').append($('<option>', {
            value: index,
            text : school
        }))
    })

    // Enable selection.
    $('#school').prop('disabled', false)

    // Bind selection change event.
    $('#school').on('change', function() {

        // Get index.
        const index = $(this).val()

        // Update interface state.
        if (index >= 0) {
            buildings = data[schools[index]]
            $('#go').prop('disabled', false)
        } else {
            buildings = null
            $('#go').prop('disabled', true)
        }
        $('.info-1').addClass('d-none')
        $('.info-2').addClass('d-none')

    })

    // Bind go button activation.
    $('#go').on('click', function() {

        // Update interface state.
        $('#school').prop('disabled', true)
        $('#go').prop('disabled', true)
        $('.info-1').removeClass('d-none')
        $('.info-2').addClass('d-none')
        const cycleID = cycleSFX.play()

        // Get target index.
        const targetIndex = Math.floor(Math.random() * buildings.length)

        // Randomization loop.
        let stop = false
        function loop() {

            // Get next index.
            const index = stop ? targetIndex : Math.floor(Math.random() * buildings.length)
            const building = buildings[index]

            // Update building code.
            $('#code').text(building.code)

            // Next iteration or stop.
            if (stop) {

                // Update building information.
                $('#name').text(building.name)
                $('#tips').empty()
                building.tips.forEach(function(tip, index, array) {
                    $('#tips').append($('<span>', {text: tip + '.', class: 'fs-2'}))
                    if (index < array.length - 1) $('#tips').append($('<br>'))
                    if (index < array.length - 1) $('#tips').append($('<br>', {class: 'd-none d-md-inline'}))
                })

                // Update interface state.
                $('#school').prop('disabled', false)
                $('#go').prop('disabled', false)
                $('.info-2').removeClass('d-none')
                cycleSFX.stop(cycleID)
                selectSFX.play()

            } else {
                setTimeout(loop, delay)
            }
        }
        loop()

        // Stopping point.
        setTimeout(function() {
            stop = true
        }, delay * 60)

    })

}