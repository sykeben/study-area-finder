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

        // Randomization loop.
        let stop = false
        let index = null
        function loop() {

            // Get next index.
            index = Math.floor(Math.random() * buildings.length)

            // Update building code.
            $('#code').text(buildings[index][0])

            // Next iteration or stop.
            if (stop) {

                // Update building information.
                $('#name').text(buildings[index][1])
                $('#tips').empty()
                if (buildings[index][2]) {
                    buildings[index][2].split('; ').forEach(function(tip, index, array) {
                        $('#tips').append($('<span>', {text: tip + '.', class: 'fs-2'}))
                        if (index < array.length - 1) $('#tips').append($('<br>'))
                        if (index < array.length - 1) $('#tips').append($('<br>', {class: 'd-none d-md-inline'}))
                    })
                } else {
                    $('#tips').append($('<span>', {text: 'No tips for this building.', class: 'fs-3'}))
                }

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