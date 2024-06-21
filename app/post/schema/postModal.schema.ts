import * as yup from "yup";

export const postMocalSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  body: yup.string().required("Description is required"),
});
