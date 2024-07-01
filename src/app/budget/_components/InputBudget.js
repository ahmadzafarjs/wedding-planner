export default function InputBudget({value, onChange, placeholder}) {
    return <input className="w-auto border-none outline-none focus:bg-pink-100 flex-grow w-14" value={value} onChange={onChange} />
}