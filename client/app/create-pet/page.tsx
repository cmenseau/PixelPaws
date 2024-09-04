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
        <div className="space-y-12">
          <div className="pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Choose your pet</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label 
                  htmlFor="pet-name" 
                  className="block text-sm font-medium leading-6 text-gray-900">Pet Name: </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text"
                    name="pet-name"
                    id="pet-name"
                    value={form.name}
                    placeholder="Garfield"
                    className="block w-full border-transparent p-3 sm:text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label 
                  htmlFor="pet-type" 
                  className="block text-sm font-medium leading-6 text-gray-900">Pet Type: </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text"
                    name="pet-type"
                    id="pet-type"
                    value={form.type}
                    placeholder="cat"
                    className="block w-full border-transparent p-3 sm:text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label 
                  htmlFor="pet-colour" 
                  className="block text-sm font-medium leading-6 text-gray-900">Pet Colour: </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text"
                    name="pet-colour"
                    id="pet-colour"
                    value={form.colour}
                    placeholder="orange"
                    className="block w-full border-transparent p-3 sm:text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>
                
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="submit" className="rounded-md bg-pastel-orange hover:bg-pastel-yellow py-2 text-sm font-semibold text-gray-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-4 border-b-4 border-pastel-orange rounded">Create your pet</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}
