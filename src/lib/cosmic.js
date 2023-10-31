import Cosmic from "cosmicjs";
const api = Cosmic();

const bucket = api.bucket({
  slug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  read_key: import.meta.env.PUBLIC_COSMIC_READ_KEY,
});



export async function getAllPosts() {
 const data = await bucket.objects.find({
  type: 'blogs'
})
.props('slug,title,content,metadata')
.limit(20)
  return data.objects;
}


export async function getAllProducts() {
 const data = await bucket.objects.find({
  type: 'products'
})
.props('slug,title,content')
.limit(20)
  return data.objects;
}
