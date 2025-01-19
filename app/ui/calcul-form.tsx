'use client'
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ROASLineChart from "./roasline-chart"

export function CardWithForm() {
  const [cost, setCost] = useState<number | undefined>(undefined);
  const [revenue, setRevenue] = useState<number | undefined>(undefined);
  const [roasCalculated, setRoasCalculated] = useState<boolean>(false);

  // Données fictives pour plusieurs mois (peut être modifié pour plus de personnalisation)
  const monthlyCosts = [cost, cost, cost, cost, cost, cost, cost].map(c => c || 0); // Répète le coût pour chaque mois
  const monthlyRevenues = [revenue, revenue, revenue, revenue, revenue, revenue, revenue].map(r => r || 0); // Répète le revenu pour chaque mois

  const handleSubmit = () => {
    if (cost && revenue) {
      setRoasCalculated(true);  
      const initialRoas = calculateRoas(cost, revenue);
      if (initialRoas < norm) {
        const roasPredictions = generatePredictions(initialRoas);
        setPredictions([initialRoas, ...roasPredictions]);
      } else {
        alert("Your ROAS is already above the norm!");
      }
    } else {
      alert("Please fill in both fields.");
    }
  };

  const handleReset = () => {
    setCost(undefined);
    setRevenue(undefined);
    setRoasCalculated(false);  
  };

  // const [cost, setCost] = useState<number | undefined>();
  // const [revenue, setRevenue] = useState<number | undefined>();
  const [predictions, setPredictions] = useState<number[]>([]);
  const norm = 4.0; // norme fixé

  const calculateRoas = (cost: number, revenue: number) => {
    return revenue / cost;
  };

  const generatePredictions = (initialRoas: number) => {
    const predictedRoas: number[] = [];
    const differenceFromNorm = norm - initialRoas;
    const monthlyIncrease = Math.min(0.25, differenceFromNorm / norm); // Ajuste le percentage

    let roas = initialRoas;
    for (let i = 0; i < 6; i++) { // Predit les 6 prochains mois
      roas += roas * monthlyIncrease;
      predictedRoas.push(roas);
    }
    return predictedRoas;
  };

  return (
    <Card id="roas-form" className="w-[350px]">
      <CardHeader>
        <CardTitle>Calculate your ROAS</CardTitle>
        <CardDescription>Fill in the fields to see your Return on Ad Spend.</CardDescription>
      </CardHeader>
      <CardContent>
        {roasCalculated ? (
          <div className="text-center">
            <p>Your ROAS is: <strong>{revenue && cost ? (revenue / cost).toFixed(2) : 'N/A'}</strong></p>
            {/* Passer les données calculées au composant ROASLineChart */}
            {predictions.length > 0 && (
              <>
                <h3>ROAS Improvement Suggestions</h3>
                <ROASLineChart roasData={predictions} />
              </>
            )}
            <Button onClick={handleReset} className="mt-4 bg-[#312C58]">Calculate Again</Button>
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cost">Cost of ADs*</Label>
                <Input  
                  id="cost"
                  placeholder="The cost in Ariary"
                  type="number"
                  value={cost || ""}
                  onChange={(e) => setCost(Number(e.target.value))} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="revenue">Revenue from ADs*</Label>
                <Input 
                  id="revenue"
                  placeholder="Revenue from Ads in Ariary"
                  type="number"
                  value={revenue || ""}
                  onChange={(e) => setRevenue(Number(e.target.value))} />
              </div>
            </div>
          </form>
        )}
      </CardContent>
      {!roasCalculated && (
        <CardFooter className="flex justify-between">
          <Button onClick={handleSubmit} className="bg-[#312C58]">Calculate</Button>
        </CardFooter>
      )}
    </Card>
  );
}
