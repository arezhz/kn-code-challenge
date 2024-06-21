type FormErrorProps = {
    error: string;
};
export default function FormError({ error }: FormErrorProps) {
  return <span className="text-xs text-rose-500">{error}</span>;
}
