// ui
import { Dialog, DialogTrigger, DialogContent } from "@/ui/dialog";

const ProductTabDialog = ({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="z-[110] max-h-[90vh] overflow-y-scroll md:max-h-[50vh] md:max-w-[80vw] lg:max-h-[90vh] lg:max-w-[986px]">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ProductTabDialog;
