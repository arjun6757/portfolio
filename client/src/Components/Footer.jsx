import React from 'react'

export default function Footer(props) {
    const yr = new Date().getFullYear();
    return (
        // 'text-white text-center w-100% p-0 m-0 bg-primary'
    <div className={props.className}>
        &copy; {yr} <a href="https://github.com/arjun6757">Arjun Banerjee</a> All rights reserved
    </div>
  )
}
