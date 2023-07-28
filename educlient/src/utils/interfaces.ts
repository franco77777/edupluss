export interface Empresa {
    id: number
    name: string
    nit: number
}

export interface User {
    id?: number
    username: string
    email: string
    password: string
    companyId: number
    tipo?: string
    areas?: Area[]
    active?: boolean
}

export interface Step {
    id?: number
    number: number,
    title: string
    description: string
    video: string
    activityId: number
}

export interface CreateStep {
    number: number,
    title: string
    description: string
    video: string | ArrayBuffer | null
    activityId?: number
}

export interface Area {
    id?: number
    name: string
    companyId: number
    active?: boolean
}

export interface Role {
    id?: number
    name: string
    hardSkills: Array<String>
    softSkills?: Array<String>
    schedule?: string
    salary?: string
    experience?: Array<Number>
    remote?: boolean
    areaId?: number
}

export interface Activity {
    id?: number
    title: string
    roleId: number
    active?: boolean
}
