import { Badge } from "./Badge"
import { Button } from "./Button"

export const ThemeTest = () => {
  return (
    <section className="bg-background text-secondary p-6">
      <div className="bg-surface rounded-card shadow-card p-6">
        <h1>Theme Test</h1>
        <p className="mt-2 text-sm text-secondary/80">
          This card uses the Tailwind v4 theme tokens.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="bg-primary text-white px-4 py-2 rounded-card">
            Primary
          </button>
          <button className="bg-accent text-secondary px-4 py-2 rounded-card">
            Accent
          </button>
          <button className="bg-error text-white px-4 py-2 rounded-card">
            Error
          </button>
        </div>
        <h2 className="mt-6">Heading Level 2</h2>
        <small className="block mt-2 text-secondary/70">Caption text</small>
        <Button variant="secondary">Hello!</Button>
        <Button variant="ghost" disabled>Nope</Button>
        <Button variant="primary">
          Ehhh?
        </Button>
        <Badge variant="primary">lolol</Badge> 
        <Badge variant="secondary">badge</Badge> 
        <Badge variant="accent">button</Badge>
        <div className="grid grid-row ">
          <div className="bg-primary text-white">Primary</div>
          <div className="bg-secondary text-white">secondary 2</div>
          <div className="bg-accent">accent 3</div>
          <div className="bg-background">background 4</div>
          <div className="bg-surface">surface 5</div>
          <div className="bg-error">error 6</div>
        </div>
      </div>
    </section>
  )
}
