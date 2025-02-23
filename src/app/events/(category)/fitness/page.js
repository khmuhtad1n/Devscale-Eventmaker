import { LocationSection } from "../../_components/location-card";
import { EventSection } from "../../_components/event-card";

export default function page() {
  return (
    <div>
      <EventSection />
      <LocationSection />
    </div>
  );
}
