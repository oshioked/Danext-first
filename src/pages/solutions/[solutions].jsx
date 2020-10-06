import Styles from './systems.module.scss';
import {useRouter} from 'next/router'

const Systems = props =>{
    const router = useRouter();

    return(
        <div className = {Styles.page}>
            <h1>{router.query.systems}</h1>
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
            {params: {systems: 'ecommerce'}},
            {params: {systems: 'market'}},
            {params: {systems: 'grocery'}}
        ],
        fallback: false
    }
}
export default Systems;