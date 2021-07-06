import ButtonLinkExternal from '../ui/button-link-external';

import classes from './statistic-item.module.css';
import StatBox from '../ui/statBox';
import ArrowRight from '../icons/arrow-right';

function StatisticItem(props) {

    const { name, value, link } = props
    return(
        <li className={classes.statboxwrapper}>
            <StatBox>
                <h3 className={classes.statname}>{name}</h3>
                <span className={classes.statvalue}>{value}</span>
                <ButtonLinkExternal link={link}>
                    <div>
                        <span>View Tasks</span>
                        <ArrowRight />
                    </div>
                </ButtonLinkExternal>
            </StatBox>
        </li>
    );

}

export default StatisticItem;