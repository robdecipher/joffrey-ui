import ButtonLinkExternal from '../ui/button-link-external';

import classes from './statistic-item.module.css';
import StatBox from '../ui/statBox';

function StatisticItem(props) {

    const { name, value, link } = props
    return(
        <li className={classes.statboxwrapper}>
            <StatBox>
                <h3 className={classes.statname}>{name}</h3>
                <span className={classes.statvalue}>{value}</span>
                <ButtonLinkExternal link={link}>
                    <span>View in JIRA</span>
                </ButtonLinkExternal>
            </StatBox>
        </li>
    );

}

export default StatisticItem;