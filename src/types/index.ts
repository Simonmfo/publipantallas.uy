export interface BillboardScreen {
  id: string;
  name: string;
  location: string;
  zone: 'Centro' | 'Tres Cruces' | 'Pocitos' | 'Punta Carretas' | 'Buceo / WTC' | 'Carrasco';
  dailyAudience: string;
  audienceNumber: number;
  dimensions: string;
  frequency: string;
  weeklyPriceUsd: number;
  monthlyPriceUsd: number;
  statusBadge: string;
  statusColor?: string;
  locationBadge: string;
  categoryLabel: string;
  featureLabel: string;
  description: string;
  imageUrl: string;
  aspectRatio: '16:9' | '9:16' | '2:1';
  resolution: string;
  peakHours: string;
  trafficType: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface PricingPlan {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  usdPrice: number | 'custom';
  uyuPrice?: number;
  isPopular?: boolean;
  savingsNote?: string;
  features: string[];
  ctaLabel: string;
}

export interface QuoteFormData {
  name: string;
  company: string;
  phone: string;
  screenInterest: string;
  durationWeeks?: string;
  notes?: string;
}
