import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';

export const devices = [
  {
    name: 'MacBook Pro 16" M1 8GB 512GB',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'Nord 2 buds',
    icon: <Headphones className="size-4" />,
  },
  {
    name: 'Nothing 2a (256 GB)',
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'Unhook', href: 'https://unhook.app/' },
  { name: 'uBlock Origin', href: 'https://ublockorigin.com/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  { name: 'Grammarly', href: 'https://www.grammarly.com/' },
  { name: 'Wappalyzer', href: 'https://www.wappalyzer.com/' },
  {
    name: 'ColorZilla',
    href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en',
  },
];

export const software = [
  { name: 'Comet', href: 'https://www.perplexity.ai/comet' },
  { name: 'Discord', href: 'https://discord.com/download' },
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  {
    name: 'Microsoft Power Toys',
    href: 'https://www.microsoft.com/en-us/p/powertoys/9nblggh4nqj3?activetab=pivot:overviewtab',
  },
  { name: 'GitHub Desktop', href: 'https://desktop.github.com/' },
  {
    name: 'Free Download Manager',
    href: 'https://www.freedownloadmanager.org/',
  },
  { name: 'VLC', href: 'https://www.videolan.org/vlc/' },
];
