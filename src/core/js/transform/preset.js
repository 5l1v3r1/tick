export default (...presets) => (value, cb, instance) => cb(value.map((v, index) => instance.getPreset(presets[index])(v, instance.getConstants(), instance)));