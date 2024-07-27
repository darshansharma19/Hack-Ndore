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
            src="http://192.168.137.203:5000/plot/items_by_status"
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
            src="http://192.168.137.203:5000/plot/quantity_by_category"
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
