import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

type Translations = {
  navbar: {
    features: string;
    howItWorks: string;
    pricing: string;
    login: string;
    getStarted: string;
  };
  hero: {
    headlinePrefix: string;
    headlineSuffix: string;
    subheadline: string;
    placeholder: string;
  };
  features: {
    headingPrefix: string;
    headingSuffix: string;
    subheading: string;
    items: {
      call: { title: string; desc: string };
      negotiate: { title: string; desc: string };
      email: { title: string; desc: string };
      subscription: { title: string; desc: string };
      privacy: { title: string; desc: string };
      alwaysOn: { title: string; desc: string };
    };
  };
  howItWorks: {
    heading: string;
    steps: [
      { title: string; desc: string },
      { title: string; desc: string },
      { title: string; desc: string }
    ];
  };
  footer: {
    description: string;
    product: string;
    company: string;
    links: {
      features: string;
      pricing: string;
      security: string;
      about: string;
      contact: string;
      privacy: string;
    };
  };
};

const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      features: "Features",
      howItWorks: "How it works",
      pricing: "Pricing",
      login: "Login",
      getStarted: "Get Started"
    },
    hero: {
      headlinePrefix: "What do you need ",
      headlineSuffix: "your assistant to do?",
      subheadline: "Build an AI assistant that actually helps you run your business.",
      placeholder: "Tell us what you need..."
    },
    features: {
      headingPrefix: "Not just answers, ",
      headingSuffix: "real business results.",
      subheading: "Most AIs just chat. AILINKXIN assistant captures leads, closes deals and keeps customers coming back.",
      items: {
        call: { title: "Lead Capture", desc: "Collect names, contact info and needs from chat, forms and landing pages automatically." },
        negotiate: { title: "Booking & Reminders", desc: "Let your assistant handle bookings, confirmations and \"don't forget\" reminders." },
        email: { title: "Smart FAQ & Support", desc: "Answer repeat questions instantly, free your time from copy-paste replies." },
        subscription: { title: "Sales Follow-up", desc: "Nurture warm leads with sequences, upsell existing customers, and reduce no-shows." },
        privacy: { title: "Internal Automations", desc: "Trigger workflows in tools like email, calendar, CRM or spreadsheets with one message." },
        alwaysOn: { title: "24/7 Availability", desc: "Your assistant never sleeps, never forgets, and always follows your rules." }
      }
    },
    howItWorks: {
      heading: "How it works",
      steps: [
        { title: "Tell us about your business", desc: "In a quick chat or form, share what you sell, how you get customers and where you feel stuck." },
        { title: "We design your AI assistant & flows", desc: "We plan the conversations, forms and automations that fit your business and tools." },
        { title: "Launch, test and improve together", desc: "We launch your assistant, track results, and keep refining messages and flows over time." }
      ]
    },
    footer: {
      description: "Ailinkxin is your intelligent life assistant. We automate tedious daily tasks so you can focus on what matters.",
      product: "Product",
      company: "Company",
      links: {
        features: "Features",
        pricing: "Pricing",
        security: "Security",
        about: "About Us",
        contact: "Contact",
        privacy: "Privacy"
      }
    }
  },
  zh: {
    navbar: {
      features: "功能",
      howItWorks: "工作原理",
      pricing: "价格",
      login: "登录",
      getStarted: "开始使用"
    },
    hero: {
      headlinePrefix: "你需要助手帮你",
      headlineSuffix: "做些什么？",
      subheadline: "打造一个可以帮你分担一些重复工作的小助手 —— 查邮件、发邮件、多平台自动发布、自动营销、客户管理",
      placeholder: "说说你的需求..."
    },
    features: {
      headingPrefix: "不仅仅是聊天，",
      headingSuffix: "而是真正的行动派",
      subheading: "大多数 AI 只能给您建议，Pine AI 则直接为您解决问题。",
      items: {
        call: { title: "代打电话", desc: "我们会替您拨打客服电话，等待接通，并为您解决问题，无需您亲自在线等待。" },
        negotiate: { title: "账单谈判", desc: "觉得网费太贵？Pine AI 会自动帮您与服务商谈判，争取更低的费率。" },
        email: { title: "邮件处理", desc: "自动起草、回复和跟进重要的服务邮件，确保您的诉求得到及时回应。" },
        subscription: { title: "订阅管理", desc: "一键扫描并取消那些您不再使用但仍在扣费的订阅服务。" },
        privacy: { title: "隐私保护", desc: "银行级加密标准，确保您的个人信息和财务数据绝对安全。" },
        alwaysOn: { title: "全天候服务", desc: "无论何时何地，只需一条指令，Pine AI 立即为您开始工作。" }
      }
    },
    howItWorks: {
      heading: "工作原理",
      steps: [
        { title: "告诉 Pine 您需要什么", desc: "比如：“帮我取消 Netflix 订阅” 或者 “问问我的网络账单能不能便宜点”。" },
        { title: "Pine 开始工作", desc: "Pine 会登录您的账户，拨打电话，或者发送邮件。您不需要做任何事。" },
        { title: "任务完成", desc: "一旦完成，Pine 会通知您结果。您可以随时查看进度。" }
      ]
    },
    footer: {
      description: "Ailinkxin 是您的智能生活助手。我们将繁琐的日常任务自动化，让您专注于真正重要的事情。",
      product: "产品",
      company: "公司",
      links: {
        features: "功能介绍",
        pricing: "价格方案",
        security: "安全保障",
        about: "关于我们",
        contact: "联系方式",
        privacy: "隐私政策"
      }
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
