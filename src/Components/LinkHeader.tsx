import type { LinkHeaderProps } from "../Types/LinkHeader";

const LinkHeader = ({ linkIcon, linkTitle }: LinkHeaderProps) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <i>{linkIcon}</i>
        <h1 className="font-semibold">{linkTitle}</h1>
      </div>
    </>
  );
};

export default LinkHeader;
