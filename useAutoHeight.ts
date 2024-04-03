import React, {useEffect, useState} from "react";

// v1.0

// 用法：就是useEffect的二次封装版
// 参数：一个是指向需要监听高度元素的useRef，另一个是可能影响到这个元素的依赖项列表
// 返回值：就是这个ref指向的元素的实时高度
export default function useAutoHeight(ref: React.RefObject<any>, relies: any[]) : number {
    const [height, setHeight] = useState(0)
    useEffect(() => {
        const element: HTMLElement = ref.current
        if (element) {
            const style = window.getComputedStyle(element)
            setHeight(element.scrollHeight + parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth))
            console.log("HookHeight:", element.scrollHeight + parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth) )
        }
    }, relies);
    return height
}
