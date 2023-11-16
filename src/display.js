import React  ,{useEffect, useState} from 'react'

function Display() {
    // type Form ={

    //     name :varchar(255); clg_adm_no :int; clg_adm_yr :int; clg_adm_type :varchar(255); clg_adm_cat :varchar(255);mobile_no :int;email_id :varchar(255); ann_fam_income :int; parents_name :varchar(255);parents_mob :int; distance :varchar(255); gender :varchar(255); egrants :varchar(255) ;

    // }

    const [data , setData] = useState([]);

  const getData = async () => {
      // const body = { mess_rate };
      try{
      const response = await fetch("http://localhost:5000/get-details");
      const jsondata = await response.json();
      setData(jsondata);


    } 
    catch (err) {
      console.error(err.message);
    }
};
useEffect(()=>{
  getData()
},[])

const deleteUser = async (id)=>{
    try{
      const res = await fetch(`http://localhost:5000/remove-user/${id}`,{
        method: "DELETE"
      })
      console.log(res)
    } catch (err){
      console.error(err.message)
    }
  }
  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Admission No
            </th>
            <th scope="col" className="px-6 py-3">
              Admission Year
            </th>
            <th scope="col" className="px-6 py-3">
              Admission Type
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              E-Grants Category
            </th>
            <th scope="col" className="px-6 py-3">
              Anual Income
            </th>
            <th scope="col" className="px-6 py-3">
              Parent Name
            </th>
            <th scope="col" className="px-6 py-3">
              Distance
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.admi_no}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.clg_adm_no}</td>
                <td className="px-6 py-4">{item.clg_adm_yr}</td>
                <td className="px-6 py-4">{item.clg_adm_type}</td>
                <td className="px-6 py-4">{item.email_id}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">{item.clg_adm_cat}</td>
                <td className="px-6 py-4">{item.egrants}</td>
                <td className="px-6 py-4">{item.ann_fam_income}</td>
                <td className="px-6 py-4">{item.parents_name}</td>
                <td className="px-6 py-4">{item.distance}</td>
                <td className="px-6 py-4">
                  <button onClick={()=>deleteUser(item.admi_no)}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
  </svg></button>
                </td>
              </tr>
            );
          })}
        </tbody>
       
      </table>
    
    </div>
  )
}

export default Display;
