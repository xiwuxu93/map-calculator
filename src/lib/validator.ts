import { z } from 'zod';

export const mapInputSchema = z
  .object({
    systolic: z
      .coerce
      .number({
        invalid_type_error: 'Invalid systolic pressure value.',
        required_error: 'Systolic pressure is required.',
      })
      .min(40, 'Systolic pressure must be between 40 and 300 mmHg.')
      .max(300, 'Systolic pressure must be between 40 and 300 mmHg.'),
    diastolic: z
      .coerce
      .number({
        invalid_type_error: 'Invalid diastolic pressure value.',
        required_error: 'Diastolic pressure is required.',
      })
      .min(20, 'Diastolic pressure must be between 20 and 200 mmHg.')
      .max(200, 'Diastolic pressure must be between 20 and 200 mmHg.'),
  })
  .superRefine((values, ctx) => {
    if (values.systolic <= values.diastolic) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Systolic pressure must be greater than diastolic pressure.',
        path: ['systolic'],
      });
    }
  });

export type MapInput = z.infer<typeof mapInputSchema>;
export type MapValidationResult = ReturnType<typeof mapInputSchema.safeParse>;

export function validateMapInput(input: { systolic: string; diastolic: string }): MapValidationResult {
  return mapInputSchema.safeParse(input);
}
