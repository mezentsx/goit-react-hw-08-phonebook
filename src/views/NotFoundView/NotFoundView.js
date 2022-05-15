import s from './NotFoundView.module.css'

export default function NotFoundView(){
    return (
        <div className={s.container}>
            <h1 className={s.title}>Ops, page not found!</h1>
        </div>
        
    )
}