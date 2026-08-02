const SocialLink = ({ socialData }) => {
  return (
    <li>
      <a
        href={socialData.url}
        aria-label={socialData.name}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={socialData.viewBox}
          fill="currentColor"
        >
          <path d={socialData.path} strokeWidth="1"></path>
        </svg>
      </a>
    </li>
  );
};

export default SocialLink;
