import Link from "./Link";

function Sidebar(){

    const items = [
        {label:'Dropdown',path:'/'},
        {label:'Accordian',path:'/accordian'},
        {label:'Buttons',path:'/buttons'}
    ];

    const renderItems = items.map((item)=>{
        return (
        <Link key={item.path} to={item.path} activeClassName='font-bold border-l-4 border-blue-500 pl-2' >
            {item.label}
        </Link>
        )
    })

    return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
        {renderItems}
    </div>)
}

export default Sidebar;