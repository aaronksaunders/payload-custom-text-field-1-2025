'use client'
import type { TextFieldClientComponent } from 'payload'

import { TextField, useFormFields, useField } from '@payloadcms/ui'
import React, { useEffect, useMemo } from 'react'

/**
 * This is a custom text field component that is used to display the full name of
 * the user.
 */
const CustomFullNameTextFieldClient: TextFieldClientComponent = ({ path, field, ...props }) => {
  // useField is used to get the value and set the value of the field
  const { value, setValue } = useField({ path })

  // get the firstName and lastName field values from the form fields
  const firstNameFieldValue = useFormFields(([{ firstName }]) => firstName?.value)
  const lastNameFieldValue = useFormFields(([{ lastName }]) => lastName?.value)

  // Memoize the full name to avoid recalculations
  const fullName = useMemo(
    () => `${firstNameFieldValue || ''} ${lastNameFieldValue || ''}`.trim(),
    [firstNameFieldValue, lastNameFieldValue],
  )

  // if the value of the field is not the same as the value of the firstName and lastName fields,
  // set the value of the field to the value of the firstName and lastName fields
  useEffect(() => {
    if (value !== fullName) {
      setValue(fullName)
    }
  }, [fullName, setValue])

  return <TextField {...props} path={path} field={field} readOnly={field.admin?.readOnly} />
}

export default CustomFullNameTextFieldClient
