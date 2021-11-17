import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';
import readerImage from "./images/pig.jpg";
import CsvDownloader from 'react-csv-downloader';
import { CsvToHtmlTable } from 'react-csv-to-table';

function CsvReader() {
    const [column, setColumn] = useState([]);
    const [data, setData] = useState([]);

    // process CSV data
    const processData = dataString => {
        const dataStringLines = dataString.split(/\r\n|\n/);
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

        const list = [];
        for (let i = 1; i < dataStringLines.length; i++) {
            const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
            if (headers && row.length == headers.length) {
                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    let d = row[j];
                    if (d.length > 0) {
                        if (d[0] == '"')
                            d = d.substring(1, d.length - 1);
                        if (d[d.length - 1] == '"')
                            d = d.substring(d.length - 2, 1);
                    }
                    if (headers[j]) {
                        obj[headers[j]] = d;
                    }
                }

                // remove the blank rows
                if (Object.values(obj).filter(x => x).length > 0) {
                    list.push(obj);
                }
            }
        }

        // prepare columns list from headers
        const column = headers.map(c => ({
            name: c,
            selector: c,
        }));

        setData(list);
        setColumn(column);
    }

    const addHeader = () => {
        setColumn(PrevColumn => [...PrevColumn, "Category"])
    }

    const addRow = () => {
        setData(PrevData => [...PrevData, ""])
    }

    // handle file upload
    const handleFileUpload = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            processData(data);
        };
        reader.readAsBinaryString(file);
    }

    
    const updateData = (rowIndex, columnId, value) => {
        setData(old =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              }
            }
            return row
          })
        )
      }

    return (
        <div style={{ marginTop: "90px" }}>
            <img src="./images/pig.jpg"
                style={{
                    position: "fixed",
                    minWidth: "100%",
                    minHeight: "100%",
                    backgroundImage: `url(${readerImage})`,
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                    WebkitFilter: "blur(10px)",
                    msFilter: "blur(10px)",
                    filter: "blur(10px)",
                    opacity: "0.75",
                    zIndex: "-1",
                }}>
            </img>
            <div style={{ textAlign: "center" }}>
                <h3 style={{ textAlign: "center" }}>Upload your CSV file here</h3>
                <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileUpload}
                    onClick={addRow}
                    onClick={addHeader}
                    required
                />
                <label for="standard-select">Select a bank:</label>
                <select id="standard-select">
                    <option value="blank"> </option>
                    <option value="ANZ">ANZ</option>
                    <option value="BNZ">BNZ</option>
                    <option value="ASB">ASB</option>
                </select>
                <CsvDownloader
                    filename="myfile"
                    extension=".csv"
                    columns={column}
                    datas={data}
                    text="Download" 
                    style={{
                        marginLeft:"180px"
                    }}/>
                <DataTable
                    pagination
                    highlightOnHover
                    columns={column}
                    data={data}
                    updateMyData={updateData}
                />
            </div>
            <footer style={{
                clear: "both",
                height: "85px",
                width: "100%",
                paddingTop: "30px",
                backgroundColor: "#333333",
                color: "#ffffff",
                textAlign: "center",
                position: "fixed",
                bottom: "0",
                fontSize: "18px",
            }}>
                <p>© 2021 Xavier.ai. Unitec Capstone Project</p>
            </footer>
        </div>
    );
}

export default CsvReader;