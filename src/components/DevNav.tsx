import { useState } from 'react';
import { Sport } from '../App';
import { SessionInfo } from '../App';

type DevView =
  | 'session-lobby'
  | 'faq'
  | 'sport-selection'
  | 'host-credentials'
  | 'multiplayer-code-login'
  | 'guest-login'
  | 'game';

interface DevNavTarget {
  view: DevView;
  sport?: Sport;
  sessionInfo?: SessionInfo | null;
  username?: string;
}

interface DevNavProps {
  onNavigate: (target: DevNavTarget) => void;
}

const SPORTS: { label: string; value: Sport }[] = [
  { label: 'Soccer', value: 'soccer' },
  { label: 'Football', value: 'americanFootball' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Basketball', value: 'basketball' },
  { label: 'Rugby', value: 'rugby' },
  { label: 'Hockey', value: 'hockey' },
];

const MOCK_HOST_SESSION = (sport: Sport): SessionInfo => ({
  sessionId: 0,
  playerId: 0,
  groupName: 'Dev Team',
  initials: 'Dev',
  isHost: true,
  joinCode: 'DEVXXX',
});

const MOCK_GUEST_SESSION = (sport: Sport): SessionInfo => ({
  sessionId: 0,
  playerId: 0,
  groupName: 'Dev Team',
  initials: 'Guest',
  isHost: false,
  joinCode: 'DEVXXX',
});

export function DevNav({ onNavigate }: DevNavProps) {
  const [open, setOpen] = useState(false);

  const go = (target: DevNavTarget) => {
    onNavigate(target);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-2">
      {open && (
        <div className="bg-zinc-900 border border-zinc-600 rounded-lg p-3 w-72 shadow-2xl text-xs flex flex-col gap-3 max-h-[80vh] overflow-y-auto">

          <p className="text-yellow-400 font-bold uppercase tracking-wider">Dev Nav</p>

          {/* Screens */}
          <div>
            <p className="text-zinc-500 uppercase tracking-wider mb-1">Screens</p>
            <div className="flex flex-wrap gap-1">
              {[
                { label: 'Lobby', view: 'session-lobby' as DevView },
                { label: 'FAQ', view: 'faq' as DevView },
                { label: 'Sport Selection', view: 'sport-selection' as DevView },
                { label: 'Host Setup', view: 'host-credentials' as DevView },
                { label: 'MP Login', view: 'multiplayer-code-login' as DevView },
                { label: 'Guest Login', view: 'guest-login' as DevView },
              ].map(({ label, view }) => (
                <button
                  key={view}
                  onClick={() => go({ view, username: 'Dev' })}
                  className="bg-zinc-700 hover:bg-zinc-600 text-neutral-200 rounded px-2 py-1"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Solo boards */}
          <div>
            <p className="text-zinc-500 uppercase tracking-wider mb-1">Solo Board</p>
            <div className="flex flex-wrap gap-1">
              {SPORTS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => go({ view: 'game', sport: value, sessionInfo: null, username: 'Dev' })}
                  className="bg-zinc-700 hover:bg-zinc-600 text-neutral-200 rounded px-2 py-1"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Host boards */}
          <div>
            <p className="text-zinc-500 uppercase tracking-wider mb-1">Host Board</p>
            <div className="flex flex-wrap gap-1">
              {SPORTS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => go({ view: 'game', sport: value, sessionInfo: MOCK_HOST_SESSION(value), username: 'Dev' })}
                  className="bg-zinc-700 hover:bg-green-900 text-neutral-200 rounded px-2 py-1"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Guest boards */}
          <div>
            <p className="text-zinc-500 uppercase tracking-wider mb-1">Guest Board</p>
            <div className="flex flex-wrap gap-1">
              {SPORTS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => go({ view: 'game', sport: value, sessionInfo: MOCK_GUEST_SESSION(value), username: 'Guest' })}
                  className="bg-zinc-700 hover:bg-blue-900 text-neutral-200 rounded px-2 py-1"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

      <button
        onClick={() => setOpen(o => !o)}
        className="bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-bold rounded-full w-10 h-10 shadow-lg text-xs"
      >
        DEV
      </button>
    </div>
  );
}
