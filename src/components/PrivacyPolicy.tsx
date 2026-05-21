import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const sections: { title: string; body: string; links?: { label: string; url: string }[] }[] = [
  {
    title: 'Overview',
    body: 'Turquoise Sunrise LLC ("we," "us," or "our") operates Fanatic Bingo. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information. By using Fanatic Bingo, you agree to the practices described here.',
  },
  {
    title: 'Information We Collect',
    body: 'We collect the username you enter when starting a game. We also collect anonymous session data — including your game board, marked squares, and multiplayer session activity — to allow the game to function and to save your progress. If you create an account or make a purchase, we will collect your email address and payment information as described below.',
  },
  {
    title: 'How We Use Your Information',
    body: 'Your username and game data are used solely to operate the game — to save your progress, enable multiplayer sessions, and display leaderboard information to other players in your session. We do not sell, rent, or share your information with third parties for marketing purposes.',
  },
  {
    title: 'Third-Party Services',
    body: 'Fanatic Bingo uses Supabase to store session data and manage authentication, and Stripe for payment processing. We do not store payment card details on our servers. Please review their privacy policies for more information on how they handle your data.',
    links: [
      { label: 'Supabase Privacy Policy', url: 'https://supabase.com/privacy' },
      { label: 'Stripe Privacy Policy', url: 'https://stripe.com/privacy' },
    ],
  },
  {
    title: 'Cookies and Local Storage',
    body: 'We use browser cookies and local storage to keep you logged in and to restore your game session if you close or refresh the app. We do not use cookies for advertising or tracking purposes.',
  },
  {
    title: 'Data Retention',
    body: 'Anonymous session data is retained for the duration of your game session. Multiplayer sessions expire after 24 hours or when the host ends the game. If you create an account, your data is retained until you request deletion.',
  },
  {
    title: 'Children\'s Privacy',
    body: 'Fanatic Bingo is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it.',
  },
  {
    title: 'Your Rights',
    body: 'You may request access to, correction of, or deletion of any personal data we hold about you by contacting us at support@fanaticbingo.com. We will respond to your request within a reasonable timeframe.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Changes will be posted within the app. Continued use of Fanatic Bingo after changes are posted constitutes your acceptance of the updated policy.',
  },
  {
    title: 'Contact Us',
    body: 'If you have any questions about this Privacy Policy, please contact us at support@fanaticbingo.com.',
  },
];

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-neutral-300 hover:bg-zinc-800 hover:text-green-500 h-8 px-3"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-green-500 uppercase tracking-wider mb-1">Privacy Policy</h2>
            <div className="h-1 w-20 bg-green-500 mx-auto mb-3" />
            <p className="text-neutral-400 text-sm">Turquoise Sunrise LLC — Effective 2026</p>
          </div>

          <div className="flex flex-col gap-4 pb-16">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                className="bg-zinc-800 border border-zinc-700 rounded p-4"
              >
                <p className="text-neutral-200 text-sm font-medium mb-2">{section.title}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{section.body}</p>
                {section.links && (
                  <div className="flex flex-col gap-1 mt-2">
                    {section.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 text-sm hover:text-green-400 transition-colors"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
