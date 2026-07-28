import { ref, watch } from "vue";

export function useCountUp(targetValue, trigger) {

    const current = ref(0);

    watch(trigger, (visible) => {

        if (!visible) return;

        let value = 0;

        const increment = Math.ceil(targetValue / 40);

        const timer = setInterval(() => {

            value += increment;

            if (value >= targetValue) {

                current.value = targetValue;

                clearInterval(timer);

            } else {

                current.value = value;

            }

        }, 25);

    });

    return {

        current,

    };

}