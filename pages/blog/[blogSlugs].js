import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import {
     Typography,
     Container
     } from "@mui/material";

const client = createClient({
    space: "tftt1ifofyb9",
    accessToken: "u9kA0KbIGJWoowqqmRzc9c3gy6jT2hGHh5Yl3JgbtwA"
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "blog"
    })

    const paths = res.items.map(item => ({
        params : {blogSlugs : item.fields.blogSlugs}
    }))

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async({ params }) => {
    const { items } = await client.getEntries({
        content_type : "blog",
        'fields.blogSlugs' : params.blogSlugs
    })

    if(!items.length) {
        return {
           redirect : {
               destination : '/',
               permanent : false
           }
        }
    }

    return {
        props : { blog : items[0]},
        revalidate : 1
    }
}

const BlogPage = ({ blog }) => {
    const { blogTitle, blogSlugs, blogContent, blogMedia, datePublished } = blog.fields;
    return (
        <Container maxwidth='lg'
        sx={{
            paddingBlock : '20px',
        }}
        >
            <Container
            sx={{
                display : 'block',
            }}
            >
                <Image
                width={'100px'}
                height={'40px'}
                src={'https:' + blogMedia.fields.file.url}
                layout='responsive'
                />
            </Container>
            <Typography
            variant="h5"
            component='h1'
            sx={{
                marginTop : '20px',
            }}
            >{blogTitle}</Typography>
            <Typography
            variant="small"
            component='h2'
            sx={{
                fontWeight : '300'
            }}
            >
                Published at : {datePublished}
            </Typography>
            <Typography
            variant="body1"
            sx={{
                fontWeight : '300',
                marginBottom : '20px'
            }}
            >
                Author : Azzy 
            </Typography>
            <Typography
            variant="body2"
            sx={{
                fontSize : '1.1rem',
            }}
            >
                {documentToReactComponents(blogContent)}
            </Typography>
        </Container>
    );
}
 
export default BlogPage;