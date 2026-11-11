import { Fragment, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps<T> = {
  items: T[];
  size: number;
  variant: string;
  renderItem: (item: T) => ReactNode;
  getItemKey?: (item: T, index: number) => string;
};

export function Carousel<T>({
  items,
  size,
  variant,
  renderItem,
  getItemKey,
}: CarouselProps<T>) {
  const pages = Array.from(
    { length: Math.ceil(items.length / size) },
    (_, index) => items.slice(index * size, index * size + size),
  );

  return (
    <div className={`client-carousel clients-${variant}`}>
      {pages.map((page, pageIndex) => {
        const previous = (pageIndex - 1 + pages.length) % pages.length;
        const next = (pageIndex + 1) % pages.length;

        return (
          <div
            className={`client-slide ${pageIndex === 0 ? "is-first" : ""}`}
            id={`clients-${variant}-${pageIndex + 1}`}
            key={`${variant}-${pageIndex}`}
          >
            <div className="client-page-grid">
              {page.map((item, index) => (
                <Fragment
                  key={
                    getItemKey
                      ? getItemKey(item, index)
                      : `${variant}-${pageIndex}-${index}`
                  }
                >
                  {renderItem(item)}
                </Fragment>
              ))}
            </div>

            <div className="slider-controls" aria-label="Client slider controls">
              <a
                href={`#clients-${variant}-${previous + 1}`}
                aria-label="Show previous clients"
              >
                <ChevronLeft aria-hidden="true" />
              </a>

              <span>
                <b>{String(pageIndex + 1).padStart(2, "0")}</b> /{" "}
                {String(pages.length).padStart(2, "0")}
              </span>

              <a
                href={`#clients-${variant}-${next + 1}`}
                aria-label="Show next clients"
              >
                <ChevronRight aria-hidden="true" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
