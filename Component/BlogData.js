import {
    Box,
    Button,
    Grid,
    Typography
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const BlogData = ({item}) => {
    const {blogTitle,blogSlugs,blogMedia,blogContent} = item.fields

    return (
        <>  
            <Grid
            item
            md={6}>
                <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '40% 60%',
                }}
                >
                    <Image
                    className='blog-image'
                    src={'https:' + blogMedia.fields.file.url}
                    width={'150px'}
                    height={'150px'}
                    />
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingLeft : '30px'
                    }}
                    >
                        <Typography
                        variant='h5'
                        fontSize={'1.2rem'}
                        color='#545454'
                        sx={{
                            marginBottom : '10px'
                        }}
                        >{blogTitle}</Typography>

                        <Typography
                        variant='body2'
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Fugiat eum odit vel deserunt repellat eligendi laboriosam provident autem in ipsam, 
                            quas enim nemo adipisci nam...
                        </Typography>
                        <Button
                        variant='text'
                        size='small'
                        color='info'
                        disableRipple
                        sx={{
                            marginTop : '10px',
                            display : 'flex',
                            justifyContent : 'left',
                            padding : 'unset',

                            '&:hover' : {
                                backgroundColor : 'unset'
                            }
                        }}
                        >
                            <Link href={`/blog/${blogSlugs}`}>
                                <a>Read More</a>
                            </Link>
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </>
    );
}
 
export default BlogData;