
import "./card.scss"
import { motion, AnimatePresence } from "framer-motion"


const Card = (props) => {
const classes = 'card ' + props.className;
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{ duration: 0.2 }} exit={{opacity: 0}} className={classes}>
        {props.children}
    </motion.div>
  )
}

export default Card