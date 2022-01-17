<script lang="ts">
import { h, defineComponent, Slot, onMounted, ref } from 'vue';

import { UnsupportedError } from '@/exceptions/unsupported';

import ztextify from '@/lib/ztext';

export default defineComponent({
  props: {
    as: {
      type: String,
      default: 'div',
      validator: (value: string): boolean => {
        const el = document.createElement(value);
        el.innerHTML = '.';
        return !!el.innerHTML;
      },
    },

    depth: {
      type: String,
      default: '1rem',
    },

    layers: {
      type: Number,
      default: 10,
    },

    perspective: {
      type: String,
      default: '500px',
    },

    fade: {
      type: Boolean,
      default: false,
    },

    direction: {
      type: String,
      default: 'both',
      validator: (value: string) => {
        return ['both', 'backwards', 'forwards'].includes(value);
      },
    },

    event: {
      type: String,
      default: 'none',
      validator: (value: string) => {
        return ['none', 'pointer', 'scroll', 'scrollX', 'scrollY'].includes(
          value,
        );
      },
    },

    eventRotation: {
      type: String,
      default: '30deg',
    },

    eventDirection: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['default', 'reverse'].includes(value);
      },
    }
    
  },

  setup(props, { slots }) {
    const defaultSlot = (slots.default as Slot)();
    const root = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (
        CSS.supports('-moz-transform-style', 'preserve-3d') ||
        CSS.supports('-ms-transform-style', 'preserve-3d') ||
        CSS.supports('-webkit-transform-style', 'preserve-3d') ||
        CSS.supports('transform-style', 'preserve-3d')
      ) {
        ztextify(root.value, props);
      } else {
        throw new UnsupportedError();
      }
    });

    return () =>
      h(
        props.as,
        {
          ref: root,
        },
        defaultSlot,
      );
  },
});
</script>
