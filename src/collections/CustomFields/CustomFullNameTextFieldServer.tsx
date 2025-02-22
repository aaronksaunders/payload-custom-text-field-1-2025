import type React from 'react'
import { TextField } from '@payloadcms/ui'
import type { TextFieldServerComponent } from 'payload'

const CustomFullNameTextFieldServer: TextFieldServerComponent = ({
  clientField,
  path,
  schemaPath,
  permissions,
  siblingData,
  payload,
}) => {
  // Get the current values directly from siblingData
  const { firstName, lastName, serverFullName } = siblingData
  const newFullName = `${firstName} ${lastName}`

  // Only update if the values don't match
  if (serverFullName !== newFullName) {
    payload.update({
      id: siblingData.id,
      collection: 'users',
      data: {
        serverFullName: newFullName,
      },
    })
  }

  return (
    <TextField
      field={clientField}
      path={path}
      schemaPath={schemaPath}
      permissions={permissions}
      readOnly={clientField.admin?.readOnly}
    />
  )
}

export default CustomFullNameTextFieldServer
