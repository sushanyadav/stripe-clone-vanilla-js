import SingleItem from "./SingleItem";

import {
  DocumentationIcon,
  APIReferenceIcon,
  APIStatus,
  APIChangelogIcon,
  SupportIcon,
} from "../../../utils/icons";

const DevelopersDropdown = () => {
  const el = `<div class="rounded-lg rounded-b-none shadow-2xl p-8 bg-white text-gray-900 space-y-8">
${SingleItem({
  id: "documentation",
  Icon: DocumentationIcon(),
  primaryText: "Documentation",
  secondaryText: "Start integrating Stripe's products and tools.",
})}
<div class="flex justify-between w-10/12">
<div>
<h2 class="uppercase font-semibold text-gray-500 mb-2">
get started
</h2>
<div class="space-y-1 text-xs flex flex-col text-gray-500">
<a href="#" class="hover:text-gray-800">Pre-built checkouts</a>
<a href="#" class="hover:text-gray-800">Libraries and SDKs</a>
<a href="#" class="hover:text-gray-800">Plugins</a>
<a href="#" class="hover:text-gray-800">Code samples</a>     
</div>
</div>
<div>
<h2 class="uppercase font-semibold text-gray-500 mb-2">
guides
</h2>
<div class="space-y-1 text-xs flex flex-col text-gray-500">
<a href="#" class="hover:text-gray-800">Accept online payments</a>
<a href="#" class="hover:text-gray-800">Manage subscriptions</a>
<a href="#" class="hover:text-gray-800">Send payments</a>
<a href="#" class="hover:text-gray-800">Setup in-person payments</a>
</div>
</div>
</div>
</div>
<div class="bg-gray-50 shadow-2xl rounded-b-lg grid grid-cols-2 text-gray-900 p-8">
<div>
<div class="mb-4">
${SingleItem({
  Icon: APIReferenceIcon(),
  primaryText: "Full API reference",
})}
</div>
${SingleItem({
  Icon: SupportIcon(),
  primaryText: "Support",
})}
</div>
<div>
<div class="mb-4">
${SingleItem({
  Icon: APIStatus(),
  primaryText: "API status",
})}
</div>
${SingleItem({
  Icon: APIChangelogIcon(),
  primaryText: "API changelog",
})}
</div>
</div>`;

  return el;
};

export default DevelopersDropdown;
