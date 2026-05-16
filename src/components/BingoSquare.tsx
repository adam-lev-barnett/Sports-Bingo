import { motion } from 'motion/react';
// import { Activity } from 'lucide-react'; // watermark icon — re-enable when ready
import { Star } from 'lucide-react';
import { BingoItem } from './bingoDataNoIcons';

interface BingoSquareProps {
  item: BingoItem | null;
  index: number;
  isMarked: boolean;
  isFreeSpace: boolean;
  onClick: () => void;
}

export function BingoSquare({ item, isMarked, isFreeSpace, onClick }: BingoSquareProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative aspect-square rounded p-1.5 flex flex-col items-center justify-center
        transition-all duration-300
        ${isFreeSpace || isMarked
          ? 'border border-zinc-700'
          : 'bg-zinc-700 hover:bg-zinc-600 border border-zinc-600'
        }
        shadow-md hover:shadow-lg
      `}
      style={isFreeSpace || isMarked ? { background: 'linear-gradient(to bottom right, #17BB34, #14a12d)' } : undefined}
    >
      {/* Watermark icon — uncomment to re-enable */}
      {/* {!isFreeSpace && !isMarked && (
        <Activity
          style={{ position: 'absolute', width: '50px', height: '50px', color: '#17BB34', opacity: 0.3 }}
          strokeWidth={1.5}
        />
      )} */}
      {isFreeSpace && (
        <Star
          style={{ position: 'absolute', width: '70px', height: '70px', color: '#18181b', opacity: 0.3 }}
          strokeWidth={1.5}
          fill="#18181b"
        />
      )}

      {/* Label — on top of icon */}
      <span style={{ fontSize: '13px', position: 'relative' }} className={`text-center leading-tight font-medium ${isMarked || isFreeSpace ? 'text-zinc-900' : 'text-neutral-200'}`}>
        {isFreeSpace ? 'FREE' : item?.name}
      </span>

    </motion.button>
  );
}
