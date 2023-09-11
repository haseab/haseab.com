import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectWithUtm(props) {
  let { source, medium, campaign } = props;
  if (!medium) {
    medium = "mobile/desktop";
  }
  if (!campaign) {
    campaign = "first-launch";
  }
  let navigate = useNavigate();

  useEffect(() => {
    let utmSource = source;
    let utmMedium = medium;
    let utmCampaign = campaign;
    // ... other UTM parameters

    navigate(
      `/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`
    );
  }, [campaign, medium, navigate, source]);

  return null;
}

export default RedirectWithUtm;
