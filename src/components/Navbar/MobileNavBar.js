import Button from "../Button";

import {
  CloseIcon,
  PayoutsIcon,
  DocumentationIcon,
  SupportIcon,
  AboutStripeIcon,
  NewsroomIcon,
  PartnersIcon,
  RegisterSessionIcon,
  JobsIcon,
  EnterpriseIcon,
  BlogIcon,
  PricingIcon,
} from "../../utils/icons";

import {
  paymentsList,
  financialList,
  businessList,
} from "./Dropdown/ProductsDropdown";
import { useCaseItems } from "./Dropdown/UseCasesDropdown";
import SingleItem from "./Dropdown/SingleItem";

const MobileNavBar = () => {
  const payouts = [
    {
      id: "Payments6",
      icon: PayoutsIcon(),
      primaryText: "Payouts",
    },
  ];

  const allProductsItem = [
    ...paymentsList,
    ...financialList,
    ...businessList,
    ...payouts,
  ];

  const additionalItems = [
    {
      id: "additionalItem1",
      icon: PricingIcon(),
      primaryText: "Pricing",
      linkTo: "#",
    },
    {
      id: "additionalItem2",
      icon: JobsIcon(),
      primaryText: "Jobs",
      linkTo: "#",
    },
    {
      id: "additionalItem3",
      icon: DocumentationIcon(),
      primaryText: "Documentation",
      linkTo: "#",
    },
    {
      id: "additionalItem4",
      icon: RegisterSessionIcon(),
      primaryText: "Sessions",
      linkTo: "#",
    },
    {
      id: "additionalItem5",
      icon: AboutStripeIcon(),
      primaryText: "About Stripe",
      linkTo: "#",
    },
    {
      id: "additionalItem6",
      icon: PartnersIcon(),
      primaryText: "Partners",
      linkTo: "#",
    },
    {
      id: "additionalItem7",
      icon: SupportIcon(),
      primaryText: "Support",
      linkTo: "#",
    },
    {
      id: "additionalItem8",
      icon: EnterpriseIcon(),
      primaryText: "Enterprise",
      linkTo: "#",
    },
    {
      id: "additionalItem9",
      icon: NewsroomIcon(),
      primaryText: "Newsroom",
      linkTo: "#",
    },
    {
      id: "additionalItem10",
      icon: BlogIcon(),
      primaryText: "Blog",
      linkTo: "#",
    },
  ];

  const el = `
        <div class="space-y-4">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="uppercase text-gray-400 text-sm font-semibold">
                products
              </h2>
              <button id='close-menu'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div class="grid grid-cols-2">
              ${allProductsItem
                .map(({ id, icon, primaryText }, i) => {
                  return SingleItem({
                    id,
                    wrapperAdditionalClass:
                      !(i >= allProductsItem.length - 2) && "mb-4",
                    primaryText: primaryText,

                    Icon: icon,
                    //primaryTextClass,
                  });
                })
                .join("")}
            </div>
          </div>
          <div class="border-dashed border-t border-gray-300">
            <div class="p-6">
              <h2 class="uppercase text-gray-400 text-sm font-semibold mb-4">
                use cases
              </h2>
              <div class="grid grid-cols-2">
                ${useCaseItems
                  .map(({ id, Icon, primaryText }, i) => {
                    return SingleItem({
                      id,
                      wrapperAdditionalClass:
                        !(i >= useCaseItems.length - 2) && "mb-4",
                      primaryText: primaryText,

                      Icon: Icon,
                      //primaryTextClass,
                    });
                  })
                  .join("")}
              </div>
            </div>
          </div>
          <div class="border-dashed border-t border-gray-300">
            <div class="p-6">
              <div class="grid grid-cols-2 sm:grid-cols-3">
                ${additionalItems
                  .map(({ id, icon, primaryText }, i) => {
                    return SingleItem({
                      id,
                      wrapperAdditionalClass:
                        !(i >= additionalItems.length - 2) && "mb-4",
                      primaryText: primaryText,

                      Icon: icon,
                      //primaryTextClass,
                    });
                  })
                  .join("")}
              </div>
            </div>
          </div>
          <div class="bg-gray-50">
            <div class="flex items-center justify-center p-6">
                <a href="#">
              ${Button({
                backgroundClass: "bg-indigo-600",
                hoverBackgroundClass: "hover:bg-gray-600",
                text: "Sign in",
              })}
                </a>
            </div>
          </div>
        </div>`;

  return el;
};

export default MobileNavBar;
