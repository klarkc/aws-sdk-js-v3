import { EMRContainersClient } from "./EMRContainersClient";
import { CancelJobRunCommandInput, CancelJobRunCommandOutput } from "./commands/CancelJobRunCommand";
import { CreateManagedEndpointCommandInput, CreateManagedEndpointCommandOutput } from "./commands/CreateManagedEndpointCommand";
import { CreateVirtualClusterCommandInput, CreateVirtualClusterCommandOutput } from "./commands/CreateVirtualClusterCommand";
import { DeleteManagedEndpointCommandInput, DeleteManagedEndpointCommandOutput } from "./commands/DeleteManagedEndpointCommand";
import { DeleteVirtualClusterCommandInput, DeleteVirtualClusterCommandOutput } from "./commands/DeleteVirtualClusterCommand";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "./commands/DescribeJobRunCommand";
import { DescribeManagedEndpointCommandInput, DescribeManagedEndpointCommandOutput } from "./commands/DescribeManagedEndpointCommand";
import { DescribeVirtualClusterCommandInput, DescribeVirtualClusterCommandOutput } from "./commands/DescribeVirtualClusterCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import { ListManagedEndpointsCommandInput, ListManagedEndpointsCommandOutput } from "./commands/ListManagedEndpointsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListVirtualClustersCommandInput, ListVirtualClustersCommandOutput } from "./commands/ListVirtualClustersCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run
 *          open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With
 *          this deployment option, you can focus on running analytics workloads while Amazon EMR on
 *          EKS builds, configures, and manages containers for open-source applications. For more
 *          information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is Amazon EMR on EKS</a>.</p>
 *          <p>
 *             <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The
 *             <code>emr-containers</code> prefix is used in the following scenarios: </p>
 *          <ul>
 *             <li>
 *                <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws
 *                   emr-containers start-job-run</code>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, <code>"Action": [
 *             "emr-containers:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example, <code>emr-containers.us-east-2.amazonaws.com</code>. For more
 *             information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKS Service Endpoints</a>.</p>
 *             </li>
 *          </ul>
 */
export declare class EMRContainers extends EMRContainersClient {
    /**
     * <p>Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
     */
    cancelJobRun(args: CancelJobRunCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobRunCommandOutput>;
    cancelJobRun(args: CancelJobRunCommandInput, cb: (err: any, data?: CancelJobRunCommandOutput) => void): void;
    cancelJobRun(args: CancelJobRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelJobRunCommandOutput) => void): void;
    /**
     * <p>Creates a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
     */
    createManagedEndpoint(args: CreateManagedEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateManagedEndpointCommandOutput>;
    createManagedEndpoint(args: CreateManagedEndpointCommandInput, cb: (err: any, data?: CreateManagedEndpointCommandOutput) => void): void;
    createManagedEndpoint(args: CreateManagedEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateManagedEndpointCommandOutput) => void): void;
    /**
     * <p>Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
     */
    createVirtualCluster(args: CreateVirtualClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateVirtualClusterCommandOutput>;
    createVirtualCluster(args: CreateVirtualClusterCommandInput, cb: (err: any, data?: CreateVirtualClusterCommandOutput) => void): void;
    createVirtualCluster(args: CreateVirtualClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVirtualClusterCommandOutput) => void): void;
    /**
     * <p>Deletes a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
     */
    deleteManagedEndpoint(args: DeleteManagedEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteManagedEndpointCommandOutput>;
    deleteManagedEndpoint(args: DeleteManagedEndpointCommandInput, cb: (err: any, data?: DeleteManagedEndpointCommandOutput) => void): void;
    deleteManagedEndpoint(args: DeleteManagedEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteManagedEndpointCommandOutput) => void): void;
    /**
     * <p>Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
     */
    deleteVirtualCluster(args: DeleteVirtualClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVirtualClusterCommandOutput>;
    deleteVirtualCluster(args: DeleteVirtualClusterCommandInput, cb: (err: any, data?: DeleteVirtualClusterCommandOutput) => void): void;
    deleteVirtualCluster(args: DeleteVirtualClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVirtualClusterCommandOutput) => void): void;
    /**
     * <p>Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
     */
    describeJobRun(args: DescribeJobRunCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobRunCommandOutput>;
    describeJobRun(args: DescribeJobRunCommandInput, cb: (err: any, data?: DescribeJobRunCommandOutput) => void): void;
    describeJobRun(args: DescribeJobRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobRunCommandOutput) => void): void;
    /**
     * <p>Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
     */
    describeManagedEndpoint(args: DescribeManagedEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DescribeManagedEndpointCommandOutput>;
    describeManagedEndpoint(args: DescribeManagedEndpointCommandInput, cb: (err: any, data?: DescribeManagedEndpointCommandOutput) => void): void;
    describeManagedEndpoint(args: DescribeManagedEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeManagedEndpointCommandOutput) => void): void;
    /**
     * <p>Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
     */
    describeVirtualCluster(args: DescribeVirtualClusterCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVirtualClusterCommandOutput>;
    describeVirtualCluster(args: DescribeVirtualClusterCommandInput, cb: (err: any, data?: DescribeVirtualClusterCommandOutput) => void): void;
    describeVirtualCluster(args: DescribeVirtualClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeVirtualClusterCommandOutput) => void): void;
    /**
     * <p>Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
     */
    listJobRuns(args: ListJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobRunsCommandOutput>;
    listJobRuns(args: ListJobRunsCommandInput, cb: (err: any, data?: ListJobRunsCommandOutput) => void): void;
    listJobRuns(args: ListJobRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobRunsCommandOutput) => void): void;
    /**
     * <p>Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
     */
    listManagedEndpoints(args: ListManagedEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListManagedEndpointsCommandOutput>;
    listManagedEndpoints(args: ListManagedEndpointsCommandInput, cb: (err: any, data?: ListManagedEndpointsCommandOutput) => void): void;
    listManagedEndpoints(args: ListManagedEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListManagedEndpointsCommandOutput) => void): void;
    /**
     * <p>Lists the tags assigned to the resources.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
     */
    listVirtualClusters(args: ListVirtualClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListVirtualClustersCommandOutput>;
    listVirtualClusters(args: ListVirtualClustersCommandInput, cb: (err: any, data?: ListVirtualClustersCommandOutput) => void): void;
    listVirtualClusters(args: ListVirtualClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVirtualClustersCommandOutput) => void): void;
    /**
     * <p>Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
     */
    startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
    startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
    startJobRun(args: StartJobRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
    /**
     * <p>Assigns tags to resources. A tag is a label that you assign to an AWS resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your AWS resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from resources.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
