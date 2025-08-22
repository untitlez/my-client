import { Loader2 } from "lucide-react";

export default function LoadingOfficePage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex items-center gap-2 text-lg font-medium">
        <Loader2 className="animate-spin text-primary" />
        Loading...
      </div>
    </div>
  );
}
