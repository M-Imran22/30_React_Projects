import { useState } from "react";

interface FormData {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

const Data: FormData[] = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    placeholder: "Enter your name",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    label: "Age",
    name: "age",
    type: "number",
    placeholder: "Enter your age",
    required: false,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Create a password",
    required: true,
  },
  {
    label: "Address",
    name: "address",
    type: "text",
    placeholder: "Enter your address...",
    required: false,
  },
];

// Convert schema to empty initial values
const initialValues = Data.reduce((acc, field) => {
  return {
    ...acc,
    [field.name]: "",
  };
}, {} as Record<string, string>);

function DynamicFormGenerator() {
  const [formValues, setFormValues] = useState(initialValues);
  const [submittedValues, setSubmittedValues] = useState<
    typeof initialValues | null
  >(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedValues(formValues);
    setFormValues(initialValues);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Dynamic Form Generator
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {Data.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            <label className="font-medium text-gray-700" htmlFor={field.name}>
              {field.label}
            </label>

            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              onChange={handleOnChange}
              value={formValues[field.name]}
              className="p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 transition"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {submittedValues && (
        <div className="mt-8 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Submitted Data:</h3>
          <pre className="bg-gray-200 p-3 rounded-md">
            {JSON.stringify(submittedValues, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default DynamicFormGenerator;
