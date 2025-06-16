import type { LinkHeaderProps } from "../Types/LinkHeader";

const LinkHeader = ({ linkIcon, linkTitle, LinkTo }: LinkHeaderProps) => {
  return (
    <>
      <a href={LinkTo}>
        <div className="flex items-center gap-2 cursor-pointer">
          <i>{linkIcon}</i>
          <h1 className="font-semibold">{linkTitle}</h1>
        </div>
      </a>
    </>
  );
};

export default LinkHeader;
