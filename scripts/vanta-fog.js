document.addEventListener('DOMContentLoaded', function() {
    if (typeof VANTA !== 'undefined') {
        VANTA.FOG({
            el: document.body,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x21ff,
            midtoneColor: 0xb0975d,
            lowlightColor: 0x303ff,
            baseColor: 0x23ab80
        });
        console.log('Vanta fog initialized');
    } else {
        console.error('VANTA is not defined. Check script loading.');
    }
});