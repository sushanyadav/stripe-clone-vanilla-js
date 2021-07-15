import {
  PaymentsIcon,
  TerminalIcon,
  ConnectIcon,
  BillingIcon,
  InvoicingIcon,
  CorporateCardIcon,
  CapitalIcon,
  IssuingIcon,
  TreasuryIcon,
  RadarIcon,
  SigmaIcon,
  AtlasIcon,
  ClimateIcon,
} from "../../../utils/icons";

import SingleItem from "./SingleItem";

const ProductItems = ({ primaryText, items }) => {
  const requiredHTML = `<div>
      <h2 class="uppercase mb-6 lg:mb-8 text-gray-400 text-sm font-semibold">
        ${primaryText}
      </h2>
      <ul class="space-y-8">
        ${items
          .map(({ id, icon, secondaryText, primaryText }) => {
            return SingleItem({
              id,
              Icon: icon,
              primaryText,
              secondaryText,
              //primaryTextClass,
            });
          })
          .join("")}
      </ul>
    </div>`;

  return requiredHTML;
};

export const paymentsList = [
  {
    id: "Payments1",
    icon: PaymentsIcon(),
    primaryText: "Payments",
    secondaryText: "Online payments",
  },
  {
    id: "Payments2",
    icon: TerminalIcon(),
    primaryText: "Terminal",
    secondaryText: "In-person payments",
  },
  {
    id: "Payments3",
    icon: ConnectIcon(),
    primaryText: "Connect",
    secondaryText: "Payment for platforms",
  },
  {
    id: "Payments4",
    icon: BillingIcon(),
    primaryText: "Billing",
    secondaryText: "Subscription management",
  },
  {
    id: "Payments5",
    icon: InvoicingIcon(),
    primaryText: "Invoicing",
    secondaryText: "Online invoices",
  },
];

export const financialList = [
  {
    id: "Financial1",
    icon: CorporateCardIcon(),
    primaryText: "Corporate Card",
    secondaryText: "Spend management",
  },
  {
    id: "Financial2",
    icon: CapitalIcon(),
    primaryText: "Capital",
    secondaryText: "Business financing",
  },
  {
    id: "Financial3",
    icon: IssuingIcon(),
    primaryText: "Issuing",
    secondaryText: "Card creation",
  },
  {
    id: "Financial4",
    icon: TreasuryIcon(),
    primaryText: "Treasury",
    secondaryText: "Banking-as-a-service",
  },
];

export const businessList = [
  {
    id: "Business1",
    icon: RadarIcon(),
    primaryText: "Radar",
    secondaryText: "Fraud & risk management",
  },
  {
    id: "Business2",
    icon: SigmaIcon(),
    primaryText: "Sigma",
    secondaryText: "Custom reports",
  },
  {
    id: "Business3",
    icon: AtlasIcon(),
    primaryText: "Atlas",
    secondaryText: "Startup incorporation",
  },
  {
    id: "Business4",
    icon: ClimateIcon(),
    primaryText: "Climate",
    secondaryText: "Carbon removal",
  },
];

const ProductsDropdown = () => {
  const requiredHTML = `
    <div
      class="grid grid-cols-3 w-full gap-8  rounded-lg shadow-2xl p-8 bg-white text-gray-900"
    >
${ProductItems({ primaryText: "Payments", items: paymentsList })}
${ProductItems({ primaryText: "financial services", items: financialList })}
${ProductItems({ primaryText: "business operations", items: businessList })}
</div>`;

  return requiredHTML;
};

export default ProductsDropdown;
