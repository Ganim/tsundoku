'use client';

import { DotOutline } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Breadcrump() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter((x) => x.trim().length > 0);

  return (
    <nav>
      <ol className="flex flex-row gap-4">
        <li>
          <Link
            href="/"
            className="hover:underline hover:decoration-sky-500 hover:decoration-dotted hover:decoration-2 hover:underline-offset-4"
          >
            Home
          </Link>
        </li>

        {paths.length > 0 &&
          paths.map((pathName, pathIndex) => {
            const pathLink = `/${paths.slice(0, pathIndex + 1).join('/')}`;
            const isLastItem = pathIndex === paths.length - 1;
            pathName = pathName.replace(/-/g, ' ');

            return (
              <li
                key={pathLink}
                className="flex flex-row items-center gap-4 capitalize"
              >
                <DotOutline size={24} weight="fill" />

                {isLastItem ? (
                  <span className="font-bold">{pathName}</span>
                ) : (
                  <Link
                    href={pathLink}
                    className="hover:underline hover:decoration-sky-500 hover:decoration-dotted hover:decoration-2 hover:underline-offset-4"
                  >
                    {pathName}
                  </Link>
                )}
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
