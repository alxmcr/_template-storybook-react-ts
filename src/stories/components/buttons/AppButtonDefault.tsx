import { ButtonDefault } from './ButtonDefault';

type AppButtonProps = {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function AppButtonDefault({
  disabled = false,
  onClick,
  children,
}: AppButtonProps) {
  return (
    <ButtonDefault onClick={onClick} disabled={disabled}>
      {children}
    </ButtonDefault>
  );
}
