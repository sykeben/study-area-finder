// Globals.
const delay = 50
const schools = Object.keys(data)
var buildings = null
var hat = null
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
            hat = buildings.slice()
            $('#go').prop('disabled', false)
        } else {
            buildings = null
            hat = null
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

        // Refresh hat if empty.
        if (hat.length <= 0) {
            hat = buildings.slice()
        }

        // Get target index.
        const targetIndex = Math.floor(Math.random() * hat.length)

        // Randomization loop.
        let stop = false
        function loop() {

            // Get next building (hat selection if stopping).
            const building = stop ? hat[targetIndex] : buildings[Math.floor(Math.random() * buildings.length)]

            // Update building code.
            $('#code').text(building.code)

            // Next iteration or stop.
            if (stop) {

                // Update building name.
                $('#name').text(building.name)

                // Update building link.
                $('#link').prop('href', building.link)

                // Update building tips.
                $('#tips').empty()
                building.tips.forEach(function(tip, index, array) {
                    $('#tips').append($('<span>', {text: tip + '.', class: 'fs-2'}))
                    if (index < array.length - 1) $('#tips').append($('<br>'))
                    if (index < array.length - 1) $('#tips').append($('<br>', {class: 'd-none d-md-inline'}))
                })

                // Remove selection from hat.
                hat.splice(targetIndex, 1)

                // Update interface state.
                $('#school').prop('disabled', false)
                $('#go').prop('disabled', false)
                $('.info-2').removeClass('d-none')
                cycleSFX.stop(cycleID)
                selectSFX.play()

            } else {
                
                // Go again.
                setTimeout(loop, delay)

            }
        }
        loop()

        // Stopping point.
        setTimeout(function() {
            stop = true
        }, delay )

    })

}