import {
  AboutStripeIcon,
  CustomersIcon,
  NewsroomIcon,
  PartnersIcon,
  RegisterSessionIcon,
  JobsIcon,
  EnterpriseIcon,
  BlogIcon,
} from "../../../utils/icons";

import Button from "../../Button";

import SingleItem from "./SingleItem";

const CompanyDropdown = () => {
  const requiredHTML = `<div class="rounded-lg rounded-b-none shadow-2xl p-8 grid grid-cols-2 bg-white text-gray-900">
        <div class="space-y-4">
        ${SingleItem({
          Icon: AboutStripeIcon(),
          primaryText: "About Stripe",
          primaryTextClass: "text-gray-600",
        })}
        ${SingleItem({
          Icon: CustomersIcon(),
          primaryText: "Customers",
          primaryTextClass: "text-gray-600",
        })}
        ${SingleItem({
          Icon: EnterpriseIcon(),
          primaryText: "Enterprise",
          primaryTextClass: "text-gray-600",
        })}
        ${SingleItem({
          Icon: RegisterSessionIcon(),
          primaryText: "Register for sessions",
          primaryTextClass: "text-gray-600",
        })}

        </div>
        <div class="space-y-4">
             ${SingleItem({
               Icon: JobsIcon(),
               primaryText: "Jobs",
               primaryTextClass: "text-gray-600",
             })}
           ${SingleItem({
             Icon: NewsroomIcon(),
             primaryText: "Newsroom",
             primaryTextClass: "text-gray-600",
           })}
                ${SingleItem({
                  Icon: PartnersIcon(),
                  primaryText: "Partners",
                  primaryTextClass: "text-gray-600",
                })}

        </div>
      </div>
      <div class="bg-gray-50 rounded-b-lg text-gray-900 p-8">
               ${SingleItem({
                 Icon: BlogIcon(),
                 primaryText: "From the blog",
                 primaryTextClass: "text-gray-600",
               })}

        <div class="flex flex-col mt-4 space-y-3 ml-6 text-sm text-gray-500">
          ${Button({
            text: "Stripe's payments APIs: the first ten years",
            classNames: "text-gray-500 hover:text-gray-900",
            normalFont: true,
            noPadding: true,
          })}
          ${Button({
            text: "European payment methods available worldwide",
            classNames: "text-gray-500 hover:text-gray-900",
            normalFont: true,
            noPadding: true,
          })}
          ${Button({
            text: "We built Checkout so you don't have to",
            classNames: "text-gray-500 hover:text-gray-900",
            normalFont: true,
            noPadding: true,
          })}
        </div>
      </div>`;

  return requiredHTML;
};

export default CompanyDropdown;
