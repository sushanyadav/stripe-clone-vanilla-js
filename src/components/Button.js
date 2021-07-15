const Button = ({
  backgroundClass,
  hoverBackgroundClass,
  classNames,
  text,
  linkTo,
  noPadding,
  normalFont,
  roundedOnlyBigScreen,
  renderTextAsChildren,
  children,
}) => {
  const bgClass = backgroundClass || "";
  const bgHoverClass = hoverBackgroundClass || "";
  const additionalClassNames = classNames || "";
  const href = linkTo || "#";
  const noPaddingClass = noPadding ? "" : "py-1 px-4";
  const fontClass = normalFont ? "font-normal" : "font-semibold";
  const roundedOnlyBigScreenClass = roundedOnlyBigScreen
    ? "rounded-md lg:rounded-full"
    : "rounded-full";

  return `<a
      href=${href}
      class="${bgClass} arrow-button ${bgHoverClass} ${noPaddingClass} ${fontClass} ${roundedOnlyBigScreenClass} flex items-center text-white ${additionalClassNames}">
        ${renderTextAsChildren ? children : text}
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" class="arrow ml-1.5 md:ml-2 block w-2.5 h-2.5 md:w-2 md:h-2  fill-current md:mt-0.5" enable-background="new 0 0 491.1 491.1" version="1.1" viewBox="0 0 491.1 491.1" xml:space="preserve" style=""><path d="M379.25 282.85l-192.8 192.8c-20.6 20.6-54 20.6-74.6 0s-20.6-54 0-74.6l155.5-155.5-155.5-155.5c-20.6-20.6-20.6-54 0-74.6s54-20.6 74.6 0l192.8 192.8c20.6 20.6 20.6 54 0 74.6z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" class="arrow ml-1.5 md:ml-2 hidden w-3 h-3 md:w-2 md:h-2  fill-current md:mt-0.5" enable-background="new 0 0 550.354 550.354" version="1.1" viewBox="0 0 550.354 550.354" xml:space="preserve" style="transform: rotate(180deg);"><path d="M541.169 208.807H261.295c-5.07 0-5.906-2.484-1.87-5.551l68.373-51.919c4.039-3.066 7.311-9.66 7.311-14.73V25.578c0-5.07-3.269-6.689-7.301-3.614L3.025 269.61c-4.033 3.075-4.033 8.057 0 11.132L327.811 528.39c4.033 3.076 7.301 1.457 7.301-3.613V413.748c0-5.07-3.274-11.665-7.311-14.73l-68.372-51.919c-4.04-3.066-3.201-5.551 1.87-5.551h279.876a9.18 9.18 0 009.18-9.181V217.988c-.006-5.071-4.116-9.181-9.186-9.181z"></path></svg>          
</a>
 `;
};

export default Button;
