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
			console.log("Appwrite serive :: createPost :: error", error);
		}
	}

	async updatePost(slug, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				conf.appwriteProjectId,
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
	async deletePost(slug) {

		try {
			return await this.databases.deleteDocument(
				conf.appwriteProjectId,
				conf.appwriteCollectionId,
				slug

			)
			return true

		}
		catch (error) {
			console.log("Appwrite serive :: deletePost :: error", error);
			return false
		}
	}

	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				conf.appwriteProjectId,
				conf.appwriteCollectionId,
				slug

			)

		}
		catch (error) {
			console.log("Appwrite serive :: getPost :: error", error);
			return false
		}

	}

	async getPosts(queries = [Query.equal("status", "equal")]) {
		try {
			return await this.databases.listDocuments(
				conf.appwriteCollectionId,
				conf.appwriteDatabaseId,
				queries,
			)
		}
		catch (error) {
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
