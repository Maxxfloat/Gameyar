import React from 'react'
import {Link} from 'react-router-dom'

const EmptyPage = () => {
    return (
        <div style={{height:"200vh"}}>
            <h1>404</h1>
            <div>
                <p>صفحه یافت نشد</p>
                <button ><Link to='/'>برگشت به صفحه اصلی</Link></button>
            </div>
        </div>
    )
}

export default EmptyPage
