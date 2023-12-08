import { useForm } from 'react-hook-form';
import { mixed, number, object, string } from 'yup';

import successImage from '@/assets/images/success.svg';
import { Button } from '@/components/button';
import { ConditionalRender } from '@/components/conditional-render';
import { Heading } from '@/components/heading';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Upload } from '@/components/upload';
import { usePositions } from '@/hooks/usePositions';
import { UserService } from '@/services/user.service';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './styles.module.scss';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];

const schema = object({
  name: string().required().min(2).max(60),
  email: string().email().required(),
  phone: string()
    .matches(/^[+]{0,1}380([0-9]{9})$/, 'phone must be valid')
    .required(),
  position_id: number().required().positive().integer(),
  photo: mixed()
    .nullable()
    .required('A file is required')
    .test(
      'Fichier taille',
      'upload file',
      (value) => !value || (value[0] && value[0].size <= 5000 * 1024 * 1024),
    )
    .test(
      'format',
      'Supported file formats are jpg and jpeg',
      (value) => value && SUPPORTED_FORMATS.includes(value[0]?.type),
    ),
}).required();

const FormSection = () => {
  const success = false;
  const { positions, isLoading } = usePositions();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('position_id', data.position_id);
      formData.append('photo', data.photo[0]);

      await UserService.create(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className={`container ${styles.form}`}>
      <Heading className={styles.formTitle}>Working with POST request</Heading>

      <div className={styles.formContent}>
        {success ? (
          <div className="success">
            <Heading className="form__title">
              User successfully registered
            </Heading>
            <img src={successImage} alt="success" />
          </div>
        ) : (
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              label="Your name"
              register={register}
              name="name"
              error={errors.name}
              className={styles.formInput}
            />
            <Input
              label="Email"
              register={register}
              name="email"
              error={errors.email}
              className={styles.formInput}
            />
            <Input
              label="Phone"
              register={register}
              name="phone"
              error={errors.phone}
              className={styles.formInput__last}
            />

            <ConditionalRender isLoading={isLoading}>
              <Select
                title="Select your position"
                options={positions}
                register={register}
                name="position_id"
              />
            </ConditionalRender>

            <Upload
              className={styles.formUpload}
              register={register}
              name="photo"
              error={errors.photo}
            />

            <Button isDisabled={!isValid} type="submit">
              Sign up
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default FormSection;
