export default {
  name: 'DynamicTag',
  functional: true,
  props: { is: String, tag: String },
  render: (h, { children, data, props }) =>
    h(props.tag || props.is || 'div', { class: [data.staticClass, data.class] }, children)
}
