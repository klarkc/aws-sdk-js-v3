import { GlobalAcceleratorClient } from "./GlobalAcceleratorClient";
import { AddCustomRoutingEndpointsCommandInput, AddCustomRoutingEndpointsCommandOutput } from "./commands/AddCustomRoutingEndpointsCommand";
import { AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput } from "./commands/AdvertiseByoipCidrCommand";
import { AllowCustomRoutingTrafficCommandInput, AllowCustomRoutingTrafficCommandOutput } from "./commands/AllowCustomRoutingTrafficCommand";
import { CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput } from "./commands/CreateAcceleratorCommand";
import { CreateCustomRoutingAcceleratorCommandInput, CreateCustomRoutingAcceleratorCommandOutput } from "./commands/CreateCustomRoutingAcceleratorCommand";
import { CreateCustomRoutingEndpointGroupCommandInput, CreateCustomRoutingEndpointGroupCommandOutput } from "./commands/CreateCustomRoutingEndpointGroupCommand";
import { CreateCustomRoutingListenerCommandInput, CreateCustomRoutingListenerCommandOutput } from "./commands/CreateCustomRoutingListenerCommand";
import { CreateEndpointGroupCommandInput, CreateEndpointGroupCommandOutput } from "./commands/CreateEndpointGroupCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "./commands/CreateListenerCommand";
import { DeleteAcceleratorCommandInput, DeleteAcceleratorCommandOutput } from "./commands/DeleteAcceleratorCommand";
import { DeleteCustomRoutingAcceleratorCommandInput, DeleteCustomRoutingAcceleratorCommandOutput } from "./commands/DeleteCustomRoutingAcceleratorCommand";
import { DeleteCustomRoutingEndpointGroupCommandInput, DeleteCustomRoutingEndpointGroupCommandOutput } from "./commands/DeleteCustomRoutingEndpointGroupCommand";
import { DeleteCustomRoutingListenerCommandInput, DeleteCustomRoutingListenerCommandOutput } from "./commands/DeleteCustomRoutingListenerCommand";
import { DeleteEndpointGroupCommandInput, DeleteEndpointGroupCommandOutput } from "./commands/DeleteEndpointGroupCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "./commands/DeleteListenerCommand";
import { DenyCustomRoutingTrafficCommandInput, DenyCustomRoutingTrafficCommandOutput } from "./commands/DenyCustomRoutingTrafficCommand";
import { DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput } from "./commands/DeprovisionByoipCidrCommand";
import { DescribeAcceleratorAttributesCommandInput, DescribeAcceleratorAttributesCommandOutput } from "./commands/DescribeAcceleratorAttributesCommand";
import { DescribeAcceleratorCommandInput, DescribeAcceleratorCommandOutput } from "./commands/DescribeAcceleratorCommand";
import { DescribeCustomRoutingAcceleratorAttributesCommandInput, DescribeCustomRoutingAcceleratorAttributesCommandOutput } from "./commands/DescribeCustomRoutingAcceleratorAttributesCommand";
import { DescribeCustomRoutingAcceleratorCommandInput, DescribeCustomRoutingAcceleratorCommandOutput } from "./commands/DescribeCustomRoutingAcceleratorCommand";
import { DescribeCustomRoutingEndpointGroupCommandInput, DescribeCustomRoutingEndpointGroupCommandOutput } from "./commands/DescribeCustomRoutingEndpointGroupCommand";
import { DescribeCustomRoutingListenerCommandInput, DescribeCustomRoutingListenerCommandOutput } from "./commands/DescribeCustomRoutingListenerCommand";
import { DescribeEndpointGroupCommandInput, DescribeEndpointGroupCommandOutput } from "./commands/DescribeEndpointGroupCommand";
import { DescribeListenerCommandInput, DescribeListenerCommandOutput } from "./commands/DescribeListenerCommand";
import { ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput } from "./commands/ListAcceleratorsCommand";
import { ListByoipCidrsCommandInput, ListByoipCidrsCommandOutput } from "./commands/ListByoipCidrsCommand";
import { ListCustomRoutingAcceleratorsCommandInput, ListCustomRoutingAcceleratorsCommandOutput } from "./commands/ListCustomRoutingAcceleratorsCommand";
import { ListCustomRoutingEndpointGroupsCommandInput, ListCustomRoutingEndpointGroupsCommandOutput } from "./commands/ListCustomRoutingEndpointGroupsCommand";
import { ListCustomRoutingListenersCommandInput, ListCustomRoutingListenersCommandOutput } from "./commands/ListCustomRoutingListenersCommand";
import { ListCustomRoutingPortMappingsByDestinationCommandInput, ListCustomRoutingPortMappingsByDestinationCommandOutput } from "./commands/ListCustomRoutingPortMappingsByDestinationCommand";
import { ListCustomRoutingPortMappingsCommandInput, ListCustomRoutingPortMappingsCommandOutput } from "./commands/ListCustomRoutingPortMappingsCommand";
import { ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput } from "./commands/ListEndpointGroupsCommand";
import { ListListenersCommandInput, ListListenersCommandOutput } from "./commands/ListListenersCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput } from "./commands/ProvisionByoipCidrCommand";
import { RemoveCustomRoutingEndpointsCommandInput, RemoveCustomRoutingEndpointsCommandOutput } from "./commands/RemoveCustomRoutingEndpointsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAcceleratorAttributesCommandInput, UpdateAcceleratorAttributesCommandOutput } from "./commands/UpdateAcceleratorAttributesCommand";
import { UpdateAcceleratorCommandInput, UpdateAcceleratorCommandOutput } from "./commands/UpdateAcceleratorCommand";
import { UpdateCustomRoutingAcceleratorAttributesCommandInput, UpdateCustomRoutingAcceleratorAttributesCommandOutput } from "./commands/UpdateCustomRoutingAcceleratorAttributesCommand";
import { UpdateCustomRoutingAcceleratorCommandInput, UpdateCustomRoutingAcceleratorCommandOutput } from "./commands/UpdateCustomRoutingAcceleratorCommand";
import { UpdateCustomRoutingListenerCommandInput, UpdateCustomRoutingListenerCommandOutput } from "./commands/UpdateCustomRoutingListenerCommand";
import { UpdateEndpointGroupCommandInput, UpdateEndpointGroupCommandOutput } from "./commands/UpdateEndpointGroupCommand";
import { UpdateListenerCommandInput, UpdateListenerCommandOutput } from "./commands/UpdateListenerCommand";
import { WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput } from "./commands/WithdrawByoipCidrCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Global Accelerator</fullname>
 * 		       <p>This is the <i>AWS Global Accelerator API Reference</i>. This guide is for developers who need detailed information about
 * 			AWS Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/Welcome.html">AWS Global Accelerator Developer Guide</a>.</p>
 *
 * 		       <p>AWS Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance
 * 			of your applications for local and global users. Depending on the type of accelerator you choose, you can
 * 			gain additional benefits. </p>
 * 		       <ul>
 *             <li>
 *                <p>By using a standard accelerator, you can improve availability of your internet applications
 * 				that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the AWS
 * 				global network. </p>
 *             </li>
 *             <li>
 *                <p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you
 * 				can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p>
 *             </li>
 *          </ul>
 * 		       <important>
 * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
 * 				US West (Oregon) Region to create or update accelerators.</p>
 * 		       </important>
 * 		       <p>By default, Global Accelerator provides you with two static IP addresses that you associate with your accelerator. With
 * 			a standard accelerator, instead of using the
 * 			IP addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges
 * 			that you bring to Global Accelerator. The static IP addresses are anycast from the AWS edge network. For a standard accelerator,
 * 			they distribute incoming application traffic across multiple endpoint resources in multiple AWS Regions, which increases
 * 			the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers,
 * 			Amazon EC2 instances, or Elastic IP addresses that are located in one AWS Region or multiple Regions. For custom routing
 * 			accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that
 * 			are virtual private cloud (VPC) subnets.</p>
 *
 * 		       <important>
 *             <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you
 * 				disable the accelerator and it no longer accepts or routes traffic. However, when you
 * 					<i>delete</i> an accelerator, you lose the static IP addresses that
 * 				are assigned to it, so you can no longer route traffic by using them. You can use
 * 				IAM policies like tag-based permissions with Global Accelerator to limit the users who have
 * 				permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p>
 *          </important>
 * 		       <p>For standard accelerators, Global Accelerator uses the AWS global network to route traffic to the optimal regional endpoint based
 * 			on health, client location, and policies that you configure. The service reacts instantly to
 * 			changes in health or configuration to ensure that internet traffic from clients is always
 * 			directed to healthy endpoints.</p>
 *
 * 		       <p>For a list of the AWS Regions where Global Accelerator and other services are currently supported, see the
 * 			<a href="https://docs.aws.amazon.com/about-aws/global-infrastructure/regional-product-services/">AWS
 * 				Region Table</a>.</p>
 *
 * 		       <p>AWS Global Accelerator includes the following components:</p>
 * 		       <dl>
 *             <dt>Static IP addresses</dt>
 *             <dd>
 *                <p>Global Accelerator provides you with a set of two static IP addresses that are anycast from the AWS edge
 * 					network. If you bring your own IP address range to AWS (BYOIP) to use with a standard accelerator, you
 * 					can instead assign IP addresses from your own pool to use with your accelerator. For more information,
 * 					see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">
 * 						Bring your own IP addresses (BYOIP) in AWS Global Accelerator</a>.</p>
 * 					          <p>The IP addresses serve as single fixed entry points for your clients. If you already have Elastic
 * 						Load Balancing load balancers, Amazon EC2 instances, or Elastic IP address resources set up for your applications,
 * 						you can easily add those to a standard accelerator in Global Accelerator. This allows Global Accelerator to use static IP addresses
 * 						to access the resources.</p>
 * 					          <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even
 * 						if you disable the accelerator and it no longer accepts or routes traffic.
 * 						However, when you <i>delete</i> an accelerator, you lose the
 * 						static IP addresses that are assigned to it, so you can no longer route
 * 						traffic by using them. You can use IAM policies like tag-based permissions
 * 						with Global Accelerator to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p>
 * 				        </dd>
 *             <dt>Accelerator</dt>
 *             <dd>
 *                <p>An accelerator directs traffic to endpoints over the AWS global network to improve the
 * 					performance of your internet applications. Each accelerator includes one or more listeners.</p>
 * 					          <p>There are two types of accelerators:</p>
 * 					          <ul>
 *                   <li>
 *                      <p>A <i>standard</i> accelerator directs traffic to the optimal AWS endpoint based
 * 							on several factors, including the user’s location, the health of the endpoint, and the endpoint weights
 * 							that you configure. This improves the availability and performance of your applications.
 * 							Endpoints can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses.</p>
 *                   </li>
 *                   <li>
 *                      <p>A <i>custom routing</i> accelerator directs traffic to one of possibly thousands of
 * 								Amazon EC2 instances running in a single or multiple virtual private
 * 								clouds (VPCs). With custom routing, listener ports are mapped to
 * 								statically associate port ranges with VPC subnets, which
 * 								allows Global Accelerator to determine an EC2 instance IP address at the time of
 * 								connection. By default, all port mapping destinations in a VPC
 * 								subnet can't receive traffic. You can choose to configure all
 * 								destinations in the subnet to receive traffic, or to specify
 * 								individual port mappings that can receive traffic.</p>
 *                   </li>
 *                </ul>
 * 					          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-accelerator-types.html">Types of accelerators</a>.</p>
 * 				        </dd>
 *             <dt>DNS name</dt>
 *             <dd>
 *                <p>Global Accelerator assigns each accelerator a default Domain Name System (DNS) name, similar to
 * 					<code>a1234567890abcdef.awsglobalaccelerator.com</code>, that points to
 * 					the static IP addresses that Global Accelerator assigns to you or that you choose from your
 * 					own IP address range. Depending on the use
 * 					case, you can use your accelerator's static IP addresses or DNS name to
 * 					route traffic to your accelerator, or set up DNS records to route traffic using
 * 					your own custom domain name.</p>
 * 				        </dd>
 *             <dt>Network zone</dt>
 *             <dd>
 *                <p>A network zone services the static IP addresses for your accelerator from a unique IP subnet. Similar to an
 * 					AWS Availability Zone, a network zone is an isolated unit with its own set of physical infrastructure.
 * 					When you configure an accelerator, by default, Global Accelerator allocates two IPv4 addresses for it. If one IP address from a
 * 					network zone becomes unavailable due to IP address blocking by certain client networks, or network
 * 					disruptions, then client applications can retry on the healthy static IP address from the other isolated
 * 					network zone.</p>
 * 				        </dd>
 *             <dt>Listener</dt>
 *             <dd>
 *                <p>A listener processes inbound connections from clients to Global Accelerator, based on the port (or port range)
 * 					and protocol (or protocols) that you configure. A listener can be configured for TCP, UDP, or both TCP and UDP protocols. Each
 * 					listener has one or more endpoint groups associated with it, and traffic is forwarded
 * 					to endpoints in one of the groups. You associate endpoint groups with listeners by specifying the Regions that you
 * 					want to distribute traffic to. With a standard accelerator, traffic is distributed to optimal endpoints within the endpoint
 * 					groups associated with a listener.</p>
 *             </dd>
 *             <dt>Endpoint group</dt>
 *             <dd>
 *                <p>Each endpoint group is associated with a specific AWS Region. Endpoint groups include one or
 * 					more endpoints in the Region. With a standard accelerator, you can increase or reduce the percentage of
 * 					traffic that would be otherwise directed to an endpoint group by adjusting a
 * 					setting called a <i>traffic dial</i>. The traffic dial lets
 * 					you easily do performance testing or blue/green deployment testing, for example, for new
 * 					releases across different AWS Regions. </p>
 * 				        </dd>
 *             <dt>Endpoint</dt>
 *             <dd>
 *                <p>An endpoint is a resource that Global Accelerator directs traffic to.</p>
 * 					          <p>Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP
 * 						addresses. An Application Load Balancer endpoint can be internet-facing or internal. Traffic for
 * 						standard accelerators is routed to endpoints based on the health of the
 * 						endpoint along with configuration options that you choose, such as endpoint
 * 						weights. For each endpoint, you can configure weights, which are numbers
 * 						that you can use to specify the proportion of traffic to route to each one.
 * 						This can be useful, for example, to do performance testing within a
 * 						Region.</p>
 * 					          <p>Endpoints for custom routing accelerators are virtual private cloud (VPC) subnets with one
 * 						or many EC2 instances.</p>
 * 				        </dd>
 *          </dl>
 */
export declare class GlobalAccelerator extends GlobalAcceleratorClient {
    /**
     * <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p>
     * 	        <p>The listener port range must be large enough to support the number of IP addresses that can be
     * 		specified in your subnet. The number of ports required is: subnet size times the number
     * 		of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener
     * 		port range of at least 255 ports. </p>
     * 	        <p>Note: You must have enough remaining listener ports available to
     * 		map to the subnet ports, or the call will fail with a LimitExceededException.</p>
     * 	        <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all
     * 			destinations to receive traffic, or to specify individual port mappings that can receive
     * 			traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
     * 				AllowCustomRoutingTraffic</a> operation.</p>
     */
    addCustomRoutingEndpoints(args: AddCustomRoutingEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<AddCustomRoutingEndpointsCommandOutput>;
    addCustomRoutingEndpoints(args: AddCustomRoutingEndpointsCommandInput, cb: (err: any, data?: AddCustomRoutingEndpointsCommandOutput) => void): void;
    addCustomRoutingEndpoints(args: AddCustomRoutingEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddCustomRoutingEndpointsCommandOutput) => void): void;
    /**
     * <p>Advertises an IPv4 address range that is provisioned for use with your AWS resources
     * 			through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to
     * 			the specified addresses starts routing to AWS because of propagation delays. </p>
     * 		       <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">
     * 			WithdrawByoipCidr</a>.</p>
     * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
     * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
     */
    advertiseByoipCidr(args: AdvertiseByoipCidrCommandInput, options?: __HttpHandlerOptions): Promise<AdvertiseByoipCidrCommandOutput>;
    advertiseByoipCidr(args: AdvertiseByoipCidrCommandInput, cb: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void): void;
    advertiseByoipCidr(args: AdvertiseByoipCidrCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void): void;
    /**
     * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic
     * 			for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a
     * 			specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports
     * 			outside of the range that you configured for the endpoint group.</p>
     * 		       <p>After you make changes, you can verify that the updates are complete by checking the status of your
     * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
     */
    allowCustomRoutingTraffic(args: AllowCustomRoutingTrafficCommandInput, options?: __HttpHandlerOptions): Promise<AllowCustomRoutingTrafficCommandOutput>;
    allowCustomRoutingTraffic(args: AllowCustomRoutingTrafficCommandInput, cb: (err: any, data?: AllowCustomRoutingTrafficCommandOutput) => void): void;
    allowCustomRoutingTraffic(args: AllowCustomRoutingTrafficCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AllowCustomRoutingTrafficCommandOutput) => void): void;
    /**
     * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic
     * 			to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p>
     * 		       <important>
     * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
     * 				US West (Oregon) Region to create or update accelerators.</p>
     * 		       </important>
     */
    createAccelerator(args: CreateAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<CreateAcceleratorCommandOutput>;
    createAccelerator(args: CreateAcceleratorCommandInput, cb: (err: any, data?: CreateAcceleratorCommandOutput) => void): void;
    createAccelerator(args: CreateAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAcceleratorCommandOutput) => void): void;
    /**
     * <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands
     * 		of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p>
     * 	        <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive
     * 			traffic. To enable all destinations to receive traffic, or to specify individual port
     * 			mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
     * 				AllowCustomRoutingTraffic</a> operation.</p>
     * 	        <important>
     * 		          <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
     * 			US West (Oregon) Region to create or update accelerators.</p>
     * 	        </important>
     */
    createCustomRoutingAccelerator(args: CreateCustomRoutingAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<CreateCustomRoutingAcceleratorCommandOutput>;
    createCustomRoutingAccelerator(args: CreateCustomRoutingAcceleratorCommandInput, cb: (err: any, data?: CreateCustomRoutingAcceleratorCommandOutput) => void): void;
    createCustomRoutingAccelerator(args: CreateCustomRoutingAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCustomRoutingAcceleratorCommandOutput) => void): void;
    /**
     * <p>Create an endpoint group for the specified listener for a custom routing accelerator.
     * 		An endpoint group is a collection of endpoints in one AWS
     * 		Region. </p>
     */
    createCustomRoutingEndpointGroup(args: CreateCustomRoutingEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateCustomRoutingEndpointGroupCommandOutput>;
    createCustomRoutingEndpointGroup(args: CreateCustomRoutingEndpointGroupCommandInput, cb: (err: any, data?: CreateCustomRoutingEndpointGroupCommandOutput) => void): void;
    createCustomRoutingEndpointGroup(args: CreateCustomRoutingEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCustomRoutingEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Create a listener to process inbound connections from clients to a custom routing accelerator.
     * 			Connections arrive to assigned static IP addresses on the port range that you specify. </p>
     */
    createCustomRoutingListener(args: CreateCustomRoutingListenerCommandInput, options?: __HttpHandlerOptions): Promise<CreateCustomRoutingListenerCommandOutput>;
    createCustomRoutingListener(args: CreateCustomRoutingListenerCommandInput, cb: (err: any, data?: CreateCustomRoutingListenerCommandOutput) => void): void;
    createCustomRoutingListener(args: CreateCustomRoutingListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCustomRoutingListenerCommandOutput) => void): void;
    /**
     * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS
     * 			Region. A resource must be valid and active when you add it as an endpoint.</p>
     */
    createEndpointGroup(args: CreateEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateEndpointGroupCommandOutput>;
    createEndpointGroup(args: CreateEndpointGroupCommandInput, cb: (err: any, data?: CreateEndpointGroupCommandOutput) => void): void;
    createEndpointGroup(args: CreateEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static
     * 			IP addresses on a port, port range, or list of port ranges that you specify. </p>
     */
    createListener(args: CreateListenerCommandInput, options?: __HttpHandlerOptions): Promise<CreateListenerCommandOutput>;
    createListener(args: CreateListenerCommandInput, cb: (err: any, data?: CreateListenerCommandOutput) => void): void;
    createListener(args: CreateListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateListenerCommandOutput) => void): void;
    /**
     * <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
     * 			(listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p>
     * 		       <important>
     *             <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
     * 			Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges.
     * 		</p>
     * 		          <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
     * 			it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
     * 			static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
     * 			As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
     * 			can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
     * 			see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in
     * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
     *          </important>
     */
    deleteAccelerator(args: DeleteAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAcceleratorCommandOutput>;
    deleteAccelerator(args: DeleteAcceleratorCommandInput, cb: (err: any, data?: DeleteAcceleratorCommandOutput) => void): void;
    deleteAccelerator(args: DeleteAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAcceleratorCommandOutput) => void): void;
    /**
     * <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
     * 		(listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p>
     * 	        <important>
     *             <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
     * 	</p>
     * 		          <p>The IP
     * 			addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
     * 			it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
     * 			static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
     * 			As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
     * 			can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
     * 			see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in
     * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
     *          </important>
     */
    deleteCustomRoutingAccelerator(args: DeleteCustomRoutingAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCustomRoutingAcceleratorCommandOutput>;
    deleteCustomRoutingAccelerator(args: DeleteCustomRoutingAcceleratorCommandInput, cb: (err: any, data?: DeleteCustomRoutingAcceleratorCommandOutput) => void): void;
    deleteCustomRoutingAccelerator(args: DeleteCustomRoutingAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCustomRoutingAcceleratorCommandOutput) => void): void;
    /**
     * <p>Delete an endpoint group from a listener for a custom routing accelerator.</p>
     */
    deleteCustomRoutingEndpointGroup(args: DeleteCustomRoutingEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCustomRoutingEndpointGroupCommandOutput>;
    deleteCustomRoutingEndpointGroup(args: DeleteCustomRoutingEndpointGroupCommandInput, cb: (err: any, data?: DeleteCustomRoutingEndpointGroupCommandOutput) => void): void;
    deleteCustomRoutingEndpointGroup(args: DeleteCustomRoutingEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCustomRoutingEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Delete a listener for a custom routing accelerator.</p>
     */
    deleteCustomRoutingListener(args: DeleteCustomRoutingListenerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCustomRoutingListenerCommandOutput>;
    deleteCustomRoutingListener(args: DeleteCustomRoutingListenerCommandInput, cb: (err: any, data?: DeleteCustomRoutingListenerCommandOutput) => void): void;
    deleteCustomRoutingListener(args: DeleteCustomRoutingListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCustomRoutingListenerCommandOutput) => void): void;
    /**
     * <p>Delete an endpoint group from a listener.</p>
     */
    deleteEndpointGroup(args: DeleteEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEndpointGroupCommandOutput>;
    deleteEndpointGroup(args: DeleteEndpointGroupCommandInput, cb: (err: any, data?: DeleteEndpointGroupCommandOutput) => void): void;
    deleteEndpointGroup(args: DeleteEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Delete a listener from an accelerator.</p>
     */
    deleteListener(args: DeleteListenerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteListenerCommandOutput>;
    deleteListener(args: DeleteListenerCommandInput, cb: (err: any, data?: DeleteListenerCommandOutput) => void): void;
    deleteListener(args: DeleteListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteListenerCommandOutput) => void): void;
    /**
     * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic
     * 			for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a
     * 			specified list of destination IP addresses and ports. Note that you cannot specify IP addresses
     * 			or ports outside of the range that you configured for the endpoint group.</p>
     * 		       <p>After you make changes, you can verify that the updates are complete by checking the status of your
     * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
     */
    denyCustomRoutingTraffic(args: DenyCustomRoutingTrafficCommandInput, options?: __HttpHandlerOptions): Promise<DenyCustomRoutingTrafficCommandOutput>;
    denyCustomRoutingTraffic(args: DenyCustomRoutingTrafficCommandInput, cb: (err: any, data?: DenyCustomRoutingTrafficCommandOutput) => void): void;
    denyCustomRoutingTraffic(args: DenyCustomRoutingTrafficCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DenyCustomRoutingTrafficCommandOutput) => void): void;
    /**
     * <p>Releases the specified address range that you provisioned to use with your AWS resources
     * 			through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p>
     * 		       <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have
     * 			any accelerators that are using static IP addresses allocated from its address range.
     * 		</p>
     * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
     * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
     */
    deprovisionByoipCidr(args: DeprovisionByoipCidrCommandInput, options?: __HttpHandlerOptions): Promise<DeprovisionByoipCidrCommandOutput>;
    deprovisionByoipCidr(args: DeprovisionByoipCidrCommandInput, cb: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void): void;
    deprovisionByoipCidr(args: DeprovisionByoipCidrCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void): void;
    /**
     * <p>Describe an accelerator. </p>
     */
    describeAccelerator(args: DescribeAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAcceleratorCommandOutput>;
    describeAccelerator(args: DescribeAcceleratorCommandInput, cb: (err: any, data?: DescribeAcceleratorCommandOutput) => void): void;
    describeAccelerator(args: DescribeAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAcceleratorCommandOutput) => void): void;
    /**
     * <p>Describe the attributes of an accelerator.
     * 		</p>
     */
    describeAcceleratorAttributes(args: DescribeAcceleratorAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAcceleratorAttributesCommandOutput>;
    describeAcceleratorAttributes(args: DescribeAcceleratorAttributesCommandInput, cb: (err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void): void;
    describeAcceleratorAttributes(args: DescribeAcceleratorAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void): void;
    /**
     * <p>Describe a custom routing accelerator. </p>
     */
    describeCustomRoutingAccelerator(args: DescribeCustomRoutingAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCustomRoutingAcceleratorCommandOutput>;
    describeCustomRoutingAccelerator(args: DescribeCustomRoutingAcceleratorCommandInput, cb: (err: any, data?: DescribeCustomRoutingAcceleratorCommandOutput) => void): void;
    describeCustomRoutingAccelerator(args: DescribeCustomRoutingAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCustomRoutingAcceleratorCommandOutput) => void): void;
    /**
     * <p>Describe the attributes of a custom routing accelerator. </p>
     */
    describeCustomRoutingAcceleratorAttributes(args: DescribeCustomRoutingAcceleratorAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCustomRoutingAcceleratorAttributesCommandOutput>;
    describeCustomRoutingAcceleratorAttributes(args: DescribeCustomRoutingAcceleratorAttributesCommandInput, cb: (err: any, data?: DescribeCustomRoutingAcceleratorAttributesCommandOutput) => void): void;
    describeCustomRoutingAcceleratorAttributes(args: DescribeCustomRoutingAcceleratorAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCustomRoutingAcceleratorAttributesCommandOutput) => void): void;
    /**
     * <p>Describe an endpoint group for a custom routing accelerator. </p>
     */
    describeCustomRoutingEndpointGroup(args: DescribeCustomRoutingEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCustomRoutingEndpointGroupCommandOutput>;
    describeCustomRoutingEndpointGroup(args: DescribeCustomRoutingEndpointGroupCommandInput, cb: (err: any, data?: DescribeCustomRoutingEndpointGroupCommandOutput) => void): void;
    describeCustomRoutingEndpointGroup(args: DescribeCustomRoutingEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCustomRoutingEndpointGroupCommandOutput) => void): void;
    /**
     * <p>The description of a listener for a custom routing accelerator.</p>
     */
    describeCustomRoutingListener(args: DescribeCustomRoutingListenerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCustomRoutingListenerCommandOutput>;
    describeCustomRoutingListener(args: DescribeCustomRoutingListenerCommandInput, cb: (err: any, data?: DescribeCustomRoutingListenerCommandOutput) => void): void;
    describeCustomRoutingListener(args: DescribeCustomRoutingListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCustomRoutingListenerCommandOutput) => void): void;
    /**
     * <p>Describe an endpoint group. </p>
     */
    describeEndpointGroup(args: DescribeEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointGroupCommandOutput>;
    describeEndpointGroup(args: DescribeEndpointGroupCommandInput, cb: (err: any, data?: DescribeEndpointGroupCommandOutput) => void): void;
    describeEndpointGroup(args: DescribeEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Describe a listener. </p>
     */
    describeListener(args: DescribeListenerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeListenerCommandOutput>;
    describeListener(args: DescribeListenerCommandInput, cb: (err: any, data?: DescribeListenerCommandOutput) => void): void;
    describeListener(args: DescribeListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeListenerCommandOutput) => void): void;
    /**
     * <p>List the accelerators for an AWS account. </p>
     */
    listAccelerators(args: ListAcceleratorsCommandInput, options?: __HttpHandlerOptions): Promise<ListAcceleratorsCommandOutput>;
    listAccelerators(args: ListAcceleratorsCommandInput, cb: (err: any, data?: ListAcceleratorsCommandOutput) => void): void;
    listAccelerators(args: ListAcceleratorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAcceleratorsCommandOutput) => void): void;
    /**
     * <p>Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including
     * 			the current state and a history of state changes.</p>
     */
    listByoipCidrs(args: ListByoipCidrsCommandInput, options?: __HttpHandlerOptions): Promise<ListByoipCidrsCommandOutput>;
    listByoipCidrs(args: ListByoipCidrsCommandInput, cb: (err: any, data?: ListByoipCidrsCommandOutput) => void): void;
    listByoipCidrs(args: ListByoipCidrsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListByoipCidrsCommandOutput) => void): void;
    /**
     * <p>List the custom routing accelerators for an AWS account. </p>
     */
    listCustomRoutingAccelerators(args: ListCustomRoutingAcceleratorsCommandInput, options?: __HttpHandlerOptions): Promise<ListCustomRoutingAcceleratorsCommandOutput>;
    listCustomRoutingAccelerators(args: ListCustomRoutingAcceleratorsCommandInput, cb: (err: any, data?: ListCustomRoutingAcceleratorsCommandOutput) => void): void;
    listCustomRoutingAccelerators(args: ListCustomRoutingAcceleratorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCustomRoutingAcceleratorsCommandOutput) => void): void;
    /**
     * <p>List the endpoint groups that are associated with a listener for a custom routing accelerator. </p>
     */
    listCustomRoutingEndpointGroups(args: ListCustomRoutingEndpointGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListCustomRoutingEndpointGroupsCommandOutput>;
    listCustomRoutingEndpointGroups(args: ListCustomRoutingEndpointGroupsCommandInput, cb: (err: any, data?: ListCustomRoutingEndpointGroupsCommandOutput) => void): void;
    listCustomRoutingEndpointGroups(args: ListCustomRoutingEndpointGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCustomRoutingEndpointGroupsCommandOutput) => void): void;
    /**
     * <p>List the listeners for a custom routing accelerator. </p>
     */
    listCustomRoutingListeners(args: ListCustomRoutingListenersCommandInput, options?: __HttpHandlerOptions): Promise<ListCustomRoutingListenersCommandOutput>;
    listCustomRoutingListeners(args: ListCustomRoutingListenersCommandInput, cb: (err: any, data?: ListCustomRoutingListenersCommandOutput) => void): void;
    listCustomRoutingListeners(args: ListCustomRoutingListenersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCustomRoutingListenersCommandOutput) => void): void;
    /**
     * <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance
     * 		IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator.
     * 		For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port
     * 		mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p>
     * 	        <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to
     * 		your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances
     * 		in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p>
     * 	        <p>The mappings also include a flag for each destination denoting which destination IP addresses and
     * 		ports are allowed or denied traffic.</p>
     */
    listCustomRoutingPortMappings(args: ListCustomRoutingPortMappingsCommandInput, options?: __HttpHandlerOptions): Promise<ListCustomRoutingPortMappingsCommandOutput>;
    listCustomRoutingPortMappings(args: ListCustomRoutingPortMappingsCommandInput, cb: (err: any, data?: ListCustomRoutingPortMappingsCommandOutput) => void): void;
    listCustomRoutingPortMappings(args: ListCustomRoutingPortMappingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCustomRoutingPortMappingsCommandOutput) => void): void;
    /**
     * <p>List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The
     * 			response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that
     * 			span multiple custom routing accelerators in your account, or for scenarios where you only want to
     * 			list the port mappings for a specific destination instance.</p>
     */
    listCustomRoutingPortMappingsByDestination(args: ListCustomRoutingPortMappingsByDestinationCommandInput, options?: __HttpHandlerOptions): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput>;
    listCustomRoutingPortMappingsByDestination(args: ListCustomRoutingPortMappingsByDestinationCommandInput, cb: (err: any, data?: ListCustomRoutingPortMappingsByDestinationCommandOutput) => void): void;
    listCustomRoutingPortMappingsByDestination(args: ListCustomRoutingPortMappingsByDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCustomRoutingPortMappingsByDestinationCommandOutput) => void): void;
    /**
     * <p>List the endpoint groups that are associated with a listener. </p>
     */
    listEndpointGroups(args: ListEndpointGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListEndpointGroupsCommandOutput>;
    listEndpointGroups(args: ListEndpointGroupsCommandInput, cb: (err: any, data?: ListEndpointGroupsCommandOutput) => void): void;
    listEndpointGroups(args: ListEndpointGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEndpointGroupsCommandOutput) => void): void;
    /**
     * <p>List the listeners for an accelerator. </p>
     */
    listListeners(args: ListListenersCommandInput, options?: __HttpHandlerOptions): Promise<ListListenersCommandOutput>;
    listListeners(args: ListListenersCommandInput, cb: (err: any, data?: ListListenersCommandOutput) => void): void;
    listListeners(args: ListListenersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListListenersCommandOutput) => void): void;
    /**
     * <p>List all tags for an accelerator. </p>
     * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
     * 			in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Provisions an IP address range to use with your AWS resources through bring your own IP
     * 			addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned,
     * 			it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html">
     * 			AdvertiseByoipCidr</a>.</p>
     * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
     * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
     */
    provisionByoipCidr(args: ProvisionByoipCidrCommandInput, options?: __HttpHandlerOptions): Promise<ProvisionByoipCidrCommandOutput>;
    provisionByoipCidr(args: ProvisionByoipCidrCommandInput, cb: (err: any, data?: ProvisionByoipCidrCommandOutput) => void): void;
    provisionByoipCidr(args: ProvisionByoipCidrCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ProvisionByoipCidrCommandOutput) => void): void;
    /**
     * <p>Remove endpoints from a custom routing accelerator.</p>
     */
    removeCustomRoutingEndpoints(args: RemoveCustomRoutingEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveCustomRoutingEndpointsCommandOutput>;
    removeCustomRoutingEndpoints(args: RemoveCustomRoutingEndpointsCommandInput, cb: (err: any, data?: RemoveCustomRoutingEndpointsCommandOutput) => void): void;
    removeCustomRoutingEndpoints(args: RemoveCustomRoutingEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveCustomRoutingEndpointsCommandOutput) => void): void;
    /**
     * <p>Add tags to an accelerator resource. </p>
     * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
     * 			in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value.
     * 			The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p>
     * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
     * 			in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Update an accelerator. </p>
     *
     * 		       <important>
     * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
     * 				US West (Oregon) Region to create or update accelerators.</p>
     * 		       </important>
     */
    updateAccelerator(args: UpdateAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAcceleratorCommandOutput>;
    updateAccelerator(args: UpdateAcceleratorCommandInput, cb: (err: any, data?: UpdateAcceleratorCommandOutput) => void): void;
    updateAccelerator(args: UpdateAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAcceleratorCommandOutput) => void): void;
    /**
     * <p>Update the attributes for an accelerator. </p>
     */
    updateAcceleratorAttributes(args: UpdateAcceleratorAttributesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAcceleratorAttributesCommandOutput>;
    updateAcceleratorAttributes(args: UpdateAcceleratorAttributesCommandInput, cb: (err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void): void;
    updateAcceleratorAttributes(args: UpdateAcceleratorAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void): void;
    /**
     * <p>Update a custom routing accelerator. </p>
     */
    updateCustomRoutingAccelerator(args: UpdateCustomRoutingAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCustomRoutingAcceleratorCommandOutput>;
    updateCustomRoutingAccelerator(args: UpdateCustomRoutingAcceleratorCommandInput, cb: (err: any, data?: UpdateCustomRoutingAcceleratorCommandOutput) => void): void;
    updateCustomRoutingAccelerator(args: UpdateCustomRoutingAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCustomRoutingAcceleratorCommandOutput) => void): void;
    /**
     * <p>Update the attributes for a custom routing accelerator. </p>
     */
    updateCustomRoutingAcceleratorAttributes(args: UpdateCustomRoutingAcceleratorAttributesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCustomRoutingAcceleratorAttributesCommandOutput>;
    updateCustomRoutingAcceleratorAttributes(args: UpdateCustomRoutingAcceleratorAttributesCommandInput, cb: (err: any, data?: UpdateCustomRoutingAcceleratorAttributesCommandOutput) => void): void;
    updateCustomRoutingAcceleratorAttributes(args: UpdateCustomRoutingAcceleratorAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCustomRoutingAcceleratorAttributesCommandOutput) => void): void;
    /**
     * <p>Update a listener for a custom routing accelerator. </p>
     */
    updateCustomRoutingListener(args: UpdateCustomRoutingListenerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCustomRoutingListenerCommandOutput>;
    updateCustomRoutingListener(args: UpdateCustomRoutingListenerCommandInput, cb: (err: any, data?: UpdateCustomRoutingListenerCommandOutput) => void): void;
    updateCustomRoutingListener(args: UpdateCustomRoutingListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCustomRoutingListenerCommandOutput) => void): void;
    /**
     * <p>Update an endpoint group. A resource must be valid and active when you add it as an endpoint.</p>
     */
    updateEndpointGroup(args: UpdateEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEndpointGroupCommandOutput>;
    updateEndpointGroup(args: UpdateEndpointGroupCommandInput, cb: (err: any, data?: UpdateEndpointGroupCommandOutput) => void): void;
    updateEndpointGroup(args: UpdateEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Update a listener. </p>
     */
    updateListener(args: UpdateListenerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateListenerCommandOutput>;
    updateListener(args: UpdateListenerCommandInput, cb: (err: any, data?: UpdateListenerCommandOutput) => void): void;
    updateListener(args: UpdateListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateListenerCommandOutput) => void): void;
    /**
     * <p>Stops advertising an address range that is provisioned as an address pool.
     * 			You can perform this operation at most once every 10 seconds, even if you specify different address
     * 			ranges each time.</p>
     * 		       <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS because of
     * 			propagation delays.</p>
     * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
     * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
     */
    withdrawByoipCidr(args: WithdrawByoipCidrCommandInput, options?: __HttpHandlerOptions): Promise<WithdrawByoipCidrCommandOutput>;
    withdrawByoipCidr(args: WithdrawByoipCidrCommandInput, cb: (err: any, data?: WithdrawByoipCidrCommandOutput) => void): void;
    withdrawByoipCidr(args: WithdrawByoipCidrCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: WithdrawByoipCidrCommandOutput) => void): void;
}
