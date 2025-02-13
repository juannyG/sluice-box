"use client";
import { useContext } from "react";

import { ChartSelectionContext, BitaxeChartDataContext } from "./_contexts";
import ChartView from "./_components/ChartView";

export default function Home() {
  const { selectedCharts } = useContext(ChartSelectionContext);
  const { chartData } = useContext(BitaxeChartDataContext);

  return (
    <div className="w-full sm:w-4/6 h-full pt-5">
      {selectedCharts.length ? (
        <ChartView data={chartData} />
      ) : (
        <div className="flex justify-center col-span-2">
          Please select a chart to view.
        </div>
      )}
    </div>
  );
}
