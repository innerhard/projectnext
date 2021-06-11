export type TDataMenu = {
    id: number
    icon?: JSX.Element
    label?: string
    link?: string
    type: 'feed' | 'toys' | 'clothes' | 'medications'
}[]
