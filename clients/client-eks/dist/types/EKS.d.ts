import { EKSClient } from "./EKSClient";
import { AssociateEncryptionConfigCommandInput, AssociateEncryptionConfigCommandOutput } from "./commands/AssociateEncryptionConfigCommand";
import { AssociateIdentityProviderConfigCommandInput, AssociateIdentityProviderConfigCommandOutput } from "./commands/AssociateIdentityProviderConfigCommand";
import { CreateAddonCommandInput, CreateAddonCommandOutput } from "./commands/CreateAddonCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import { CreateFargateProfileCommandInput, CreateFargateProfileCommandOutput } from "./commands/CreateFargateProfileCommand";
import { CreateNodegroupCommandInput, CreateNodegroupCommandOutput } from "./commands/CreateNodegroupCommand";
import { DeleteAddonCommandInput, DeleteAddonCommandOutput } from "./commands/DeleteAddonCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import { DeleteFargateProfileCommandInput, DeleteFargateProfileCommandOutput } from "./commands/DeleteFargateProfileCommand";
import { DeleteNodegroupCommandInput, DeleteNodegroupCommandOutput } from "./commands/DeleteNodegroupCommand";
import { DescribeAddonCommandInput, DescribeAddonCommandOutput } from "./commands/DescribeAddonCommand";
import { DescribeAddonVersionsCommandInput, DescribeAddonVersionsCommandOutput } from "./commands/DescribeAddonVersionsCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import { DescribeFargateProfileCommandInput, DescribeFargateProfileCommandOutput } from "./commands/DescribeFargateProfileCommand";
import { DescribeIdentityProviderConfigCommandInput, DescribeIdentityProviderConfigCommandOutput } from "./commands/DescribeIdentityProviderConfigCommand";
import { DescribeNodegroupCommandInput, DescribeNodegroupCommandOutput } from "./commands/DescribeNodegroupCommand";
import { DescribeUpdateCommandInput, DescribeUpdateCommandOutput } from "./commands/DescribeUpdateCommand";
import { DisassociateIdentityProviderConfigCommandInput, DisassociateIdentityProviderConfigCommandOutput } from "./commands/DisassociateIdentityProviderConfigCommand";
import { ListAddonsCommandInput, ListAddonsCommandOutput } from "./commands/ListAddonsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import { ListFargateProfilesCommandInput, ListFargateProfilesCommandOutput } from "./commands/ListFargateProfilesCommand";
import { ListIdentityProviderConfigsCommandInput, ListIdentityProviderConfigsCommandOutput } from "./commands/ListIdentityProviderConfigsCommand";
import { ListNodegroupsCommandInput, ListNodegroupsCommandOutput } from "./commands/ListNodegroupsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListUpdatesCommandInput, ListUpdatesCommandOutput } from "./commands/ListUpdatesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAddonCommandInput, UpdateAddonCommandOutput } from "./commands/UpdateAddonCommand";
import { UpdateClusterConfigCommandInput, UpdateClusterConfigCommandOutput } from "./commands/UpdateClusterConfigCommand";
import { UpdateClusterVersionCommandInput, UpdateClusterVersionCommandOutput } from "./commands/UpdateClusterVersionCommand";
import { UpdateNodegroupConfigCommandInput, UpdateNodegroupConfigCommandOutput } from "./commands/UpdateNodegroupConfigCommand";
import { UpdateNodegroupVersionCommandInput, UpdateNodegroupVersionCommandOutput } from "./commands/UpdateNodegroupVersionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on
 *             AWS without needing to stand up or maintain your own Kubernetes control plane.
 *             Kubernetes is an open-source system for automating the deployment, scaling, and
 *             management of containerized applications. </p>
 *         <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use
 *             all the existing plugins and tooling from the Kubernetes community. Applications running
 *             on Amazon EKS are fully compatible with applications running on any standard Kubernetes
 *             environment, whether running in on-premises data centers or public clouds. This means
 *             that you can easily migrate any standard Kubernetes application to Amazon EKS without any
 *             code modification required.</p>
 */
export declare class EKS extends EKSClient {
    /**
     * <p>Associate encryption configuration to an existing cluster.</p>
     *         <p>You can use this API to enable encryption on existing clusters which do not have
     *             encryption already enabled. This allows you to implement a defense-in-depth security
     *             strategy without migrating applications to new EKS clusters.</p>
     */
    associateEncryptionConfig(args: AssociateEncryptionConfigCommandInput, options?: __HttpHandlerOptions): Promise<AssociateEncryptionConfigCommandOutput>;
    associateEncryptionConfig(args: AssociateEncryptionConfigCommandInput, cb: (err: any, data?: AssociateEncryptionConfigCommandOutput) => void): void;
    associateEncryptionConfig(args: AssociateEncryptionConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateEncryptionConfigCommandOutput) => void): void;
    /**
     * <p>Associate an identity provider configuration to a cluster.</p>
     *         <p>If you want to authenticate identities using an identity provider, you can create an
     *             identity provider configuration and associate it to your cluster. After configuring
     *             authentication to your cluster you can create Kubernetes <code>roles</code> and
     *                 <code>clusterroles</code> to assign permissions to the roles, and then bind the
     *             roles to the identities using Kubernetes <code>rolebindings</code> and
     *                 <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC
     *                 Authorization</a> in the Kubernetes documentation.</p>
     */
    associateIdentityProviderConfig(args: AssociateIdentityProviderConfigCommandInput, options?: __HttpHandlerOptions): Promise<AssociateIdentityProviderConfigCommandOutput>;
    associateIdentityProviderConfig(args: AssociateIdentityProviderConfigCommandInput, cb: (err: any, data?: AssociateIdentityProviderConfigCommandOutput) => void): void;
    associateIdentityProviderConfig(args: AssociateIdentityProviderConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateIdentityProviderConfigCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon EKS add-on.</p>
     *         <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common
     *             operational software for Amazon EKS clusters. Amazon EKS add-ons can only be used with Amazon EKS
     *             clusters running version 1.18 with platform version <code>eks.3</code> or later because
     *             add-ons rely on the Server-side Apply Kubernetes feature, which is only available in
     *             Kubernetes 1.18 and later.</p>
     */
    createAddon(args: CreateAddonCommandInput, options?: __HttpHandlerOptions): Promise<CreateAddonCommandOutput>;
    createAddon(args: CreateAddonCommandInput, cb: (err: any, data?: CreateAddonCommandOutput) => void): void;
    createAddon(args: CreateAddonCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAddonCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon EKS control plane. </p>
     *         <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes
     *             software, such as <code>etcd</code> and the API server. The control plane runs in an
     *             account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server
     *             endpoint. Each Amazon EKS cluster control plane is single-tenant and unique and runs on its
     *             own set of Amazon EC2 instances.</p>
     *         <p>The cluster control plane is provisioned across multiple Availability Zones and
     *             fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC
     *             subnets to provide connectivity from the control plane instances to the nodes (for
     *             example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code>
     *             data flows).</p>
     *         <p>Amazon EKS nodes run in your AWS account and connect to your cluster's control plane via
     *             the Kubernetes API server endpoint and a certificate file that is created for your
     *             cluster.</p>
     *
     *         <p>Cluster creation typically takes several minutes. After you create an Amazon EKS cluster,
     *             you must configure your Kubernetes tooling to communicate with the API server and launch
     *             nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster
     *                 Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>
     */
    createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
    createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    createCluster(args: CreateClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    /**
     * <p>Creates an AWS Fargate profile for your Amazon EKS cluster. You must have at least one Fargate
     *             profile in a cluster to be able to run pods on Fargate.</p>
     *         <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify
     *             which pods run on which Fargate profile. This declaration is done through the profile’s
     *             selectors. Each profile can have up to five selectors that contain a namespace and
     *             labels. A namespace is required for every selector. The label field consists of multiple
     *             optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a
     *             to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is
     *             run on Fargate.</p>
     *         <p>When you create a Fargate profile, you must specify a pod execution role to use with the
     *             pods that are scheduled with the profile. This role is added to the cluster's Kubernetes
     *                 <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access
     *                 Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is
     *             running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can
     *             appear in your cluster as a node. The pod execution role also provides IAM permissions
     *             to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more
     *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p>
     *         <p>Fargate profiles are immutable. However, you can create a new updated profile to replace
     *             an existing profile and then delete the original after the updated profile has finished
     *             creating.</p>
     *         <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must
     *             wait for that Fargate profile to finish deleting before you can create any other profiles
     *             in that cluster.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">AWS Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>
     */
    createFargateProfile(args: CreateFargateProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateFargateProfileCommandOutput>;
    createFargateProfile(args: CreateFargateProfileCommandInput, cb: (err: any, data?: CreateFargateProfileCommandOutput) => void): void;
    createFargateProfile(args: CreateFargateProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFargateProfileCommandOutput) => void): void;
    /**
     * <p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group
     *             for your cluster that is equal to the current Kubernetes version for the cluster. All
     *             node groups are created with the latest AMI release version for the respective minor
     *             Kubernetes version of the cluster, unless you deploy a custom AMI using a launch
     *             template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch
     *                 template support</a>.</p>
     *         <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that
     *             are managed by AWS for an Amazon EKS cluster. Each node group uses a version of the Amazon EKS
     *             optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed
     *                 Node Groups</a> in the <i>Amazon EKS User Guide</i>. </p>
     */
    createNodegroup(args: CreateNodegroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateNodegroupCommandOutput>;
    createNodegroup(args: CreateNodegroupCommandInput, cb: (err: any, data?: CreateNodegroupCommandOutput) => void): void;
    createNodegroup(args: CreateNodegroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNodegroupCommandOutput) => void): void;
    /**
     * <p>Delete an Amazon EKS add-on.</p>
     *         <p>When you remove the add-on, it will also be deleted from the cluster. You can always
     *             manually start an add-on on the cluster using the Kubernetes API.</p>
     */
    deleteAddon(args: DeleteAddonCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAddonCommandOutput>;
    deleteAddon(args: DeleteAddonCommandInput, cb: (err: any, data?: DeleteAddonCommandOutput) => void): void;
    deleteAddon(args: DeleteAddonCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAddonCommandOutput) => void): void;
    /**
     * <p>Deletes the Amazon EKS cluster control plane.</p>
     *         <p>If you have active services in your cluster that are associated with a load balancer,
     *             you must delete those services before deleting the cluster so that the load balancers
     *             are deleted properly. Otherwise, you can have orphaned resources in your VPC that
     *             prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a
     *                 Cluster</a> in the <i>Amazon EKS User Guide</i>.</p>
     *         <p>If you have managed node groups or Fargate profiles attached to the cluster, you must
     *             delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>
     */
    deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
    deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    deleteCluster(args: DeleteClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    /**
     * <p>Deletes an AWS Fargate profile.</p>
     *         <p>When you delete a Fargate profile, any pods running on Fargate that were created with the
     *             profile are deleted. If those pods match another Fargate profile, then they are scheduled
     *             on Fargate with that profile. If they no longer match any Fargate profiles, then they are not
     *             scheduled on Fargate and they may remain in a pending state.</p>
     *         <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a
     *             time. You must wait for a Fargate profile to finish deleting before you can delete any
     *             other profiles in that cluster.</p>
     */
    deleteFargateProfile(args: DeleteFargateProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFargateProfileCommandOutput>;
    deleteFargateProfile(args: DeleteFargateProfileCommandInput, cb: (err: any, data?: DeleteFargateProfileCommandOutput) => void): void;
    deleteFargateProfile(args: DeleteFargateProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFargateProfileCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon EKS node group for a cluster.</p>
     */
    deleteNodegroup(args: DeleteNodegroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNodegroupCommandOutput>;
    deleteNodegroup(args: DeleteNodegroupCommandInput, cb: (err: any, data?: DeleteNodegroupCommandOutput) => void): void;
    deleteNodegroup(args: DeleteNodegroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNodegroupCommandOutput) => void): void;
    /**
     * <p>Describes an Amazon EKS add-on.</p>
     */
    describeAddon(args: DescribeAddonCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAddonCommandOutput>;
    describeAddon(args: DescribeAddonCommandInput, cb: (err: any, data?: DescribeAddonCommandOutput) => void): void;
    describeAddon(args: DescribeAddonCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAddonCommandOutput) => void): void;
    /**
     * <p>Describes the Kubernetes versions that the add-on can be used with.</p>
     */
    describeAddonVersions(args: DescribeAddonVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAddonVersionsCommandOutput>;
    describeAddonVersions(args: DescribeAddonVersionsCommandInput, cb: (err: any, data?: DescribeAddonVersionsCommandOutput) => void): void;
    describeAddonVersions(args: DescribeAddonVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAddonVersionsCommandOutput) => void): void;
    /**
     * <p>Returns descriptive information about an Amazon EKS cluster.</p>
     *         <p>The API server endpoint and certificate authority data returned by this operation are
     *             required for <code>kubelet</code> and <code>kubectl</code> to communicate with your
     *             Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a
     *                 kubeconfig for Amazon EKS</a>.</p>
     *         <note>
     *             <p>The API server endpoint and certificate authority data aren't available until the
     *                 cluster reaches the <code>ACTIVE</code> state.</p>
     *         </note>
     */
    describeCluster(args: DescribeClusterCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterCommandOutput>;
    describeCluster(args: DescribeClusterCommandInput, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
    describeCluster(args: DescribeClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
    /**
     * <p>Returns descriptive information about an AWS Fargate profile.</p>
     */
    describeFargateProfile(args: DescribeFargateProfileCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFargateProfileCommandOutput>;
    describeFargateProfile(args: DescribeFargateProfileCommandInput, cb: (err: any, data?: DescribeFargateProfileCommandOutput) => void): void;
    describeFargateProfile(args: DescribeFargateProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFargateProfileCommandOutput) => void): void;
    /**
     * <p>Returns descriptive information about an identity provider configuration.</p>
     */
    describeIdentityProviderConfig(args: DescribeIdentityProviderConfigCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIdentityProviderConfigCommandOutput>;
    describeIdentityProviderConfig(args: DescribeIdentityProviderConfigCommandInput, cb: (err: any, data?: DescribeIdentityProviderConfigCommandOutput) => void): void;
    describeIdentityProviderConfig(args: DescribeIdentityProviderConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIdentityProviderConfigCommandOutput) => void): void;
    /**
     * <p>Returns descriptive information about an Amazon EKS node group.</p>
     */
    describeNodegroup(args: DescribeNodegroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNodegroupCommandOutput>;
    describeNodegroup(args: DescribeNodegroupCommandInput, cb: (err: any, data?: DescribeNodegroupCommandOutput) => void): void;
    describeNodegroup(args: DescribeNodegroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNodegroupCommandOutput) => void): void;
    /**
     * <p>Returns descriptive information about an update against your Amazon EKS cluster or
     *             associated managed node group.</p>
     *         <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an
     *             update fails, the status is <code>Failed</code>, and an error detail explains the reason
     *             for the failure.</p>
     */
    describeUpdate(args: DescribeUpdateCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUpdateCommandOutput>;
    describeUpdate(args: DescribeUpdateCommandInput, cb: (err: any, data?: DescribeUpdateCommandOutput) => void): void;
    describeUpdate(args: DescribeUpdateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUpdateCommandOutput) => void): void;
    /**
     * <p>Disassociates an identity provider configuration from a cluster. If you disassociate
     *             an identity provider from your cluster, users included in the provider can no longer
     *             access the cluster. However, you can still access the cluster with AWS IAM
     *             users.</p>
     */
    disassociateIdentityProviderConfig(args: DisassociateIdentityProviderConfigCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateIdentityProviderConfigCommandOutput>;
    disassociateIdentityProviderConfig(args: DisassociateIdentityProviderConfigCommandInput, cb: (err: any, data?: DisassociateIdentityProviderConfigCommandOutput) => void): void;
    disassociateIdentityProviderConfig(args: DisassociateIdentityProviderConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateIdentityProviderConfigCommandOutput) => void): void;
    /**
     * <p>Lists the available add-ons.</p>
     */
    listAddons(args: ListAddonsCommandInput, options?: __HttpHandlerOptions): Promise<ListAddonsCommandOutput>;
    listAddons(args: ListAddonsCommandInput, cb: (err: any, data?: ListAddonsCommandOutput) => void): void;
    listAddons(args: ListAddonsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAddonsCommandOutput) => void): void;
    /**
     * <p>Lists the Amazon EKS clusters in your AWS account in the specified Region.</p>
     */
    listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
    listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
    listClusters(args: ListClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
    /**
     * <p>Lists the AWS Fargate profiles associated with the specified cluster in your AWS
     *             account in the specified Region.</p>
     */
    listFargateProfiles(args: ListFargateProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListFargateProfilesCommandOutput>;
    listFargateProfiles(args: ListFargateProfilesCommandInput, cb: (err: any, data?: ListFargateProfilesCommandOutput) => void): void;
    listFargateProfiles(args: ListFargateProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFargateProfilesCommandOutput) => void): void;
    /**
     * <p>A list of identity provider configurations.</p>
     */
    listIdentityProviderConfigs(args: ListIdentityProviderConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListIdentityProviderConfigsCommandOutput>;
    listIdentityProviderConfigs(args: ListIdentityProviderConfigsCommandInput, cb: (err: any, data?: ListIdentityProviderConfigsCommandOutput) => void): void;
    listIdentityProviderConfigs(args: ListIdentityProviderConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIdentityProviderConfigsCommandOutput) => void): void;
    /**
     * <p>Lists the Amazon EKS managed node groups associated with the specified cluster in your
     *             AWS account in the specified Region. Self-managed node groups are not listed.</p>
     */
    listNodegroups(args: ListNodegroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListNodegroupsCommandOutput>;
    listNodegroups(args: ListNodegroupsCommandInput, cb: (err: any, data?: ListNodegroupsCommandOutput) => void): void;
    listNodegroups(args: ListNodegroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNodegroupsCommandOutput) => void): void;
    /**
     * <p>List the tags for an Amazon EKS resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists the updates associated with an Amazon EKS cluster or managed node group in your AWS
     *             account, in the specified Region.</p>
     */
    listUpdates(args: ListUpdatesCommandInput, options?: __HttpHandlerOptions): Promise<ListUpdatesCommandOutput>;
    listUpdates(args: ListUpdatesCommandInput, cb: (err: any, data?: ListUpdatesCommandOutput) => void): void;
    listUpdates(args: ListUpdatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUpdatesCommandOutput) => void): void;
    /**
     * <p>Associates the specified tags to a resource with the specified
     *                 <code>resourceArn</code>. If existing tags on a resource are not specified in the
     *             request parameters, they are not changed. When a resource is deleted, the tags
     *             associated with that resource are deleted as well. Tags that you create for Amazon EKS
     *             resources do not propagate to any other resources associated with the cluster. For
     *             example, if you tag a cluster with this operation, that tag does not automatically
     *             propagate to the subnets and nodes associated with the cluster.</p>
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
     * <p>Updates an Amazon EKS add-on.</p>
     */
    updateAddon(args: UpdateAddonCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAddonCommandOutput>;
    updateAddon(args: UpdateAddonCommandInput, cb: (err: any, data?: UpdateAddonCommandOutput) => void): void;
    updateAddon(args: UpdateAddonCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAddonCommandOutput) => void): void;
    /**
     * <p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the
     *             update. The response output includes an update ID that you can use to track the status
     *             of your cluster update with the <a>DescribeUpdate</a> API operation.</p>
     *         <p>You can use this API operation to enable or disable exporting the Kubernetes control
     *             plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't
     *             exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS
     *                 Cluster Control Plane Logs</a> in the
     *             <i>
     *                <i>Amazon EKS User Guide</i>
     *             </i>.</p>
     *         <note>
     *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported
     *                 control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
     *         </note>
     *         <p>You can also use this API operation to enable or disable public and private access to
     *             your cluster's Kubernetes API server endpoint. By default, public access is enabled, and
     *             private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster
     *                 Endpoint Access Control</a> in the <i>
     *                <i>Amazon EKS User Guide</i>
     *             </i>. </p>
     *         <important>
     *             <p>You can't update the subnets or security group IDs for an existing cluster.</p>
     *         </important>
     *         <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
     *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
     *             eventually consistent). When the update is complete (either <code>Failed</code> or
     *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
     */
    updateClusterConfig(args: UpdateClusterConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterConfigCommandOutput>;
    updateClusterConfig(args: UpdateClusterConfigCommandInput, cb: (err: any, data?: UpdateClusterConfigCommandOutput) => void): void;
    updateClusterConfig(args: UpdateClusterConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateClusterConfigCommandOutput) => void): void;
    /**
     * <p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues
     *             to function during the update. The response output includes an update ID that you can
     *             use to track the status of your cluster update with the <a>DescribeUpdate</a>
     *             API operation.</p>
     *         <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
     *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
     *             eventually consistent). When the update is complete (either <code>Failed</code> or
     *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
     *         <p>If your cluster has managed node groups attached to it, all of your node groups’
     *             Kubernetes versions must match the cluster’s Kubernetes version in order to update the
     *             cluster to a new Kubernetes version.</p>
     */
    updateClusterVersion(args: UpdateClusterVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterVersionCommandOutput>;
    updateClusterVersion(args: UpdateClusterVersionCommandInput, cb: (err: any, data?: UpdateClusterVersionCommandOutput) => void): void;
    updateClusterVersion(args: UpdateClusterVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateClusterVersionCommandOutput) => void): void;
    /**
     * <p>Updates an Amazon EKS managed node group configuration. Your node group continues to
     *             function during the update. The response output includes an update ID that you can use
     *             to track the status of your node group update with the <a>DescribeUpdate</a>
     *             API operation. Currently you can update the Kubernetes labels for a node group or the
     *             scaling configuration.</p>
     */
    updateNodegroupConfig(args: UpdateNodegroupConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNodegroupConfigCommandOutput>;
    updateNodegroupConfig(args: UpdateNodegroupConfigCommandInput, cb: (err: any, data?: UpdateNodegroupConfigCommandOutput) => void): void;
    updateNodegroupConfig(args: UpdateNodegroupConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNodegroupConfigCommandOutput) => void): void;
    /**
     * <p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p>
     *         <p>You can update a node group using a launch template only if the node group was
     *             originally deployed with a launch template. If you need to update a custom AMI in a node
     *             group that was deployed with a launch template, then update your custom AMI, specify the
     *             new ID in a new version of the launch template, and then update the node group to the
     *             new version of the launch template.</p>
     *         <p>If you update without a launch template, then you can update to the latest available
     *             AMI version of a node group's current Kubernetes version by not specifying a Kubernetes
     *             version in the request. You can update to the latest AMI version of your cluster's
     *             current Kubernetes version by specifying your cluster's Kubernetes version in the
     *             request. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS
     *                 optimized Amazon Linux 2 AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p>
     *         <p>You cannot roll back a node group to an earlier Kubernetes version or AMI
     *             version.</p>
     *         <p>When a node in a managed node group is terminated due to a scaling action or update,
     *             the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully
     *             and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS
     *             is unable to drain the nodes as a result of a pod disruption budget issue.</p>
     */
    updateNodegroupVersion(args: UpdateNodegroupVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNodegroupVersionCommandOutput>;
    updateNodegroupVersion(args: UpdateNodegroupVersionCommandInput, cb: (err: any, data?: UpdateNodegroupVersionCommandOutput) => void): void;
    updateNodegroupVersion(args: UpdateNodegroupVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNodegroupVersionCommandOutput) => void): void;
}
