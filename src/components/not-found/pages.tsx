import Link from "next/link";
import { Icon } from "../ui/icon";

export function NotFoundPage() {
  return (
    <section className="not-found">
      <span>404</span>
      <div>
        <small>Page not found</small>
        <h1>
          Looks like this path
          <br />
          <em>needs a new direction.</em>
        </h1>
        <p>The page you’re looking for may have moved or no longer exists.</p>
        <Link href="/" className="button button-gold">
          Return home <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  );
}
