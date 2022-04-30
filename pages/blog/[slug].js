import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { Typography } from "@mui/material";

const client = createClient({
    space: "tftt1ifofyb9",
    accessToken: "u9kA0KbIGJWoowqqmRzc9c3gy6jT2hGHh5Yl3JgbtwA"
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "blog"
    })

    const paths = res.items.map(item => ({
        params : {slug : item.fields.blogSlugs}
    }))

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async({ params }) => {
    const { items } = await client.getEntries({
        content_type : "blog",
        'fields.slug' : params.blogSlugs
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
    const { blogTitle, blogSlugs, blogContent, blogMedia } = blog.fields;
    return (
        <>
            <Typography>{blogTitle}</Typography>
            {blogSlugs}
        </>
    );
}
 
export default BlogPage;