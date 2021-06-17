"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalAccelerator = void 0;
const GlobalAcceleratorClient_1 = require("./GlobalAcceleratorClient");
const AddCustomRoutingEndpointsCommand_1 = require("./commands/AddCustomRoutingEndpointsCommand");
const AdvertiseByoipCidrCommand_1 = require("./commands/AdvertiseByoipCidrCommand");
const AllowCustomRoutingTrafficCommand_1 = require("./commands/AllowCustomRoutingTrafficCommand");
const CreateAcceleratorCommand_1 = require("./commands/CreateAcceleratorCommand");
const CreateCustomRoutingAcceleratorCommand_1 = require("./commands/CreateCustomRoutingAcceleratorCommand");
const CreateCustomRoutingEndpointGroupCommand_1 = require("./commands/CreateCustomRoutingEndpointGroupCommand");
const CreateCustomRoutingListenerCommand_1 = require("./commands/CreateCustomRoutingListenerCommand");
const CreateEndpointGroupCommand_1 = require("./commands/CreateEndpointGroupCommand");
const CreateListenerCommand_1 = require("./commands/CreateListenerCommand");
const DeleteAcceleratorCommand_1 = require("./commands/DeleteAcceleratorCommand");
const DeleteCustomRoutingAcceleratorCommand_1 = require("./commands/DeleteCustomRoutingAcceleratorCommand");
const DeleteCustomRoutingEndpointGroupCommand_1 = require("./commands/DeleteCustomRoutingEndpointGroupCommand");
const DeleteCustomRoutingListenerCommand_1 = require("./commands/DeleteCustomRoutingListenerCommand");
const DeleteEndpointGroupCommand_1 = require("./commands/DeleteEndpointGroupCommand");
const DeleteListenerCommand_1 = require("./commands/DeleteListenerCommand");
const DenyCustomRoutingTrafficCommand_1 = require("./commands/DenyCustomRoutingTrafficCommand");
const DeprovisionByoipCidrCommand_1 = require("./commands/DeprovisionByoipCidrCommand");
const DescribeAcceleratorAttributesCommand_1 = require("./commands/DescribeAcceleratorAttributesCommand");
const DescribeAcceleratorCommand_1 = require("./commands/DescribeAcceleratorCommand");
const DescribeCustomRoutingAcceleratorAttributesCommand_1 = require("./commands/DescribeCustomRoutingAcceleratorAttributesCommand");
const DescribeCustomRoutingAcceleratorCommand_1 = require("./commands/DescribeCustomRoutingAcceleratorCommand");
const DescribeCustomRoutingEndpointGroupCommand_1 = require("./commands/DescribeCustomRoutingEndpointGroupCommand");
const DescribeCustomRoutingListenerCommand_1 = require("./commands/DescribeCustomRoutingListenerCommand");
const DescribeEndpointGroupCommand_1 = require("./commands/DescribeEndpointGroupCommand");
const DescribeListenerCommand_1 = require("./commands/DescribeListenerCommand");
const ListAcceleratorsCommand_1 = require("./commands/ListAcceleratorsCommand");
const ListByoipCidrsCommand_1 = require("./commands/ListByoipCidrsCommand");
const ListCustomRoutingAcceleratorsCommand_1 = require("./commands/ListCustomRoutingAcceleratorsCommand");
const ListCustomRoutingEndpointGroupsCommand_1 = require("./commands/ListCustomRoutingEndpointGroupsCommand");
const ListCustomRoutingListenersCommand_1 = require("./commands/ListCustomRoutingListenersCommand");
const ListCustomRoutingPortMappingsByDestinationCommand_1 = require("./commands/ListCustomRoutingPortMappingsByDestinationCommand");
const ListCustomRoutingPortMappingsCommand_1 = require("./commands/ListCustomRoutingPortMappingsCommand");
const ListEndpointGroupsCommand_1 = require("./commands/ListEndpointGroupsCommand");
const ListListenersCommand_1 = require("./commands/ListListenersCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ProvisionByoipCidrCommand_1 = require("./commands/ProvisionByoipCidrCommand");
const RemoveCustomRoutingEndpointsCommand_1 = require("./commands/RemoveCustomRoutingEndpointsCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAcceleratorAttributesCommand_1 = require("./commands/UpdateAcceleratorAttributesCommand");
const UpdateAcceleratorCommand_1 = require("./commands/UpdateAcceleratorCommand");
const UpdateCustomRoutingAcceleratorAttributesCommand_1 = require("./commands/UpdateCustomRoutingAcceleratorAttributesCommand");
const UpdateCustomRoutingAcceleratorCommand_1 = require("./commands/UpdateCustomRoutingAcceleratorCommand");
const UpdateCustomRoutingListenerCommand_1 = require("./commands/UpdateCustomRoutingListenerCommand");
const UpdateEndpointGroupCommand_1 = require("./commands/UpdateEndpointGroupCommand");
const UpdateListenerCommand_1 = require("./commands/UpdateListenerCommand");
const WithdrawByoipCidrCommand_1 = require("./commands/WithdrawByoipCidrCommand");
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
class GlobalAccelerator extends GlobalAcceleratorClient_1.GlobalAcceleratorClient {
    addCustomRoutingEndpoints(args, optionsOrCb, cb) {
        const command = new AddCustomRoutingEndpointsCommand_1.AddCustomRoutingEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    advertiseByoipCidr(args, optionsOrCb, cb) {
        const command = new AdvertiseByoipCidrCommand_1.AdvertiseByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    allowCustomRoutingTraffic(args, optionsOrCb, cb) {
        const command = new AllowCustomRoutingTrafficCommand_1.AllowCustomRoutingTrafficCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAccelerator(args, optionsOrCb, cb) {
        const command = new CreateAcceleratorCommand_1.CreateAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCustomRoutingAccelerator(args, optionsOrCb, cb) {
        const command = new CreateCustomRoutingAcceleratorCommand_1.CreateCustomRoutingAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCustomRoutingEndpointGroup(args, optionsOrCb, cb) {
        const command = new CreateCustomRoutingEndpointGroupCommand_1.CreateCustomRoutingEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCustomRoutingListener(args, optionsOrCb, cb) {
        const command = new CreateCustomRoutingListenerCommand_1.CreateCustomRoutingListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEndpointGroup(args, optionsOrCb, cb) {
        const command = new CreateEndpointGroupCommand_1.CreateEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createListener(args, optionsOrCb, cb) {
        const command = new CreateListenerCommand_1.CreateListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAccelerator(args, optionsOrCb, cb) {
        const command = new DeleteAcceleratorCommand_1.DeleteAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCustomRoutingAccelerator(args, optionsOrCb, cb) {
        const command = new DeleteCustomRoutingAcceleratorCommand_1.DeleteCustomRoutingAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCustomRoutingEndpointGroup(args, optionsOrCb, cb) {
        const command = new DeleteCustomRoutingEndpointGroupCommand_1.DeleteCustomRoutingEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCustomRoutingListener(args, optionsOrCb, cb) {
        const command = new DeleteCustomRoutingListenerCommand_1.DeleteCustomRoutingListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteEndpointGroup(args, optionsOrCb, cb) {
        const command = new DeleteEndpointGroupCommand_1.DeleteEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteListener(args, optionsOrCb, cb) {
        const command = new DeleteListenerCommand_1.DeleteListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    denyCustomRoutingTraffic(args, optionsOrCb, cb) {
        const command = new DenyCustomRoutingTrafficCommand_1.DenyCustomRoutingTrafficCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deprovisionByoipCidr(args, optionsOrCb, cb) {
        const command = new DeprovisionByoipCidrCommand_1.DeprovisionByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAccelerator(args, optionsOrCb, cb) {
        const command = new DescribeAcceleratorCommand_1.DescribeAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAcceleratorAttributes(args, optionsOrCb, cb) {
        const command = new DescribeAcceleratorAttributesCommand_1.DescribeAcceleratorAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCustomRoutingAccelerator(args, optionsOrCb, cb) {
        const command = new DescribeCustomRoutingAcceleratorCommand_1.DescribeCustomRoutingAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCustomRoutingAcceleratorAttributes(args, optionsOrCb, cb) {
        const command = new DescribeCustomRoutingAcceleratorAttributesCommand_1.DescribeCustomRoutingAcceleratorAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCustomRoutingEndpointGroup(args, optionsOrCb, cb) {
        const command = new DescribeCustomRoutingEndpointGroupCommand_1.DescribeCustomRoutingEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCustomRoutingListener(args, optionsOrCb, cb) {
        const command = new DescribeCustomRoutingListenerCommand_1.DescribeCustomRoutingListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEndpointGroup(args, optionsOrCb, cb) {
        const command = new DescribeEndpointGroupCommand_1.DescribeEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeListener(args, optionsOrCb, cb) {
        const command = new DescribeListenerCommand_1.DescribeListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAccelerators(args, optionsOrCb, cb) {
        const command = new ListAcceleratorsCommand_1.ListAcceleratorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listByoipCidrs(args, optionsOrCb, cb) {
        const command = new ListByoipCidrsCommand_1.ListByoipCidrsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCustomRoutingAccelerators(args, optionsOrCb, cb) {
        const command = new ListCustomRoutingAcceleratorsCommand_1.ListCustomRoutingAcceleratorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCustomRoutingEndpointGroups(args, optionsOrCb, cb) {
        const command = new ListCustomRoutingEndpointGroupsCommand_1.ListCustomRoutingEndpointGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCustomRoutingListeners(args, optionsOrCb, cb) {
        const command = new ListCustomRoutingListenersCommand_1.ListCustomRoutingListenersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCustomRoutingPortMappings(args, optionsOrCb, cb) {
        const command = new ListCustomRoutingPortMappingsCommand_1.ListCustomRoutingPortMappingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCustomRoutingPortMappingsByDestination(args, optionsOrCb, cb) {
        const command = new ListCustomRoutingPortMappingsByDestinationCommand_1.ListCustomRoutingPortMappingsByDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEndpointGroups(args, optionsOrCb, cb) {
        const command = new ListEndpointGroupsCommand_1.ListEndpointGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listListeners(args, optionsOrCb, cb) {
        const command = new ListListenersCommand_1.ListListenersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    provisionByoipCidr(args, optionsOrCb, cb) {
        const command = new ProvisionByoipCidrCommand_1.ProvisionByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeCustomRoutingEndpoints(args, optionsOrCb, cb) {
        const command = new RemoveCustomRoutingEndpointsCommand_1.RemoveCustomRoutingEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAccelerator(args, optionsOrCb, cb) {
        const command = new UpdateAcceleratorCommand_1.UpdateAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAcceleratorAttributes(args, optionsOrCb, cb) {
        const command = new UpdateAcceleratorAttributesCommand_1.UpdateAcceleratorAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateCustomRoutingAccelerator(args, optionsOrCb, cb) {
        const command = new UpdateCustomRoutingAcceleratorCommand_1.UpdateCustomRoutingAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateCustomRoutingAcceleratorAttributes(args, optionsOrCb, cb) {
        const command = new UpdateCustomRoutingAcceleratorAttributesCommand_1.UpdateCustomRoutingAcceleratorAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateCustomRoutingListener(args, optionsOrCb, cb) {
        const command = new UpdateCustomRoutingListenerCommand_1.UpdateCustomRoutingListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateEndpointGroup(args, optionsOrCb, cb) {
        const command = new UpdateEndpointGroupCommand_1.UpdateEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateListener(args, optionsOrCb, cb) {
        const command = new UpdateListenerCommand_1.UpdateListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    withdrawByoipCidr(args, optionsOrCb, cb) {
        const command = new WithdrawByoipCidrCommand_1.WithdrawByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.GlobalAccelerator = GlobalAccelerator;
//# sourceMappingURL=GlobalAccelerator.js.map