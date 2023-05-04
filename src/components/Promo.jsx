import { IconButton } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

function Promo() {
  const promos = [
    {
      icon: AccountBalanceWalletOutlinedIcon,
      text: "PhonePe Wallet",
    },
    {
      icon: CardGiftcardOutlinedIcon,
      text: "Rewards",
    },
    {
      icon: CampaignOutlinedIcon,
      text: "Refer & Earn ₹200",
    },
  ];
  return (
    <>
      <div className="promo-main">
        {promos.map((promo) => {
          return (
            <div className="promo" key={promo.text}>
              <IconButton className="promo-icon">
                {<promo.icon className="promo-inner-icon" />}
              </IconButton>
              <div>
                <label className="promo-text">{promo.text}</label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Promo;
