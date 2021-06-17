import { LightsailClient } from "./LightsailClient";
import { AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput } from "./commands/AllocateStaticIpCommand";
import { AttachCertificateToDistributionCommandInput, AttachCertificateToDistributionCommandOutput } from "./commands/AttachCertificateToDistributionCommand";
import { AttachDiskCommandInput, AttachDiskCommandOutput } from "./commands/AttachDiskCommand";
import { AttachInstancesToLoadBalancerCommandInput, AttachInstancesToLoadBalancerCommandOutput } from "./commands/AttachInstancesToLoadBalancerCommand";
import { AttachLoadBalancerTlsCertificateCommandInput, AttachLoadBalancerTlsCertificateCommandOutput } from "./commands/AttachLoadBalancerTlsCertificateCommand";
import { AttachStaticIpCommandInput, AttachStaticIpCommandOutput } from "./commands/AttachStaticIpCommand";
import { CloseInstancePublicPortsCommandInput, CloseInstancePublicPortsCommandOutput } from "./commands/CloseInstancePublicPortsCommand";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "./commands/CopySnapshotCommand";
import { CreateCertificateCommandInput, CreateCertificateCommandOutput } from "./commands/CreateCertificateCommand";
import { CreateCloudFormationStackCommandInput, CreateCloudFormationStackCommandOutput } from "./commands/CreateCloudFormationStackCommand";
import { CreateContactMethodCommandInput, CreateContactMethodCommandOutput } from "./commands/CreateContactMethodCommand";
import { CreateContainerServiceCommandInput, CreateContainerServiceCommandOutput } from "./commands/CreateContainerServiceCommand";
import { CreateContainerServiceDeploymentCommandInput, CreateContainerServiceDeploymentCommandOutput } from "./commands/CreateContainerServiceDeploymentCommand";
import { CreateContainerServiceRegistryLoginCommandInput, CreateContainerServiceRegistryLoginCommandOutput } from "./commands/CreateContainerServiceRegistryLoginCommand";
import { CreateDiskCommandInput, CreateDiskCommandOutput } from "./commands/CreateDiskCommand";
import { CreateDiskFromSnapshotCommandInput, CreateDiskFromSnapshotCommandOutput } from "./commands/CreateDiskFromSnapshotCommand";
import { CreateDiskSnapshotCommandInput, CreateDiskSnapshotCommandOutput } from "./commands/CreateDiskSnapshotCommand";
import { CreateDistributionCommandInput, CreateDistributionCommandOutput } from "./commands/CreateDistributionCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateDomainEntryCommandInput, CreateDomainEntryCommandOutput } from "./commands/CreateDomainEntryCommand";
import { CreateInstanceSnapshotCommandInput, CreateInstanceSnapshotCommandOutput } from "./commands/CreateInstanceSnapshotCommand";
import { CreateInstancesCommandInput, CreateInstancesCommandOutput } from "./commands/CreateInstancesCommand";
import { CreateInstancesFromSnapshotCommandInput, CreateInstancesFromSnapshotCommandOutput } from "./commands/CreateInstancesFromSnapshotCommand";
import { CreateKeyPairCommandInput, CreateKeyPairCommandOutput } from "./commands/CreateKeyPairCommand";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "./commands/CreateLoadBalancerCommand";
import { CreateLoadBalancerTlsCertificateCommandInput, CreateLoadBalancerTlsCertificateCommandOutput } from "./commands/CreateLoadBalancerTlsCertificateCommand";
import { CreateRelationalDatabaseCommandInput, CreateRelationalDatabaseCommandOutput } from "./commands/CreateRelationalDatabaseCommand";
import { CreateRelationalDatabaseFromSnapshotCommandInput, CreateRelationalDatabaseFromSnapshotCommandOutput } from "./commands/CreateRelationalDatabaseFromSnapshotCommand";
import { CreateRelationalDatabaseSnapshotCommandInput, CreateRelationalDatabaseSnapshotCommandOutput } from "./commands/CreateRelationalDatabaseSnapshotCommand";
import { DeleteAlarmCommandInput, DeleteAlarmCommandOutput } from "./commands/DeleteAlarmCommand";
import { DeleteAutoSnapshotCommandInput, DeleteAutoSnapshotCommandOutput } from "./commands/DeleteAutoSnapshotCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "./commands/DeleteCertificateCommand";
import { DeleteContactMethodCommandInput, DeleteContactMethodCommandOutput } from "./commands/DeleteContactMethodCommand";
import { DeleteContainerImageCommandInput, DeleteContainerImageCommandOutput } from "./commands/DeleteContainerImageCommand";
import { DeleteContainerServiceCommandInput, DeleteContainerServiceCommandOutput } from "./commands/DeleteContainerServiceCommand";
import { DeleteDiskCommandInput, DeleteDiskCommandOutput } from "./commands/DeleteDiskCommand";
import { DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput } from "./commands/DeleteDiskSnapshotCommand";
import { DeleteDistributionCommandInput, DeleteDistributionCommandOutput } from "./commands/DeleteDistributionCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteDomainEntryCommandInput, DeleteDomainEntryCommandOutput } from "./commands/DeleteDomainEntryCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import { DeleteInstanceSnapshotCommandInput, DeleteInstanceSnapshotCommandOutput } from "./commands/DeleteInstanceSnapshotCommand";
import { DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput } from "./commands/DeleteKeyPairCommand";
import { DeleteKnownHostKeysCommandInput, DeleteKnownHostKeysCommandOutput } from "./commands/DeleteKnownHostKeysCommand";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "./commands/DeleteLoadBalancerCommand";
import { DeleteLoadBalancerTlsCertificateCommandInput, DeleteLoadBalancerTlsCertificateCommandOutput } from "./commands/DeleteLoadBalancerTlsCertificateCommand";
import { DeleteRelationalDatabaseCommandInput, DeleteRelationalDatabaseCommandOutput } from "./commands/DeleteRelationalDatabaseCommand";
import { DeleteRelationalDatabaseSnapshotCommandInput, DeleteRelationalDatabaseSnapshotCommandOutput } from "./commands/DeleteRelationalDatabaseSnapshotCommand";
import { DetachCertificateFromDistributionCommandInput, DetachCertificateFromDistributionCommandOutput } from "./commands/DetachCertificateFromDistributionCommand";
import { DetachDiskCommandInput, DetachDiskCommandOutput } from "./commands/DetachDiskCommand";
import { DetachInstancesFromLoadBalancerCommandInput, DetachInstancesFromLoadBalancerCommandOutput } from "./commands/DetachInstancesFromLoadBalancerCommand";
import { DetachStaticIpCommandInput, DetachStaticIpCommandOutput } from "./commands/DetachStaticIpCommand";
import { DisableAddOnCommandInput, DisableAddOnCommandOutput } from "./commands/DisableAddOnCommand";
import { DownloadDefaultKeyPairCommandInput, DownloadDefaultKeyPairCommandOutput } from "./commands/DownloadDefaultKeyPairCommand";
import { EnableAddOnCommandInput, EnableAddOnCommandOutput } from "./commands/EnableAddOnCommand";
import { ExportSnapshotCommandInput, ExportSnapshotCommandOutput } from "./commands/ExportSnapshotCommand";
import { GetActiveNamesCommandInput, GetActiveNamesCommandOutput } from "./commands/GetActiveNamesCommand";
import { GetAlarmsCommandInput, GetAlarmsCommandOutput } from "./commands/GetAlarmsCommand";
import { GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput } from "./commands/GetAutoSnapshotsCommand";
import { GetBlueprintsCommandInput, GetBlueprintsCommandOutput } from "./commands/GetBlueprintsCommand";
import { GetBundlesCommandInput, GetBundlesCommandOutput } from "./commands/GetBundlesCommand";
import { GetCertificatesCommandInput, GetCertificatesCommandOutput } from "./commands/GetCertificatesCommand";
import { GetCloudFormationStackRecordsCommandInput, GetCloudFormationStackRecordsCommandOutput } from "./commands/GetCloudFormationStackRecordsCommand";
import { GetContactMethodsCommandInput, GetContactMethodsCommandOutput } from "./commands/GetContactMethodsCommand";
import { GetContainerAPIMetadataCommandInput, GetContainerAPIMetadataCommandOutput } from "./commands/GetContainerAPIMetadataCommand";
import { GetContainerImagesCommandInput, GetContainerImagesCommandOutput } from "./commands/GetContainerImagesCommand";
import { GetContainerLogCommandInput, GetContainerLogCommandOutput } from "./commands/GetContainerLogCommand";
import { GetContainerServiceDeploymentsCommandInput, GetContainerServiceDeploymentsCommandOutput } from "./commands/GetContainerServiceDeploymentsCommand";
import { GetContainerServiceMetricDataCommandInput, GetContainerServiceMetricDataCommandOutput } from "./commands/GetContainerServiceMetricDataCommand";
import { GetContainerServicePowersCommandInput, GetContainerServicePowersCommandOutput } from "./commands/GetContainerServicePowersCommand";
import { GetContainerServicesCommandInput, GetContainerServicesCommandOutput } from "./commands/GetContainerServicesCommand";
import { GetDiskCommandInput, GetDiskCommandOutput } from "./commands/GetDiskCommand";
import { GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput } from "./commands/GetDiskSnapshotCommand";
import { GetDiskSnapshotsCommandInput, GetDiskSnapshotsCommandOutput } from "./commands/GetDiskSnapshotsCommand";
import { GetDisksCommandInput, GetDisksCommandOutput } from "./commands/GetDisksCommand";
import { GetDistributionBundlesCommandInput, GetDistributionBundlesCommandOutput } from "./commands/GetDistributionBundlesCommand";
import { GetDistributionLatestCacheResetCommandInput, GetDistributionLatestCacheResetCommandOutput } from "./commands/GetDistributionLatestCacheResetCommand";
import { GetDistributionMetricDataCommandInput, GetDistributionMetricDataCommandOutput } from "./commands/GetDistributionMetricDataCommand";
import { GetDistributionsCommandInput, GetDistributionsCommandOutput } from "./commands/GetDistributionsCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import { GetDomainsCommandInput, GetDomainsCommandOutput } from "./commands/GetDomainsCommand";
import { GetExportSnapshotRecordsCommandInput, GetExportSnapshotRecordsCommandOutput } from "./commands/GetExportSnapshotRecordsCommand";
import { GetInstanceAccessDetailsCommandInput, GetInstanceAccessDetailsCommandOutput } from "./commands/GetInstanceAccessDetailsCommand";
import { GetInstanceCommandInput, GetInstanceCommandOutput } from "./commands/GetInstanceCommand";
import { GetInstanceMetricDataCommandInput, GetInstanceMetricDataCommandOutput } from "./commands/GetInstanceMetricDataCommand";
import { GetInstancePortStatesCommandInput, GetInstancePortStatesCommandOutput } from "./commands/GetInstancePortStatesCommand";
import { GetInstanceSnapshotCommandInput, GetInstanceSnapshotCommandOutput } from "./commands/GetInstanceSnapshotCommand";
import { GetInstanceSnapshotsCommandInput, GetInstanceSnapshotsCommandOutput } from "./commands/GetInstanceSnapshotsCommand";
import { GetInstanceStateCommandInput, GetInstanceStateCommandOutput } from "./commands/GetInstanceStateCommand";
import { GetInstancesCommandInput, GetInstancesCommandOutput } from "./commands/GetInstancesCommand";
import { GetKeyPairCommandInput, GetKeyPairCommandOutput } from "./commands/GetKeyPairCommand";
import { GetKeyPairsCommandInput, GetKeyPairsCommandOutput } from "./commands/GetKeyPairsCommand";
import { GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput } from "./commands/GetLoadBalancerCommand";
import { GetLoadBalancerMetricDataCommandInput, GetLoadBalancerMetricDataCommandOutput } from "./commands/GetLoadBalancerMetricDataCommand";
import { GetLoadBalancerTlsCertificatesCommandInput, GetLoadBalancerTlsCertificatesCommandOutput } from "./commands/GetLoadBalancerTlsCertificatesCommand";
import { GetLoadBalancersCommandInput, GetLoadBalancersCommandOutput } from "./commands/GetLoadBalancersCommand";
import { GetOperationCommandInput, GetOperationCommandOutput } from "./commands/GetOperationCommand";
import { GetOperationsCommandInput, GetOperationsCommandOutput } from "./commands/GetOperationsCommand";
import { GetOperationsForResourceCommandInput, GetOperationsForResourceCommandOutput } from "./commands/GetOperationsForResourceCommand";
import { GetRegionsCommandInput, GetRegionsCommandOutput } from "./commands/GetRegionsCommand";
import { GetRelationalDatabaseBlueprintsCommandInput, GetRelationalDatabaseBlueprintsCommandOutput } from "./commands/GetRelationalDatabaseBlueprintsCommand";
import { GetRelationalDatabaseBundlesCommandInput, GetRelationalDatabaseBundlesCommandOutput } from "./commands/GetRelationalDatabaseBundlesCommand";
import { GetRelationalDatabaseCommandInput, GetRelationalDatabaseCommandOutput } from "./commands/GetRelationalDatabaseCommand";
import { GetRelationalDatabaseEventsCommandInput, GetRelationalDatabaseEventsCommandOutput } from "./commands/GetRelationalDatabaseEventsCommand";
import { GetRelationalDatabaseLogEventsCommandInput, GetRelationalDatabaseLogEventsCommandOutput } from "./commands/GetRelationalDatabaseLogEventsCommand";
import { GetRelationalDatabaseLogStreamsCommandInput, GetRelationalDatabaseLogStreamsCommandOutput } from "./commands/GetRelationalDatabaseLogStreamsCommand";
import { GetRelationalDatabaseMasterUserPasswordCommandInput, GetRelationalDatabaseMasterUserPasswordCommandOutput } from "./commands/GetRelationalDatabaseMasterUserPasswordCommand";
import { GetRelationalDatabaseMetricDataCommandInput, GetRelationalDatabaseMetricDataCommandOutput } from "./commands/GetRelationalDatabaseMetricDataCommand";
import { GetRelationalDatabaseParametersCommandInput, GetRelationalDatabaseParametersCommandOutput } from "./commands/GetRelationalDatabaseParametersCommand";
import { GetRelationalDatabaseSnapshotCommandInput, GetRelationalDatabaseSnapshotCommandOutput } from "./commands/GetRelationalDatabaseSnapshotCommand";
import { GetRelationalDatabaseSnapshotsCommandInput, GetRelationalDatabaseSnapshotsCommandOutput } from "./commands/GetRelationalDatabaseSnapshotsCommand";
import { GetRelationalDatabasesCommandInput, GetRelationalDatabasesCommandOutput } from "./commands/GetRelationalDatabasesCommand";
import { GetStaticIpCommandInput, GetStaticIpCommandOutput } from "./commands/GetStaticIpCommand";
import { GetStaticIpsCommandInput, GetStaticIpsCommandOutput } from "./commands/GetStaticIpsCommand";
import { ImportKeyPairCommandInput, ImportKeyPairCommandOutput } from "./commands/ImportKeyPairCommand";
import { IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput } from "./commands/IsVpcPeeredCommand";
import { OpenInstancePublicPortsCommandInput, OpenInstancePublicPortsCommandOutput } from "./commands/OpenInstancePublicPortsCommand";
import { PeerVpcCommandInput, PeerVpcCommandOutput } from "./commands/PeerVpcCommand";
import { PutAlarmCommandInput, PutAlarmCommandOutput } from "./commands/PutAlarmCommand";
import { PutInstancePublicPortsCommandInput, PutInstancePublicPortsCommandOutput } from "./commands/PutInstancePublicPortsCommand";
import { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "./commands/RebootInstanceCommand";
import { RebootRelationalDatabaseCommandInput, RebootRelationalDatabaseCommandOutput } from "./commands/RebootRelationalDatabaseCommand";
import { RegisterContainerImageCommandInput, RegisterContainerImageCommandOutput } from "./commands/RegisterContainerImageCommand";
import { ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput } from "./commands/ReleaseStaticIpCommand";
import { ResetDistributionCacheCommandInput, ResetDistributionCacheCommandOutput } from "./commands/ResetDistributionCacheCommand";
import { SendContactMethodVerificationCommandInput, SendContactMethodVerificationCommandOutput } from "./commands/SendContactMethodVerificationCommand";
import { SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput } from "./commands/SetIpAddressTypeCommand";
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "./commands/StartInstanceCommand";
import { StartRelationalDatabaseCommandInput, StartRelationalDatabaseCommandOutput } from "./commands/StartRelationalDatabaseCommand";
import { StopInstanceCommandInput, StopInstanceCommandOutput } from "./commands/StopInstanceCommand";
import { StopRelationalDatabaseCommandInput, StopRelationalDatabaseCommandOutput } from "./commands/StopRelationalDatabaseCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestAlarmCommandInput, TestAlarmCommandOutput } from "./commands/TestAlarmCommand";
import { UnpeerVpcCommandInput, UnpeerVpcCommandOutput } from "./commands/UnpeerVpcCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateContainerServiceCommandInput, UpdateContainerServiceCommandOutput } from "./commands/UpdateContainerServiceCommand";
import { UpdateDistributionBundleCommandInput, UpdateDistributionBundleCommandOutput } from "./commands/UpdateDistributionBundleCommand";
import { UpdateDistributionCommandInput, UpdateDistributionCommandOutput } from "./commands/UpdateDistributionCommand";
import { UpdateDomainEntryCommandInput, UpdateDomainEntryCommandOutput } from "./commands/UpdateDomainEntryCommand";
import { UpdateLoadBalancerAttributeCommandInput, UpdateLoadBalancerAttributeCommandOutput } from "./commands/UpdateLoadBalancerAttributeCommand";
import { UpdateRelationalDatabaseCommandInput, UpdateRelationalDatabaseCommandOutput } from "./commands/UpdateRelationalDatabaseCommand";
import { UpdateRelationalDatabaseParametersCommandInput, UpdateRelationalDatabaseParametersCommandOutput } from "./commands/UpdateRelationalDatabaseParametersCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Lightsail is the easiest way to get started with Amazon Web Services (AWS) for developers
 *       who need to build websites or web applications. It includes everything you need to launch your
 *       project quickly - instances (virtual private servers), container services, managed databases,
 *       SSD-based block storage, static IP addresses, load balancers, content delivery network (CDN)
 *       distributions, DNS management of registered domains, and resource snapshots (backups) - for a
 *       low, predictable monthly price.</p>
 *
 *          <p>You can manage your Lightsail resources using the Lightsail console, Lightsail API,
 *       AWS Command Line Interface (AWS CLI), or SDKs. For more information about Lightsail concepts
 *       and tasks, see the <a href="http://lightsail.aws.amazon.com/ls/docs/how-to/article/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Lightsail Dev Guide</a>.</p>
 *
 *          <p>This API Reference provides detailed information about the actions, data types,
 *       parameters, and errors of the Lightsail service. For more information about the supported
 *       AWS Regions, endpoints, and service quotas of the Lightsail service, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail Endpoints and
 *         Quotas</a> in the <i>AWS General Reference</i>.</p>
 */
export declare class Lightsail extends LightsailClient {
    /**
     * <p>Allocates a static IP address.</p>
     */
    allocateStaticIp(args: AllocateStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<AllocateStaticIpCommandOutput>;
    allocateStaticIp(args: AllocateStaticIpCommandInput, cb: (err: any, data?: AllocateStaticIpCommandOutput) => void): void;
    allocateStaticIp(args: AllocateStaticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AllocateStaticIpCommandOutput) => void): void;
    /**
     * <p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN)
     *       distribution.</p>
     *          <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the
     *       domains that are associated with the certificate.</p>
     *          <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach
     *       to your distribution.</p>
     *          <important>
     *             <p>Only certificates created in the <code>us-east-1</code> AWS Region can be attached to
     *         Lightsail distributions. Lightsail distributions are global resources that can reference
     *         an origin in any AWS Region, and distribute its content globally. However, all
     *         distributions are located in the <code>us-east-1</code> Region.</p>
     *          </important>
     */
    attachCertificateToDistribution(args: AttachCertificateToDistributionCommandInput, options?: __HttpHandlerOptions): Promise<AttachCertificateToDistributionCommandOutput>;
    attachCertificateToDistribution(args: AttachCertificateToDistributionCommandInput, cb: (err: any, data?: AttachCertificateToDistributionCommandOutput) => void): void;
    attachCertificateToDistribution(args: AttachCertificateToDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachCertificateToDistributionCommandOutput) => void): void;
    /**
     * <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it
     *       to the instance with the specified disk name.</p>
     *          <p>The <code>attach disk</code> operation supports tag-based access control via resource tags
     *       applied to the resource identified by <code>disk name</code>. For more information, see the
     *         <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    attachDisk(args: AttachDiskCommandInput, options?: __HttpHandlerOptions): Promise<AttachDiskCommandOutput>;
    attachDisk(args: AttachDiskCommandInput, cb: (err: any, data?: AttachDiskCommandOutput) => void): void;
    attachDisk(args: AttachDiskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachDiskCommandOutput) => void): void;
    /**
     * <p>Attaches one or more Lightsail instances to a load balancer.</p>
     *          <p>After some time, the instances are attached to the load balancer and the health check
     *       status is available.</p>
     *          <p>The <code>attach instances to load balancer</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    attachInstancesToLoadBalancer(args: AttachInstancesToLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<AttachInstancesToLoadBalancerCommandOutput>;
    attachInstancesToLoadBalancer(args: AttachInstancesToLoadBalancerCommandInput, cb: (err: any, data?: AttachInstancesToLoadBalancerCommandOutput) => void): void;
    attachInstancesToLoadBalancer(args: AttachInstancesToLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachInstancesToLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just
     *       an updated, more secure version of Secure Socket Layer (SSL).</p>
     *          <p>Once you create and validate your certificate, you can attach it to your load balancer.
     *       You can also use this API to rotate the certificates on your account. Use the
     *         <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and
     *       it will replace the existing one and become the attached certificate.</p>
     *          <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    attachLoadBalancerTlsCertificate(args: AttachLoadBalancerTlsCertificateCommandInput, options?: __HttpHandlerOptions): Promise<AttachLoadBalancerTlsCertificateCommandOutput>;
    attachLoadBalancerTlsCertificate(args: AttachLoadBalancerTlsCertificateCommandInput, cb: (err: any, data?: AttachLoadBalancerTlsCertificateCommandOutput) => void): void;
    attachLoadBalancerTlsCertificate(args: AttachLoadBalancerTlsCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachLoadBalancerTlsCertificateCommandOutput) => void): void;
    /**
     * <p>Attaches a static IP address to a specific Amazon Lightsail instance.</p>
     */
    attachStaticIp(args: AttachStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<AttachStaticIpCommandOutput>;
    attachStaticIp(args: AttachStaticIpCommandInput, cb: (err: any, data?: AttachStaticIpCommandOutput) => void): void;
    attachStaticIp(args: AttachStaticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachStaticIpCommandOutput) => void): void;
    /**
     * <p>Closes ports for a specific Amazon Lightsail instance.</p>
     *          <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via
     *       resource tags applied to the resource identified by <code>instanceName</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    closeInstancePublicPorts(args: CloseInstancePublicPortsCommandInput, options?: __HttpHandlerOptions): Promise<CloseInstancePublicPortsCommandOutput>;
    closeInstancePublicPorts(args: CloseInstancePublicPortsCommandInput, cb: (err: any, data?: CloseInstancePublicPortsCommandOutput) => void): void;
    closeInstancePublicPorts(args: CloseInstancePublicPortsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CloseInstancePublicPortsCommandOutput) => void): void;
    /**
     * <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an
     *       automatic snapshot of an instance or disk as a manual snapshot. This operation can also be
     *       used to copy a manual or automatic snapshot of an instance or a disk from one AWS Region to
     *       another in Amazon Lightsail.</p>
     *          <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source
     *         region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code>
     *       parameters.</p>
     *          <p>When copying an <i>automatic snapshot</i>, be sure to define the
     *         <code>source region</code>, <code>source resource name</code>, <code>target snapshot
     *         name</code>, and either the <code>restore date</code> or the <code>use latest restorable
     *         auto snapshot</code> parameters.</p>
     */
    copySnapshot(args: CopySnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopySnapshotCommandOutput>;
    copySnapshot(args: CopySnapshotCommandInput, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
    copySnapshot(args: CopySnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
    /**
     * <p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN)
     *       distribution and a container service.</p>
     *          <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code>
     *       action to use the certificate and its domains with your distribution. Or use the
     *         <code>UpdateContainerService</code> action to use the certificate and its domains with your
     *       container service.</p>
     *          <important>
     *             <p>Only certificates created in the <code>us-east-1</code> AWS Region can be attached to
     *         Lightsail distributions. Lightsail distributions are global resources that can reference
     *         an origin in any AWS Region, and distribute its content globally. However, all
     *         distributions are located in the <code>us-east-1</code> Region.</p>
     *          </important>
     */
    createCertificate(args: CreateCertificateCommandInput, options?: __HttpHandlerOptions): Promise<CreateCertificateCommandOutput>;
    createCertificate(args: CreateCertificateCommandInput, cb: (err: any, data?: CreateCertificateCommandOutput) => void): void;
    createCertificate(args: CreateCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCertificateCommandOutput) => void): void;
    /**
     * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported
     *       Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be
     *       used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack
     *         records</code> operation to get a list of the CloudFormation stacks created.</p>
     *          <important>
     *             <p>Wait until after your new Amazon EC2 instance is created before running the <code>create
     *           cloud formation stack</code> operation again with the same export snapshot record.</p>
     *          </important>
     */
    createCloudFormationStack(args: CreateCloudFormationStackCommandInput, options?: __HttpHandlerOptions): Promise<CreateCloudFormationStackCommandOutput>;
    createCloudFormationStack(args: CreateCloudFormationStackCommandInput, cb: (err: any, data?: CreateCloudFormationStackCommandOutput) => void): void;
    createCloudFormationStack(args: CreateCloudFormationStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCloudFormationStackCommandOutput) => void): void;
    /**
     * <p>Creates an email or SMS text message contact method.</p>
     *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
     *       You can add one email address and one mobile phone number contact method in each AWS Region.
     *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
     *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
     */
    createContactMethod(args: CreateContactMethodCommandInput, options?: __HttpHandlerOptions): Promise<CreateContactMethodCommandOutput>;
    createContactMethod(args: CreateContactMethodCommandInput, cb: (err: any, data?: CreateContactMethodCommandOutput) => void): void;
    createContactMethod(args: CreateContactMethodCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContactMethodCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon Lightsail container service.</p>
     *
     *          <p>A Lightsail container service is a compute resource to which you can deploy containers.
     *       For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev
     *         Guide</i>.</p>
     */
    createContainerService(args: CreateContainerServiceCommandInput, options?: __HttpHandlerOptions): Promise<CreateContainerServiceCommandOutput>;
    createContainerService(args: CreateContainerServiceCommandInput, cb: (err: any, data?: CreateContainerServiceCommandOutput) => void): void;
    createContainerService(args: CreateContainerServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContainerServiceCommandOutput) => void): void;
    /**
     * <p>Creates a deployment for your Amazon Lightsail container service.</p>
     *
     *          <p>A deployment specifies the containers that will be launched on the container service and
     *       their settings, such as the ports to open, the environment variables to apply, and the launch
     *       command to run. It also specifies the container that will serve as the public endpoint of the
     *       deployment and its settings, such as the HTTP or HTTPS port to use, and the health check
     *       configuration.</p>
     *
     *          <p>You can deploy containers to your container service using container images from a public
     *       registry like Docker Hub, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the
     *         <i>Lightsail Dev Guide</i>.</p>
     */
    createContainerServiceDeployment(args: CreateContainerServiceDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<CreateContainerServiceDeploymentCommandOutput>;
    createContainerServiceDeployment(args: CreateContainerServiceDeploymentCommandInput, cb: (err: any, data?: CreateContainerServiceDeploymentCommandOutput) => void): void;
    createContainerServiceDeployment(args: CreateContainerServiceDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContainerServiceDeploymentCommandOutput) => void): void;
    /**
     * <p>Creates a temporary set of log in credentials that you can use to log in to the Docker
     *       process on your local machine. After you're logged in, you can use the native Docker commands
     *       to push your local container images to the container image registry of your Amazon Lightsail
     *       account so that you can use them with your Lightsail container service. The log in
     *       credentials expire 12 hours after they are created, at which point you will need to create a
     *       new set of log in credentials.</p>
     *
     *          <note>
     *             <p>You can only push container images to the container service registry of your Lightsail
     *         account. You cannot pull container images or perform any other container image management
     *         actions on the container service registry.</p>
     *          </note>
     *
     *          <p>After you push your container images to the container image registry of your Lightsail
     *       account, use the <code>RegisterContainerImage</code> action to register the pushed images to a
     *       specific Lightsail container service.</p>
     *
     *          <note>
     *             <p>This action is not required if you install and use the Lightsail Control
     *         (lightsailctl) plugin to push container images to your Lightsail container service. For
     *         more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a>
     *         in the <i>Lightsail Dev Guide</i>.</p>
     *          </note>
     */
    createContainerServiceRegistryLogin(args: CreateContainerServiceRegistryLoginCommandInput, options?: __HttpHandlerOptions): Promise<CreateContainerServiceRegistryLoginCommandOutput>;
    createContainerServiceRegistryLogin(args: CreateContainerServiceRegistryLoginCommandInput, cb: (err: any, data?: CreateContainerServiceRegistryLoginCommandOutput) => void): void;
    createContainerServiceRegistryLogin(args: CreateContainerServiceRegistryLoginCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContainerServiceRegistryLoginCommandOutput) => void): void;
    /**
     * <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the
     *       same Availability Zone (e.g., <code>us-east-2a</code>).</p>
     *          <p>The <code>create disk</code> operation supports tag-based access control via request tags.
     *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createDisk(args: CreateDiskCommandInput, options?: __HttpHandlerOptions): Promise<CreateDiskCommandOutput>;
    createDisk(args: CreateDiskCommandInput, cb: (err: any, data?: CreateDiskCommandOutput) => void): void;
    createDisk(args: CreateDiskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDiskCommandOutput) => void): void;
    /**
     * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting
     *       disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g.,
     *         <code>us-east-2a</code>).</p>
     *          <p>The <code>create disk from snapshot</code> operation supports tag-based access control via
     *       request tags and resource tags applied to the resource identified by <code>disk snapshot
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createDiskFromSnapshot(args: CreateDiskFromSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateDiskFromSnapshotCommandOutput>;
    createDiskFromSnapshot(args: CreateDiskFromSnapshotCommandInput, cb: (err: any, data?: CreateDiskFromSnapshotCommandOutput) => void): void;
    createDiskFromSnapshot(args: CreateDiskFromSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDiskFromSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make
     *       copies of disks, and to save data before shutting down a Lightsail instance.</p>
     *          <p>You can take a snapshot of an attached disk that is in use; however, snapshots only
     *       capture data that has been written to your disk at the time the snapshot command is issued.
     *       This may exclude any data that has been cached by any applications or the operating system. If
     *       you can pause any file systems on the disk long enough to take a snapshot, your snapshot
     *       should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should
     *       unmount the disk from within the Lightsail instance, issue the create disk snapshot command,
     *       and then remount the disk to ensure a consistent and complete snapshot. You may remount and
     *       use your disk while the snapshot status is pending.</p>
     *          <p>You can also use this operation to create a snapshot of an instance's system volume. You
     *       might want to do this, for example, to recover data from the system volume of a botched
     *       instance or to create a backup of the system volume like you would for a block storage disk.
     *       To create a snapshot of a system volume, just define the <code>instance name</code> parameter
     *       when issuing the snapshot command, and a snapshot of the defined instance's system volume will
     *       be created. After the snapshot is available, you can create a block storage disk from the
     *       snapshot and attach it to a running instance to access the data on the disk.</p>
     *
     *          <p>The <code>create disk snapshot</code> operation supports tag-based access control via
     *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createDiskSnapshot(args: CreateDiskSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateDiskSnapshotCommandOutput>;
    createDiskSnapshot(args: CreateDiskSnapshotCommandInput, cb: (err: any, data?: CreateDiskSnapshotCommandOutput) => void): void;
    createDiskSnapshot(args: CreateDiskSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDiskSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p>
     *          <p>A distribution is a globally distributed network of caching servers that improve the
     *       performance of your website or web application hosted on a Lightsail instance. For more
     *       information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>
     */
    createDistribution(args: CreateDistributionCommandInput, options?: __HttpHandlerOptions): Promise<CreateDistributionCommandOutput>;
    createDistribution(args: CreateDistributionCommandInput, cb: (err: any, data?: CreateDistributionCommandOutput) => void): void;
    createDistribution(args: CreateDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDistributionCommandOutput) => void): void;
    /**
     * <p>Creates a domain resource for the specified domain (e.g., example.com).</p>
     *          <p>The <code>create domain</code> operation supports tag-based access control via request
     *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
    createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    createDomain(args: CreateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    /**
     * <p>Creates one of the following domain name system (DNS) records in a domain DNS zone:
     *       Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority
     *       (SOA), service locator (SRV), or text (TXT).</p>
     *
     *
     *
     *          <p>The <code>create domain entry</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>domain name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createDomainEntry(args: CreateDomainEntryCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainEntryCommandOutput>;
    createDomainEntry(args: CreateDomainEntryCommandInput, cb: (err: any, data?: CreateDomainEntryCommandOutput) => void): void;
    createDomainEntry(args: CreateDomainEntryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDomainEntryCommandOutput) => void): void;
    /**
     * <p>Creates one or more Amazon Lightsail instances.</p>
     *          <p>The <code>create instances</code> operation supports tag-based access control via request
     *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createInstances(args: CreateInstancesCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstancesCommandOutput>;
    createInstances(args: CreateInstancesCommandInput, cb: (err: any, data?: CreateInstancesCommandOutput) => void): void;
    createInstances(args: CreateInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstancesCommandOutput) => void): void;
    /**
     * <p>Creates one or more new instances from a manual or automatic snapshot of an
     *       instance.</p>
     *          <p>The <code>create instances from snapshot</code> operation supports tag-based access
     *       control via request tags and resource tags applied to the resource identified by
     *         <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createInstancesFromSnapshot(args: CreateInstancesFromSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstancesFromSnapshotCommandOutput>;
    createInstancesFromSnapshot(args: CreateInstancesFromSnapshotCommandInput, cb: (err: any, data?: CreateInstancesFromSnapshotCommandOutput) => void): void;
    createInstancesFromSnapshot(args: CreateInstancesFromSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstancesFromSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>.
     *       You can use a snapshot to create a new instance that is based on that snapshot.</p>
     *          <p>The <code>create instance snapshot</code> operation supports tag-based access control via
     *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createInstanceSnapshot(args: CreateInstanceSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstanceSnapshotCommandOutput>;
    createInstanceSnapshot(args: CreateInstanceSnapshotCommandInput, cb: (err: any, data?: CreateInstanceSnapshotCommandOutput) => void): void;
    createInstanceSnapshot(args: CreateInstanceSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstanceSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates an SSH key pair.</p>
     *          <p>The <code>create key pair</code> operation supports tag-based access control via request
     *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createKeyPair(args: CreateKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<CreateKeyPairCommandOutput>;
    createKeyPair(args: CreateKeyPairCommandInput, cb: (err: any, data?: CreateKeyPairCommandOutput) => void): void;
    createKeyPair(args: CreateKeyPairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateKeyPairCommandOutput) => void): void;
    /**
     * <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance
     *       your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/how-to/article/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5
     *       load balancers per AWS Region in your account.</p>
     *          <p>When you create a load balancer, you can specify a unique name and port settings. To
     *       change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code>
     *       operation.</p>
     *          <p>The <code>create load balancer</code> operation supports tag-based access control via
     *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createLoadBalancer(args: CreateLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<CreateLoadBalancerCommandOutput>;
    createLoadBalancer(args: CreateLoadBalancerCommandInput, cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void): void;
    createLoadBalancer(args: CreateLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p>
     *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
     *          <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createLoadBalancerTlsCertificate(args: CreateLoadBalancerTlsCertificateCommandInput, options?: __HttpHandlerOptions): Promise<CreateLoadBalancerTlsCertificateCommandOutput>;
    createLoadBalancerTlsCertificate(args: CreateLoadBalancerTlsCertificateCommandInput, cb: (err: any, data?: CreateLoadBalancerTlsCertificateCommandOutput) => void): void;
    createLoadBalancerTlsCertificate(args: CreateLoadBalancerTlsCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLoadBalancerTlsCertificateCommandOutput) => void): void;
    /**
     * <p>Creates a new database in Amazon Lightsail.</p>
     *          <p>The <code>create relational database</code> operation supports tag-based access control
     *       via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createRelationalDatabase(args: CreateRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateRelationalDatabaseCommandOutput>;
    createRelationalDatabase(args: CreateRelationalDatabaseCommandInput, cb: (err: any, data?: CreateRelationalDatabaseCommandOutput) => void): void;
    createRelationalDatabase(args: CreateRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p>
     *          <p>You can create a new database from a snapshot in if something goes wrong with your
     *       original database, or to change it to a different plan, such as a high availability or
     *       standard plan.</p>
     *          <p>The <code>create relational database from snapshot</code> operation supports tag-based
     *       access control via request tags and resource tags applied to the resource identified by
     *       relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createRelationalDatabaseFromSnapshot(args: CreateRelationalDatabaseFromSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput>;
    createRelationalDatabaseFromSnapshot(args: CreateRelationalDatabaseFromSnapshotCommandInput, cb: (err: any, data?: CreateRelationalDatabaseFromSnapshotCommandOutput) => void): void;
    createRelationalDatabaseFromSnapshot(args: CreateRelationalDatabaseFromSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRelationalDatabaseFromSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups,
     *       to make copies of a database, and to save data before deleting a database.</p>
     *          <p>The <code>create relational database snapshot</code> operation supports tag-based access
     *       control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createRelationalDatabaseSnapshot(args: CreateRelationalDatabaseSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateRelationalDatabaseSnapshotCommandOutput>;
    createRelationalDatabaseSnapshot(args: CreateRelationalDatabaseSnapshotCommandInput, cb: (err: any, data?: CreateRelationalDatabaseSnapshotCommandOutput) => void): void;
    createRelationalDatabaseSnapshot(args: CreateRelationalDatabaseSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRelationalDatabaseSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes an alarm.</p>
     *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
     *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
     *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
     *         in Amazon Lightsail</a>.</p>
     */
    deleteAlarm(args: DeleteAlarmCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAlarmCommandOutput>;
    deleteAlarm(args: DeleteAlarmCommandInput, cb: (err: any, data?: DeleteAlarmCommandOutput) => void): void;
    deleteAlarm(args: DeleteAlarmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAlarmCommandOutput) => void): void;
    /**
     * <p>Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     */
    deleteAutoSnapshot(args: DeleteAutoSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAutoSnapshotCommandOutput>;
    deleteAutoSnapshot(args: DeleteAutoSnapshotCommandInput, cb: (err: any, data?: DeleteAutoSnapshotCommandOutput) => void): void;
    deleteAutoSnapshot(args: DeleteAutoSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAutoSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN)
     *       distribution.</p>
     *          <p>Certificates that are currently attached to a distribution cannot be deleted. Use the
     *         <code>DetachCertificateFromDistribution</code> action to detach a certificate from a
     *       distribution.</p>
     */
    deleteCertificate(args: DeleteCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCertificateCommandOutput>;
    deleteCertificate(args: DeleteCertificateCommandInput, cb: (err: any, data?: DeleteCertificateCommandOutput) => void): void;
    deleteCertificate(args: DeleteCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCertificateCommandOutput) => void): void;
    /**
     * <p>Deletes a contact method.</p>
     *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
     *       You can add one email address and one mobile phone number contact method in each AWS Region.
     *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
     *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
     */
    deleteContactMethod(args: DeleteContactMethodCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContactMethodCommandOutput>;
    deleteContactMethod(args: DeleteContactMethodCommandInput, cb: (err: any, data?: DeleteContactMethodCommandOutput) => void): void;
    deleteContactMethod(args: DeleteContactMethodCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContactMethodCommandOutput) => void): void;
    /**
     * <p>Deletes a container image that is registered to your Amazon Lightsail container
     *       service.</p>
     */
    deleteContainerImage(args: DeleteContainerImageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContainerImageCommandOutput>;
    deleteContainerImage(args: DeleteContainerImageCommandInput, cb: (err: any, data?: DeleteContainerImageCommandOutput) => void): void;
    deleteContainerImage(args: DeleteContainerImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContainerImageCommandOutput) => void): void;
    /**
     * <p>Deletes your Amazon Lightsail container service.</p>
     */
    deleteContainerService(args: DeleteContainerServiceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContainerServiceCommandOutput>;
    deleteContainerService(args: DeleteContainerServiceCommandInput, cb: (err: any, data?: DeleteContainerServiceCommandOutput) => void): void;
    deleteContainerService(args: DeleteContainerServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContainerServiceCommandOutput) => void): void;
    /**
     * <p>Deletes the specified block storage disk. The disk must be in the <code>available</code>
     *       state (not attached to a Lightsail instance).</p>
     *          <note>
     *             <p>The disk may remain in the <code>deleting</code> state for several minutes.</p>
     *          </note>
     *          <p>The <code>delete disk</code> operation supports tag-based access control via resource tags
     *       applied to the resource identified by <code>disk name</code>. For more information, see the
     *         <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteDisk(args: DeleteDiskCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDiskCommandOutput>;
    deleteDisk(args: DeleteDiskCommandInput, cb: (err: any, data?: DeleteDiskCommandOutput) => void): void;
    deleteDisk(args: DeleteDiskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDiskCommandOutput) => void): void;
    /**
     * <p>Deletes the specified disk snapshot.</p>
     *          <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the
     *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
     *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
     *       regardless of which prior snapshots have been deleted, all active snapshots will have access
     *       to all the information needed to restore the disk.</p>
     *          <p>The <code>delete disk snapshot</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>disk snapshot name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteDiskSnapshot(args: DeleteDiskSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDiskSnapshotCommandOutput>;
    deleteDiskSnapshot(args: DeleteDiskSnapshotCommandInput, cb: (err: any, data?: DeleteDiskSnapshotCommandOutput) => void): void;
    deleteDiskSnapshot(args: DeleteDiskSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDiskSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes your Amazon Lightsail content delivery network (CDN) distribution.</p>
     */
    deleteDistribution(args: DeleteDistributionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDistributionCommandOutput>;
    deleteDistribution(args: DeleteDistributionCommandInput, cb: (err: any, data?: DeleteDistributionCommandOutput) => void): void;
    deleteDistribution(args: DeleteDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDistributionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified domain recordset and all of its domain records.</p>
     *          <p>The <code>delete domain</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>domain name</code>. For more information, see
     *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
    deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    deleteDomain(args: DeleteDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    /**
     * <p>Deletes a specific domain entry.</p>
     *          <p>The <code>delete domain entry</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>domain name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteDomainEntry(args: DeleteDomainEntryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainEntryCommandOutput>;
    deleteDomainEntry(args: DeleteDomainEntryCommandInput, cb: (err: any, data?: DeleteDomainEntryCommandOutput) => void): void;
    deleteDomainEntry(args: DeleteDomainEntryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainEntryCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon Lightsail instance.</p>
     *          <p>The <code>delete instance</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>instance name</code>. For more information,
     *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteInstance(args: DeleteInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInstanceCommandOutput>;
    deleteInstance(args: DeleteInstanceCommandInput, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
    deleteInstance(args: DeleteInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes a specific snapshot of a virtual private server (or
     *       <i>instance</i>).</p>
     *          <p>The <code>delete instance snapshot</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>instance snapshot name</code>. For
     *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteInstanceSnapshot(args: DeleteInstanceSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInstanceSnapshotCommandOutput>;
    deleteInstanceSnapshot(args: DeleteInstanceSnapshotCommandInput, cb: (err: any, data?: DeleteInstanceSnapshotCommandOutput) => void): void;
    deleteInstanceSnapshot(args: DeleteInstanceSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInstanceSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes a specific SSH key pair.</p>
     *          <p>The <code>delete key pair</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>key pair name</code>. For more information,
     *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteKeyPair(args: DeleteKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<DeleteKeyPairCommandOutput>;
    deleteKeyPair(args: DeleteKeyPairCommandInput, cb: (err: any, data?: DeleteKeyPairCommandOutput) => void): void;
    deleteKeyPair(args: DeleteKeyPairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteKeyPairCommandOutput) => void): void;
    /**
     * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or
     *       RDP clients to authenticate an instance. This operation enables the Lightsail browser-based
     *       SSH or RDP clients to connect to the instance after a host key mismatch.</p>
     *          <important>
     *             <p>Perform this operation only if you were expecting the host key or certificate mismatch
     *         or if you are familiar with the new host key or certificate on the instance. For more
     *         information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP
     *           client</a>.</p>
     *          </important>
     */
    deleteKnownHostKeys(args: DeleteKnownHostKeysCommandInput, options?: __HttpHandlerOptions): Promise<DeleteKnownHostKeysCommandOutput>;
    deleteKnownHostKeys(args: DeleteKnownHostKeysCommandInput, cb: (err: any, data?: DeleteKnownHostKeysCommandOutput) => void): void;
    deleteKnownHostKeys(args: DeleteKnownHostKeysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteKnownHostKeysCommandOutput) => void): void;
    /**
     * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the
     *       load balancer is deleted, you will need to create a new load balancer, create a new
     *       certificate, and verify domain ownership again.</p>
     *          <p>The <code>delete load balancer</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>load balancer name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteLoadBalancer(args: DeleteLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLoadBalancerCommandOutput>;
    deleteLoadBalancer(args: DeleteLoadBalancerCommandInput, cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void): void;
    deleteLoadBalancer(args: DeleteLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p>
     *          <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteLoadBalancerTlsCertificate(args: DeleteLoadBalancerTlsCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLoadBalancerTlsCertificateCommandOutput>;
    deleteLoadBalancerTlsCertificate(args: DeleteLoadBalancerTlsCertificateCommandInput, cb: (err: any, data?: DeleteLoadBalancerTlsCertificateCommandOutput) => void): void;
    deleteLoadBalancerTlsCertificate(args: DeleteLoadBalancerTlsCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLoadBalancerTlsCertificateCommandOutput) => void): void;
    /**
     * <p>Deletes a database in Amazon Lightsail.</p>
     *          <p>The <code>delete relational database</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by relationalDatabaseName. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteRelationalDatabase(args: DeleteRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRelationalDatabaseCommandOutput>;
    deleteRelationalDatabase(args: DeleteRelationalDatabaseCommandInput, cb: (err: any, data?: DeleteRelationalDatabaseCommandOutput) => void): void;
    deleteRelationalDatabase(args: DeleteRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Deletes a database snapshot in Amazon Lightsail.</p>
     *          <p>The <code>delete relational database snapshot</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by relationalDatabaseName. For
     *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteRelationalDatabaseSnapshot(args: DeleteRelationalDatabaseSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRelationalDatabaseSnapshotCommandOutput>;
    deleteRelationalDatabaseSnapshot(args: DeleteRelationalDatabaseSnapshotCommandInput, cb: (err: any, data?: DeleteRelationalDatabaseSnapshotCommandOutput) => void): void;
    deleteRelationalDatabaseSnapshot(args: DeleteRelationalDatabaseSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRelationalDatabaseSnapshotCommandOutput) => void): void;
    /**
     * <p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN)
     *       distribution.</p>
     *          <p>After the certificate is detached, your distribution stops accepting traffic for all of
     *       the domains that are associated with the certificate.</p>
     */
    detachCertificateFromDistribution(args: DetachCertificateFromDistributionCommandInput, options?: __HttpHandlerOptions): Promise<DetachCertificateFromDistributionCommandOutput>;
    detachCertificateFromDistribution(args: DetachCertificateFromDistributionCommandInput, cb: (err: any, data?: DetachCertificateFromDistributionCommandOutput) => void): void;
    detachCertificateFromDistribution(args: DetachCertificateFromDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachCertificateFromDistributionCommandOutput) => void): void;
    /**
     * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount
     *       any file systems on the device within your operating system before stopping the instance and
     *       detaching the disk.</p>
     *          <p>The <code>detach disk</code> operation supports tag-based access control via resource tags
     *       applied to the resource identified by <code>disk name</code>. For more information, see the
     *         <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    detachDisk(args: DetachDiskCommandInput, options?: __HttpHandlerOptions): Promise<DetachDiskCommandOutput>;
    detachDisk(args: DetachDiskCommandInput, cb: (err: any, data?: DetachDiskCommandOutput) => void): void;
    detachDisk(args: DetachDiskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachDiskCommandOutput) => void): void;
    /**
     * <p>Detaches the specified instances from a Lightsail load balancer.</p>
     *          <p>This operation waits until the instances are no longer needed before they are detached
     *       from the load balancer.</p>
     *          <p>The <code>detach instances from load balancer</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    detachInstancesFromLoadBalancer(args: DetachInstancesFromLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<DetachInstancesFromLoadBalancerCommandOutput>;
    detachInstancesFromLoadBalancer(args: DetachInstancesFromLoadBalancerCommandInput, cb: (err: any, data?: DetachInstancesFromLoadBalancerCommandOutput) => void): void;
    detachInstancesFromLoadBalancer(args: DetachInstancesFromLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachInstancesFromLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Detaches a static IP from the Amazon Lightsail instance to which it is attached.</p>
     */
    detachStaticIp(args: DetachStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<DetachStaticIpCommandOutput>;
    detachStaticIp(args: DetachStaticIpCommandInput, cb: (err: any, data?: DetachStaticIpCommandOutput) => void): void;
    detachStaticIp(args: DetachStaticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachStaticIpCommandOutput) => void): void;
    /**
     * <p>Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     */
    disableAddOn(args: DisableAddOnCommandInput, options?: __HttpHandlerOptions): Promise<DisableAddOnCommandOutput>;
    disableAddOn(args: DisableAddOnCommandInput, cb: (err: any, data?: DisableAddOnCommandOutput) => void): void;
    disableAddOn(args: DisableAddOnCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableAddOnCommandOutput) => void): void;
    /**
     * <p>Downloads the default SSH key pair from the user's account.</p>
     */
    downloadDefaultKeyPair(args: DownloadDefaultKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<DownloadDefaultKeyPairCommandOutput>;
    downloadDefaultKeyPair(args: DownloadDefaultKeyPairCommandInput, cb: (err: any, data?: DownloadDefaultKeyPairCommandOutput) => void): void;
    downloadDefaultKeyPair(args: DownloadDefaultKeyPairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DownloadDefaultKeyPairCommandOutput) => void): void;
    /**
     * <p>Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see
     *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     */
    enableAddOn(args: EnableAddOnCommandInput, options?: __HttpHandlerOptions): Promise<EnableAddOnCommandOutput>;
    enableAddOn(args: EnableAddOnCommandInput, cb: (err: any, data?: EnableAddOnCommandOutput) => void): void;
    enableAddOn(args: EnableAddOnCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableAddOnCommandOutput) => void): void;
    /**
     * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2).
     *       This operation results in an export snapshot record that can be used with the <code>create
     *         cloud formation stack</code> operation to create new Amazon EC2 instances.</p>
     *          <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the
     *       instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in
     *       Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the
     *       source Lightsail snapshot.</p>
     *          <p></p>
     *          <p>The <code>export snapshot</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>source snapshot name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     *          <note>
     *             <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code>
     *         operations to get a list of snapshots that you can export to Amazon EC2.</p>
     *          </note>
     */
    exportSnapshot(args: ExportSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<ExportSnapshotCommandOutput>;
    exportSnapshot(args: ExportSnapshotCommandInput, cb: (err: any, data?: ExportSnapshotCommandOutput) => void): void;
    exportSnapshot(args: ExportSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportSnapshotCommandOutput) => void): void;
    /**
     * <p>Returns the names of all active (not deleted) resources.</p>
     */
    getActiveNames(args: GetActiveNamesCommandInput, options?: __HttpHandlerOptions): Promise<GetActiveNamesCommandOutput>;
    getActiveNames(args: GetActiveNamesCommandInput, cb: (err: any, data?: GetActiveNamesCommandOutput) => void): void;
    getActiveNames(args: GetActiveNamesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetActiveNamesCommandOutput) => void): void;
    /**
     * <p>Returns information about the configured alarms. Specify an alarm name in your request to
     *       return information about a specific alarm, or specify a monitored resource name to return
     *       information about all alarms for a specific resource.</p>
     *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
     *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
     *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
     *         in Amazon Lightsail</a>.</p>
     */
    getAlarms(args: GetAlarmsCommandInput, options?: __HttpHandlerOptions): Promise<GetAlarmsCommandOutput>;
    getAlarms(args: GetAlarmsCommandInput, cb: (err: any, data?: GetAlarmsCommandOutput) => void): void;
    getAlarms(args: GetAlarmsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAlarmsCommandOutput) => void): void;
    /**
     * <p>Returns the available automatic snapshots for an instance or disk. For more information,
     *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     */
    getAutoSnapshots(args: GetAutoSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<GetAutoSnapshotsCommandOutput>;
    getAutoSnapshots(args: GetAutoSnapshotsCommandInput, cb: (err: any, data?: GetAutoSnapshotsCommandOutput) => void): void;
    getAutoSnapshots(args: GetAutoSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAutoSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns the list of available instance images, or <i>blueprints</i>. You can
     *       use a blueprint to create a new instance already running a specific operating system, as well
     *       as a preinstalled app or development stack. The software each instance is running depends on
     *       the blueprint image you choose.</p>
     *          <note>
     *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
     *         support customers with existing instances and are not necessarily available to create new
     *         instances. Blueprints are marked inactive when they become outdated due to operating system
     *         updates or new application releases.</p>
     *          </note>
     */
    getBlueprints(args: GetBlueprintsCommandInput, options?: __HttpHandlerOptions): Promise<GetBlueprintsCommandOutput>;
    getBlueprints(args: GetBlueprintsCommandInput, cb: (err: any, data?: GetBlueprintsCommandOutput) => void): void;
    getBlueprints(args: GetBlueprintsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBlueprintsCommandOutput) => void): void;
    /**
     * <p>Returns the list of bundles that are available for purchase. A bundle describes the specs
     *       for your virtual private server (or <i>instance</i>).</p>
     */
    getBundles(args: GetBundlesCommandInput, options?: __HttpHandlerOptions): Promise<GetBundlesCommandOutput>;
    getBundles(args: GetBundlesCommandInput, cb: (err: any, data?: GetBundlesCommandOutput) => void): void;
    getBundles(args: GetBundlesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBundlesCommandOutput) => void): void;
    /**
     * <p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p>
     *          <note>
     *             <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from
     *         your request. The response will include only the certificate Amazon Resource Name (ARN),
     *         certificate name, domain name, and tags.</p>
     *          </note>
     */
    getCertificates(args: GetCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<GetCertificatesCommandOutput>;
    getCertificates(args: GetCertificatesCommandInput, cb: (err: any, data?: GetCertificatesCommandOutput) => void): void;
    getCertificates(args: GetCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCertificatesCommandOutput) => void): void;
    /**
     * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud
     *         formation stack</code> operation.</p>
     *          <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail
     *       snapshot.</p>
     */
    getCloudFormationStackRecords(args: GetCloudFormationStackRecordsCommandInput, options?: __HttpHandlerOptions): Promise<GetCloudFormationStackRecordsCommandOutput>;
    getCloudFormationStackRecords(args: GetCloudFormationStackRecordsCommandInput, cb: (err: any, data?: GetCloudFormationStackRecordsCommandOutput) => void): void;
    getCloudFormationStackRecords(args: GetCloudFormationStackRecordsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCloudFormationStackRecordsCommandOutput) => void): void;
    /**
     * <p>Returns information about the configured contact methods. Specify a protocol in your
     *       request to return information about a specific contact method.</p>
     *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
     *       You can add one email address and one mobile phone number contact method in each AWS Region.
     *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
     *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
     */
    getContactMethods(args: GetContactMethodsCommandInput, options?: __HttpHandlerOptions): Promise<GetContactMethodsCommandOutput>;
    getContactMethods(args: GetContactMethodsCommandInput, cb: (err: any, data?: GetContactMethodsCommandOutput) => void): void;
    getContactMethods(args: GetContactMethodsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContactMethodsCommandOutput) => void): void;
    /**
     * <p>Returns information about Amazon Lightsail containers, such as the current version of the
     *       Lightsail Control (lightsailctl) plugin.</p>
     */
    getContainerAPIMetadata(args: GetContainerAPIMetadataCommandInput, options?: __HttpHandlerOptions): Promise<GetContainerAPIMetadataCommandOutput>;
    getContainerAPIMetadata(args: GetContainerAPIMetadataCommandInput, cb: (err: any, data?: GetContainerAPIMetadataCommandOutput) => void): void;
    getContainerAPIMetadata(args: GetContainerAPIMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContainerAPIMetadataCommandOutput) => void): void;
    /**
     * <p>Returns the container images that are registered to your Amazon Lightsail container
     *       service.</p>
     *
     *          <note>
     *             <p>If you created a deployment on your Lightsail container service that uses container
     *         images from a public registry like Docker Hub, those images are not returned as part of this
     *         action. Those images are not registered to your Lightsail container service.</p>
     *          </note>
     */
    getContainerImages(args: GetContainerImagesCommandInput, options?: __HttpHandlerOptions): Promise<GetContainerImagesCommandOutput>;
    getContainerImages(args: GetContainerImagesCommandInput, cb: (err: any, data?: GetContainerImagesCommandOutput) => void): void;
    getContainerImages(args: GetContainerImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContainerImagesCommandOutput) => void): void;
    /**
     * <p>Returns the log events of a container of your Amazon Lightsail container service.</p>
     *
     *          <p>If your container service has more than one node (i.e., a scale greater than 1), then the
     *       log events that are returned for the specified container are merged from all nodes on your
     *       container service.</p>
     *
     *          <note>
     *             <p>Container logs are retained for a certain amount of time. For more information, see
     *           <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail
     *           endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
     *          </note>
     */
    getContainerLog(args: GetContainerLogCommandInput, options?: __HttpHandlerOptions): Promise<GetContainerLogCommandOutput>;
    getContainerLog(args: GetContainerLogCommandInput, cb: (err: any, data?: GetContainerLogCommandOutput) => void): void;
    getContainerLog(args: GetContainerLogCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContainerLogCommandOutput) => void): void;
    /**
     * <p>Returns the deployments for your Amazon Lightsail container service</p>
     *
     *          <p>A deployment specifies the settings, such as the ports and launch command, of containers
     *       that are deployed to your container service.</p>
     *
     *          <p>The deployments are ordered by version in ascending order. The newest version is listed at
     *       the top of the response.</p>
     *
     *          <note>
     *             <p>A set number of deployments are kept before the oldest one is replaced with the newest
     *         one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail
     *           endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
     *          </note>
     */
    getContainerServiceDeployments(args: GetContainerServiceDeploymentsCommandInput, options?: __HttpHandlerOptions): Promise<GetContainerServiceDeploymentsCommandOutput>;
    getContainerServiceDeployments(args: GetContainerServiceDeploymentsCommandInput, cb: (err: any, data?: GetContainerServiceDeploymentsCommandOutput) => void): void;
    getContainerServiceDeployments(args: GetContainerServiceDeploymentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContainerServiceDeploymentsCommandOutput) => void): void;
    /**
     * <p>Returns the data points of a specific metric of your Amazon Lightsail container
     *       service.</p>
     *
     *          <p>Metrics report the utilization of your resources. Monitor and collect metric data
     *       regularly to maintain the reliability, availability, and performance of your resources.</p>
     */
    getContainerServiceMetricData(args: GetContainerServiceMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetContainerServiceMetricDataCommandOutput>;
    getContainerServiceMetricData(args: GetContainerServiceMetricDataCommandInput, cb: (err: any, data?: GetContainerServiceMetricDataCommandOutput) => void): void;
    getContainerServiceMetricData(args: GetContainerServiceMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContainerServiceMetricDataCommandOutput) => void): void;
    /**
     * <p>Returns the list of powers that can be specified for your Amazon Lightsail container
     *       services.</p>
     *
     *          <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the
     *       container service.</p>
     */
    getContainerServicePowers(args: GetContainerServicePowersCommandInput, options?: __HttpHandlerOptions): Promise<GetContainerServicePowersCommandOutput>;
    getContainerServicePowers(args: GetContainerServicePowersCommandInput, cb: (err: any, data?: GetContainerServicePowersCommandOutput) => void): void;
    getContainerServicePowers(args: GetContainerServicePowersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContainerServicePowersCommandOutput) => void): void;
    /**
     * <p>Returns information about one or more of your Amazon Lightsail container services.</p>
     */
    getContainerServices(args: GetContainerServicesCommandInput, options?: __HttpHandlerOptions): Promise<GetContainerServicesCommandOutput>;
    getContainerServices(args: GetContainerServicesCommandInput, cb: (err: any, data?: GetContainerServicesCommandOutput) => void): void;
    getContainerServices(args: GetContainerServicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContainerServicesCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific block storage disk.</p>
     */
    getDisk(args: GetDiskCommandInput, options?: __HttpHandlerOptions): Promise<GetDiskCommandOutput>;
    getDisk(args: GetDiskCommandInput, cb: (err: any, data?: GetDiskCommandOutput) => void): void;
    getDisk(args: GetDiskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDiskCommandOutput) => void): void;
    /**
     * <p>Returns information about all block storage disks in your AWS account and region.</p>
     */
    getDisks(args: GetDisksCommandInput, options?: __HttpHandlerOptions): Promise<GetDisksCommandOutput>;
    getDisks(args: GetDisksCommandInput, cb: (err: any, data?: GetDisksCommandOutput) => void): void;
    getDisks(args: GetDisksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDisksCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific block storage disk snapshot.</p>
     */
    getDiskSnapshot(args: GetDiskSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<GetDiskSnapshotCommandOutput>;
    getDiskSnapshot(args: GetDiskSnapshotCommandInput, cb: (err: any, data?: GetDiskSnapshotCommandOutput) => void): void;
    getDiskSnapshot(args: GetDiskSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDiskSnapshotCommandOutput) => void): void;
    /**
     * <p>Returns information about all block storage disk snapshots in your AWS account and
     *       region.</p>
     */
    getDiskSnapshots(args: GetDiskSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<GetDiskSnapshotsCommandOutput>;
    getDiskSnapshots(args: GetDiskSnapshotsCommandInput, cb: (err: any, data?: GetDiskSnapshotsCommandOutput) => void): void;
    getDiskSnapshots(args: GetDiskSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDiskSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns the list bundles that can be applied to you Amazon Lightsail content delivery
     *       network (CDN) distributions.</p>
     *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
     *       your dsitribution.</p>
     */
    getDistributionBundles(args: GetDistributionBundlesCommandInput, options?: __HttpHandlerOptions): Promise<GetDistributionBundlesCommandOutput>;
    getDistributionBundles(args: GetDistributionBundlesCommandInput, cb: (err: any, data?: GetDistributionBundlesCommandOutput) => void): void;
    getDistributionBundles(args: GetDistributionBundlesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDistributionBundlesCommandOutput) => void): void;
    /**
     * <p>Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail
     *       content delivery network (CDN) distribution.</p>
     */
    getDistributionLatestCacheReset(args: GetDistributionLatestCacheResetCommandInput, options?: __HttpHandlerOptions): Promise<GetDistributionLatestCacheResetCommandOutput>;
    getDistributionLatestCacheReset(args: GetDistributionLatestCacheResetCommandInput, cb: (err: any, data?: GetDistributionLatestCacheResetCommandOutput) => void): void;
    getDistributionLatestCacheReset(args: GetDistributionLatestCacheResetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDistributionLatestCacheResetCommandOutput) => void): void;
    /**
     * <p>Returns the data points of a specific metric for an Amazon Lightsail content delivery
     *       network (CDN) distribution.</p>
     *          <p>Metrics report the utilization of your resources, and the error counts generated by them.
     *       Monitor and collect metric data regularly to maintain the reliability, availability, and
     *       performance of your resources.</p>
     */
    getDistributionMetricData(args: GetDistributionMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetDistributionMetricDataCommandOutput>;
    getDistributionMetricData(args: GetDistributionMetricDataCommandInput, cb: (err: any, data?: GetDistributionMetricDataCommandOutput) => void): void;
    getDistributionMetricData(args: GetDistributionMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDistributionMetricDataCommandOutput) => void): void;
    /**
     * <p>Returns information about one or more of your Amazon Lightsail content delivery network
     *       (CDN) distributions.</p>
     */
    getDistributions(args: GetDistributionsCommandInput, options?: __HttpHandlerOptions): Promise<GetDistributionsCommandOutput>;
    getDistributions(args: GetDistributionsCommandInput, cb: (err: any, data?: GetDistributionsCommandOutput) => void): void;
    getDistributions(args: GetDistributionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDistributionsCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific domain recordset.</p>
     */
    getDomain(args: GetDomainCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainCommandOutput>;
    getDomain(args: GetDomainCommandInput, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
    getDomain(args: GetDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
    /**
     * <p>Returns a list of all domains in the user's account.</p>
     */
    getDomains(args: GetDomainsCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainsCommandOutput>;
    getDomains(args: GetDomainsCommandInput, cb: (err: any, data?: GetDomainsCommandOutput) => void): void;
    getDomains(args: GetDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDomainsCommandOutput) => void): void;
    /**
     * <p>Returns the export snapshot record created as a result of the <code>export snapshot</code>
     *       operation.</p>
     *          <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related
     *       resources with the <code>create cloud formation stack</code> operation.</p>
     */
    getExportSnapshotRecords(args: GetExportSnapshotRecordsCommandInput, options?: __HttpHandlerOptions): Promise<GetExportSnapshotRecordsCommandOutput>;
    getExportSnapshotRecords(args: GetExportSnapshotRecordsCommandInput, cb: (err: any, data?: GetExportSnapshotRecordsCommandOutput) => void): void;
    getExportSnapshotRecords(args: GetExportSnapshotRecordsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetExportSnapshotRecordsCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific Amazon Lightsail instance, which is a virtual private
     *       server.</p>
     */
    getInstance(args: GetInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceCommandOutput>;
    getInstance(args: GetInstanceCommandInput, cb: (err: any, data?: GetInstanceCommandOutput) => void): void;
    getInstance(args: GetInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceCommandOutput) => void): void;
    /**
     * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or
     *         <i>instance</i>.</p>
     *          <p>The <code>get instance access details</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by <code>instance name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    getInstanceAccessDetails(args: GetInstanceAccessDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceAccessDetailsCommandOutput>;
    getInstanceAccessDetails(args: GetInstanceAccessDetailsCommandInput, cb: (err: any, data?: GetInstanceAccessDetailsCommandOutput) => void): void;
    getInstanceAccessDetails(args: GetInstanceAccessDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceAccessDetailsCommandOutput) => void): void;
    /**
     * <p>Returns the data points for the specified Amazon Lightsail instance metric, given an
     *       instance name.</p>
     *          <p>Metrics report the utilization of your resources, and the error counts generated by them.
     *       Monitor and collect metric data regularly to maintain the reliability, availability, and
     *       performance of your resources.</p>
     */
    getInstanceMetricData(args: GetInstanceMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceMetricDataCommandOutput>;
    getInstanceMetricData(args: GetInstanceMetricDataCommandInput, cb: (err: any, data?: GetInstanceMetricDataCommandOutput) => void): void;
    getInstanceMetricData(args: GetInstanceMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceMetricDataCommandOutput) => void): void;
    /**
     * <p>Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses
     *       allowed to connect to the instance through the ports, and the protocol.</p>
     */
    getInstancePortStates(args: GetInstancePortStatesCommandInput, options?: __HttpHandlerOptions): Promise<GetInstancePortStatesCommandOutput>;
    getInstancePortStates(args: GetInstancePortStatesCommandInput, cb: (err: any, data?: GetInstancePortStatesCommandOutput) => void): void;
    getInstancePortStates(args: GetInstancePortStatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstancePortStatesCommandOutput) => void): void;
    /**
     * <p>Returns information about all Amazon Lightsail virtual private servers, or
     *         <i>instances</i>.</p>
     */
    getInstances(args: GetInstancesCommandInput, options?: __HttpHandlerOptions): Promise<GetInstancesCommandOutput>;
    getInstances(args: GetInstancesCommandInput, cb: (err: any, data?: GetInstancesCommandOutput) => void): void;
    getInstances(args: GetInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstancesCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific instance snapshot.</p>
     */
    getInstanceSnapshot(args: GetInstanceSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceSnapshotCommandOutput>;
    getInstanceSnapshot(args: GetInstanceSnapshotCommandInput, cb: (err: any, data?: GetInstanceSnapshotCommandOutput) => void): void;
    getInstanceSnapshot(args: GetInstanceSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceSnapshotCommandOutput) => void): void;
    /**
     * <p>Returns all instance snapshots for the user's account.</p>
     */
    getInstanceSnapshots(args: GetInstanceSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceSnapshotsCommandOutput>;
    getInstanceSnapshots(args: GetInstanceSnapshotsCommandInput, cb: (err: any, data?: GetInstanceSnapshotsCommandOutput) => void): void;
    getInstanceSnapshots(args: GetInstanceSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns the state of a specific instance. Works on one instance at a time.</p>
     */
    getInstanceState(args: GetInstanceStateCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceStateCommandOutput>;
    getInstanceState(args: GetInstanceStateCommandInput, cb: (err: any, data?: GetInstanceStateCommandOutput) => void): void;
    getInstanceState(args: GetInstanceStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceStateCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific key pair.</p>
     */
    getKeyPair(args: GetKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyPairCommandOutput>;
    getKeyPair(args: GetKeyPairCommandInput, cb: (err: any, data?: GetKeyPairCommandOutput) => void): void;
    getKeyPair(args: GetKeyPairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetKeyPairCommandOutput) => void): void;
    /**
     * <p>Returns information about all key pairs in the user's account.</p>
     */
    getKeyPairs(args: GetKeyPairsCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyPairsCommandOutput>;
    getKeyPairs(args: GetKeyPairsCommandInput, cb: (err: any, data?: GetKeyPairsCommandOutput) => void): void;
    getKeyPairs(args: GetKeyPairsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetKeyPairsCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified Lightsail load balancer.</p>
     */
    getLoadBalancer(args: GetLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<GetLoadBalancerCommandOutput>;
    getLoadBalancer(args: GetLoadBalancerCommandInput, cb: (err: any, data?: GetLoadBalancerCommandOutput) => void): void;
    getLoadBalancer(args: GetLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Returns information about health metrics for your Lightsail load balancer.</p>
     *          <p>Metrics report the utilization of your resources, and the error counts generated by them.
     *       Monitor and collect metric data regularly to maintain the reliability, availability, and
     *       performance of your resources.</p>
     */
    getLoadBalancerMetricData(args: GetLoadBalancerMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetLoadBalancerMetricDataCommandOutput>;
    getLoadBalancerMetricData(args: GetLoadBalancerMetricDataCommandInput, cb: (err: any, data?: GetLoadBalancerMetricDataCommandOutput) => void): void;
    getLoadBalancerMetricData(args: GetLoadBalancerMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoadBalancerMetricDataCommandOutput) => void): void;
    /**
     * <p>Returns information about all load balancers in an account.</p>
     */
    getLoadBalancers(args: GetLoadBalancersCommandInput, options?: __HttpHandlerOptions): Promise<GetLoadBalancersCommandOutput>;
    getLoadBalancers(args: GetLoadBalancersCommandInput, cb: (err: any, data?: GetLoadBalancersCommandOutput) => void): void;
    getLoadBalancers(args: GetLoadBalancersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoadBalancersCommandOutput) => void): void;
    /**
     * <p>Returns information about the TLS certificates that are associated with the specified
     *       Lightsail load balancer.</p>
     *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
     *          <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One
     *       is active and the other is inactive.</p>
     */
    getLoadBalancerTlsCertificates(args: GetLoadBalancerTlsCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<GetLoadBalancerTlsCertificatesCommandOutput>;
    getLoadBalancerTlsCertificates(args: GetLoadBalancerTlsCertificatesCommandInput, cb: (err: any, data?: GetLoadBalancerTlsCertificatesCommandOutput) => void): void;
    getLoadBalancerTlsCertificates(args: GetLoadBalancerTlsCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoadBalancerTlsCertificatesCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific operation. Operations include events such as when you
     *       create an instance, allocate a static IP, attach a static IP, and so on.</p>
     */
    getOperation(args: GetOperationCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationCommandOutput>;
    getOperation(args: GetOperationCommandInput, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
    getOperation(args: GetOperationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
    /**
     * <p>Returns information about all operations.</p>
     *          <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged
     *       by making each subsequent call to <code>GetOperations</code> use the maximum (last)
     *         <code>statusChangedAt</code> value from the previous request.</p>
     */
    getOperations(args: GetOperationsCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationsCommandOutput>;
    getOperations(args: GetOperationsCommandInput, cb: (err: any, data?: GetOperationsCommandOutput) => void): void;
    getOperations(args: GetOperationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOperationsCommandOutput) => void): void;
    /**
     * <p>Gets operations for a specific resource (e.g., an instance or a static IP).</p>
     */
    getOperationsForResource(args: GetOperationsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationsForResourceCommandOutput>;
    getOperationsForResource(args: GetOperationsForResourceCommandInput, cb: (err: any, data?: GetOperationsForResourceCommandOutput) => void): void;
    getOperationsForResource(args: GetOperationsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOperationsForResourceCommandOutput) => void): void;
    /**
     * <p>Returns a list of all valid regions for Amazon Lightsail. Use the <code>include
     *         availability zones</code> parameter to also return the Availability Zones in a
     *       region.</p>
     */
    getRegions(args: GetRegionsCommandInput, options?: __HttpHandlerOptions): Promise<GetRegionsCommandOutput>;
    getRegions(args: GetRegionsCommandInput, cb: (err: any, data?: GetRegionsCommandOutput) => void): void;
    getRegions(args: GetRegionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRegionsCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific database in Amazon Lightsail.</p>
     */
    getRelationalDatabase(args: GetRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseCommandOutput>;
    getRelationalDatabase(args: GetRelationalDatabaseCommandInput, cb: (err: any, data?: GetRelationalDatabaseCommandOutput) => void): void;
    getRelationalDatabase(args: GetRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes
     *       the major engine version of a database.</p>
     *          <p>You can use a blueprint ID to create a new database that runs a specific database
     *       engine.</p>
     */
    getRelationalDatabaseBlueprints(args: GetRelationalDatabaseBlueprintsCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseBlueprintsCommandOutput>;
    getRelationalDatabaseBlueprints(args: GetRelationalDatabaseBlueprintsCommandInput, cb: (err: any, data?: GetRelationalDatabaseBlueprintsCommandOutput) => void): void;
    getRelationalDatabaseBlueprints(args: GetRelationalDatabaseBlueprintsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseBlueprintsCommandOutput) => void): void;
    /**
     * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the
     *       performance specifications for a database.</p>
     *          <p>You can use a bundle ID to create a new database with explicit performance
     *       specifications.</p>
     */
    getRelationalDatabaseBundles(args: GetRelationalDatabaseBundlesCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseBundlesCommandOutput>;
    getRelationalDatabaseBundles(args: GetRelationalDatabaseBundlesCommandInput, cb: (err: any, data?: GetRelationalDatabaseBundlesCommandOutput) => void): void;
    getRelationalDatabaseBundles(args: GetRelationalDatabaseBundlesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseBundlesCommandOutput) => void): void;
    /**
     * <p>Returns a list of events for a specific database in Amazon Lightsail.</p>
     */
    getRelationalDatabaseEvents(args: GetRelationalDatabaseEventsCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseEventsCommandOutput>;
    getRelationalDatabaseEvents(args: GetRelationalDatabaseEventsCommandInput, cb: (err: any, data?: GetRelationalDatabaseEventsCommandOutput) => void): void;
    getRelationalDatabaseEvents(args: GetRelationalDatabaseEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseEventsCommandOutput) => void): void;
    /**
     * <p>Returns a list of log events for a database in Amazon Lightsail.</p>
     */
    getRelationalDatabaseLogEvents(args: GetRelationalDatabaseLogEventsCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseLogEventsCommandOutput>;
    getRelationalDatabaseLogEvents(args: GetRelationalDatabaseLogEventsCommandInput, cb: (err: any, data?: GetRelationalDatabaseLogEventsCommandOutput) => void): void;
    getRelationalDatabaseLogEvents(args: GetRelationalDatabaseLogEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseLogEventsCommandOutput) => void): void;
    /**
     * <p>Returns a list of available log streams for a specific database in Amazon Lightsail.</p>
     */
    getRelationalDatabaseLogStreams(args: GetRelationalDatabaseLogStreamsCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseLogStreamsCommandOutput>;
    getRelationalDatabaseLogStreams(args: GetRelationalDatabaseLogStreamsCommandInput, cb: (err: any, data?: GetRelationalDatabaseLogStreamsCommandOutput) => void): void;
    getRelationalDatabaseLogStreams(args: GetRelationalDatabaseLogStreamsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseLogStreamsCommandOutput) => void): void;
    /**
     * <p>Returns the current, previous, or pending versions of the master user password for a
     *       Lightsail database.</p>
     *          <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based
     *       access control via resource tags applied to the resource identified by
     *       relationalDatabaseName.</p>
     */
    getRelationalDatabaseMasterUserPassword(args: GetRelationalDatabaseMasterUserPasswordCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput>;
    getRelationalDatabaseMasterUserPassword(args: GetRelationalDatabaseMasterUserPasswordCommandInput, cb: (err: any, data?: GetRelationalDatabaseMasterUserPasswordCommandOutput) => void): void;
    getRelationalDatabaseMasterUserPassword(args: GetRelationalDatabaseMasterUserPasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseMasterUserPasswordCommandOutput) => void): void;
    /**
     * <p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p>
     *          <p>Metrics report the utilization of your resources, and the error counts generated by them.
     *       Monitor and collect metric data regularly to maintain the reliability, availability, and
     *       performance of your resources.</p>
     */
    getRelationalDatabaseMetricData(args: GetRelationalDatabaseMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseMetricDataCommandOutput>;
    getRelationalDatabaseMetricData(args: GetRelationalDatabaseMetricDataCommandInput, cb: (err: any, data?: GetRelationalDatabaseMetricDataCommandOutput) => void): void;
    getRelationalDatabaseMetricData(args: GetRelationalDatabaseMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseMetricDataCommandOutput) => void): void;
    /**
     * <p>Returns all of the runtime parameters offered by the underlying database software, or
     *       engine, for a specific database in Amazon Lightsail.</p>
     *          <p>In addition to the parameter names and values, this operation returns other information
     *       about each parameter. This information includes whether changes require a reboot, whether the
     *       parameter is modifiable, the allowed values, and the data types.</p>
     */
    getRelationalDatabaseParameters(args: GetRelationalDatabaseParametersCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseParametersCommandOutput>;
    getRelationalDatabaseParameters(args: GetRelationalDatabaseParametersCommandInput, cb: (err: any, data?: GetRelationalDatabaseParametersCommandOutput) => void): void;
    getRelationalDatabaseParameters(args: GetRelationalDatabaseParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseParametersCommandOutput) => void): void;
    /**
     * <p>Returns information about all of your databases in Amazon Lightsail.</p>
     */
    getRelationalDatabases(args: GetRelationalDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabasesCommandOutput>;
    getRelationalDatabases(args: GetRelationalDatabasesCommandInput, cb: (err: any, data?: GetRelationalDatabasesCommandOutput) => void): void;
    getRelationalDatabases(args: GetRelationalDatabasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabasesCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific database snapshot in Amazon Lightsail.</p>
     */
    getRelationalDatabaseSnapshot(args: GetRelationalDatabaseSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseSnapshotCommandOutput>;
    getRelationalDatabaseSnapshot(args: GetRelationalDatabaseSnapshotCommandInput, cb: (err: any, data?: GetRelationalDatabaseSnapshotCommandOutput) => void): void;
    getRelationalDatabaseSnapshot(args: GetRelationalDatabaseSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseSnapshotCommandOutput) => void): void;
    /**
     * <p>Returns information about all of your database snapshots in Amazon Lightsail.</p>
     */
    getRelationalDatabaseSnapshots(args: GetRelationalDatabaseSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseSnapshotsCommandOutput>;
    getRelationalDatabaseSnapshots(args: GetRelationalDatabaseSnapshotsCommandInput, cb: (err: any, data?: GetRelationalDatabaseSnapshotsCommandOutput) => void): void;
    getRelationalDatabaseSnapshots(args: GetRelationalDatabaseSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns information about an Amazon Lightsail static IP.</p>
     */
    getStaticIp(args: GetStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<GetStaticIpCommandOutput>;
    getStaticIp(args: GetStaticIpCommandInput, cb: (err: any, data?: GetStaticIpCommandOutput) => void): void;
    getStaticIp(args: GetStaticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStaticIpCommandOutput) => void): void;
    /**
     * <p>Returns information about all static IPs in the user's account.</p>
     */
    getStaticIps(args: GetStaticIpsCommandInput, options?: __HttpHandlerOptions): Promise<GetStaticIpsCommandOutput>;
    getStaticIps(args: GetStaticIpsCommandInput, cb: (err: any, data?: GetStaticIpsCommandOutput) => void): void;
    getStaticIps(args: GetStaticIpsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStaticIpsCommandOutput) => void): void;
    /**
     * <p>Imports a public SSH key from a specific key pair.</p>
     */
    importKeyPair(args: ImportKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<ImportKeyPairCommandOutput>;
    importKeyPair(args: ImportKeyPairCommandInput, cb: (err: any, data?: ImportKeyPairCommandOutput) => void): void;
    importKeyPair(args: ImportKeyPairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportKeyPairCommandOutput) => void): void;
    /**
     * <p>Returns a Boolean value indicating whether your Lightsail VPC is peered.</p>
     */
    isVpcPeered(args: IsVpcPeeredCommandInput, options?: __HttpHandlerOptions): Promise<IsVpcPeeredCommandOutput>;
    isVpcPeered(args: IsVpcPeeredCommandInput, cb: (err: any, data?: IsVpcPeeredCommandOutput) => void): void;
    isVpcPeered(args: IsVpcPeeredCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: IsVpcPeeredCommandOutput) => void): void;
    /**
     * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses
     *       allowed to connect to the instance through the ports, and the protocol.</p>
     *          <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via
     *       resource tags applied to the resource identified by <code>instanceName</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    openInstancePublicPorts(args: OpenInstancePublicPortsCommandInput, options?: __HttpHandlerOptions): Promise<OpenInstancePublicPortsCommandOutput>;
    openInstancePublicPorts(args: OpenInstancePublicPortsCommandInput, cb: (err: any, data?: OpenInstancePublicPortsCommandOutput) => void): void;
    openInstancePublicPorts(args: OpenInstancePublicPortsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: OpenInstancePublicPortsCommandOutput) => void): void;
    /**
     * <p>Tries to peer the Lightsail VPC with the user's default VPC.</p>
     */
    peerVpc(args: PeerVpcCommandInput, options?: __HttpHandlerOptions): Promise<PeerVpcCommandOutput>;
    peerVpc(args: PeerVpcCommandInput, cb: (err: any, data?: PeerVpcCommandOutput) => void): void;
    peerVpc(args: PeerVpcCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PeerVpcCommandOutput) => void): void;
    /**
     * <p>Creates or updates an alarm, and associates it with the specified metric.</p>
     *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
     *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
     *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
     *         in Amazon Lightsail</a>.</p>
     *          <p>When this action creates an alarm, the alarm state is immediately set to
     *         <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
     *       appropriately. Any actions associated with the new state are then executed.</p>
     *          <p>When you update an existing alarm, its state is left unchanged, but the update completely
     *       overwrites the previous configuration of the alarm. The alarm is then evaluated with the
     *       updated configuration.</p>
     */
    putAlarm(args: PutAlarmCommandInput, options?: __HttpHandlerOptions): Promise<PutAlarmCommandOutput>;
    putAlarm(args: PutAlarmCommandInput, cb: (err: any, data?: PutAlarmCommandOutput) => void): void;
    putAlarm(args: PutAlarmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAlarmCommandOutput) => void): void;
    /**
     * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses
     *       allowed to connect to the instance through the ports, and the protocol. This action also
     *       closes all currently open ports that are not included in the request. Include all of the ports
     *       and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use
     *       the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open
     *       ports.</p>
     *          <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via
     *       resource tags applied to the resource identified by <code>instanceName</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    putInstancePublicPorts(args: PutInstancePublicPortsCommandInput, options?: __HttpHandlerOptions): Promise<PutInstancePublicPortsCommandOutput>;
    putInstancePublicPorts(args: PutInstancePublicPortsCommandInput, cb: (err: any, data?: PutInstancePublicPortsCommandOutput) => void): void;
    putInstancePublicPorts(args: PutInstancePublicPortsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutInstancePublicPortsCommandOutput) => void): void;
    /**
     * <p>Restarts a specific instance.</p>
     *          <p>The <code>reboot instance</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>instance name</code>. For more information,
     *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    rebootInstance(args: RebootInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RebootInstanceCommandOutput>;
    rebootInstance(args: RebootInstanceCommandInput, cb: (err: any, data?: RebootInstanceCommandOutput) => void): void;
    rebootInstance(args: RebootInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootInstanceCommandOutput) => void): void;
    /**
     * <p>Restarts a specific database in Amazon Lightsail.</p>
     *          <p>The <code>reboot relational database</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by relationalDatabaseName. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    rebootRelationalDatabase(args: RebootRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<RebootRelationalDatabaseCommandOutput>;
    rebootRelationalDatabase(args: RebootRelationalDatabaseCommandInput, cb: (err: any, data?: RebootRelationalDatabaseCommandOutput) => void): void;
    rebootRelationalDatabase(args: RebootRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Registers a container image to your Amazon Lightsail container service.</p>
     *
     *          <note>
     *             <p>This action is not required if you install and use the Lightsail Control
     *         (lightsailctl) plugin to push container images to your Lightsail container service. For
     *         more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a>
     *         in the <i>Lightsail Dev Guide</i>.</p>
     *          </note>
     */
    registerContainerImage(args: RegisterContainerImageCommandInput, options?: __HttpHandlerOptions): Promise<RegisterContainerImageCommandOutput>;
    registerContainerImage(args: RegisterContainerImageCommandInput, cb: (err: any, data?: RegisterContainerImageCommandOutput) => void): void;
    registerContainerImage(args: RegisterContainerImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterContainerImageCommandOutput) => void): void;
    /**
     * <p>Deletes a specific static IP from your account.</p>
     */
    releaseStaticIp(args: ReleaseStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<ReleaseStaticIpCommandOutput>;
    releaseStaticIp(args: ReleaseStaticIpCommandInput, cb: (err: any, data?: ReleaseStaticIpCommandOutput) => void): void;
    releaseStaticIp(args: ReleaseStaticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReleaseStaticIpCommandOutput) => void): void;
    /**
     * <p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN)
     *       distribution.</p>
     *          <p>After resetting the cache, the next time a content request is made, your distribution
     *       pulls, serves, and caches it from the origin.</p>
     */
    resetDistributionCache(args: ResetDistributionCacheCommandInput, options?: __HttpHandlerOptions): Promise<ResetDistributionCacheCommandOutput>;
    resetDistributionCache(args: ResetDistributionCacheCommandInput, cb: (err: any, data?: ResetDistributionCacheCommandOutput) => void): void;
    resetDistributionCache(args: ResetDistributionCacheCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetDistributionCacheCommandOutput) => void): void;
    /**
     * <p>Sends a verification request to an email contact method to ensure it's owned by the
     *       requester. SMS contact methods don't need to be verified.</p>
     *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
     *       You can add one email address and one mobile phone number contact method in each AWS Region.
     *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
     *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
     *          <p>A verification request is sent to the contact method when you initially create it. Use
     *       this action to send another verification request if a previous verification request was
     *       deleted, or has expired.</p>
     *          <important>
     *             <p>Notifications are not sent to an email contact method until after it is verified, and
     *         confirmed as valid.</p>
     *          </important>
     */
    sendContactMethodVerification(args: SendContactMethodVerificationCommandInput, options?: __HttpHandlerOptions): Promise<SendContactMethodVerificationCommandOutput>;
    sendContactMethodVerification(args: SendContactMethodVerificationCommandInput, cb: (err: any, data?: SendContactMethodVerificationCommandOutput) => void): void;
    sendContactMethodVerification(args: SendContactMethodVerificationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendContactMethodVerificationCommandOutput) => void): void;
    /**
     * <p>Sets the IP address type for an Amazon Lightsail resource.</p>
     *
     *          <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the
     *       specified resource. Alternately, you can use this action to disable dual-stack, and enable
     *       IPv4 only.</p>
     */
    setIpAddressType(args: SetIpAddressTypeCommandInput, options?: __HttpHandlerOptions): Promise<SetIpAddressTypeCommandOutput>;
    setIpAddressType(args: SetIpAddressTypeCommandInput, cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void): void;
    setIpAddressType(args: SetIpAddressTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void): void;
    /**
     * <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance,
     *       use the <code>reboot instance</code> operation.</p>
     *          <note>
     *             <p>When you start a stopped instance, Lightsail assigns a new public IP address to the
     *         instance. To use the same IP address after stopping and starting an instance, create a
     *         static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p>
     *          </note>
     *          <p>The <code>start instance</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>instance name</code>. For more information,
     *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    startInstance(args: StartInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StartInstanceCommandOutput>;
    startInstance(args: StartInstanceCommandInput, cb: (err: any, data?: StartInstanceCommandOutput) => void): void;
    startInstance(args: StartInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartInstanceCommandOutput) => void): void;
    /**
     * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database,
     *       use the <code>reboot relational database</code> operation.</p>
     *          <p>The <code>start relational database</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by relationalDatabaseName. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    startRelationalDatabase(args: StartRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<StartRelationalDatabaseCommandOutput>;
    startRelationalDatabase(args: StartRelationalDatabaseCommandInput, cb: (err: any, data?: StartRelationalDatabaseCommandOutput) => void): void;
    startRelationalDatabase(args: StartRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Stops a specific Amazon Lightsail instance that is currently running.</p>
     *          <note>
     *             <p>When you start a stopped instance, Lightsail assigns a new public IP address to the
     *         instance. To use the same IP address after stopping and starting an instance, create a
     *         static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p>
     *          </note>
     *          <p>The <code>stop instance</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>instance name</code>. For more information,
     *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    stopInstance(args: StopInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StopInstanceCommandOutput>;
    stopInstance(args: StopInstanceCommandInput, cb: (err: any, data?: StopInstanceCommandOutput) => void): void;
    stopInstance(args: StopInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopInstanceCommandOutput) => void): void;
    /**
     * <p>Stops a specific database that is currently running in Amazon Lightsail.</p>
     *          <p>The <code>stop relational database</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by relationalDatabaseName. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    stopRelationalDatabase(args: StopRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<StopRelationalDatabaseCommandOutput>;
    stopRelationalDatabase(args: StopRelationalDatabaseCommandInput, cb: (err: any, data?: StopRelationalDatabaseCommandOutput) => void): void;
    stopRelationalDatabase(args: StopRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a
     *       maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique
     *       per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     *          <p>The <code>tag resource</code> operation supports tag-based access control via request tags
     *       and resource tags applied to the resource identified by <code>resource name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification
     *       trigger is configured for the specified alarm, the test also sends a notification to the
     *       notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the
     *       alarm.</p>
     *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
     *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
     *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
     *         in Amazon Lightsail</a>.</p>
     */
    testAlarm(args: TestAlarmCommandInput, options?: __HttpHandlerOptions): Promise<TestAlarmCommandOutput>;
    testAlarm(args: TestAlarmCommandInput, cb: (err: any, data?: TestAlarmCommandOutput) => void): void;
    testAlarm(args: TestAlarmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestAlarmCommandOutput) => void): void;
    /**
     * <p>Attempts to unpeer the Lightsail VPC from the user's default VPC.</p>
     */
    unpeerVpc(args: UnpeerVpcCommandInput, options?: __HttpHandlerOptions): Promise<UnpeerVpcCommandOutput>;
    unpeerVpc(args: UnpeerVpcCommandInput, cb: (err: any, data?: UnpeerVpcCommandOutput) => void): void;
    unpeerVpc(args: UnpeerVpcCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnpeerVpcCommandOutput) => void): void;
    /**
     * <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail
     *       resource.</p>
     *          <p>The <code>untag resource</code> operation supports tag-based access control via request
     *       tags and resource tags applied to the resource identified by <code>resource name</code>. For
     *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the configuration of your Amazon Lightsail container service, such as its power,
     *       scale, and public domain names.</p>
     */
    updateContainerService(args: UpdateContainerServiceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContainerServiceCommandOutput>;
    updateContainerService(args: UpdateContainerServiceCommandInput, cb: (err: any, data?: UpdateContainerServiceCommandOutput) => void): void;
    updateContainerService(args: UpdateContainerServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContainerServiceCommandOutput) => void): void;
    /**
     * <p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p>
     *          <p>Use this action to update the configuration of your existing distribution</p>
     */
    updateDistribution(args: UpdateDistributionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDistributionCommandOutput>;
    updateDistribution(args: UpdateDistributionCommandInput, cb: (err: any, data?: UpdateDistributionCommandOutput) => void): void;
    updateDistribution(args: UpdateDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDistributionCommandOutput) => void): void;
    /**
     * <p>Updates the bundle of your Amazon Lightsail content delivery network (CDN)
     *       distribution.</p>
     *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
     *       your dsitribution.</p>
     *          <p>Update your distribution's bundle if your distribution is going over its monthly network
     *       transfer quota and is incurring an overage fee.</p>
     *          <p>You can update your distribution's bundle only one time within your monthly AWS billing
     *       cycle. To determine if you can update your distribution's bundle, use the
     *         <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the
     *       result will indicate whether you can currently update your distribution's bundle.</p>
     */
    updateDistributionBundle(args: UpdateDistributionBundleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDistributionBundleCommandOutput>;
    updateDistributionBundle(args: UpdateDistributionBundleCommandInput, cb: (err: any, data?: UpdateDistributionBundleCommandOutput) => void): void;
    updateDistributionBundle(args: UpdateDistributionBundleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDistributionBundleCommandOutput) => void): void;
    /**
     * <p>Updates a domain recordset after it is created.</p>
     *          <p>The <code>update domain entry</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>domain name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    updateDomainEntry(args: UpdateDomainEntryCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainEntryCommandOutput>;
    updateDomainEntry(args: UpdateDomainEntryCommandInput, cb: (err: any, data?: UpdateDomainEntryCommandOutput) => void): void;
    updateDomainEntry(args: UpdateDomainEntryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainEntryCommandOutput) => void): void;
    /**
     * <p>Updates the specified attribute for a load balancer. You can only update one attribute at
     *       a time.</p>
     *          <p>The <code>update load balancer attribute</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    updateLoadBalancerAttribute(args: UpdateLoadBalancerAttributeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLoadBalancerAttributeCommandOutput>;
    updateLoadBalancerAttribute(args: UpdateLoadBalancerAttributeCommandInput, cb: (err: any, data?: UpdateLoadBalancerAttributeCommandOutput) => void): void;
    updateLoadBalancerAttribute(args: UpdateLoadBalancerAttributeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLoadBalancerAttributeCommandOutput) => void): void;
    /**
     * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p>
     *          <p>Updates are applied immediately, or in cases where the updates could result in an outage,
     *       are applied during the database's predefined maintenance window.</p>
     *          <p>The <code>update relational database</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by relationalDatabaseName. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    updateRelationalDatabase(args: UpdateRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRelationalDatabaseCommandOutput>;
    updateRelationalDatabase(args: UpdateRelationalDatabaseCommandInput, cb: (err: any, data?: UpdateRelationalDatabaseCommandOutput) => void): void;
    updateRelationalDatabase(args: UpdateRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p>
     *          <p>Parameter updates don't cause outages; therefore, their application is not subject to the
     *       preferred maintenance window. However, there are two ways in which parameter updates are
     *       applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a
     *         <code>dynamic</code> apply type are applied immediately. Parameters marked with a
     *         <code>pending-reboot</code> apply type are applied only after the database is rebooted using
     *       the <code>reboot relational database</code> operation.</p>
     *          <p>The <code>update relational database parameters</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by relationalDatabaseName. For
     *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    updateRelationalDatabaseParameters(args: UpdateRelationalDatabaseParametersCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRelationalDatabaseParametersCommandOutput>;
    updateRelationalDatabaseParameters(args: UpdateRelationalDatabaseParametersCommandInput, cb: (err: any, data?: UpdateRelationalDatabaseParametersCommandOutput) => void): void;
    updateRelationalDatabaseParameters(args: UpdateRelationalDatabaseParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRelationalDatabaseParametersCommandOutput) => void): void;
}
