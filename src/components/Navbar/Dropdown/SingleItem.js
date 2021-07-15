const SingleItem = ({
  id,
  Icon,
  primaryText,
  secondaryText,
  primaryTextClass,
  wrapperAdditionalClass,
}) => {
  const requiredHTML = `<li
     ${id && `id=${id}`}
      class="${
        wrapperAdditionalClass ? wrapperAdditionalClass : ""
      } flex gap-2 md:gap-4 cursor-pointer group"
    >
     ${Icon}
      <div class="flex flex-col text-sm">
        <h3>
          <span
            class="${
              primaryTextClass ? primaryTextClass : ""
            } flex items-center gap-1 text-gray-700 font-semibold group-hover:text-gray-900"
          >
            ${primaryText}
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" class="mt-1 fill-current" x="0" y="0" enable-background="new 0 0 550.354 550.354" version="1.1" viewBox="0 0 550.354 550.354" xml:space="preserve" height="9" width="9" style="transform: rotate(180deg);"><path d="M541.169 208.807H261.295c-5.07 0-5.906-2.484-1.87-5.551l68.373-51.919c4.039-3.066 7.311-9.66 7.311-14.73V25.578c0-5.07-3.269-6.689-7.301-3.614L3.025 269.61c-4.033 3.075-4.033 8.057 0 11.132L327.811 528.39c4.033 3.076 7.301 1.457 7.301-3.613V413.748c0-5.07-3.274-11.665-7.311-14.73l-68.372-51.919c-4.04-3.066-3.201-5.551 1.87-5.551h279.876a9.18 9.18 0 009.18-9.181V217.988c-.006-5.071-4.116-9.181-9.186-9.181z"></path></svg>
          </span>
        </h3>  
            <span class="text-gray-500 ${
              !secondaryText ? "hidden" : "inline-block"
            } group-hover:text-gray-800 text-xs">
              ${secondaryText}
            </span>
      </div>
    </li>`;

  return requiredHTML;
};

export default SingleItem;
