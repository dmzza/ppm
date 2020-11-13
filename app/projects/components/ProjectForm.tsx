import React from "react"

type ProjectFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const ProjectForm = ({ initialValues, onSubmit }: ProjectFormProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
    >
      <div>
        <input value={initialValues.name} placeholder="Project Name" />
        <input value={initialValues.color} type="color" placeholder="#333333" list="brights" />
        <datalist id="brights">
          <option>#FF9191</option> /* hsl(359, 100%, 78%) */
          <option>#BF91FF</option> /* hsl(265, 100%, 78%) */
          <option>#FFB091</option> /* hsl(17, 100%, 78%) */
          <option>#91FFE2</option> /* hsl(164, 100%, 78%) */
          <option>#FF91EB</option> /* hsl(311, 100%, 78%) */
          <option>#FFF491</option> /* hsl(54, 100%, 78%) */
          <option>#A3FF91</option> /* hsl(110, 100%, 78%) */
          <option>#91B7FF</option> /* hsl(219, 100%, 78%) */
        </datalist>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default ProjectForm
