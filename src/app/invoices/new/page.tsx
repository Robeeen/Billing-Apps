import Image from "next/image";
import Link from "next/Link";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { sql } from 'drizzle-orm';
import { db } from '@/db';


import { Badge } from "@/components/ui/Badge";
import { CirclePlus } from 'lucide-react';

export default async function Home() {
  //database connection

  const results = db.execute(sql`SELECT current_database()`)
  console.log('results', results);

  return (
    <main className="flex flex-col justify-center h-full mt-20 text-left gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Invoice Apps</h1>
        
      </div>

      <form className="grid gap-4 max-w-sm">
        <div>
            <Label className="block font-semibold text-sm mb-2">Billing Name: </Label>
            <Input  id="name" name="name" type="text" />
        </div>
        <div>
            <Label className="block font-semibold text-sm mb-2">Billing Email: </Label>
            <Input id="email" name="emil" type="email" />
        </div>
        <div>
            <Label className="block font-semibold text-sm mb-2">Value: </Label>
            <Input id="value" name="value" type="value" />            
        </div>
        <div>
            <Label className="block font-semibold text-sm mb-2">Description:</Label>
            <Textarea id="description" name="description" />            
        </div>

        <Button>
                    Submit
        </Button>
    </form>

      
    </main>
  );
}
