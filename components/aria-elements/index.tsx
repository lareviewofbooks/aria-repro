'use client'

import { TextField, Label, Text, Input } from "react-aria-components"

export default function AriaElements() {
  return (
    <TextField>
      <Input
        type="text"
      />
      <Label>
        Foo Field
      </Label>
      <Text slot="errorMessage">
        {"Something isn't right?"}
      </Text>
    </TextField>
  )
}