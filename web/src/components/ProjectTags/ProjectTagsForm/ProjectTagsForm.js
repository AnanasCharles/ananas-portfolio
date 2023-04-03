import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ProjectTagsForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.projectTags?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="projectId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Project id
        </Label>

        <NumberField
          name="projectId"
          defaultValue={props.projectTags?.projectId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="projectId" className="rw-field-error" />

        <Label
          name="tagId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tag id
        </Label>

        <NumberField
          name="tagId"
          defaultValue={props.projectTags?.tagId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="tagId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProjectTagsForm
