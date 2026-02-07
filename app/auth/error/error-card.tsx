"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";

export function ErrorCard({ children }: { children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">Sorry, something went wrong.</h2>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
}
