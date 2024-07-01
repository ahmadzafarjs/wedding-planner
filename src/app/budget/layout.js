

export const metadata = {
    title: "Budget"
  }
    export default function RootLayout({aside, children}) {
      return <section className="mt-7 md:max-w-[1230px] m-auto flex">
      {children}
      </section>
    }