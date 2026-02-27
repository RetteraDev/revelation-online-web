import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { isMatch, Link, useMatches } from '@tanstack/react-router';

export const BreadcrumbNav = () => {
const matches = useMatches();
const matchesWithCrumbs = matches.filter((match) =>
  isMatch(match, 'loaderData.crumb'),
);

const items = matchesWithCrumbs.map(({ pathname, loaderData }) => {
  return {
    href: pathname,
    label: loaderData?.crumb,
  };
});

  return (
    <Breadcrumb>
        <BreadcrumbList>
        {items.map((item, index) => (
            <>
            <BreadcrumbItem 
                key={index} 
                className={index < items.length - 1 ? "hidden md:block" : ""}
            >
                <Link to={item.href} className="breadcrumb-link">
                {item.label}
                </Link>
            </BreadcrumbItem>
            
            {index < items.length - 1 && (
                <BreadcrumbSeparator key={`separator-${index}`} className="hidden md:block" />
            )}
            </>
        ))}
        </BreadcrumbList>
    </Breadcrumb>
  );
};
