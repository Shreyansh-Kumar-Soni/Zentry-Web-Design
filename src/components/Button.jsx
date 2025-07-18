import clsx from "clsx";

const Button = ({id, title, rightIcon, leftIcon, containerClass}) => {
    return (
        <button
            id={id}
            className={clsx(
                "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-6 py-2.5 text-black hover:rounded-xl hover:skew-x-[10deg] hover:px-5 ease-in-out duration-200",
                containerClass
            )}
        >
            {leftIcon}

            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div
            className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div
            className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

            {rightIcon}
        </button>
    );
};

export default Button;