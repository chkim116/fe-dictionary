import {Link as NextUiLink,LinkProps} from '@nextui-org/link';
import NextLink from 'next/link';

export default function Link (props: LinkProps) {
  return <NextUiLink as={NextLink} {...props} />; 
}