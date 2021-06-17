import { S3ControlClient } from "./S3ControlClient";
import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "./commands/CreateAccessPointCommand";
import { CreateAccessPointForObjectLambdaCommandInput, CreateAccessPointForObjectLambdaCommandOutput } from "./commands/CreateAccessPointForObjectLambdaCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "./commands/DeleteAccessPointCommand";
import { DeleteAccessPointForObjectLambdaCommandInput, DeleteAccessPointForObjectLambdaCommandOutput } from "./commands/DeleteAccessPointForObjectLambdaCommand";
import { DeleteAccessPointPolicyCommandInput, DeleteAccessPointPolicyCommandOutput } from "./commands/DeleteAccessPointPolicyCommand";
import { DeleteAccessPointPolicyForObjectLambdaCommandInput, DeleteAccessPointPolicyForObjectLambdaCommandOutput } from "./commands/DeleteAccessPointPolicyForObjectLambdaCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand";
import { DeleteBucketLifecycleConfigurationCommandInput, DeleteBucketLifecycleConfigurationCommandOutput } from "./commands/DeleteBucketLifecycleConfigurationCommand";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "./commands/DeleteBucketPolicyCommand";
import { DeleteBucketTaggingCommandInput, DeleteBucketTaggingCommandOutput } from "./commands/DeleteBucketTaggingCommand";
import { DeleteJobTaggingCommandInput, DeleteJobTaggingCommandOutput } from "./commands/DeleteJobTaggingCommand";
import { DeletePublicAccessBlockCommandInput, DeletePublicAccessBlockCommandOutput } from "./commands/DeletePublicAccessBlockCommand";
import { DeleteStorageLensConfigurationCommandInput, DeleteStorageLensConfigurationCommandOutput } from "./commands/DeleteStorageLensConfigurationCommand";
import { DeleteStorageLensConfigurationTaggingCommandInput, DeleteStorageLensConfigurationTaggingCommandOutput } from "./commands/DeleteStorageLensConfigurationTaggingCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "./commands/GetAccessPointCommand";
import { GetAccessPointConfigurationForObjectLambdaCommandInput, GetAccessPointConfigurationForObjectLambdaCommandOutput } from "./commands/GetAccessPointConfigurationForObjectLambdaCommand";
import { GetAccessPointForObjectLambdaCommandInput, GetAccessPointForObjectLambdaCommandOutput } from "./commands/GetAccessPointForObjectLambdaCommand";
import { GetAccessPointPolicyCommandInput, GetAccessPointPolicyCommandOutput } from "./commands/GetAccessPointPolicyCommand";
import { GetAccessPointPolicyForObjectLambdaCommandInput, GetAccessPointPolicyForObjectLambdaCommandOutput } from "./commands/GetAccessPointPolicyForObjectLambdaCommand";
import { GetAccessPointPolicyStatusCommandInput, GetAccessPointPolicyStatusCommandOutput } from "./commands/GetAccessPointPolicyStatusCommand";
import { GetAccessPointPolicyStatusForObjectLambdaCommandInput, GetAccessPointPolicyStatusForObjectLambdaCommandOutput } from "./commands/GetAccessPointPolicyStatusForObjectLambdaCommand";
import { GetBucketCommandInput, GetBucketCommandOutput } from "./commands/GetBucketCommand";
import { GetBucketLifecycleConfigurationCommandInput, GetBucketLifecycleConfigurationCommandOutput } from "./commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "./commands/GetBucketPolicyCommand";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "./commands/GetBucketTaggingCommand";
import { GetJobTaggingCommandInput, GetJobTaggingCommandOutput } from "./commands/GetJobTaggingCommand";
import { GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput } from "./commands/GetPublicAccessBlockCommand";
import { GetStorageLensConfigurationCommandInput, GetStorageLensConfigurationCommandOutput } from "./commands/GetStorageLensConfigurationCommand";
import { GetStorageLensConfigurationTaggingCommandInput, GetStorageLensConfigurationTaggingCommandOutput } from "./commands/GetStorageLensConfigurationTaggingCommand";
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "./commands/ListAccessPointsCommand";
import { ListAccessPointsForObjectLambdaCommandInput, ListAccessPointsForObjectLambdaCommandOutput } from "./commands/ListAccessPointsForObjectLambdaCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListRegionalBucketsCommandInput, ListRegionalBucketsCommandOutput } from "./commands/ListRegionalBucketsCommand";
import { ListStorageLensConfigurationsCommandInput, ListStorageLensConfigurationsCommandOutput } from "./commands/ListStorageLensConfigurationsCommand";
import { PutAccessPointConfigurationForObjectLambdaCommandInput, PutAccessPointConfigurationForObjectLambdaCommandOutput } from "./commands/PutAccessPointConfigurationForObjectLambdaCommand";
import { PutAccessPointPolicyCommandInput, PutAccessPointPolicyCommandOutput } from "./commands/PutAccessPointPolicyCommand";
import { PutAccessPointPolicyForObjectLambdaCommandInput, PutAccessPointPolicyForObjectLambdaCommandOutput } from "./commands/PutAccessPointPolicyForObjectLambdaCommand";
import { PutBucketLifecycleConfigurationCommandInput, PutBucketLifecycleConfigurationCommandOutput } from "./commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "./commands/PutBucketPolicyCommand";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "./commands/PutBucketTaggingCommand";
import { PutJobTaggingCommandInput, PutJobTaggingCommandOutput } from "./commands/PutJobTaggingCommand";
import { PutPublicAccessBlockCommandInput, PutPublicAccessBlockCommandOutput } from "./commands/PutPublicAccessBlockCommand";
import { PutStorageLensConfigurationCommandInput, PutStorageLensConfigurationCommandOutput } from "./commands/PutStorageLensConfigurationCommand";
import { PutStorageLensConfigurationTaggingCommandInput, PutStorageLensConfigurationTaggingCommandOutput } from "./commands/PutStorageLensConfigurationTaggingCommand";
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "./commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "./commands/UpdateJobStatusCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>
 *          AWS S3 Control provides access to Amazon S3 control plane actions.
 *
 *       </p>
 */
export declare class S3Control extends S3ControlClient {
    /**
     * <p>Creates an access point and associates it with the specified bucket. For more information, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3 Access
     *             Points</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <p></p>
     *          <note>
     *             <p>S3 on Outposts only supports VPC-style access points.
     *          </p>
     *             <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">
     *          Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only access points</a> in
     *          the <i>Amazon S3 User Guide</i>.</p>
     *          </note>
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html#API_control_CreateAccessPoint_Examples">Examples</a> section.</p>
     *          <p></p>
     *          <p>The following actions are related to <code>CreateAccessPoint</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    createAccessPoint(args: CreateAccessPointCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccessPointCommandOutput>;
    createAccessPoint(args: CreateAccessPointCommandInput, cb: (err: any, data?: CreateAccessPointCommandOutput) => void): void;
    createAccessPoint(args: CreateAccessPointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAccessPointCommandOutput) => void): void;
    /**
     * <p>Creates an Object Lambda Access Point. For more information, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">Transforming objects with Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <p>The following actions are related to <code>CreateAccessPointForObjectLambda</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    createAccessPointForObjectLambda(args: CreateAccessPointForObjectLambdaCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccessPointForObjectLambdaCommandOutput>;
    createAccessPointForObjectLambda(args: CreateAccessPointForObjectLambdaCommandInput, cb: (err: any, data?: CreateAccessPointForObjectLambdaCommandOutput) => void): void;
    createAccessPointForObjectLambda(args: CreateAccessPointForObjectLambdaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAccessPointForObjectLambdaCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">Create Bucket</a> in the <i>Amazon S3 API Reference</i>.
     *       </p>
     *          </note>
     *          <p>Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts.
     *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p>
     *          <p>Not every string is an acceptable bucket name. For information on bucket naming restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html#bucketnamingrules">Working with Amazon S3 Buckets</a>.</p>
     *          <p>S3 on Outposts buckets support:</p>
     *          <ul>
     *             <li>
     *                <p>Tags</p>
     *             </li>
     *             <li>
     *                <p>LifecycleConfigurations for deleting expired objects</p>
     *             </li>
     *          </ul>
     *          <p>For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts,
     *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OnOutpostsRestrictionsLimitations.html">
     *             Amazon S3 on Outposts Restrictions and Limitations</a>.</p>
     *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
     *          endpoint hostname prefix and <code>x-amz-outpost-id</code> in your API request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html#API_control_CreateBucket_Examples">Examples</a> section.</p>
     *
     *          <p>The following actions are related to <code>CreateBucket</code> for Amazon S3 on Outposts:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html">GetBucket</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html">DeleteBucket</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    createBucket(args: CreateBucketCommandInput, options?: __HttpHandlerOptions): Promise<CreateBucketCommandOutput>;
    createBucket(args: CreateBucketCommandInput, cb: (err: any, data?: CreateBucketCommandOutput) => void): void;
    createBucket(args: CreateBucketCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBucketCommandOutput) => void): void;
    /**
     * <p>You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a
     *          single action on lists of Amazon S3 objects that you specify. For more information,
     *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <p>This action creates a S3 Batch Operations job.</p>
     *          <p></p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_JobOperation.html">JobOperation</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
    createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    createJob(args: CreateJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    /**
     * <p>Deletes the specified access point.</p>
     *
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html#API_control_DeleteAccessPoint_Examples">Examples</a> section.</p>
     *          <p>The following actions are related to <code>DeleteAccessPoint</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteAccessPoint(args: DeleteAccessPointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessPointCommandOutput>;
    deleteAccessPoint(args: DeleteAccessPointCommandInput, cb: (err: any, data?: DeleteAccessPointCommandOutput) => void): void;
    deleteAccessPoint(args: DeleteAccessPointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccessPointCommandOutput) => void): void;
    /**
     * <p>Deletes the specified Object Lambda Access Point.</p>
     *          <p>The following actions are related to <code>DeleteAccessPointForObjectLambda</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteAccessPointForObjectLambda(args: DeleteAccessPointForObjectLambdaCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessPointForObjectLambdaCommandOutput>;
    deleteAccessPointForObjectLambda(args: DeleteAccessPointForObjectLambdaCommandInput, cb: (err: any, data?: DeleteAccessPointForObjectLambdaCommandOutput) => void): void;
    deleteAccessPointForObjectLambda(args: DeleteAccessPointForObjectLambdaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccessPointForObjectLambdaCommandOutput) => void): void;
    /**
     * <p>Deletes the access point policy for the specified access point.</p>
     *          <p></p>
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html#API_control_DeleteAccessPointPolicy_Examples">Examples</a> section.</p>
     *          <p>The following actions are related to <code>DeleteAccessPointPolicy</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteAccessPointPolicy(args: DeleteAccessPointPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessPointPolicyCommandOutput>;
    deleteAccessPointPolicy(args: DeleteAccessPointPolicyCommandInput, cb: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void): void;
    deleteAccessPointPolicy(args: DeleteAccessPointPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void): void;
    /**
     * <p>Removes the resource policy for an Object Lambda Access Point.</p>
     *          <p>The following actions are related to <code>DeleteAccessPointPolicyForObjectLambda</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteAccessPointPolicyForObjectLambda(args: DeleteAccessPointPolicyForObjectLambdaCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessPointPolicyForObjectLambdaCommandOutput>;
    deleteAccessPointPolicyForObjectLambda(args: DeleteAccessPointPolicyForObjectLambdaCommandInput, cb: (err: any, data?: DeleteAccessPointPolicyForObjectLambdaCommandOutput) => void): void;
    deleteAccessPointPolicyForObjectLambda(args: DeleteAccessPointPolicyForObjectLambdaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccessPointPolicyForObjectLambdaCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket,
     *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a> in the <i>Amazon S3 API Reference</i>.
     *       </p>
     *          </note>
     *          <p>Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the
     *          bucket must be deleted before the bucket itself can be deleted.
     *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p>
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html#API_control_DeleteBucket_Examples">Examples</a> section.</p>
     *          <p class="title">
     *             <b>Related Resources</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">CreateBucket</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html">GetBucket</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteBucket(args: DeleteBucketCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBucketCommandOutput>;
    deleteBucket(args: DeleteBucketCommandInput, cb: (err: any, data?: DeleteBucketCommandOutput) => void): void;
    deleteBucket(args: DeleteBucketCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBucketCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete an
     *          S3 bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a> in the <i>Amazon S3 API Reference</i>.
     *       </p>
     *          </note>
     *          <p>Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration
     *          rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically
     *          deletes any objects on the basis of rules contained in the deleted lifecycle configuration.
     *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p>
     *          <p>To use this action, you must have permission to perform the
     *             <code>s3-outposts:DeleteLifecycleConfiguration</code> action. By default, the bucket
     *          owner has this permission and the Outposts bucket owner can grant this permission to
     *          others.</p>
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html#API_control_DeleteBucketLifecycleConfiguration_Examples">Examples</a> section.</p>
     *
     *          <p>For more information about object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">Elements to Describe Lifecycle Actions</a>.</p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteBucketLifecycleConfiguration(args: DeleteBucketLifecycleConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBucketLifecycleConfigurationCommandOutput>;
    deleteBucketLifecycleConfiguration(args: DeleteBucketLifecycleConfigurationCommandInput, cb: (err: any, data?: DeleteBucketLifecycleConfigurationCommandOutput) => void): void;
    deleteBucketLifecycleConfiguration(args: DeleteBucketLifecycleConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBucketLifecycleConfigurationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action deletes an Amazon S3 on Outposts bucket policy. To delete an
     *          S3 bucket policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html">DeleteBucketPolicy</a> in the <i>Amazon S3 API Reference</i>.
     *       </p>
     *          </note>
     *          <p>This implementation of the DELETE action uses the policy subresource to delete the
     *          policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the
     *          root user of the AWS account that owns the bucket, the calling identity must have the
     *             <code>s3-outposts:DeleteBucketPolicy</code> permissions on the specified Outposts bucket
     *          and belong to the bucket owner's account to use this action. For more information, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in
     *             <i>Amazon S3 User Guide</i>.</p>
     *
     *          <p>If you don't have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a
     *          <code>403 Access Denied</code> error. If you have the correct permissions, but you're
     *          not using an identity that belongs to the bucket owner's account, Amazon S3 returns a
     *          <code>405 Method Not Allowed</code> error. </p>
     *
     *
     *          <important>
     *             <p>As a security precaution, the root user of the AWS account that owns a bucket can always use this action,
     *          even if the policy explicitly denies the root user the ability to perform this action.</p>
     *          </important>
     *
     *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>. </p>
     *
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html#API_control_DeleteBucketPolicy_Examples">Examples</a> section.</p>
     *
     *          <p>The following actions are related to <code>DeleteBucketPolicy</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteBucketPolicy(args: DeleteBucketPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBucketPolicyCommandOutput>;
    deleteBucketPolicy(args: DeleteBucketPolicyCommandInput, cb: (err: any, data?: DeleteBucketPolicyCommandOutput) => void): void;
    deleteBucketPolicy(args: DeleteBucketPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBucketPolicyCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action deletes an Amazon S3 on Outposts bucket's tags. To delete an
     *          S3 bucket tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a> in the <i>Amazon S3 API Reference</i>.
     *       </p>
     *          </note>
     *          <p>Deletes the tags from the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in
     *             <i>Amazon S3 User Guide</i>.</p>
     *
     *          <p>To use this action, you must have permission to perform the <code>PutBucketTagging</code> action.
     *          By default, the bucket owner has this permission and can grant this permission to others.
     *       </p>
     *
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html#API_control_DeleteBucketTagging_Examples">Examples</a> section.</p>
     *
     *          <p>The following actions are related to <code>DeleteBucketTagging</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteBucketTagging(args: DeleteBucketTaggingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBucketTaggingCommandOutput>;
    deleteBucketTagging(args: DeleteBucketTaggingCommandInput, cb: (err: any, data?: DeleteBucketTaggingCommandOutput) => void): void;
    deleteBucketTagging(args: DeleteBucketTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBucketTaggingCommandOutput) => void): void;
    /**
     * <p>Removes the entire tag set from the specified S3 Batch Operations job. To use this operation,
     *          you must have permission to perform the <code>s3:DeleteJobTagging</code> action. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <p></p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deleteJobTagging(args: DeleteJobTaggingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobTaggingCommandOutput>;
    deleteJobTagging(args: DeleteJobTaggingCommandInput, cb: (err: any, data?: DeleteJobTaggingCommandOutput) => void): void;
    deleteJobTagging(args: DeleteJobTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteJobTaggingCommandOutput) => void): void;
    /**
     * <p>Removes the <code>PublicAccessBlock</code> configuration for an AWS account. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block
     *             public access</a>.</p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    deletePublicAccessBlock(args: DeletePublicAccessBlockCommandInput, options?: __HttpHandlerOptions): Promise<DeletePublicAccessBlockCommandOutput>;
    deletePublicAccessBlock(args: DeletePublicAccessBlockCommandInput, cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void): void;
    deletePublicAccessBlock(args: DeletePublicAccessBlockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void): void;
    /**
     * <p>Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
     *             activity and usage with Amazon S3 Storage Lens </a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <p>To use this action,
     *          you must have permission to perform the <code>s3:DeleteStorageLensConfiguration</code> action. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          </note>
     */
    deleteStorageLensConfiguration(args: DeleteStorageLensConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStorageLensConfigurationCommandOutput>;
    deleteStorageLensConfiguration(args: DeleteStorageLensConfigurationCommandInput, cb: (err: any, data?: DeleteStorageLensConfigurationCommandOutput) => void): void;
    deleteStorageLensConfiguration(args: DeleteStorageLensConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStorageLensConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
     *             activity and usage with Amazon S3 Storage Lens </a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <p>To use this action,
     *          you must have permission to perform the <code>s3:DeleteStorageLensConfigurationTagging</code> action. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          </note>
     */
    deleteStorageLensConfigurationTagging(args: DeleteStorageLensConfigurationTaggingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStorageLensConfigurationTaggingCommandOutput>;
    deleteStorageLensConfigurationTagging(args: DeleteStorageLensConfigurationTaggingCommandInput, cb: (err: any, data?: DeleteStorageLensConfigurationTaggingCommandOutput) => void): void;
    deleteStorageLensConfigurationTagging(args: DeleteStorageLensConfigurationTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStorageLensConfigurationTaggingCommandOutput) => void): void;
    /**
     * <p>Retrieves the configuration parameters and status for a Batch Operations job. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in
     *          the <i>Amazon S3 User Guide</i>.</p>
     *          <p></p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
    describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
    describeJob(args: DescribeJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
    /**
     * <p>Returns configuration information about the specified access point.</p>
     *          <p></p>
     *
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">Examples</a> section.</p>
     *          <p>The following actions are related to <code>GetAccessPoint</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getAccessPoint(args: GetAccessPointCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessPointCommandOutput>;
    getAccessPoint(args: GetAccessPointCommandInput, cb: (err: any, data?: GetAccessPointCommandOutput) => void): void;
    getAccessPoint(args: GetAccessPointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessPointCommandOutput) => void): void;
    /**
     * <p>Returns configuration for an Object Lambda Access Point.</p>
     *          <p>The following actions are related to <code>GetAccessPointConfigurationForObjectLambda</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointConfigurationForObjectLambda.html">PutAccessPointConfigurationForObjectLambda</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getAccessPointConfigurationForObjectLambda(args: GetAccessPointConfigurationForObjectLambdaCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessPointConfigurationForObjectLambdaCommandOutput>;
    getAccessPointConfigurationForObjectLambda(args: GetAccessPointConfigurationForObjectLambdaCommandInput, cb: (err: any, data?: GetAccessPointConfigurationForObjectLambdaCommandOutput) => void): void;
    getAccessPointConfigurationForObjectLambda(args: GetAccessPointConfigurationForObjectLambdaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessPointConfigurationForObjectLambdaCommandOutput) => void): void;
    /**
     * <p>Returns configuration information about the specified Object Lambda Access Point</p>
     *          <p>The following actions are related to <code>GetAccessPointForObjectLambda</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getAccessPointForObjectLambda(args: GetAccessPointForObjectLambdaCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessPointForObjectLambdaCommandOutput>;
    getAccessPointForObjectLambda(args: GetAccessPointForObjectLambdaCommandInput, cb: (err: any, data?: GetAccessPointForObjectLambdaCommandOutput) => void): void;
    getAccessPointForObjectLambda(args: GetAccessPointForObjectLambdaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessPointForObjectLambdaCommandOutput) => void): void;
    /**
     * <p>Returns the access point policy associated with the specified access point.</p>
     *          <p>The following actions are related to <code>GetAccessPointPolicy</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getAccessPointPolicy(args: GetAccessPointPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessPointPolicyCommandOutput>;
    getAccessPointPolicy(args: GetAccessPointPolicyCommandInput, cb: (err: any, data?: GetAccessPointPolicyCommandOutput) => void): void;
    getAccessPointPolicy(args: GetAccessPointPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessPointPolicyCommandOutput) => void): void;
    /**
     * <p>Returns the resource policy for an Object Lambda Access Point.</p>
     *          <p>The following actions are related to <code>GetAccessPointPolicyForObjectLambda</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getAccessPointPolicyForObjectLambda(args: GetAccessPointPolicyForObjectLambdaCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessPointPolicyForObjectLambdaCommandOutput>;
    getAccessPointPolicyForObjectLambda(args: GetAccessPointPolicyForObjectLambdaCommandInput, cb: (err: any, data?: GetAccessPointPolicyForObjectLambdaCommandOutput) => void): void;
    getAccessPointPolicyForObjectLambda(args: GetAccessPointPolicyForObjectLambdaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessPointPolicyForObjectLambdaCommandOutput) => void): void;
    /**
     * <p>Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3 access points</a> in the <i>Amazon S3 User Guide</i>.</p>
     */
    getAccessPointPolicyStatus(args: GetAccessPointPolicyStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessPointPolicyStatusCommandOutput>;
    getAccessPointPolicyStatus(args: GetAccessPointPolicyStatusCommandInput, cb: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void): void;
    getAccessPointPolicyStatus(args: GetAccessPointPolicyStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void): void;
    /**
     * <p>Returns the status of the resource policy associated with an Object Lambda Access Point.</p>
     */
    getAccessPointPolicyStatusForObjectLambda(args: GetAccessPointPolicyStatusForObjectLambdaCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessPointPolicyStatusForObjectLambdaCommandOutput>;
    getAccessPointPolicyStatusForObjectLambda(args: GetAccessPointPolicyStatusForObjectLambdaCommandInput, cb: (err: any, data?: GetAccessPointPolicyStatusForObjectLambdaCommandOutput) => void): void;
    getAccessPointPolicyStatusForObjectLambda(args: GetAccessPointPolicyStatusForObjectLambdaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessPointPolicyStatusForObjectLambdaCommandOutput) => void): void;
    /**
     * <p>Gets an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">
     *          Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <p>If you are using an identity other than the root user of the AWS account
     *          that owns the Outposts bucket, the calling identity must have the
     *          <code>s3-outposts:GetBucket</code> permissions on the specified Outposts bucket and
     *          belong to the Outposts bucket owner's account in order to use this action. Only
     *          users from Outposts bucket owner account with the right permissions can perform
     *          actions on an Outposts bucket.
     *       </p>
     *          <p>
     *          If you don't have <code>s3-outposts:GetBucket</code> permissions or you're not using an identity that belongs to the bucket owner's
     *          account, Amazon S3 returns a <code>403 Access Denied</code> error.</p>
     *          <p>The following actions are related to <code>GetBucket</code> for Amazon S3 on Outposts:</p>
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html#API_control_GetBucket_Examples">Examples</a> section.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">CreateBucket</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html">DeleteBucket</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getBucket(args: GetBucketCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketCommandOutput>;
    getBucket(args: GetBucketCommandInput, cb: (err: any, data?: GetBucketCommandOutput) => void): void;
    getBucket(args: GetBucketCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBucketCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an
     *          S3 bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> in the <i>Amazon S3 API Reference</i>.
     *       </p>
     *          </note>
     *          <p>Returns the lifecycle configuration information set on the Outposts bucket. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> and for
     *          information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html"> Object Lifecycle Management</a> in
     *             <i>Amazon S3 User Guide</i>.</p>
     *
     *          <p>To use this action, you must have permission to perform the <code>s3-outposts:GetLifecycleConfiguration</code> action.
     *          The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more
     *          information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions
     *             Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p>
     *
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html#API_control_GetBucketLifecycleConfiguration_Examples">Examples</a> section.</p>
     *
     *          <p>
     *             <code>GetBucketLifecycleConfiguration</code> has the following special error:</p>
     *          <ul>
     *             <li>
     *                <p>Error code: <code>NoSuchLifecycleConfiguration</code>
     *                </p>
     *                <ul>
     *                   <li>
     *                      <p>Description: The lifecycle configuration does not exist.</p>
     *                   </li>
     *                   <li>
     *                      <p>HTTP Status Code: 404 Not Found</p>
     *                   </li>
     *                   <li>
     *                      <p>SOAP Fault Code Prefix: Client</p>
     *                   </li>
     *                </ul>
     *             </li>
     *          </ul>
     *          <p>The following actions are related to <code>GetBucketLifecycleConfiguration</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getBucketLifecycleConfiguration(args: GetBucketLifecycleConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketLifecycleConfigurationCommandOutput>;
    getBucketLifecycleConfiguration(args: GetBucketLifecycleConfigurationCommandInput, cb: (err: any, data?: GetBucketLifecycleConfigurationCommandOutput) => void): void;
    getBucketLifecycleConfiguration(args: GetBucketLifecycleConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBucketLifecycleConfigurationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3
     *             bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html">GetBucketPolicy</a> in the
     *                <i>Amazon S3 API Reference</i>. </p>
     *          </note>
     *          <p>Returns the policy of a specified Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <p>If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity
     *       must have the <code>GetBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account in order to use this action.</p>
     *
     *          <p>Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket.
     *          If you don't have <code>s3-outposts:GetBucketPolicy</code> permissions or you're not using an identity that belongs to the bucket owner's
     *          account, Amazon S3 returns a <code>403 Access Denied</code> error.</p>
     *
     *          <important>
     *             <p>As a security precaution, the root user of the AWS account that owns a bucket can always use this action, even if the policy
     *          explicitly denies the root user the ability to perform this action.</p>
     *          </important>
     *
     *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p>
     *
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html#API_control_GetBucketPolicy_Examples">Examples</a> section.</p>
     *
     *          <p>The following actions are related to <code>GetBucketPolicy</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getBucketPolicy(args: GetBucketPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketPolicyCommandOutput>;
    getBucketPolicy(args: GetBucketPolicyCommandInput, cb: (err: any, data?: GetBucketPolicyCommandOutput) => void): void;
    getBucketPolicy(args: GetBucketPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBucketPolicyCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action gets an Amazon S3 on Outposts bucket's tags. To get an
     *          S3 bucket tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a> in the <i>Amazon S3 API Reference</i>.
     *       </p>
     *          </note>
     *          <p>Returns the tag set associated with the Outposts bucket. For more information, see
     *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <p>To use this action, you must have permission to perform the <code>GetBucketTagging</code> action.
     *          By default, the bucket owner has this permission and can grant this permission to others.</p>
     *
     *          <p>
     *             <code>GetBucketTagging</code> has the following special error:</p>
     *          <ul>
     *             <li>
     *                <p>Error code: <code>NoSuchTagSetError</code>
     *                </p>
     *                <ul>
     *                   <li>
     *                      <p>Description: There is no tag set associated with the bucket.</p>
     *                   </li>
     *                </ul>
     *             </li>
     *          </ul>
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html#API_control_GetBucketTagging_Examples">Examples</a> section.</p>
     *
     *          <p>The following actions are related to <code>GetBucketTagging</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getBucketTagging(args: GetBucketTaggingCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketTaggingCommandOutput>;
    getBucketTagging(args: GetBucketTaggingCommandInput, cb: (err: any, data?: GetBucketTaggingCommandOutput) => void): void;
    getBucketTagging(args: GetBucketTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBucketTaggingCommandOutput) => void): void;
    /**
     * <p>Returns the tags on an S3 Batch Operations job. To use this operation, you must have
     *          permission to perform the <code>s3:GetJobTagging</code> action. For more information, see
     *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling
     *             access and labeling jobs using tags</a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          <p></p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getJobTagging(args: GetJobTaggingCommandInput, options?: __HttpHandlerOptions): Promise<GetJobTaggingCommandOutput>;
    getJobTagging(args: GetJobTaggingCommandInput, cb: (err: any, data?: GetJobTaggingCommandOutput) => void): void;
    getJobTagging(args: GetJobTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobTaggingCommandOutput) => void): void;
    /**
     * <p>Retrieves the <code>PublicAccessBlock</code> configuration for an AWS account. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block
     *             public access</a>.</p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    getPublicAccessBlock(args: GetPublicAccessBlockCommandInput, options?: __HttpHandlerOptions): Promise<GetPublicAccessBlockCommandOutput>;
    getPublicAccessBlock(args: GetPublicAccessBlockCommandInput, cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void): void;
    getPublicAccessBlock(args: GetPublicAccessBlockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void): void;
    /**
     * <p>Gets the Amazon S3 Storage Lens configuration. For more information, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
     *             activity and usage with Amazon S3 Storage Lens </a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <p>To use this action,
     *          you must have permission to perform the <code>s3:GetStorageLensConfiguration</code> action. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          </note>
     */
    getStorageLensConfiguration(args: GetStorageLensConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetStorageLensConfigurationCommandOutput>;
    getStorageLensConfiguration(args: GetStorageLensConfigurationCommandInput, cb: (err: any, data?: GetStorageLensConfigurationCommandOutput) => void): void;
    getStorageLensConfiguration(args: GetStorageLensConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStorageLensConfigurationCommandOutput) => void): void;
    /**
     * <p>Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
     *             activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <p>To use this action,
     *          you must have permission to perform the <code>s3:GetStorageLensConfigurationTagging</code> action. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          </note>
     */
    getStorageLensConfigurationTagging(args: GetStorageLensConfigurationTaggingCommandInput, options?: __HttpHandlerOptions): Promise<GetStorageLensConfigurationTaggingCommandOutput>;
    getStorageLensConfigurationTagging(args: GetStorageLensConfigurationTaggingCommandInput, cb: (err: any, data?: GetStorageLensConfigurationTaggingCommandOutput) => void): void;
    getStorageLensConfigurationTagging(args: GetStorageLensConfigurationTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStorageLensConfigurationTaggingCommandOutput) => void): void;
    /**
     * <p>Returns a list of the access points currently associated with the specified bucket. You
     *          can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000
     *          access points (or the number specified in <code>maxResults</code>, whichever is less), the
     *          response will include a continuation token that you can use to list the additional access points.</p>
     *          <p></p>
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">Examples</a> section.</p>
     *          <p>The following actions are related to <code>ListAccessPoints</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    listAccessPoints(args: ListAccessPointsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccessPointsCommandOutput>;
    listAccessPoints(args: ListAccessPointsCommandInput, cb: (err: any, data?: ListAccessPointsCommandOutput) => void): void;
    listAccessPoints(args: ListAccessPointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccessPointsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the access points associated with the Object Lambda Access Point. You
     *          can retrieve up to 1000 access points per call. If there are more than 1,000
     *          access points (or the number specified in <code>maxResults</code>, whichever is less), the
     *          response will include a continuation token that you can use to list the additional access points.</p>
     *          <p>The following actions are related to <code>ListAccessPointsForObjectLambda</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    listAccessPointsForObjectLambda(args: ListAccessPointsForObjectLambdaCommandInput, options?: __HttpHandlerOptions): Promise<ListAccessPointsForObjectLambdaCommandOutput>;
    listAccessPointsForObjectLambda(args: ListAccessPointsForObjectLambdaCommandInput, cb: (err: any, data?: ListAccessPointsForObjectLambdaCommandOutput) => void): void;
    listAccessPointsForObjectLambda(args: ListAccessPointsForObjectLambdaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccessPointsForObjectLambdaCommandOutput) => void): void;
    /**
     * <p>Lists current S3 Batch Operations jobs and jobs that have ended within the last 30 days for
     *          the AWS account making the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <p>Related actions include:</p>
     *          <p></p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
    listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    listJobs(args: ListJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated
     *          sender of the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
     *          endpoint hostname prefix and <code>x-amz-outpost-id</code> in your request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html#API_control_ListRegionalBuckets_Examples">Examples</a> section.</p>
     */
    listRegionalBuckets(args: ListRegionalBucketsCommandInput, options?: __HttpHandlerOptions): Promise<ListRegionalBucketsCommandOutput>;
    listRegionalBuckets(args: ListRegionalBucketsCommandInput, cb: (err: any, data?: ListRegionalBucketsCommandOutput) => void): void;
    listRegionalBuckets(args: ListRegionalBucketsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRegionalBucketsCommandOutput) => void): void;
    /**
     * <p>Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
     *             activity and usage with Amazon S3 Storage Lens </a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <p>To use this action,
     *          you must have permission to perform the <code>s3:ListStorageLensConfigurations</code> action. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          </note>
     */
    listStorageLensConfigurations(args: ListStorageLensConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListStorageLensConfigurationsCommandOutput>;
    listStorageLensConfigurations(args: ListStorageLensConfigurationsCommandInput, cb: (err: any, data?: ListStorageLensConfigurationsCommandOutput) => void): void;
    listStorageLensConfigurations(args: ListStorageLensConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStorageLensConfigurationsCommandOutput) => void): void;
    /**
     * <p>Replaces configuration for an Object Lambda Access Point.</p>
     *          <p>The following actions are related to <code>PutAccessPointConfigurationForObjectLambda</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointConfigurationForObjectLambda.html">GetAccessPointConfigurationForObjectLambda</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    putAccessPointConfigurationForObjectLambda(args: PutAccessPointConfigurationForObjectLambdaCommandInput, options?: __HttpHandlerOptions): Promise<PutAccessPointConfigurationForObjectLambdaCommandOutput>;
    putAccessPointConfigurationForObjectLambda(args: PutAccessPointConfigurationForObjectLambdaCommandInput, cb: (err: any, data?: PutAccessPointConfigurationForObjectLambdaCommandOutput) => void): void;
    putAccessPointConfigurationForObjectLambda(args: PutAccessPointConfigurationForObjectLambdaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAccessPointConfigurationForObjectLambdaCommandOutput) => void): void;
    /**
     * <p>Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API
     *          replaces any existing policy associated with the specified access point.</p>
     *          <p></p>
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html#API_control_PutAccessPointPolicy_Examples">Examples</a> section.</p>
     *          <p>The following actions are related to <code>PutAccessPointPolicy</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    putAccessPointPolicy(args: PutAccessPointPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutAccessPointPolicyCommandOutput>;
    putAccessPointPolicy(args: PutAccessPointPolicyCommandInput, cb: (err: any, data?: PutAccessPointPolicyCommandOutput) => void): void;
    putAccessPointPolicy(args: PutAccessPointPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAccessPointPolicyCommandOutput) => void): void;
    /**
     * <p>Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html#olap-create-cli">Creating Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <p>The following actions are related to <code>PutAccessPointPolicyForObjectLambda</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    putAccessPointPolicyForObjectLambda(args: PutAccessPointPolicyForObjectLambdaCommandInput, options?: __HttpHandlerOptions): Promise<PutAccessPointPolicyForObjectLambdaCommandOutput>;
    putAccessPointPolicyForObjectLambda(args: PutAccessPointPolicyForObjectLambdaCommandInput, cb: (err: any, data?: PutAccessPointPolicyForObjectLambdaCommandOutput) => void): void;
    putAccessPointPolicyForObjectLambda(args: PutAccessPointPolicyForObjectLambdaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAccessPointPolicyForObjectLambdaCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a lifecycle configuration to an S3 bucket,
     *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> in the <i>Amazon S3 API Reference</i>.
     *       </p>
     *          </note>
     *          <p>Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing
     *          lifecycle configuration. Outposts buckets only support lifecycle configurations that delete/expire objects
     *          after a certain period of time and abort incomplete multipart uploads.</p>
     *          <p></p>
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html#API_control_PutBucketLifecycleConfiguration_Examples">Examples</a> section.</p>
     *          <p>The following actions are related to <code>PutBucketLifecycleConfiguration</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    putBucketLifecycleConfiguration(args: PutBucketLifecycleConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutBucketLifecycleConfigurationCommandOutput>;
    putBucketLifecycleConfiguration(args: PutBucketLifecycleConfigurationCommandInput, cb: (err: any, data?: PutBucketLifecycleConfigurationCommandOutput) => void): void;
    putBucketLifecycleConfiguration(args: PutBucketLifecycleConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutBucketLifecycleConfigurationCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket,
     *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html">PutBucketPolicy</a> in the <i>Amazon S3 API Reference</i>.
     *       </p>
     *          </note>
     *          <p>Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <p>If you are using an identity other than the root user of the AWS account that owns the
     *          Outposts bucket, the calling identity must have the <code>PutBucketPolicy</code>
     *          permissions on the specified Outposts bucket and belong to the bucket owner's account in
     *          order to use this action.</p>
     *
     *          <p>If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions,
     *          but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.</p>
     *
     *          <important>
     *             <p> As a security precaution, the root user of the AWS account that owns a bucket can always use this action, even if the policy
     *          explicitly denies the root user the ability to perform this action.
     *       </p>
     *          </important>
     *
     *
     *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p>
     *
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html#API_control_PutBucketPolicy_Examples">Examples</a> section.</p>
     *
     *          <p>The following actions are related to <code>PutBucketPolicy</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    putBucketPolicy(args: PutBucketPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutBucketPolicyCommandOutput>;
    putBucketPolicy(args: PutBucketPolicyCommandInput, cb: (err: any, data?: PutBucketPolicyCommandOutput) => void): void;
    putBucketPolicy(args: PutBucketPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutBucketPolicyCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see
     *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p>
     *          </note>
     *          <p>Sets the tags for an S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <p>Use tags to organize your AWS bill to reflect your own cost structure. To do this, sign up to get your
     *          AWS account bill with tag key values included. Then, to see the cost of combined resources, organize your
     *          billing information according to resources with the same tag key values. For example, you can tag several
     *          resources with a specific application name, and then organize your billing information to see the total cost
     *          of that application across several services. For more information, see
     *          <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Cost
     *             allocation and tagging</a>.</p>
     *
     *          <note>
     *             <p>Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites
     *          the old value. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CostAllocTagging.html">
     *             Using cost allocation in Amazon S3 bucket tags</a>.</p>
     *          </note>
     *          <p>To use this action, you must have permissions to perform the
     *             <code>s3-outposts:PutBucketTagging</code> action. The Outposts bucket owner has this
     *          permission by default and can grant this permission to others. For more information about
     *          permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources"> Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing access permissions to your Amazon S3
     *             resources</a>.</p>
     *
     *          <p>
     *             <code>PutBucketTagging</code> has the following special errors:</p>
     *          <ul>
     *             <li>
     *                <p>Error code: <code>InvalidTagError</code>
     *                </p>
     *                <ul>
     *                   <li>
     *                      <p>Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation.
     *                   For information about tag restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">
     *                      User-Defined Tag Restrictions</a>  and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tag-restrictions.html">
     *                         AWS-Generated Cost Allocation Tag Restrictions</a>.</p>
     *                   </li>
     *                </ul>
     *             </li>
     *             <li>
     *                <p>Error code: <code>MalformedXMLError</code>
     *                </p>
     *                <ul>
     *                   <li>
     *                      <p>Description: The XML provided does not match the schema.</p>
     *                   </li>
     *                </ul>
     *             </li>
     *             <li>
     *                <p>Error code: <code>OperationAbortedError </code>
     *                </p>
     *                <ul>
     *                   <li>
     *                      <p>Description: A conflicting conditional action is currently in progress against this
     *                      resource. Try again.</p>
     *                   </li>
     *                </ul>
     *             </li>
     *             <li>
     *                <p>Error code: <code>InternalError</code>
     *                </p>
     *                <ul>
     *                   <li>
     *                      <p>Description: The service was unable to apply the provided tag to the bucket.</p>
     *                   </li>
     *                </ul>
     *             </li>
     *          </ul>
     *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html#API_control_PutBucketTagging_Examples">Examples</a> section.</p>
     *
     *          <p>The following actions are related to <code>PutBucketTagging</code>:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    putBucketTagging(args: PutBucketTaggingCommandInput, options?: __HttpHandlerOptions): Promise<PutBucketTaggingCommandOutput>;
    putBucketTagging(args: PutBucketTaggingCommandInput, cb: (err: any, data?: PutBucketTaggingCommandOutput) => void): void;
    putBucketTagging(args: PutBucketTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutBucketTaggingCommandOutput) => void): void;
    /**
     * <p>Sets the supplied tag-set on an S3 Batch Operations job.</p>
     *          <p>A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending
     *          a PUT request against the tagging subresource that is associated with the job. To modify
     *          the existing tag set, you can either replace the existing tag set entirely, or make changes
     *          within the existing tag set by retrieving the existing tag set using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>, modify that tag set, and use this action to replace the
     *          tag set with the one you modified. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and
     *             labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>. </p>
     *          <p></p>
     *          <note>
     *             <ul>
     *                <li>
     *                   <p>If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the
     *                   Batch Operations job. If you use this method, you are charged for a Tier 1 Request
     *                   (PUT). For more information, see <a href="http://aws.amazon.com/s3/pricing/">Amazon S3
     *                      pricing</a>.</p>
     *                </li>
     *                <li>
     *                   <p>For deleting existing tags for your Batch Operations job, a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
     *                   request is preferred because it achieves the same result without incurring
     *                   charges.</p>
     *                </li>
     *                <li>
     *                   <p>A few things to consider about using tags:</p>
     *                   <ul>
     *                      <li>
     *                         <p>Amazon S3 limits the maximum number of tags to 50 tags per job.</p>
     *                      </li>
     *                      <li>
     *                         <p>You can associate up to 50 tags with a job as long as they have unique tag keys.</p>
     *                      </li>
     *                      <li>
     *                         <p>A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.</p>
     *                      </li>
     *                      <li>
     *                         <p>The key and values are case sensitive.</p>
     *                      </li>
     *                      <li>
     *                         <p>For tagging-related restrictions related to characters and encodings, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and
     *                            Cost Management User Guide</i>.</p>
     *                      </li>
     *                   </ul>
     *                </li>
     *             </ul>
     *          </note>
     *          <p></p>
     *          <p>To use this action, you must have permission to perform the <code>s3:PutJobTagging</code> action.</p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreatJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    putJobTagging(args: PutJobTaggingCommandInput, options?: __HttpHandlerOptions): Promise<PutJobTaggingCommandOutput>;
    putJobTagging(args: PutJobTaggingCommandInput, cb: (err: any, data?: PutJobTaggingCommandOutput) => void): void;
    putJobTagging(args: PutJobTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutJobTaggingCommandOutput) => void): void;
    /**
     * <p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an AWS account. For
     *          more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block
     *             public access</a>.</p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    putPublicAccessBlock(args: PutPublicAccessBlockCommandInput, options?: __HttpHandlerOptions): Promise<PutPublicAccessBlockCommandOutput>;
    putPublicAccessBlock(args: PutPublicAccessBlockCommandInput, cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void): void;
    putPublicAccessBlock(args: PutPublicAccessBlockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void): void;
    /**
     * <p>Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Working with
     *             Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <p>To use this action,
     *          you must have permission to perform the <code>s3:PutStorageLensConfiguration</code> action. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          </note>
     */
    putStorageLensConfiguration(args: PutStorageLensConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutStorageLensConfigurationCommandOutput>;
    putStorageLensConfiguration(args: PutStorageLensConfigurationCommandInput, cb: (err: any, data?: PutStorageLensConfigurationCommandOutput) => void): void;
    putStorageLensConfiguration(args: PutStorageLensConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutStorageLensConfigurationCommandOutput) => void): void;
    /**
     * <p>Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see
     *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
     *             activity and usage with Amazon S3 Storage Lens </a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          <note>
     *             <p>To use this action,
     *          you must have permission to perform the <code>s3:PutStorageLensConfigurationTagging</code> action. For more
     *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
     *          <i>Amazon S3 User Guide</i>.</p>
     *          </note>
     */
    putStorageLensConfigurationTagging(args: PutStorageLensConfigurationTaggingCommandInput, options?: __HttpHandlerOptions): Promise<PutStorageLensConfigurationTaggingCommandOutput>;
    putStorageLensConfigurationTagging(args: PutStorageLensConfigurationTaggingCommandInput, cb: (err: any, data?: PutStorageLensConfigurationTaggingCommandOutput) => void): void;
    putStorageLensConfigurationTagging(args: PutStorageLensConfigurationTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutStorageLensConfigurationTaggingCommandOutput) => void): void;
    /**
     * <p>Updates an existing S3 Batch Operations job's priority. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <p></p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    updateJobPriority(args: UpdateJobPriorityCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobPriorityCommandOutput>;
    updateJobPriority(args: UpdateJobPriorityCommandInput, cb: (err: any, data?: UpdateJobPriorityCommandOutput) => void): void;
    updateJobPriority(args: UpdateJobPriorityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateJobPriorityCommandOutput) => void): void;
    /**
     * <p>Updates the status for the specified job. Use this action to confirm that you want to
     *          run a job or to cancel an existing job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in the
     *             <i>Amazon S3 User Guide</i>.</p>
     *          <p></p>
     *          <p>Related actions include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    updateJobStatus(args: UpdateJobStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobStatusCommandOutput>;
    updateJobStatus(args: UpdateJobStatusCommandInput, cb: (err: any, data?: UpdateJobStatusCommandOutput) => void): void;
    updateJobStatus(args: UpdateJobStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateJobStatusCommandOutput) => void): void;
}
