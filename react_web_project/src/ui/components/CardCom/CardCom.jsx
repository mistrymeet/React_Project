import { Button, Card } from 'antd'
import React from 'react'
import { CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import '../CardCom/Card.css'

function CardCom({ data }) {
    return (
        <>
            <Card
                className='cards'
                style={{
                    width: '18rem',
                    borderColor: 'black',
                    padding: '10px',
                    textAlign: 'center',
                }}
            >

                <div>
                    <img
                        alt="Sample"
                        src={data?.img}
                        className='img pb-3'

                    />
                </div>
                <CardBody style={{ padding: '0px' }}>
                    <CardSubtitle
                        className="pt-1 pb-2"
                        style={{ color: '#b5b4b0', fontSize: '12px' }}
                        tag="h6"
                    >
                        {data?.categories}
                    </CardSubtitle>
                    <CardTitle tag="h5" className='font-medium' style={{ fontSize: '13.5px' }}>
                        {data?.title}
                    </CardTitle>
                    <CardTitle tag="h5" className='text-base font-normal pb-3'>
                        {data?.subTitle}
                    </CardTitle>
                    <CardTitle tag="h5" className='text-sm font-bold pb-3 text-center'>
                        {data?.Price}
                    </CardTitle>
                    <div className='text-center'>
                        <button class="btnn">Buy Now</button>
                    </div>
                    <div className='position'></div>
                </CardBody>
            </Card>
        </>
    )
}

export default CardCom