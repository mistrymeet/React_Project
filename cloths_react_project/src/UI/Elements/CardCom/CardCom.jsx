import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

function CardCom({ data }) {
    return (
        <>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src={data?.img}
                />
                <CardBody className='text-center'>
                    <CardTitle className='text-xs font-normal'>
                        {data?.brand}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted text-sm font-semibold"
                        tag="h6"
                    >
                        {data?.title}
                    </CardSubtitle>
                    <CardTitle className='text-base font-bold'>
                        {data?.Price}
                    </CardTitle>
                    <CardText>
                        <del className='text-black-600 font-medium'>
                            {data?.disprice}
                        </del>
                        <span className='text-red-600 font-medium'>
                            {data?.off}
                        </span>
                    </CardText>
                    <Button
                        color="success"
                        outline
                    >
                        Buy Now
                    </Button>
                    {' '}
                </CardBody>
            </Card>
        </>
    )
}

export default CardCom