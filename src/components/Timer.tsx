import { useTimer } from "react-timer-hook";

import { formatTime } from "@/lib";

import { Button } from "./ui";

interface ITimerProps {
  delay: number;
  onRetry: () => void;
  loading: boolean;
}

export const Timer = ({ delay, onRetry, loading }: ITimerProps) => {
  const expiryDate = new Date(Date.now() + delay);

  const { minutes, seconds, restart } = useTimer({
    expiryTimestamp: expiryDate
  });

  if (!seconds && !minutes)
    return (
      <div className='flex items-center justify-center w-full'>
        <Button
          variant='link_secondary'
          size='sm'
          disabled={loading}
          onClick={() => {
            restart(expiryDate);
            onRetry();
          }}
        >
          Отправить еще раз
        </Button>
      </div>
    );

  return (
    <p className='opacity-50 text-sm text-center'>
      Отправить код повторно можно через {formatTime(minutes)}:{formatTime(seconds)}
    </p>
  );
};
