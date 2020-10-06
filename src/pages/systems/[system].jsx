import Styles from './systems.module.scss';
import {useRouter} from 'next/router'

const Systems = props =>{
    console.log(props.id)
    const router = useRouter();

    return(
        <div className = {Styles.page}>
            <h1>{router.query.system}</h1>
        </div>
    )
}
export const getStaticProps = () =>{
    return{
        props: { id: 'call'}
    }
}

export const getStaticPaths = () =>{
    return{
        paths: [
            {params: {system: 'cube'}},
            {params: {system: 'micro'}},
            {params: {system: 'tower'}}
        ],
        fallback: false
    }
}
export default Systems;