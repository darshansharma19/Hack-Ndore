import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import BaseCard from "../shared/DashboardCard";

const WaterSupplyOverview: React.FC = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div style={{ flex: 1 }}>
        <BaseCard>
          <iframe
            src="https://225a-115-245-99-238.ngrok-free.app/plot/items_by_status"
            width="100%"
            height="300"
            style={{ border: "none" }}
            title="Items by Status"
          ></iframe>
        </BaseCard>
      </div>
      <div style={{ flex: 1 }}>
        <BaseCard>
          <iframe
            src="https://225a-115-245-99-238.ngrok-free.app/plot/quantity_by_category"
            width="100%"
            height="300"
            style={{ border: "none" }}
            title="Quantity by Category"
          ></iframe>
        </BaseCard>
      </div>
    </div>
  );
};

export default WaterSupplyOverview;
