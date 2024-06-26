export const metadata = {
    title: 'Wedding Planner',
  }

  export default function Layout({children}) {
    return <section className="mt-7 md:max-w-[90vw] m-auto grid grid-cols-[auto_1fr]">
    {/* Aside */}
        <aside className="bg-pink-200">Filter</aside>
        {/* Checklist */}
        <div className="bg-amber-100">{children}</div>
    </section>
  }