import {
    Box,
    Button,
    Grid,
    Typography
} from '@mui/material'
import Image from 'next/image'

const BlogData = ({item}) => {
    const {blogTitle,blogTags,blogSlugs,blogMedia} = item.fields

    return (
        <>  
            <Grid item xs={12} spacing={2}>
                <Box
                sx={{
                    display: 'flex',
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
                    }}
                    >
                        <Typography
                        variant='h5'
                        fontSize={'1.2rem'}
                        ml={2}
                        color='#545454'
                        >{blogTitle}</Typography>

                        <Box
                        sx={{
                            backgroundColor: '#f5f5f5',
                            padding : '5px',
                            marginLeft: '10px'
                        }}
                        >
                            <Typography>{blogTags}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    );
}
 
export default BlogData;