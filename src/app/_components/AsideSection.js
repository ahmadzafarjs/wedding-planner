export const metadata = {
    title: "Checklist"
  }
    export default function Layout({aside, children}) {
      return <section className="mt-7 md:max-w-[90vw] m-auto grid grid-cols-[18rem_1fr]">
      {/* Aside */}
          <aside className="bg-pink-200">{aside}</aside>
          {/* Checklist */}
          <div className="bg-amber-100">{children}</div>
      </section>
    }