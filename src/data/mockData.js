// ─── MOCK DATA ────────────────────────────────────────────────────────────────

export const MOCK = {
  overview: {
    activeConversations: 12,
    conversationsThisMonth: 1847,
    leadsGenerated: 284,
    avgSessionDuration: 312,
    avgResponseTime: 1340,
    bounceRate: 18.4,
    trends: {
      activeConversations: +3,
      conversationsThisMonth: +18,
      leadsGenerated: +22,
      avgSessionDuration: -4,
      avgResponseTime: -8,
      bounceRate: -2.1,
    },
  },
  behavior: {
    visitTimes: [
      { hour: "08:00", count: 42 }, { hour: "09:00", count: 87 },
      { hour: "10:00", count: 134 }, { hour: "11:00", count: 156 },
      { hour: "12:00", count: 98 }, { hour: "13:00", count: 112 },
      { hour: "14:00", count: 189 }, { hour: "15:00", count: 203 },
      { hour: "16:00", count: 241 }, { hour: "17:00", count: 198 },
      { hour: "18:00", count: 87 }, { hour: "19:00", count: 43 },
    ],
    topWords: [
      { word: "price", count: 312 }, { word: "service", count: 287 },
      { word: "order", count: 198 }, { word: "product", count: 176 },
      { word: "contact", count: 143 }, { word: "time", count: 121 },
      { word: "delivery", count: 98 }, { word: "warranty", count: 87 },
    ],
    topClickedLinks: [
      { url: "/pricing", count: 312 }, { url: "/services", count: 241 },
      { url: "/contact", count: 198 }, { url: "/about", count: 87 },
      { url: "/products", count: 64 },
    ],
    deviceDistribution: [
      { name: "Mobile", value: 58 }, { name: "Desktop", value: 34 }, { name: "Tablet", value: 8 },
    ],
    browserDistribution: [
      { name: "Chrome", value: 48 }, { name: "Safari", value: 29 },
      { name: "Firefox", value: 11 }, { name: "Edge", value: 8 }, { name: "Other", value: 4 },
    ],
    entryPages: [
      { url: "/services", count: 634 }, { url: "/", count: 421 },
      { url: "/pricing", count: 287 }, { url: "/about", count: 198 },
      { url: "/contact", count: 156 }, { url: "/products", count: 87 },
    ],
    languageDistribution: [
      { name: "Finnish", value: 67 }, { name: "English", value: 24 },
      { name: "Swedish", value: 7 }, { name: "Other", value: 2 },
    ],
    avgDuration: 312,
    longestSession: 1847,
    shortestSession: 14,
    bounceAnalysis: { percentage: 18.4, count: 340 },
  },
  ai: {
    classification: {
      lead: { count: 284, percentage: 15.4 },
      information: { count: 1203, percentage: 65.1 },
      support: { count: 360, percentage: 19.5 },
    },
    topAiLinks: [
      { url: "/pricing", count: 421 }, { url: "/contact", count: 312 },
      { url: "/services", count: 287 }, { url: "/products", count: 198 },
      { url: "/faq", count: 143 },
    ],
    topTopics: [
      { topic: "Pricing", count: 487 }, { topic: "Services", count: 412 },
      { topic: "Products", count: 298 }, { topic: "Support", count: 360 },
      { topic: "Contact", count: 234 }, { topic: "Other", count: 56 },
    ],
    reAskRate: { percentage: 12.3, count: 227, trend: [8.1, 9.4, 11.2, 10.8, 12.3] },
    escalations: [
      { id: "1", snippet: "I need a quote urgently...", reason: "urgent + quote request", timestamp: "2026-06-14 16:42" },
      { id: "2", snippet: "I'd like to speak with a person about this", reason: "human agent request", timestamp: "2026-06-13 11:18" },
      { id: "3", snippet: "My order has been delayed for a week", reason: "complaint", timestamp: "2026-06-12 09:34" },
      { id: "4", snippet: "Can you call me back?", reason: "callback request", timestamp: "2026-06-11 14:07" },
      { id: "5", snippet: "I need the contact details for management", reason: "contact request", timestamp: "2026-06-10 10:22" },
    ],
    avgConfidence: 84,
    confidenceTrend: [
      { date: "Jun 1", score: 79 }, { date: "Jun 5", score: 82 }, { date: "Jun 10", score: 81 },
      { date: "Jun 15", score: 85 }, { date: "Jun 20", score: 83 }, { date: "Jun 25", score: 86 },
      { date: "Jun 30", score: 84 },
    ],
  },
  trends: {
    conversationsPerDay: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1, count: Math.floor(50 + Math.random() * 80 + Math.sin(i / 3) * 20),
    })),
    leadsPerDay: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1, count: Math.floor(5 + Math.random() * 15 + Math.sin(i / 4) * 4),
    })),
    supportPerDay: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1, count: Math.floor(8 + Math.random() * 20 + Math.sin(i / 5) * 5),
    })),
    infoPerDay: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1, count: Math.floor(30 + Math.random() * 50 + Math.sin(i / 3) * 15),
    })),
    peakHoursMatrix: Array.from({ length: 7 }, (_, d) =>
      Array.from({ length: 24 }, (_, h) => {
        const peak = h >= 8 && h <= 18 ? Math.random() * 30 + 5 : Math.random() * 8;
        return Math.floor(peak * (d < 5 ? 1.4 : 0.5));
      })
    ),
  },
  insights: `In June 2026, TIA AI handled a total of 1,847 conversations, representing 18% growth compared to the previous month. Lead generation increased significantly by 22%, producing 284 qualified leads for the sales team. Peak traffic was between 16:00–17:00, with an average of 241 conversations per hour. Pricing-related questions were the most common topic with 487 conversations, indicating high purchase intent among visitors. The AI confidence score remained strong at 84%, and response time improved by 8% during the month.`,
};

// ─── CHAT THEMES ──────────────────────────────────────────────────────────────

export const CHAT_THEMES = {
  dark: {
    name: 'Obsidian Black',
    bg: '#09090b',
    headerBg: 'rgba(13,13,15,0.97)',
    msgBg: '#232325',
    userMsgBg: '#2c2c30',
    border: 'rgba(255,255,255,0.09)',
    inputBg: '#1e1e22',
    chipColor: 'rgba(255,255,255,0.45)',
    textColor: 'rgba(232,232,232,0.95)',
    userTextColor: 'rgba(232,232,232,0.95)',
    subtleText: 'rgba(255,255,255,0.22)',
    accentDot: '#34d399',
    sendArrow: 'rgba(255,255,255,0.6)',
    glow: '0 32px 80px rgba(0,0,0,0.7)',
    avatarSrc: '/logo.png',
    scrollTrack: 'rgba(255,255,255,0.04)',
    scrollThumb: 'rgba(255,255,255,0.12)',
    scrollThumbHover: 'rgba(255,255,255,0.22)',
    chipBg: 'rgba(20,20,24,0.85)',
    msgAreaBg: 'transparent',
  },
  light: {
    name: 'Pearl White',
    bg: '#f4f4f5',
    headerBg: '#ffffff',
    msgBg: '#e4e4e7',
    userMsgBg: '#e4e4e7',
    border: 'rgba(0,0,0,0.08)',
    inputBg: '#ffffff',
    chipColor: 'rgba(0,0,0,0.45)',
    textColor: '#18181b',
    userTextColor: '#18181b',
    subtleText: 'rgba(0,0,0,0.3)',
    accentDot: '#34d399',
    sendArrow: 'rgba(0,0,0,0.5)',
    glow: '0 32px 80px rgba(0,0,0,0.35)',
    avatarSrc: '/logo-black.png',
    scrollTrack: 'rgba(0,0,0,0.04)',
    scrollThumb: 'rgba(0,0,0,0.12)',
    scrollThumbHover: 'rgba(0,0,0,0.22)',
    chipBg: 'rgba(255,255,255,0.7)',
    msgAreaBg: '#ececee',
  },
};

export const mockData = MOCK;
