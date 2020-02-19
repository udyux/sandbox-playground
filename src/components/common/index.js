import DynamicTag from './DynamicTag'

const GlobalComponents = [DynamicTag]

export default Vue => GlobalComponents.forEach(component => Vue.component(component.name, component))
