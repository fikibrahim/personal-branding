import { ref, onMounted, onUnmounted } from "vue";

export function useIntersection(options = {}) {

    const target = ref(null);

    const isVisible = ref(false);

    let observer = null;

    onMounted(() => {

        observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    isVisible.value = true;

                }

            },

            {
                threshold: 0.3,
                ...options,
            }

        );

        if (target.value) {

            observer.observe(target.value);

        }

    });

    onUnmounted(() => {

        observer?.disconnect();

    });

    return {

        target,

        isVisible,

    };

}