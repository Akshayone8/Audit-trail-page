import React,{useMemo} from 'react';
import {useTable,useGlobalFilter,usePagination} from 'react-table';
import Sdata from './Sdata.json';
import COLUMNS from './columns'; 
import '../components/table.css'
import { GlobalFilter } from './GlobalFilter';

const Pagination=()=>{
  
const columns=useMemo(()=>COLUMNS,[])
const data=useMemo(()=>Sdata,[])

const{
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  prepareRow,
  state,
  setGlobalFilter,
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage,
  pageOptions,
  setPageSize,

  }
 = useTable(
  {
    columns,
    data
  },useGlobalFilter,usePagination
)

const {globalFilter,pageIndex,pageSize}=state

return(
<>
<GlobalFilter filter={globalFilter}setFilter={setGlobalFilter}/>
 <table {...getTableProps()}>
  <thead>
    {headerGroups.map((headerGroup)=>(
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column)=>
          <th {...column.getHeaderProps()}>{column.render('Header')}</th>
        )}
      </tr>
    ))}
  </thead>
  <tbody {...getTableBodyProps()}>
    {page.map((row)=>{
      prepareRow(row)
      return(
        <tr{...row.getRowProps()}>
        {row.cells.map((cell)=>{return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
  
    })}
    </tr>)
    })}
  </tbody>
 </table>
 <div style={{textAlign:'center',margin:'10px'}}>
    <span>
    
      page{' '}
      <strong>
        {pageIndex+1} of {pageOptions.length}
      </strong>{' '}
    </span>
    <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
          {
            [10,25].map(pageSize=>(
              <option key={pageSize}value={pageSize}>show{pageSize}</option>
            ))
          }
    </select>
   <button onClick={()=>previousPage()}disabled={!canPreviousPage}>Previous</button>
   <button onClick={()=>nextPage()}disabled={!canNextPage}>Next</button>
 </div>
</>
)
}


export default Pagination;
