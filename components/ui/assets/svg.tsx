// lib
import { cn } from "@/lib/utils";

export type SVGComponentProps = {
  className?: string;
  stroke?: string;
  fill?: string;
};

export const ArrowRightIcon: React.FC<SVGComponentProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16666 10H15.8333"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8333 15L15.8333 10"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8333 5L15.8333 10"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DropdownIcon: React.FC<SVGComponentProps> = ({
  className,
  stroke,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.27246 9L12.2725 15L18.2725 9"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CallIcon: React.FC<SVGComponentProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M42 38V34.7081C42 33.0725 41.0042 31.6017 39.4856 30.9942L35.4173 29.3669C33.4857 28.5943 31.2844 29.4312 30.354 31.292L30 32C30 32 25 31 21 27C17 23 16 18 16 18L16.708 17.646C18.5688 16.7156 19.4057 14.5143 18.6331 12.5827L17.0058 8.51444C16.3983 6.99581 14.9275 6 13.2919 6H10C7.79086 6 6 7.79086 6 10C6 27.6731 20.3269 42 38 42C40.2091 42 42 40.2091 42 38Z"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CartIcon: React.FC<SVGComponentProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6115 3H8.38848C6.43313 3 4.76436 4.41365 4.44291 6.3424L2.77624 16.3424C2.36988 18.7805 4.25006 21 6.72182 21H17.2781C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.557 6.3424C19.2356 4.41365 17.5668 3 15.6115 3Z"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseIcon: React.FC<SVGComponentProps> = ({ className, fill }) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.29289 5.46648C5.68342 5.07595 6.31658 5.07595 6.70711 5.46648L12 10.7594L17.2929 5.46648C17.6834 5.07595 18.3166 5.07595 18.7071 5.46648C19.0976 5.857 19.0976 6.49017 18.7071 6.88069L13.4142 12.1736L18.7071 17.4665C19.0976 17.857 19.0976 18.4902 18.7071 18.8807C18.3166 19.2712 17.6834 19.2712 17.2929 18.8807L12 13.5878L6.70711 18.8807C6.31658 19.2712 5.68342 19.2712 5.29289 18.8807C4.90237 18.4902 4.90237 17.857 5.29289 17.4665L10.5858 12.1736L5.29289 6.88069C4.90237 6.49017 4.90237 5.857 5.29289 5.46648Z"
        fill={cn(fill ? fill : "#6C7275")}
      />
    </svg>
  );
};

export const DeliveryIcon: React.FC<SVGComponentProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 19V7M14 19H16M14 19H9M14 7C14 4.79086 12.2091 3 10 3H6C3.79086 3 2 4.79086 2 7V15C2 16.8652 3.27667 18.4323 5.00384 18.875M14 7H17.2091C17.7172 7 18.2063 7.1934 18.577 7.54093L21.3679 10.1574C21.7712 10.5355 22 11.0636 22 11.6165V17C22 18.1046 21.1046 19 20 19M20 19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19M20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19M9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 18.958 5.00129 18.9163 5.00384 18.875M9 19C9 17.8954 8.10457 17 7 17C5.93742 17 5.06838 17.8286 5.00384 18.875"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
      />
      <path
        d="M10 8L8 8"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12L6 12"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DiscountIcon: React.FC<SVGComponentProps> = ({
  fill,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.0181 14.8356L20.7727 15.5444H20.7727L21.0181 14.8356ZM21.0181 9.16437L21.2635 9.8731V9.8731L21.0181 9.16437ZM2.98189 14.8356L3.22727 15.5444H3.22727L2.98189 14.8356ZM2.98189 9.16437L2.73652 9.8731L2.73652 9.8731L2.98189 9.16437ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L8.46967 14.4697ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM18 3.75C19.7949 3.75 21.25 5.20507 21.25 7H22.75C22.75 4.37665 20.6234 2.25 18 2.25V3.75ZM6 2.25C3.37665 2.25 1.25 4.37665 1.25 7H2.75C2.75 5.20507 4.20507 3.75 6 3.75V2.25ZM21.2635 14.1269C20.3815 13.8216 19.75 12.9836 19.75 12H18.25C18.25 13.6424 19.3054 15.0363 20.7727 15.5444L21.2635 14.1269ZM19.75 12C19.75 11.0164 20.3815 10.1784 21.2635 9.8731L20.7727 8.45565C19.3054 8.96367 18.25 10.3576 18.25 12H19.75ZM4.25 12C4.25 12.9836 3.61845 13.8216 2.73652 14.1269L3.22727 15.5444C4.69461 15.0363 5.75 13.6424 5.75 12H4.25ZM2.73652 9.8731C3.61845 10.1784 4.25 11.0164 4.25 12H5.75C5.75 10.3576 4.69462 8.96367 3.22727 8.45565L2.73652 9.8731ZM22.75 8V7H21.25V8H22.75ZM21.25 16V17H22.75V16H21.25ZM1.25 16V17H2.75V16H1.25ZM2.75 8V7H1.25V8H2.75ZM18 20.25H6V21.75H18V20.25ZM18 2.25H6V3.75H18V2.25ZM2.73652 14.1269C2.05785 14.3619 1.25 14.9975 1.25 16H2.75C2.75 15.9441 2.77081 15.8708 2.85172 15.7813C2.9366 15.6873 3.06974 15.5989 3.22727 15.5444L2.73652 14.1269ZM21.2635 9.8731C21.9422 9.63813 22.75 9.00246 22.75 8H21.25C21.25 8.05587 21.2292 8.12917 21.1483 8.21871C21.0634 8.31265 20.9303 8.40111 20.7727 8.45565L21.2635 9.8731ZM3.22727 8.45565C3.06974 8.40111 2.9366 8.31265 2.85172 8.21871C2.77081 8.12917 2.75 8.05587 2.75 8H1.25C1.25 9.00246 2.05785 9.63813 2.73652 9.8731L3.22727 8.45565ZM20.7727 15.5444C20.9303 15.5989 21.0634 15.6873 21.1483 15.7813C21.2292 15.8708 21.25 15.9441 21.25 16H22.75C22.75 14.9975 21.9422 14.3619 21.2635 14.1269L20.7727 15.5444ZM9.25 9C9.25 9.13807 9.13807 9.25 9 9.25V10.75C9.9665 10.75 10.75 9.9665 10.75 9H9.25ZM9 9.25C8.86193 9.25 8.75 9.13807 8.75 9H7.25C7.25 9.9665 8.0335 10.75 9 10.75V9.25ZM8.75 9C8.75 8.86193 8.86193 8.75 9 8.75V7.25C8.0335 7.25 7.25 8.0335 7.25 9H8.75ZM9 8.75C9.13807 8.75 9.25 8.86193 9.25 9H10.75C10.75 8.0335 9.9665 7.25 9 7.25V8.75ZM15.25 15C15.25 15.1381 15.1381 15.25 15 15.25V16.75C15.9665 16.75 16.75 15.9665 16.75 15H15.25ZM15 15.25C14.8619 15.25 14.75 15.1381 14.75 15H13.25C13.25 15.9665 14.0335 16.75 15 16.75V15.25ZM14.75 15C14.75 14.8619 14.8619 14.75 15 14.75V13.25C14.0335 13.25 13.25 14.0335 13.25 15H14.75ZM15 14.75C15.1381 14.75 15.25 14.8619 15.25 15H16.75C16.75 14.0335 15.9665 13.25 15 13.25V14.75ZM14.4697 8.46967L8.46967 14.4697L9.53033 15.5303L15.5303 9.53033L14.4697 8.46967Z"
        fill={cn(fill ? fill : "#141718")}
      />
    </svg>
  );
};

export const HamburgerMenu: React.FC<SVGComponentProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 8H17M7 12H17M7 16H17"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const LockIcon: React.FC<SVGComponentProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M32 16H16M32 16C36.4183 16 40 19.5817 40 24V36C40 40.4183 36.4183 44 32 44H16C11.5817 44 8 40.4183 8 36V24C8 19.5817 11.5817 16 16 16M32 16V12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12V16M24 32V28"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const StarIcon: React.FC<SVGComponentProps> = ({ fill, className }) => {
  return (
    <svg
      className={cn(className)}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.53834 2.00376C7.70914 1.59312 8.29086 1.59312 8.46166 2.00376L9.99874 5.69936C10.0707 5.87247 10.2336 5.99076 10.4204 6.00574L14.4102 6.3256C14.8535 6.36114 15.0332 6.91439 14.6955 7.20373L11.6557 9.80758C11.5133 9.92956 11.4512 10.1209 11.4947 10.3033L12.4234 14.1966C12.5265 14.6292 12.0559 14.9711 11.6764 14.7393L8.26063 12.653C8.10062 12.5553 7.89938 12.5553 7.73937 12.653L4.32363 14.7393C3.94408 14.9711 3.47345 14.6292 3.57665 14.1966L4.50534 10.3033C4.54884 10.1209 4.48665 9.92956 4.34426 9.80758L1.30453 7.20373C0.966758 6.91439 1.14652 6.36114 1.58985 6.3256L5.57955 6.00574C5.76645 5.99076 5.92925 5.87247 6.00126 5.69936L7.53834 2.00376Z"
        fill={cn(fill ? fill : "#343839")}
      />
    </svg>
  );
};

export const SearchIcon: React.FC<SVGComponentProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UserIcon: React.FC<SVGComponentProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WishlistIcon: React.FC<SVGComponentProps> = ({
  fill,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6924 6.91706C12.3055 7.28838 11.6945 7.28838 11.3076 6.91706L10.6152 6.2526C9.80477 5.47487 8.70994 5 7.5 5C5.01472 5 3 7.01472 3 9.5C3 11.8826 4.28979 13.8501 6.15176 15.4666C8.01532 17.0844 10.2434 18.1574 11.5746 18.7051C11.853 18.8196 12.147 18.8196 12.4254 18.7051C13.7566 18.1574 15.9847 17.0844 17.8482 15.4666C19.7102 13.85 21 11.8826 21 9.5C21 7.01472 18.9853 5 16.5 5C15.2901 5 14.1952 5.47487 13.3848 6.2526L12.6924 6.91706ZM12 4.80957C10.8321 3.6888 9.24649 3 7.5 3C3.91015 3 1 5.91015 1 9.5C1 15.8683 7.97034 19.385 10.8138 20.5547C11.5796 20.8697 12.4204 20.8697 13.1862 20.5547C16.0297 19.385 23 15.8682 23 9.5C23 5.91015 20.0899 3 16.5 3C14.7535 3 13.1679 3.6888 12 4.80957Z"
        fill={cn(fill ? fill : "#141718")}
      />
    </svg>
  );
};

export const MoneyIcon: React.FC<SVGComponentProps> = ({
  fill,
  stroke,
  className,
}) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <rect
        x="4"
        y="8"
        width="40"
        height="32"
        rx="4"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="2.5"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 20 28)"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="2.5"
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        transform="matrix(1 0 0 -1 34 26)"
        fill={cn(fill ? fill : "#141718")}
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        transform="matrix(1 0 0 -1 10 26)"
        fill={cn(fill ? fill : "#141718")}
      />
    </svg>
  );
};

export const NotificationCount = ({
  count,
  className,
}: {
  count: number;
  className?: string;
}) => {
  const showCount = count >= 10 ? "9+" : `${count}`;

  return (
    <span
      className={cn(
        "flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-black font-inter text-[10px] font-semibold text-white",
        className,
      )}
    >
      {showCount}
    </span>
  );
};

// social media icon
export const InstagramIcon: React.FC<SVGComponentProps> = ({
  fill,
  stroke,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
      />
      <circle cx="18" cy="6" r="1" fill={cn(fill ? fill : "#141718")} />
      <circle
        cx="12"
        cy="12"
        r="5"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const FacebookIcon: React.FC<SVGComponentProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const YoutubeIcon: React.FC<SVGComponentProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="18"
        rx="4"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
      />
      <path
        d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
        stroke={cn(stroke ? stroke : "#141718")}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
