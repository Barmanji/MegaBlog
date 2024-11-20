import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../conf/conf.js";


export class storageService {
	client = new Client();
	Database;
	bucket;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteEndpoint)
			.setProject(conf.appwriteProjectId);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	//slug is document ID from appwrite - url definer
	async createPost({ title, slug, content, featuredImage, status, userId }) {
		try {
			return await this.databases.createDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
					userId,
				}
			)
		} catch (error) {
			console.log("Appwrite serivce :: createPost :: error", error);
		}
	}

	async updatePost(slug, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,

				}
			)
		}
		catch (error) {
			console.log("Appwrite serive :: updatePost :: error", error);
		}
	}

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

 //bro WTF the only part that i wrote myself had error in this code base like i wrote entire backend and for fucks sake it has error.
   async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,


            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

	//filemanipulation
	async uploadFile(file) {
		try {
			return await this.bucket.createFile(
				conf.appwriteBucketId,
				ID.unique(),
				file,
			)
		}
		catch (error) {
			console.log("Appwrite serive :: uploadFile :: error", error);
			return false
		}
	}

	async deleteFile(fileId) {
		try {
			return await this.bucket.deleteFile(
				conf.appwriteBucketId,
				ID.unique(),
				fileId,
			)
		}
		catch (error) {
			console.log("Appwrite serive :: deleteFile :: error", error);
			return false
		}
	}
	getFilePreview(fileId) {
		return this.bucket.getFilePreview(
			conf.appwriteBucketId,
			fileId
		)
	}
}

const service = new storageService()
export default service
