'use client'

import { useState } from 'react'
export default function CreatePet() {
  const [form, setForm] = useState({ name: '', type: '', colour: '' })

  const ckjsdv = 'hello'

  function handleSubmit() {}

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {/* <h1>{ckjsdv}</h1> */}
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
