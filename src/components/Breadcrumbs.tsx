import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <FontAwesomeIcon
                icon={faChevronRight}
                className="h-3 w-3 text-accent/50 mx-2"
                aria-hidden="true"
              />
            )}
            <Link
              href={item.href}
              className={`
                ${
                  index === items.length - 1
                    ? 'text-text/80 font-semibold'
                    : 'text-primary hover:text-accent'
                }
                transition-colors duration-300
              `}
              aria-current={index === items.length - 1 ? 'page' : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
