import { SignerClient } from "./SignerClient";
import { AddProfilePermissionCommandInput, AddProfilePermissionCommandOutput } from "./commands/AddProfilePermissionCommand";
import { CancelSigningProfileCommandInput, CancelSigningProfileCommandOutput } from "./commands/CancelSigningProfileCommand";
import { DescribeSigningJobCommandInput, DescribeSigningJobCommandOutput } from "./commands/DescribeSigningJobCommand";
import { GetSigningPlatformCommandInput, GetSigningPlatformCommandOutput } from "./commands/GetSigningPlatformCommand";
import { GetSigningProfileCommandInput, GetSigningProfileCommandOutput } from "./commands/GetSigningProfileCommand";
import { ListProfilePermissionsCommandInput, ListProfilePermissionsCommandOutput } from "./commands/ListProfilePermissionsCommand";
import { ListSigningJobsCommandInput, ListSigningJobsCommandOutput } from "./commands/ListSigningJobsCommand";
import { ListSigningPlatformsCommandInput, ListSigningPlatformsCommandOutput } from "./commands/ListSigningPlatformsCommand";
import { ListSigningProfilesCommandInput, ListSigningProfilesCommandOutput } from "./commands/ListSigningProfilesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutSigningProfileCommandInput, PutSigningProfileCommandOutput } from "./commands/PutSigningProfileCommand";
import { RemoveProfilePermissionCommandInput, RemoveProfilePermissionCommandOutput } from "./commands/RemoveProfilePermissionCommand";
import { RevokeSignatureCommandInput, RevokeSignatureCommandOutput } from "./commands/RevokeSignatureCommand";
import { RevokeSigningProfileCommandInput, RevokeSigningProfileCommandOutput } from "./commands/RevokeSigningProfileCommand";
import { StartSigningJobCommandInput, StartSigningJobCommandOutput } from "./commands/StartSigningJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Signer is a fully managed code signing service to help you ensure the trust and
 * 			integrity of your code. </p>
 * 		       <p>AWS Signer supports the following applications:</p>
 *
 * 		       <p>With <i>code signing for AWS Lambda</i>, you can sign AWS Lambda
 * 			deployment packages. Integrated support is provided for Amazon S3, Amazon CloudWatch,
 * 			and AWS CloudTrail. In order to sign code, you create a signing profile and then use
 * 			Signer to sign Lambda zip files in S3. </p>
 *
 * 		       <p>With <i>code signing for IoT</i>, you can sign code for any IoT device that is
 * 			supported by AWS. IoT code signing is available for <a href="http://docs.aws.amazon.com/freertos/latest/userguide/">Amazon FreeRTOS</a> and <a href="http://docs.aws.amazon.com/iot/latest/developerguide/">AWS IoT Device Management</a>, and is
 * 			integrated with <a href="http://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager (ACM)</a>. In order to sign
 * 			code, you import a third-party code signing certificate using ACM, and use that to
 * 			sign updates in Amazon FreeRTOS and AWS IoT Device Management. </p>
 * 		       <p>For more information about AWS Signer, see the <a href="http://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">AWS Signer Developer Guide</a>.</p>
 *
 * 		       <p></p>
 */
export declare class Signer extends SignerClient {
    /**
     * <p>Adds cross-account permissions to a signing profile.</p>
     */
    addProfilePermission(args: AddProfilePermissionCommandInput, options?: __HttpHandlerOptions): Promise<AddProfilePermissionCommandOutput>;
    addProfilePermission(args: AddProfilePermissionCommandInput, cb: (err: any, data?: AddProfilePermissionCommandOutput) => void): void;
    addProfilePermission(args: AddProfilePermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddProfilePermissionCommandOutput) => void): void;
    /**
     * <p>Changes the state of an <code>ACTIVE</code> signing profile to <code>CANCELED</code>.
     * 			A canceled profile is still viewable with the <code>ListSigningProfiles</code>
     * 			operation, but it cannot perform new signing jobs, and is deleted two years after
     * 			cancelation.</p>
     */
    cancelSigningProfile(args: CancelSigningProfileCommandInput, options?: __HttpHandlerOptions): Promise<CancelSigningProfileCommandOutput>;
    cancelSigningProfile(args: CancelSigningProfileCommandInput, cb: (err: any, data?: CancelSigningProfileCommandOutput) => void): void;
    cancelSigningProfile(args: CancelSigningProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelSigningProfileCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific code signing job. You specify the job by using
     * 			the <code>jobId</code> value that is returned by the <a>StartSigningJob</a>
     * 			operation. </p>
     */
    describeSigningJob(args: DescribeSigningJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSigningJobCommandOutput>;
    describeSigningJob(args: DescribeSigningJobCommandInput, cb: (err: any, data?: DescribeSigningJobCommandOutput) => void): void;
    describeSigningJob(args: DescribeSigningJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSigningJobCommandOutput) => void): void;
    /**
     * <p>Returns information on a specific signing platform.</p>
     */
    getSigningPlatform(args: GetSigningPlatformCommandInput, options?: __HttpHandlerOptions): Promise<GetSigningPlatformCommandOutput>;
    getSigningPlatform(args: GetSigningPlatformCommandInput, cb: (err: any, data?: GetSigningPlatformCommandOutput) => void): void;
    getSigningPlatform(args: GetSigningPlatformCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSigningPlatformCommandOutput) => void): void;
    /**
     * <p>Returns information on a specific signing profile.</p>
     */
    getSigningProfile(args: GetSigningProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetSigningProfileCommandOutput>;
    getSigningProfile(args: GetSigningProfileCommandInput, cb: (err: any, data?: GetSigningProfileCommandOutput) => void): void;
    getSigningProfile(args: GetSigningProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSigningProfileCommandOutput) => void): void;
    /**
     * <p>Lists the cross-account permissions associated with a signing profile.</p>
     */
    listProfilePermissions(args: ListProfilePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<ListProfilePermissionsCommandOutput>;
    listProfilePermissions(args: ListProfilePermissionsCommandInput, cb: (err: any, data?: ListProfilePermissionsCommandOutput) => void): void;
    listProfilePermissions(args: ListProfilePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProfilePermissionsCommandOutput) => void): void;
    /**
     * <p>Lists all your signing jobs. You can use the <code>maxResults</code> parameter to
     * 			limit the number of signing jobs that are returned in the response. If additional jobs
     * 			remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in
     * 			subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can
     * 			continue calling <code>ListSigningJobs</code> with your <code>maxResults</code>
     * 			parameter and with new values that code signing returns in the <code>nextToken</code>
     * 			parameter until all of your signing jobs have been returned. </p>
     */
    listSigningJobs(args: ListSigningJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListSigningJobsCommandOutput>;
    listSigningJobs(args: ListSigningJobsCommandInput, cb: (err: any, data?: ListSigningJobsCommandOutput) => void): void;
    listSigningJobs(args: ListSigningJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSigningJobsCommandOutput) => void): void;
    /**
     * <p>Lists all signing platforms available in code signing that match the request parameters. If
     * 			additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use
     * 			this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining
     * 			values. You can continue calling <code>ListSigningJobs</code> with your
     * 				<code>maxResults</code> parameter and with new values that code signing returns in the
     * 				<code>nextToken</code> parameter until all of your signing jobs have been
     * 			returned.</p>
     */
    listSigningPlatforms(args: ListSigningPlatformsCommandInput, options?: __HttpHandlerOptions): Promise<ListSigningPlatformsCommandOutput>;
    listSigningPlatforms(args: ListSigningPlatformsCommandInput, cb: (err: any, data?: ListSigningPlatformsCommandOutput) => void): void;
    listSigningPlatforms(args: ListSigningPlatformsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSigningPlatformsCommandOutput) => void): void;
    /**
     * <p>Lists all available signing profiles in your AWS account. Returns only profiles with
     * 			an <code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is
     * 			set to <code>true</code>. If additional jobs remain to be listed, code signing returns a
     * 				<code>nextToken</code> value. Use this value in subsequent calls to
     * 				<code>ListSigningJobs</code> to fetch the remaining values. You can continue calling
     * 				<code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with
     * 			new values that code signing returns in the <code>nextToken</code> parameter until all of your
     * 			signing jobs have been returned.</p>
     */
    listSigningProfiles(args: ListSigningProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListSigningProfilesCommandOutput>;
    listSigningProfiles(args: ListSigningProfilesCommandInput, cb: (err: any, data?: ListSigningProfilesCommandOutput) => void): void;
    listSigningProfiles(args: ListSigningProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSigningProfilesCommandOutput) => void): void;
    /**
     * <p>Returns a list of the tags associated with a signing profile resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Creates a signing profile. A signing profile is a code signing template that can be used to
     * 			carry out a pre-defined signing job. For more information, see <a href="http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html">http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html</a>
     *          </p>
     */
    putSigningProfile(args: PutSigningProfileCommandInput, options?: __HttpHandlerOptions): Promise<PutSigningProfileCommandOutput>;
    putSigningProfile(args: PutSigningProfileCommandInput, cb: (err: any, data?: PutSigningProfileCommandOutput) => void): void;
    putSigningProfile(args: PutSigningProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutSigningProfileCommandOutput) => void): void;
    /**
     * <p>Removes cross-account permissions from a signing profile.</p>
     */
    removeProfilePermission(args: RemoveProfilePermissionCommandInput, options?: __HttpHandlerOptions): Promise<RemoveProfilePermissionCommandOutput>;
    removeProfilePermission(args: RemoveProfilePermissionCommandInput, cb: (err: any, data?: RemoveProfilePermissionCommandOutput) => void): void;
    removeProfilePermission(args: RemoveProfilePermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveProfilePermissionCommandOutput) => void): void;
    /**
     * <p>Changes the state of a signing job to REVOKED. This indicates that the signature is no
     * 			longer valid.</p>
     */
    revokeSignature(args: RevokeSignatureCommandInput, options?: __HttpHandlerOptions): Promise<RevokeSignatureCommandOutput>;
    revokeSignature(args: RevokeSignatureCommandInput, cb: (err: any, data?: RevokeSignatureCommandOutput) => void): void;
    revokeSignature(args: RevokeSignatureCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeSignatureCommandOutput) => void): void;
    /**
     * <p>Changes the state of a signing profile to REVOKED. This indicates that signatures
     * 			generated using the signing profile after an effective start date are no longer
     * 			valid.</p>
     */
    revokeSigningProfile(args: RevokeSigningProfileCommandInput, options?: __HttpHandlerOptions): Promise<RevokeSigningProfileCommandOutput>;
    revokeSigningProfile(args: RevokeSigningProfileCommandInput, cb: (err: any, data?: RevokeSigningProfileCommandOutput) => void): void;
    revokeSigningProfile(args: RevokeSigningProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeSigningProfileCommandOutput) => void): void;
    /**
     * <p>Initiates a signing job to be performed on the code provided. Signing jobs are
     * 			viewable by the <code>ListSigningJobs</code> operation for two years after they are
     * 			performed. Note the following requirements: </p>
     * 		       <ul>
     *             <li>
     * 				           <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create a Bucket</a> in the
     * 						<i>Amazon S3 Getting Started Guide</i>. </p>
     * 			         </li>
     *             <li>
     * 				           <p>Your S3 source bucket must be version enabled.</p>
     * 			         </li>
     *             <li>
     * 				           <p>You must create an S3 destination bucket. Code signing uses your S3 destination
     * 					bucket to write your signed code.</p>
     * 			         </li>
     *             <li>
     * 				           <p>You specify the name of the source and destination buckets when calling the
     * 						<code>StartSigningJob</code> operation.</p>
     * 			         </li>
     *             <li>
     * 				           <p>You must also specify a request token that identifies your request to
     * 					code signing.</p>
     * 			         </li>
     *          </ul>
     * 		       <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call
     * 			<code>StartSigningJob</code>.</p>
     * 		       <p>For a Java example that shows how to use this action, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/">http://docs.aws.amazon.com/acm/latest/userguide/</a>
     *          </p>
     */
    startSigningJob(args: StartSigningJobCommandInput, options?: __HttpHandlerOptions): Promise<StartSigningJobCommandOutput>;
    startSigningJob(args: StartSigningJobCommandInput, cb: (err: any, data?: StartSigningJobCommandOutput) => void): void;
    startSigningJob(args: StartSigningJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartSigningJobCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to a signing profile. Tags are labels that you can use to
     * 			identify and organize your AWS resources. Each tag consists of a key and an optional
     * 			value. To specify the signing profile, use its Amazon Resource Name (ARN). To specify
     * 			the tag, use a key-value pair.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from a signing profile. To remove the tags, specify a list of
     * 			tag keys.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
