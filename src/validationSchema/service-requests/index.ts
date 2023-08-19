import * as yup from 'yup';

export const serviceRequestValidationSchema = yup.object().shape({
  issue_description: yup.string().required(),
  status: yup.string().required(),
  priority: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
