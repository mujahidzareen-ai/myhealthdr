'use client';
import {HeartPulse,Search,CalendarDays} from 'lucide-react';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components/ui/select';
import {initials} from '@/lib/health-data';
export function Brand(){return <div className="brand"><span className="brand-mark"><HeartPulse size={25}/></span><span>MyHealth<em>Dr</em></span></div>}
export function Avatar({name,color='',large=false}:{name:string;color?:string;large?:boolean}){return <span className={`avatar ${color} ${large?'large':''}`} aria-hidden="true">{initials(name)}</span>}
export function Picker({value,onChange,options,label,className=''}:{value:string;onChange:(v:string)=>void;options:{value:string;label:string}[];label:string;className?:string}){return <Select value={value} onValueChange={onChange}><SelectTrigger aria-label={label} className={'picker '+className}><SelectValue placeholder={label}/></SelectTrigger><SelectContent position="popper">{options.map(o=><SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}</SelectContent></Select>}
export function Status({value}:{value:string}){return <span className={'badge '+({Requested:'amber','Checked in':'blue',Cancelled:'red',Completed:'gray'}[value]||'')}>{value}</span>}
export function SearchField({value,setValue,placeholder}:{value:string;setValue:(v:string)=>void;placeholder:string}){return <div className="search-field"><Search/><input type="search" aria-label={placeholder} placeholder={placeholder} value={value} onChange={e=>setValue(e.target.value)}/></div>}
export function Empty({title,body,action}:{title:string;body:string;action?:React.ReactNode}){return <div className="empty-state"><CalendarDays size={32}/><h3>{title}</h3><p>{body}</p>{action}</div>}
