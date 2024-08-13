'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function CreatePet() {
  const [form, setForm] = useState({ name: '', type: '', colour: '' })
  const router = useRouter()

  const handleSubmit = async (event: any) => {
    event.preventDefault(); 

    //const formData = new FormData(event.target); 

    try {
      console.log("pet", form.name, form.type, form.colour)

      // TODO : use actual user id

      // fetch via a route handler (actual server call to back-end is in api/pet/route.ts)
      const resp = await fetch("/api/pet", {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name:form.name, type:form.type, colour:form.colour, userid:1})
      })

      console.log("create-pet page", resp)

      router.push('/my-pet')
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pet-name">Pet Name: </label>
        <input
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          type="text"
          name="pet-name"
          id="pet-name"
          value={form.name}
          placeholder="Pet Name"
        />
        <label htmlFor="pet-type">Pet Type: </label>
        <input
          required
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          type="text"
          name="pet-type"
          id="pet-type"
          value={form.type}
          placeholder="Pet Type"
        />
        <label htmlFor="pet-colour">Pet Colour: </label>
        <input
          required
          onChange={(e) => setForm({ ...form, colour: e.target.value })}
          type="text"
          name="pet-colour"
          id="pet-colour"
          value={form.colour}
          placeholder="Pet colour"
        />
        <button type="submit">Create your pet</button>
      </form>
    </main>
  )
}
