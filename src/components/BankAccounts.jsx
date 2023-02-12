import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function BankAccounts() {
  const banks = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
      text: "State Bank Of India - 8345",
      id: "1",
      link: "/",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg",
      text: "Citibank - 1905",
      id: "2",
      link: "/",
    },
  ];
  return (
    <Card className="accounts-main">
      <div className="money-transfer-text">UPI Bank Account</div>
      <CardContent style={{ marginTop: "10px" }}>
        {banks.map((item) => {
          return (
            <a href={"/pin"} style={{ textDecoration: "none" }} key={item.id}>
              <div
                key={item.id}
                className="accounts-outer"
              >
                <div className="accounts-icon">
                  <img
                    src={item.icon}
                    className="accounts-image"
                    alt={item.text}
                  ></img>
                </div>
                <div
                  className="accounts-text"
                >
                  {item.text}
                </div>
                <div
                  className="accounts-arrow"
                >
                  <KeyboardArrowRightIcon
                    color="white"
                    sx={{
                      display: { xs: "flex", md: "none", width: "80%" },
                      mr: 1,
                    }}
                  />
                </div>
              </div>
            </a>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default BankAccounts;
