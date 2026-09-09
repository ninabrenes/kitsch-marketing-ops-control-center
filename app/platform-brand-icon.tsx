/* oxlint-disable next/no-img-element -- Simple Icons are remote brand assets; preserving their official CDN rendering is intentional. */
import { Globe2, ShoppingBag } from 'lucide-react';

export type PlatformBrandName =
  | 'Instagram'
  | 'Facebook'
  | 'TikTok'
  | 'TikTok Shop'
  | 'YouTube'
  | 'Pinterest'
  | 'Website'
  | 'Shopify';

const platformAssets: Record<
  PlatformBrandName,
  { asset?: string; slug: string }
> = {
  Instagram: {
    asset: 'https://cdn.simpleicons.org/instagram/E4405F',
    slug: 'instagram',
  },
  Facebook: {
    asset: 'https://cdn.simpleicons.org/facebook/1877F2',
    slug: 'facebook',
  },
  TikTok: {
    asset: 'https://cdn.simpleicons.org/tiktok/000000',
    slug: 'tiktok',
  },
  'TikTok Shop': {
    asset: 'https://cdn.simpleicons.org/tiktok/000000',
    slug: 'tiktok-shop',
  },
  YouTube: {
    asset: 'https://cdn.simpleicons.org/youtube/FF0000',
    slug: 'youtube',
  },
  Pinterest: {
    asset: 'https://cdn.simpleicons.org/pinterest/BD081C',
    slug: 'pinterest',
  },
  Website: {
    slug: 'website',
  },
  Shopify: {
    asset: 'https://cdn.simpleicons.org/shopify/7AB55C',
    slug: 'shopify',
  },
};

export function PlatformBrandIcon({
  name,
  label = true,
  size = 'medium',
}: {
  name: PlatformBrandName;
  label?: boolean;
  size?: 'small' | 'medium' | 'large';
}) {
  const platform = platformAssets[name];

  return (
    <span
      className={`platform-brand platform-brand-${size}`}
      data-platform={platform.slug}
    >
      <span className="platform-brand-glyph">
        {platform.asset ? (
          <img src={platform.asset} alt={label ? '' : name} loading="eager" />
        ) : (
          <Globe2 aria-label={label ? undefined : name} aria-hidden={label} />
        )}
        {name === 'TikTok Shop' && (
          <ShoppingBag
            className="platform-brand-shop-badge"
            aria-hidden="true"
          />
        )}
      </span>
      {label && <b>{name}</b>}
    </span>
  );
}
