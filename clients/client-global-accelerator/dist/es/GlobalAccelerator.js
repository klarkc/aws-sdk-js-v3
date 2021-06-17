import { __extends } from "tslib";
import { GlobalAcceleratorClient } from "./GlobalAcceleratorClient";
import { AddCustomRoutingEndpointsCommand, } from "./commands/AddCustomRoutingEndpointsCommand";
import { AdvertiseByoipCidrCommand, } from "./commands/AdvertiseByoipCidrCommand";
import { AllowCustomRoutingTrafficCommand, } from "./commands/AllowCustomRoutingTrafficCommand";
import { CreateAcceleratorCommand, } from "./commands/CreateAcceleratorCommand";
import { CreateCustomRoutingAcceleratorCommand, } from "./commands/CreateCustomRoutingAcceleratorCommand";
import { CreateCustomRoutingEndpointGroupCommand, } from "./commands/CreateCustomRoutingEndpointGroupCommand";
import { CreateCustomRoutingListenerCommand, } from "./commands/CreateCustomRoutingListenerCommand";
import { CreateEndpointGroupCommand, } from "./commands/CreateEndpointGroupCommand";
import { CreateListenerCommand, } from "./commands/CreateListenerCommand";
import { DeleteAcceleratorCommand, } from "./commands/DeleteAcceleratorCommand";
import { DeleteCustomRoutingAcceleratorCommand, } from "./commands/DeleteCustomRoutingAcceleratorCommand";
import { DeleteCustomRoutingEndpointGroupCommand, } from "./commands/DeleteCustomRoutingEndpointGroupCommand";
import { DeleteCustomRoutingListenerCommand, } from "./commands/DeleteCustomRoutingListenerCommand";
import { DeleteEndpointGroupCommand, } from "./commands/DeleteEndpointGroupCommand";
import { DeleteListenerCommand, } from "./commands/DeleteListenerCommand";
import { DenyCustomRoutingTrafficCommand, } from "./commands/DenyCustomRoutingTrafficCommand";
import { DeprovisionByoipCidrCommand, } from "./commands/DeprovisionByoipCidrCommand";
import { DescribeAcceleratorAttributesCommand, } from "./commands/DescribeAcceleratorAttributesCommand";
import { DescribeAcceleratorCommand, } from "./commands/DescribeAcceleratorCommand";
import { DescribeCustomRoutingAcceleratorAttributesCommand, } from "./commands/DescribeCustomRoutingAcceleratorAttributesCommand";
import { DescribeCustomRoutingAcceleratorCommand, } from "./commands/DescribeCustomRoutingAcceleratorCommand";
import { DescribeCustomRoutingEndpointGroupCommand, } from "./commands/DescribeCustomRoutingEndpointGroupCommand";
import { DescribeCustomRoutingListenerCommand, } from "./commands/DescribeCustomRoutingListenerCommand";
import { DescribeEndpointGroupCommand, } from "./commands/DescribeEndpointGroupCommand";
import { DescribeListenerCommand, } from "./commands/DescribeListenerCommand";
import { ListAcceleratorsCommand, } from "./commands/ListAcceleratorsCommand";
import { ListByoipCidrsCommand, } from "./commands/ListByoipCidrsCommand";
import { ListCustomRoutingAcceleratorsCommand, } from "./commands/ListCustomRoutingAcceleratorsCommand";
import { ListCustomRoutingEndpointGroupsCommand, } from "./commands/ListCustomRoutingEndpointGroupsCommand";
import { ListCustomRoutingListenersCommand, } from "./commands/ListCustomRoutingListenersCommand";
import { ListCustomRoutingPortMappingsByDestinationCommand, } from "./commands/ListCustomRoutingPortMappingsByDestinationCommand";
import { ListCustomRoutingPortMappingsCommand, } from "./commands/ListCustomRoutingPortMappingsCommand";
import { ListEndpointGroupsCommand, } from "./commands/ListEndpointGroupsCommand";
import { ListListenersCommand, } from "./commands/ListListenersCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ProvisionByoipCidrCommand, } from "./commands/ProvisionByoipCidrCommand";
import { RemoveCustomRoutingEndpointsCommand, } from "./commands/RemoveCustomRoutingEndpointsCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAcceleratorAttributesCommand, } from "./commands/UpdateAcceleratorAttributesCommand";
import { UpdateAcceleratorCommand, } from "./commands/UpdateAcceleratorCommand";
import { UpdateCustomRoutingAcceleratorAttributesCommand, } from "./commands/UpdateCustomRoutingAcceleratorAttributesCommand";
import { UpdateCustomRoutingAcceleratorCommand, } from "./commands/UpdateCustomRoutingAcceleratorCommand";
import { UpdateCustomRoutingListenerCommand, } from "./commands/UpdateCustomRoutingListenerCommand";
import { UpdateEndpointGroupCommand, } from "./commands/UpdateEndpointGroupCommand";
import { UpdateListenerCommand, } from "./commands/UpdateListenerCommand";
import { WithdrawByoipCidrCommand, } from "./commands/WithdrawByoipCidrCommand";
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
var GlobalAccelerator = /** @class */ (function (_super) {
    __extends(GlobalAccelerator, _super);
    function GlobalAccelerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalAccelerator.prototype.addCustomRoutingEndpoints = function (args, optionsOrCb, cb) {
        var command = new AddCustomRoutingEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.advertiseByoipCidr = function (args, optionsOrCb, cb) {
        var command = new AdvertiseByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.allowCustomRoutingTraffic = function (args, optionsOrCb, cb) {
        var command = new AllowCustomRoutingTrafficCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.createAccelerator = function (args, optionsOrCb, cb) {
        var command = new CreateAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.createCustomRoutingAccelerator = function (args, optionsOrCb, cb) {
        var command = new CreateCustomRoutingAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.createCustomRoutingEndpointGroup = function (args, optionsOrCb, cb) {
        var command = new CreateCustomRoutingEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.createCustomRoutingListener = function (args, optionsOrCb, cb) {
        var command = new CreateCustomRoutingListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.createEndpointGroup = function (args, optionsOrCb, cb) {
        var command = new CreateEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.createListener = function (args, optionsOrCb, cb) {
        var command = new CreateListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.deleteAccelerator = function (args, optionsOrCb, cb) {
        var command = new DeleteAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.deleteCustomRoutingAccelerator = function (args, optionsOrCb, cb) {
        var command = new DeleteCustomRoutingAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.deleteCustomRoutingEndpointGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteCustomRoutingEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.deleteCustomRoutingListener = function (args, optionsOrCb, cb) {
        var command = new DeleteCustomRoutingListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.deleteEndpointGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.deleteListener = function (args, optionsOrCb, cb) {
        var command = new DeleteListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.denyCustomRoutingTraffic = function (args, optionsOrCb, cb) {
        var command = new DenyCustomRoutingTrafficCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.deprovisionByoipCidr = function (args, optionsOrCb, cb) {
        var command = new DeprovisionByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.describeAccelerator = function (args, optionsOrCb, cb) {
        var command = new DescribeAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.describeAcceleratorAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeAcceleratorAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.describeCustomRoutingAccelerator = function (args, optionsOrCb, cb) {
        var command = new DescribeCustomRoutingAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.describeCustomRoutingAcceleratorAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeCustomRoutingAcceleratorAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.describeCustomRoutingEndpointGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeCustomRoutingEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.describeCustomRoutingListener = function (args, optionsOrCb, cb) {
        var command = new DescribeCustomRoutingListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.describeEndpointGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.describeListener = function (args, optionsOrCb, cb) {
        var command = new DescribeListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.listAccelerators = function (args, optionsOrCb, cb) {
        var command = new ListAcceleratorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.listByoipCidrs = function (args, optionsOrCb, cb) {
        var command = new ListByoipCidrsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.listCustomRoutingAccelerators = function (args, optionsOrCb, cb) {
        var command = new ListCustomRoutingAcceleratorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.listCustomRoutingEndpointGroups = function (args, optionsOrCb, cb) {
        var command = new ListCustomRoutingEndpointGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.listCustomRoutingListeners = function (args, optionsOrCb, cb) {
        var command = new ListCustomRoutingListenersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.listCustomRoutingPortMappings = function (args, optionsOrCb, cb) {
        var command = new ListCustomRoutingPortMappingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.listCustomRoutingPortMappingsByDestination = function (args, optionsOrCb, cb) {
        var command = new ListCustomRoutingPortMappingsByDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.listEndpointGroups = function (args, optionsOrCb, cb) {
        var command = new ListEndpointGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.listListeners = function (args, optionsOrCb, cb) {
        var command = new ListListenersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.provisionByoipCidr = function (args, optionsOrCb, cb) {
        var command = new ProvisionByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.removeCustomRoutingEndpoints = function (args, optionsOrCb, cb) {
        var command = new RemoveCustomRoutingEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.updateAccelerator = function (args, optionsOrCb, cb) {
        var command = new UpdateAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.updateAcceleratorAttributes = function (args, optionsOrCb, cb) {
        var command = new UpdateAcceleratorAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.updateCustomRoutingAccelerator = function (args, optionsOrCb, cb) {
        var command = new UpdateCustomRoutingAcceleratorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.updateCustomRoutingAcceleratorAttributes = function (args, optionsOrCb, cb) {
        var command = new UpdateCustomRoutingAcceleratorAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.updateCustomRoutingListener = function (args, optionsOrCb, cb) {
        var command = new UpdateCustomRoutingListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.updateEndpointGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateEndpointGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.updateListener = function (args, optionsOrCb, cb) {
        var command = new UpdateListenerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GlobalAccelerator.prototype.withdrawByoipCidr = function (args, optionsOrCb, cb) {
        var command = new WithdrawByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return GlobalAccelerator;
}(GlobalAcceleratorClient));
export { GlobalAccelerator };
//# sourceMappingURL=GlobalAccelerator.js.map