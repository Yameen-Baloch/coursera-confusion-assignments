import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const DishDetailComponent = ({ dish }) => {

    //display Dish Details

    const dishDetails = () =>{
        return(   
            <Card>
            <CardImg top src={dish.image} alt={dish.name} />
               <CardBody>
                   <CardTitle>{ dish.name }</CardTitle>
                   <CardText>{ dish.description }</CardText>
                   </CardBody>
           </Card>  
        )
    }

    //display Comments

    const displayComments = (comments) =>{
        if(comments === null)
        {
            return <div></div>
        }

        const cmnts = comments.map(comment => {
            return(
                    <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })

        return(
            <div>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        )
    }

    const dishComment = displayComments(dish.comments);
  return (
        <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-5 m-1'>
            {dishDetails()} 
            
            </div>
            <div className='col-12 col-md-5 m-1'>
            {dishComment}
            </div>
        </div>

        </div> 
  )
}

export default DishDetailComponent;