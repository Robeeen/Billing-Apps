import Image from "next/image";
import Link from "next/Link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full mt-20 text-center gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Invoice Apps</h1>
        <p>
          <Button variant="ghost">create invoice</Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-left">10/02/2025</TableCell>
            <TableCell className="text-left">Robert Hook</TableCell>
            <TableCell className="text-left">rhook@amazon.com</TableCell>
            <TableCell className="text-left">
              <Badge>Open</Badge>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
