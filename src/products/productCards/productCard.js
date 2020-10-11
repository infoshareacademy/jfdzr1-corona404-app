import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import HeartIcon from './HeartIcon';


const useStyles = makeStyles((theme) => ({
  root: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardTop: {
    height: '100px'
  },

}))     


const productCard = ({title, photoURL, price, origin, id }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} className={styles.singleCardMaterialUI}>

      <CardHeader
        action={
          <HeartIcon 
            title={title}
            photoURL={photoURL}
            price={price}
            origin={origin}
          />
        }
        title={title}
        className={classes.cardTop}
      />

      <Link to={`Search/${id}`} className={styles.link}>
        <CardMedia className={classes.media} image={photoURL} />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          <div className={styles.cardBottom}>
            <div className={styles.icons}>
            </div>
            <div className={styles.icons}>
              <AttachMoneyIcon style={{ fontSize: '1.75rem' }} />: {price}{' '}
              zł
            </div>

          </div>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default productCard;