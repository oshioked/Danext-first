import style from './ApproachSection.module.scss';


const approachData = [
    {
        img: '/images/home/approach1.png',
        title: 'Blazing Speeds',
        p: `Our Urbx platform enables quick order speeds and shorter delivery times. 
            Increase customer satisfaction with industry-leading pick times.
        `
    },
    {
        img: '/images/home/approach2.png',
        title: 'Organization',
        p: `The vertical architecture of Urbx optimizes bin density to enable more 
            inventory traveling shorter distances for the best assembly times in the industry.
        `
    },
    {
        img: '/images/home/approach3.png',
        title: 'Scalability',
        p: `Our modular Urbx system is easily configurable for unlimited scalability. Both large 
            and small businesses can effectively deploy our solution.
        `
    },
    {
        img: '/images/home/approach4.png',
        title: 'Refrigeration',
        p: `Open-air cooling reduces temperatures for cold storage in one or all totes at once.
        `
    },
]


const ApproachSection = () =>{
    return(
        <div className = {style.approachSection}>
            <div className = {style.sectionDescription}>
                <p className = {style.tinyTitle}>OUR APPROACH</p>
                <h1 className = {style.mainTitle}>
                    <span>Storage </span>
                    <span>automation </span>
                    that fits anywhere
                </h1>
                <p className = {style.details}>
                    The Urbx system can retrieve, pick and pack multi-item orders 
                    and assemble them in minutes. Items can then be retrieved for 
                    on-demand delivery.
                </p>
            </div>
            <div className = {style.sectionGrid}>
                {
                    approachData.map((data, i)=>(
                        <div key = {i} className = {style.gridItem}>
                            <img src = {data.img} alt = "approach1"/>
                            <h3>{data.title}</h3>
                            <p>{data.p}</p>
                        </div>                        
                    ))
                }

            </div>
        </div>
    )
}

export default ApproachSection;