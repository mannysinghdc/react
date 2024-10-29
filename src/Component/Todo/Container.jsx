import  style from './Container.module.css'

const Container = ({ children }) => {
    return (
        <div className={style.container_main}>
            {children}
        </div>
    )
}

export default Container
