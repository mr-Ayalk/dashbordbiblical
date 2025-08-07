import { cn } from "@/lib/utils";

interface ProgressProps {
  title: string;
  description: string;
  CompletedBooks?: number;
  OnProgressBooks?: number;
  TotalBooks?: number;
  className?: string;
}
const Progress = ({
  title,
  description,
  CompletedBooks,
  OnProgressBooks,
  TotalBooks,
  className,
}: ProgressProps) => {
  return (
    <div
      className={cn(
        "h-[400px] w-[90%] m-10 rounded-3xl border-2 shadow-2xl p-20",
        className
      )}
    >
      <div>
        <h1 className="text-3xl  font-extrabold p-2">{title}</h1>
        <p className="text-xl p-2 font-semibold">{description}</p>
        <div className="flex justify-between">
          <div>
            <h2 className="text-5xl">Completed Books: {CompletedBooks}</h2>
            <h2 className="text-5xl">On Progress Books: {OnProgressBooks}</h2>
            <h2 className="text-5xl">Total Books: {TotalBooks}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
