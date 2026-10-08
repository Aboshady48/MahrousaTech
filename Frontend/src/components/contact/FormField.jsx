export default function FormField({ label, as: Control = 'input', ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <Control {...props} />
    </label>
  )
}