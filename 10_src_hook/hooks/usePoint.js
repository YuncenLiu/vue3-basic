import {onBeforeUnmount, onMounted, reactive} from "vue";

export default function () {

    let point = reactive({
        x: 500,
        y: 500
    })

    function clickPoint() {
        console.log(point)
    }

    function watchPoint(event) {
        point.x = event.pageX
        point.y = event.pageY
    }

    onMounted(() => {
        window.addEventListener('click', clickPoint)
        window.addEventListener('mousemove', watchPoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', clickPoint)
        window.removeEventListener('mousemove', watchPoint)
    })

    return point
}
