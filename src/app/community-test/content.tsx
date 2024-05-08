import TabsCJ from '@/components/custom components/TabsCJ'
import React from 'react'
import { promises as fs } from 'fs';
import Papa from 'papaparse';


const getData = async () => {
  const startTime = Date.now()
  const baseUrl =
    'https://api.webflow.com/v2/collections/61ee828a15a3185c99bde543/items'
  const apiKey =
    'ecccc828f26a06e354a027b74ac0ed7d37c706475c74650f83fba8fa289897ee'
  let allItems: any = []
  let offset = 0
  let fetchMore = true

  try {
    while (fetchMore) {
      const response = await fetch(`${baseUrl}?offset=${offset}&limit=100`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch, status: ${response.status}`)
      }

      const { items } = await response.json()
      allItems = allItems.concat(items)
      offset += items.length

      // Check if the number of items fetched is less than 100, indicating last page
      fetchMore = items.length === 100
    }
    const endTime = Date.now() // Capture end time
    const fetchDuration = (endTime - startTime) / 1000 // Calculate duration in seconds

    console.log('Total items fetched: ', allItems.length)
    console.log('Fetching time: ', fetchDuration, 'seconds')

    return { props: { items: allItems, fetchTime: fetchDuration } }
  } catch (error) {
    console.error('Error fetching data: ', error)
    return { props: { items: [], error: 'eror', fetchTime: 0 } }
  }
}

const data = getData()  
const file =  fs.readFile(process.cwd() + '/fake data/csvTest.csv', 'utf8');
async function parseCSV(filePath: string): Promise<void> {
  try {
    const csvFile = await fs.readFile(filePath, 'utf8');

    Papa.parse(csvFile, {
      header: true,
      complete: function(results) {
        // Assuming that the CSV has been parsed into an array of objects
        console.log("Parsed Data:", results.data);

        // Example of mapping columns as rows
        const columnsAsRows = Object.keys(results.data[0]).map(key => {
          return {
            columnName: key,
            values: results.data.map((row: { [x: string]: any; }) => row[key])
          };
        });

        console.log("Columns mapped as rows:", columnsAsRows);
      },
      error: function(error) {
        console.error("Error parsing CSV:", error);
      }
    });
  } catch (error) {
    console.error("Failed to read the file:", error);
  }
}


export default async function ContentCommunity() {

  return (
    <div className="">
      <h1 className="costa-extra-bold mb-12 pt-24 text-center text-4xl font-bold">
        Community 
      </h1>
      <div className="w-full">
        <TabsCJ></TabsCJ>
      </div>
    </div>
  )
}
