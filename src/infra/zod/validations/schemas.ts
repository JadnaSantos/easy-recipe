import * as zod from 'zod';


export const FormValidationSchema = zod.object({
  recipe: zod.string().email(),
})

export type SchemaFields = zod.infer<typeof FormValidationSchema>

