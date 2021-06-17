import { ECRPUBLICClient } from "./ECRPUBLICClient";
import { BatchCheckLayerAvailabilityCommandInput, BatchCheckLayerAvailabilityCommandOutput } from "./commands/BatchCheckLayerAvailabilityCommand";
import { BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput } from "./commands/BatchDeleteImageCommand";
import { CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput } from "./commands/CompleteLayerUploadCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import { DeleteRepositoryPolicyCommandInput, DeleteRepositoryPolicyCommandOutput } from "./commands/DeleteRepositoryPolicyCommand";
import { DescribeImageTagsCommandInput, DescribeImageTagsCommandOutput } from "./commands/DescribeImageTagsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import { DescribeRegistriesCommandInput, DescribeRegistriesCommandOutput } from "./commands/DescribeRegistriesCommand";
import { DescribeRepositoriesCommandInput, DescribeRepositoriesCommandOutput } from "./commands/DescribeRepositoriesCommand";
import { GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput } from "./commands/GetAuthorizationTokenCommand";
import { GetRegistryCatalogDataCommandInput, GetRegistryCatalogDataCommandOutput } from "./commands/GetRegistryCatalogDataCommand";
import { GetRepositoryCatalogDataCommandInput, GetRepositoryCatalogDataCommandOutput } from "./commands/GetRepositoryCatalogDataCommand";
import { GetRepositoryPolicyCommandInput, GetRepositoryPolicyCommandOutput } from "./commands/GetRepositoryPolicyCommand";
import { InitiateLayerUploadCommandInput, InitiateLayerUploadCommandOutput } from "./commands/InitiateLayerUploadCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutImageCommandInput, PutImageCommandOutput } from "./commands/PutImageCommand";
import { PutRegistryCatalogDataCommandInput, PutRegistryCatalogDataCommandOutput } from "./commands/PutRegistryCatalogDataCommand";
import { PutRepositoryCatalogDataCommandInput, PutRepositoryCatalogDataCommandOutput } from "./commands/PutRepositoryCatalogDataCommand";
import { SetRepositoryPolicyCommandInput, SetRepositoryPolicyCommandOutput } from "./commands/SetRepositoryPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UploadLayerPartCommandInput, UploadLayerPartCommandOutput } from "./commands/UploadLayerPartCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Elastic Container Registry Public</fullname>
 *          <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Amazon ECR provides both
 *          public and private registries to host your container images. You can use the familiar
 *          Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a
 *          secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI)
 *          images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR
 *          API for private repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>
 */
export declare class ECRPUBLIC extends ECRPUBLICClient {
    /**
     * <p>Checks the availability of one or more image layers within a repository in a public
     *          registry. When an image is pushed to a repository, each image layer is checked to verify if
     *          it has been uploaded before. If it has been uploaded, then the image layer is
     *          skipped.</p>
     *          <note>
     *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    batchCheckLayerAvailability(args: BatchCheckLayerAvailabilityCommandInput, options?: __HttpHandlerOptions): Promise<BatchCheckLayerAvailabilityCommandOutput>;
    batchCheckLayerAvailability(args: BatchCheckLayerAvailabilityCommandInput, cb: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void): void;
    batchCheckLayerAvailability(args: BatchCheckLayerAvailabilityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void): void;
    /**
     * <p>Deletes a list of specified images within a repository in a public registry. Images are
     *          specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p>
     *          <p>You can remove a tag from an image by specifying the image's tag in your request. When
     *          you remove the last tag from an image, the image is deleted from your repository.</p>
     *          <p>You can completely delete an image (and all of its tags) by specifying the image's
     *          digest in your request.</p>
     */
    batchDeleteImage(args: BatchDeleteImageCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteImageCommandOutput>;
    batchDeleteImage(args: BatchDeleteImageCommandInput, cb: (err: any, data?: BatchDeleteImageCommandOutput) => void): void;
    batchDeleteImage(args: BatchDeleteImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteImageCommandOutput) => void): void;
    /**
     * <p>Informs Amazon ECR that the image layer upload has completed for a specified public registry,
     *          repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of
     *          the image layer for data validation purposes.</p>
     *          <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image
     *          layer to verify that the upload has completed.</p>
     *          <note>
     *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    completeLayerUpload(args: CompleteLayerUploadCommandInput, options?: __HttpHandlerOptions): Promise<CompleteLayerUploadCommandOutput>;
    completeLayerUpload(args: CompleteLayerUploadCommandInput, cb: (err: any, data?: CompleteLayerUploadCommandOutput) => void): void;
    completeLayerUpload(args: CompleteLayerUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CompleteLayerUploadCommandOutput) => void): void;
    /**
     * <p>Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR
     *             repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
     */
    createRepository(args: CreateRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<CreateRepositoryCommandOutput>;
    createRepository(args: CreateRepositoryCommandInput, cb: (err: any, data?: CreateRepositoryCommandOutput) => void): void;
    createRepository(args: CreateRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRepositoryCommandOutput) => void): void;
    /**
     * <p>Deletes a repository in a public registry. If the repository contains images, you must
     *          either delete all images in the repository or use the <code>force</code> option which
     *          deletes all images on your behalf before deleting the repository.</p>
     */
    deleteRepository(args: DeleteRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRepositoryCommandOutput>;
    deleteRepository(args: DeleteRepositoryCommandInput, cb: (err: any, data?: DeleteRepositoryCommandOutput) => void): void;
    deleteRepository(args: DeleteRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRepositoryCommandOutput) => void): void;
    /**
     * <p>Deletes the repository policy associated with the specified repository.</p>
     */
    deleteRepositoryPolicy(args: DeleteRepositoryPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRepositoryPolicyCommandOutput>;
    deleteRepositoryPolicy(args: DeleteRepositoryPolicyCommandInput, cb: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void): void;
    deleteRepositoryPolicy(args: DeleteRepositoryPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void): void;
    /**
     * <p>Returns metadata about the images in a repository in a public registry.</p>
     *          <note>
     *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers before
     *             pushing them to a V2 Docker registry. The output of the <code>docker images</code>
     *             command shows the uncompressed image size, so it may return a larger image size than the
     *             image sizes returned by <a>DescribeImages</a>.</p>
     *          </note>
     */
    describeImages(args: DescribeImagesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImagesCommandOutput>;
    describeImages(args: DescribeImagesCommandInput, cb: (err: any, data?: DescribeImagesCommandOutput) => void): void;
    describeImages(args: DescribeImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImagesCommandOutput) => void): void;
    /**
     * <p>Returns the image tag details for a repository in a public registry.</p>
     */
    describeImageTags(args: DescribeImageTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImageTagsCommandOutput>;
    describeImageTags(args: DescribeImageTagsCommandInput, cb: (err: any, data?: DescribeImageTagsCommandOutput) => void): void;
    describeImageTags(args: DescribeImageTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImageTagsCommandOutput) => void): void;
    /**
     * <p>Returns details for a public registry.</p>
     */
    describeRegistries(args: DescribeRegistriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRegistriesCommandOutput>;
    describeRegistries(args: DescribeRegistriesCommandInput, cb: (err: any, data?: DescribeRegistriesCommandOutput) => void): void;
    describeRegistries(args: DescribeRegistriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRegistriesCommandOutput) => void): void;
    /**
     * <p>Describes repositories in a public registry.</p>
     */
    describeRepositories(args: DescribeRepositoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRepositoriesCommandOutput>;
    describeRepositories(args: DescribeRepositoriesCommandInput, cb: (err: any, data?: DescribeRepositoriesCommandOutput) => void): void;
    describeRepositories(args: DescribeRepositoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRepositoriesCommandOutput) => void): void;
    /**
     * <p>Retrieves an authorization token. An authorization token represents your IAM
     *          authentication credentials and can be used to access any Amazon ECR registry that your IAM
     *          principal has access to. The authorization token is valid for 12 hours. This API requires
     *          the <code>ecr-public:GetAuthorizationToken</code> and
     *             <code>sts:GetServiceBearerToken</code> permissions.</p>
     */
    getAuthorizationToken(args: GetAuthorizationTokenCommandInput, options?: __HttpHandlerOptions): Promise<GetAuthorizationTokenCommandOutput>;
    getAuthorizationToken(args: GetAuthorizationTokenCommandInput, cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void): void;
    getAuthorizationToken(args: GetAuthorizationTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void): void;
    /**
     * <p>Retrieves catalog metadata for a public registry.</p>
     */
    getRegistryCatalogData(args: GetRegistryCatalogDataCommandInput, options?: __HttpHandlerOptions): Promise<GetRegistryCatalogDataCommandOutput>;
    getRegistryCatalogData(args: GetRegistryCatalogDataCommandInput, cb: (err: any, data?: GetRegistryCatalogDataCommandOutput) => void): void;
    getRegistryCatalogData(args: GetRegistryCatalogDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRegistryCatalogDataCommandOutput) => void): void;
    /**
     * <p>Retrieve catalog metadata for a repository in a public registry. This metadata is
     *          displayed publicly in the Amazon ECR Public Gallery.</p>
     */
    getRepositoryCatalogData(args: GetRepositoryCatalogDataCommandInput, options?: __HttpHandlerOptions): Promise<GetRepositoryCatalogDataCommandOutput>;
    getRepositoryCatalogData(args: GetRepositoryCatalogDataCommandInput, cb: (err: any, data?: GetRepositoryCatalogDataCommandOutput) => void): void;
    getRepositoryCatalogData(args: GetRepositoryCatalogDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRepositoryCatalogDataCommandOutput) => void): void;
    /**
     * <p>Retrieves the repository policy for the specified repository.</p>
     */
    getRepositoryPolicy(args: GetRepositoryPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetRepositoryPolicyCommandOutput>;
    getRepositoryPolicy(args: GetRepositoryPolicyCommandInput, cb: (err: any, data?: GetRepositoryPolicyCommandOutput) => void): void;
    getRepositoryPolicy(args: GetRepositoryPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRepositoryPolicyCommandOutput) => void): void;
    /**
     * <p>Notifies Amazon ECR that you intend to upload an image layer.</p>
     *          <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that
     *          has not already been uploaded. Whether or not an image layer has been uploaded is
     *          determined by the BatchCheckLayerAvailability API action.</p>
     *          <note>
     *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    initiateLayerUpload(args: InitiateLayerUploadCommandInput, options?: __HttpHandlerOptions): Promise<InitiateLayerUploadCommandOutput>;
    initiateLayerUpload(args: InitiateLayerUploadCommandInput, cb: (err: any, data?: InitiateLayerUploadCommandOutput) => void): void;
    initiateLayerUpload(args: InitiateLayerUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InitiateLayerUploadCommandOutput) => void): void;
    /**
     * <p>List the tags for an Amazon ECR Public resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Creates or updates the image manifest and tags associated with an image.</p>
     *          <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is
     *          called once to create or update the image manifest and the tags associated with the
     *          image.</p>
     *
     *          <note>
     *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    putImage(args: PutImageCommandInput, options?: __HttpHandlerOptions): Promise<PutImageCommandOutput>;
    putImage(args: PutImageCommandInput, cb: (err: any, data?: PutImageCommandOutput) => void): void;
    putImage(args: PutImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutImageCommandOutput) => void): void;
    /**
     * <p>Create or updates the catalog data for a public registry.</p>
     */
    putRegistryCatalogData(args: PutRegistryCatalogDataCommandInput, options?: __HttpHandlerOptions): Promise<PutRegistryCatalogDataCommandOutput>;
    putRegistryCatalogData(args: PutRegistryCatalogDataCommandInput, cb: (err: any, data?: PutRegistryCatalogDataCommandOutput) => void): void;
    putRegistryCatalogData(args: PutRegistryCatalogDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRegistryCatalogDataCommandOutput) => void): void;
    /**
     * <p>Creates or updates the catalog data for a repository in a public registry.</p>
     */
    putRepositoryCatalogData(args: PutRepositoryCatalogDataCommandInput, options?: __HttpHandlerOptions): Promise<PutRepositoryCatalogDataCommandOutput>;
    putRepositoryCatalogData(args: PutRepositoryCatalogDataCommandInput, cb: (err: any, data?: PutRepositoryCatalogDataCommandOutput) => void): void;
    putRepositoryCatalogData(args: PutRepositoryCatalogDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRepositoryCatalogDataCommandOutput) => void): void;
    /**
     * <p>Applies a repository policy to the specified public repository to control access
     *          permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository
     *             Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
     */
    setRepositoryPolicy(args: SetRepositoryPolicyCommandInput, options?: __HttpHandlerOptions): Promise<SetRepositoryPolicyCommandOutput>;
    setRepositoryPolicy(args: SetRepositoryPolicyCommandInput, cb: (err: any, data?: SetRepositoryPolicyCommandOutput) => void): void;
    setRepositoryPolicy(args: SetRepositoryPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetRepositoryPolicyCommandOutput) => void): void;
    /**
     * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>.
     *          If existing tags on a resource are not specified in the request parameters, they are not
     *          changed. When a resource is deleted, the tags associated with that resource are deleted as
     *          well.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Deletes specified tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Uploads an image layer part to Amazon ECR.</p>
     *          <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of
     *          each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is
     *          called once per each new image layer part.</p>
     *          <note>
     *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    uploadLayerPart(args: UploadLayerPartCommandInput, options?: __HttpHandlerOptions): Promise<UploadLayerPartCommandOutput>;
    uploadLayerPart(args: UploadLayerPartCommandInput, cb: (err: any, data?: UploadLayerPartCommandOutput) => void): void;
    uploadLayerPart(args: UploadLayerPartCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UploadLayerPartCommandOutput) => void): void;
}
