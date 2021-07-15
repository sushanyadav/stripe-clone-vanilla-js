import {
  EcommerceIcon,
  SaaSIcon,
  MarketPlaceIcon,
  PlatFormIcon,
} from "../../../utils/icons";
import SingleItem from "./SingleItem";

export const useCaseItems = [
  {
    id: "useCase1",
    Icon: EcommerceIcon(),
    primaryText: "E-commerce",
    secondaryText: "Unify online and in-person payments",
  },
  {
    id: "useCase2",
    Icon: SaaSIcon(),
    primaryText: "SaaS",
    secondaryText: "Manage recurring billing and subscriptions",
  },
  {
    id: "useCase3",
    Icon: MarketPlaceIcon(),
    primaryText: "Marketplaces",
    secondaryText: "pay out globally and facilitate multiparty payments",
  },
  {
    id: "useCase4",
    Icon: PlatFormIcon(),
    primaryText: "Platforms",
    secondaryText: "Let customers accept payments within your platforms",
  },
];

const UseCasesDropDown = () => {
  const requiredHTML = `<div class="rounded-lg shadow-2xl p-8 bg-white text-gray-900">
      <ul class="space-y-6">
        ${useCaseItems
          .map(({ id, Icon, primaryText, secondaryText }) => {
            return SingleItem({
              id,
              Icon,
              primaryText,
              secondaryText,
            });
          })
          .join("")}
      </ul>
    </div>`;

  return requiredHTML;
};

export default UseCasesDropDown;
