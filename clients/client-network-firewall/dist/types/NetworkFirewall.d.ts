import { NetworkFirewallClient } from "./NetworkFirewallClient";
import { AssociateFirewallPolicyCommandInput, AssociateFirewallPolicyCommandOutput } from "./commands/AssociateFirewallPolicyCommand";
import { AssociateSubnetsCommandInput, AssociateSubnetsCommandOutput } from "./commands/AssociateSubnetsCommand";
import { CreateFirewallCommandInput, CreateFirewallCommandOutput } from "./commands/CreateFirewallCommand";
import { CreateFirewallPolicyCommandInput, CreateFirewallPolicyCommandOutput } from "./commands/CreateFirewallPolicyCommand";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "./commands/CreateRuleGroupCommand";
import { DeleteFirewallCommandInput, DeleteFirewallCommandOutput } from "./commands/DeleteFirewallCommand";
import { DeleteFirewallPolicyCommandInput, DeleteFirewallPolicyCommandOutput } from "./commands/DeleteFirewallPolicyCommand";
import { DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput } from "./commands/DeleteResourcePolicyCommand";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "./commands/DeleteRuleGroupCommand";
import { DescribeFirewallCommandInput, DescribeFirewallCommandOutput } from "./commands/DescribeFirewallCommand";
import { DescribeFirewallPolicyCommandInput, DescribeFirewallPolicyCommandOutput } from "./commands/DescribeFirewallPolicyCommand";
import { DescribeLoggingConfigurationCommandInput, DescribeLoggingConfigurationCommandOutput } from "./commands/DescribeLoggingConfigurationCommand";
import { DescribeResourcePolicyCommandInput, DescribeResourcePolicyCommandOutput } from "./commands/DescribeResourcePolicyCommand";
import { DescribeRuleGroupCommandInput, DescribeRuleGroupCommandOutput } from "./commands/DescribeRuleGroupCommand";
import { DisassociateSubnetsCommandInput, DisassociateSubnetsCommandOutput } from "./commands/DisassociateSubnetsCommand";
import { ListFirewallPoliciesCommandInput, ListFirewallPoliciesCommandOutput } from "./commands/ListFirewallPoliciesCommand";
import { ListFirewallsCommandInput, ListFirewallsCommandOutput } from "./commands/ListFirewallsCommand";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "./commands/ListRuleGroupsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFirewallDeleteProtectionCommandInput, UpdateFirewallDeleteProtectionCommandOutput } from "./commands/UpdateFirewallDeleteProtectionCommand";
import { UpdateFirewallDescriptionCommandInput, UpdateFirewallDescriptionCommandOutput } from "./commands/UpdateFirewallDescriptionCommand";
import { UpdateFirewallPolicyChangeProtectionCommandInput, UpdateFirewallPolicyChangeProtectionCommandOutput } from "./commands/UpdateFirewallPolicyChangeProtectionCommand";
import { UpdateFirewallPolicyCommandInput, UpdateFirewallPolicyCommandOutput } from "./commands/UpdateFirewallPolicyCommand";
import { UpdateLoggingConfigurationCommandInput, UpdateLoggingConfigurationCommandOutput } from "./commands/UpdateLoggingConfigurationCommand";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "./commands/UpdateRuleGroupCommand";
import { UpdateSubnetChangeProtectionCommandInput, UpdateSubnetChangeProtectionCommandOutput } from "./commands/UpdateSubnetChangeProtectionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>This is the API Reference for AWS Network Firewall. This guide is for developers who need
 *          detailed information about the Network Firewall API actions, data types, and errors. </p>
 *          <ul>
 *             <li>
 *                <p>The REST API requires you to handle connection details, such as calculating
 *                signatures, handling request retries, and error handling. For general information
 *                about using the AWS REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">AWS APIs</a>. </p>
 *                <p>To access Network Firewall using the REST API endpoint:
 *                   <code>https://network-firewall.<region>.amazonaws.com </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Alternatively, you can use one of the AWS SDKs to access an API that's tailored to
 *                the programming language or platform that you're using. For more information, see
 *                   <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p>
 *             </li>
 *             <li>
 *                <p>For descriptions of Network Firewall features, including and step-by-step
 *                instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer
 *                   Guide</a>.</p>
 *             </li>
 *          </ul>
 *          <p>Network Firewall is a stateful, managed, network firewall and intrusion detection and
 *          prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the
 *          perimeter of your VPC. This includes filtering traffic going to and coming from an internet
 *          gateway, NAT gateway, or over VPN or AWS Direct Connect. Network Firewall uses rules that are compatible
 *           with Suricata, a free, open source intrusion detection system (IDS) engine. For information about Suricata,
 *           see the <a href="https://suricata-ids.org/">Suricata website</a>.</p>
 *          <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways.
 *          The following are just a few examples: </p>
 *          <ul>
 *             <li>
 *                <p>Allow domains or IP addresses for known AWS service endpoints, such as Amazon S3, and
 *                block all other forms of traffic.</p>
 *             </li>
 *             <li>
 *                <p>Use custom lists of known bad domains to limit the types of domain names that your
 *                applications can access.</p>
 *             </li>
 *             <li>
 *                <p>Perform deep packet inspection on traffic entering or leaving your VPC.</p>
 *             </li>
 *             <li>
 *                <p>Use stateful protocol detection to filter protocols like HTTPS, regardless of the
 *                port used.</p>
 *             </li>
 *          </ul>
 *          <p>To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in
 *          Network Firewall. For information about using Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon VPC User Guide</a>.</p>
 *          <p>To start using Network Firewall, do the following: </p>
 *          <ol>
 *             <li>
 *                <p>(Optional) If you don't already have a VPC that you want to protect, create it in
 *                Amazon VPC. </p>
 *             </li>
 *             <li>
 *                <p>In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a
 *                subnet for the sole use of Network Firewall. </p>
 *             </li>
 *             <li>
 *                <p>In Network Firewall, create stateless and stateful rule groups,
 *                  to define the components of the network traffic filtering behavior that you want your firewall to have. </p>
 *             </li>
 *             <li>
 *                <p>In Network Firewall, create a firewall policy that uses your rule groups and
 *                  specifies additional default traffic filtering behavior. </p>
 *             </li>
 *             <li>
 *                <p>In Network Firewall, create a firewall and specify your new firewall policy and
 *                  VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you
 *                specify, with the behavior that's defined in the firewall policy.</p>
 *             </li>
 *             <li>
 *                <p>In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall
 *                endpoints.</p>
 *             </li>
 *          </ol>
 */
export declare class NetworkFirewall extends NetworkFirewallClient {
    /**
     * <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p>
     *          <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a
     *          collection of inspection rule groups and other settings. Each firewall requires one
     *          firewall policy association, and you can use the same firewall policy for multiple
     *          firewalls. </p>
     */
    associateFirewallPolicy(args: AssociateFirewallPolicyCommandInput, options?: __HttpHandlerOptions): Promise<AssociateFirewallPolicyCommandOutput>;
    associateFirewallPolicy(args: AssociateFirewallPolicyCommandInput, cb: (err: any, data?: AssociateFirewallPolicyCommandOutput) => void): void;
    associateFirewallPolicy(args: AssociateFirewallPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateFirewallPolicyCommandOutput) => void): void;
    /**
     * <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one
     *          subnet for each of the Availability Zones that the VPC spans. </p>
     *          <p>This request creates an AWS Network Firewall firewall endpoint in each of the subnets. To
     *          enable the firewall's protections, you must also modify the VPC's route tables for each
     *          subnet's Availability Zone, to redirect the traffic that's coming into and going out of the
     *          zone through the firewall endpoint. </p>
     */
    associateSubnets(args: AssociateSubnetsCommandInput, options?: __HttpHandlerOptions): Promise<AssociateSubnetsCommandOutput>;
    associateSubnets(args: AssociateSubnetsCommandInput, cb: (err: any, data?: AssociateSubnetsCommandOutput) => void): void;
    associateSubnets(args: AssociateSubnetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateSubnetsCommandOutput) => void): void;
    /**
     * <p>Creates an AWS Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p>
     *          <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p>
     *          <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p>
     *          <p>To update the settings for a firewall, you use the operations that apply to the settings
     *          themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p>
     *          <p>To manage a firewall's tags, use the standard AWS resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
     *          <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
     */
    createFirewall(args: CreateFirewallCommandInput, options?: __HttpHandlerOptions): Promise<CreateFirewallCommandOutput>;
    createFirewall(args: CreateFirewallCommandInput, cb: (err: any, data?: CreateFirewallCommandOutput) => void): void;
    createFirewall(args: CreateFirewallCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFirewallCommandOutput) => void): void;
    /**
     * <p>Creates the firewall policy for the firewall according to the specifications. </p>
     *          <p>An AWS Network Firewall firewall policy defines the behavior of a firewall, in a collection of
     *          stateless and stateful rule groups and other settings. You can use one firewall policy for
     *          multiple firewalls. </p>
     */
    createFirewallPolicy(args: CreateFirewallPolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreateFirewallPolicyCommandOutput>;
    createFirewallPolicy(args: CreateFirewallPolicyCommandInput, cb: (err: any, data?: CreateFirewallPolicyCommandOutput) => void): void;
    createFirewallPolicy(args: CreateFirewallPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFirewallPolicyCommandOutput) => void): void;
    /**
     * <p>Creates the specified stateless or stateful rule group, which includes the rules for
     *          network traffic inspection, a capacity setting, and tags. </p>
     *          <p>You provide your rule group specification in your request using either
     *             <code>RuleGroup</code> or <code>Rules</code>.</p>
     */
    createRuleGroup(args: CreateRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleGroupCommandOutput>;
    createRuleGroup(args: CreateRuleGroupCommandInput, cb: (err: any, data?: CreateRuleGroupCommandOutput) => void): void;
    createRuleGroup(args: CreateRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRuleGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be
     *             <code>FALSE</code>. You can't revert this operation. </p>
     *          <p>You can check whether a firewall is
     *          in use by reviewing the route tables for the Availability Zones where you have
     *          firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>.
     *          You define and update the route tables through Amazon VPC. As needed, update the route tables for the
     *          zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints,
     *          you can remove the firewall safely.</p>
     *          <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>,
     *          then delete the firewall by calling <a>DeleteFirewall</a>. </p>
     */
    deleteFirewall(args: DeleteFirewallCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFirewallCommandOutput>;
    deleteFirewall(args: DeleteFirewallCommandInput, cb: (err: any, data?: DeleteFirewallCommandOutput) => void): void;
    deleteFirewall(args: DeleteFirewallCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFirewallCommandOutput) => void): void;
    /**
     * <p>Deletes the specified <a>FirewallPolicy</a>. </p>
     */
    deleteFirewallPolicy(args: DeleteFirewallPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFirewallPolicyCommandOutput>;
    deleteFirewallPolicy(args: DeleteFirewallPolicyCommandInput, cb: (err: any, data?: DeleteFirewallPolicyCommandOutput) => void): void;
    deleteFirewallPolicy(args: DeleteFirewallPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFirewallPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request. </p>
     */
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourcePolicyCommandOutput>;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified <a>RuleGroup</a>. </p>
     */
    deleteRuleGroup(args: DeleteRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleGroupCommandOutput>;
    deleteRuleGroup(args: DeleteRuleGroupCommandInput, cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void): void;
    deleteRuleGroup(args: DeleteRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void): void;
    /**
     * <p>Returns the data objects for the specified firewall. </p>
     */
    describeFirewall(args: DescribeFirewallCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFirewallCommandOutput>;
    describeFirewall(args: DescribeFirewallCommandInput, cb: (err: any, data?: DescribeFirewallCommandOutput) => void): void;
    describeFirewall(args: DescribeFirewallCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFirewallCommandOutput) => void): void;
    /**
     * <p>Returns the data objects for the specified firewall policy. </p>
     */
    describeFirewallPolicy(args: DescribeFirewallPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFirewallPolicyCommandOutput>;
    describeFirewallPolicy(args: DescribeFirewallPolicyCommandInput, cb: (err: any, data?: DescribeFirewallPolicyCommandOutput) => void): void;
    describeFirewallPolicy(args: DescribeFirewallPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFirewallPolicyCommandOutput) => void): void;
    /**
     * <p>Returns the logging configuration for the specified firewall. </p>
     */
    describeLoggingConfiguration(args: DescribeLoggingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoggingConfigurationCommandOutput>;
    describeLoggingConfiguration(args: DescribeLoggingConfigurationCommandInput, cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void): void;
    describeLoggingConfiguration(args: DescribeLoggingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. </p>
     */
    describeResourcePolicy(args: DescribeResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResourcePolicyCommandOutput>;
    describeResourcePolicy(args: DescribeResourcePolicyCommandInput, cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void): void;
    describeResourcePolicy(args: DescribeResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Returns the data objects for the specified rule group. </p>
     */
    describeRuleGroup(args: DescribeRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRuleGroupCommandOutput>;
    describeRuleGroup(args: DescribeRuleGroupCommandInput, cb: (err: any, data?: DescribeRuleGroupCommandOutput) => void): void;
    describeRuleGroup(args: DescribeRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRuleGroupCommandOutput) => void): void;
    /**
     * <p>Removes the specified subnet associations from the firewall. This removes the
     *           firewall endpoints from the subnets and removes any network filtering protections that the endpoints
     *           were providing.
     *       </p>
     */
    disassociateSubnets(args: DisassociateSubnetsCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateSubnetsCommandOutput>;
    disassociateSubnets(args: DisassociateSubnetsCommandInput, cb: (err: any, data?: DisassociateSubnetsCommandOutput) => void): void;
    disassociateSubnets(args: DisassociateSubnetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateSubnetsCommandOutput) => void): void;
    /**
     * <p>Retrieves the metadata for the firewall policies that you have defined. Depending on
     *          your setting for max results and the number of firewall policies, a single call might not
     *          return the full list. </p>
     */
    listFirewallPolicies(args: ListFirewallPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListFirewallPoliciesCommandOutput>;
    listFirewallPolicies(args: ListFirewallPoliciesCommandInput, cb: (err: any, data?: ListFirewallPoliciesCommandOutput) => void): void;
    listFirewallPolicies(args: ListFirewallPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFirewallPoliciesCommandOutput) => void): void;
    /**
     * <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC
     *          identifiers in your request, this returns only the firewalls for those VPCs.</p>
     *          <p>Depending on your setting for max results and the number of firewalls, a single call
     *          might not return the full list. </p>
     */
    listFirewalls(args: ListFirewallsCommandInput, options?: __HttpHandlerOptions): Promise<ListFirewallsCommandOutput>;
    listFirewalls(args: ListFirewallsCommandInput, cb: (err: any, data?: ListFirewallsCommandOutput) => void): void;
    listFirewalls(args: ListFirewallsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFirewallsCommandOutput) => void): void;
    /**
     * <p>Retrieves the metadata for the rule groups that you have defined. Depending on your
     *          setting for max results and the number of rule groups, a single call might not return the
     *          full list. </p>
     */
    listRuleGroups(args: ListRuleGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListRuleGroupsCommandOutput>;
    listRuleGroups(args: ListRuleGroupsCommandInput, cb: (err: any, data?: ListRuleGroupsCommandOutput) => void): void;
    listRuleGroups(args: ListRuleGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRuleGroupsCommandOutput) => void): void;
    /**
     * <p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that
     *          you can use to categorize and manage your resources, for purposes like billing. For
     *          example, you might set the tag key to "customer" and the value to the customer name or ID.
     *          You can specify one or more tags to add to each AWS resource, up to 50 tags for a
     *          resource.</p>
     *          <p>You can tag the AWS resources that you manage through AWS Network Firewall: firewalls, firewall
     *          policies, and rule groups. </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Creates or updates an AWS Identity and Access Management policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the AWS Resource Access Manager (RAM) service
     *            to manage resource sharing for Network Firewall. </p>
     *          <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p>
     *          <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations.  </p>
     *            </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p>
     *            </li>
     *          </ul>
     *          <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">AWS Resource Access Manager User Guide</a>.</p>
     */
    putResourcePolicy(args: PutResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutResourcePolicyCommandOutput>;
    putResourcePolicy(args: PutResourcePolicyCommandInput, cb: (err: any, data?: PutResourcePolicyCommandOutput) => void): void;
    putResourcePolicy(args: PutResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can
     *          use to categorize and manage your resources, for purposes like billing. For example, you
     *          might set the tag key to "customer" and the value to the customer name or ID. You can
     *          specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p>
     *          <p>You can tag the AWS resources that you manage through AWS Network Firewall: firewalls, firewall
     *          policies, and rule groups. </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the tags with the specified keys from the specified resource. Tags are key:value
     *          pairs that you can use to categorize and manage your resources, for purposes like billing.
     *          For example, you might set the tag key to "customer" and the value to the customer name or
     *          ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a
     *          resource.</p>
     *          <p>You can manage tags for the AWS resources that you manage through AWS Network Firewall:
     *          firewalls, firewall policies, and rule groups. </p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible
     *          to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected
     *          against deletion. This setting helps protect against accidentally deleting a firewall
     *          that's in use. </p>
     */
    updateFirewallDeleteProtection(args: UpdateFirewallDeleteProtectionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFirewallDeleteProtectionCommandOutput>;
    updateFirewallDeleteProtection(args: UpdateFirewallDeleteProtectionCommandInput, cb: (err: any, data?: UpdateFirewallDeleteProtectionCommandOutput) => void): void;
    updateFirewallDeleteProtection(args: UpdateFirewallDeleteProtectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFirewallDeleteProtectionCommandOutput) => void): void;
    /**
     * <p>Modifies the description for the specified firewall. Use the description to help you
     *          identify the firewall when you're working with it. </p>
     */
    updateFirewallDescription(args: UpdateFirewallDescriptionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFirewallDescriptionCommandOutput>;
    updateFirewallDescription(args: UpdateFirewallDescriptionCommandInput, cb: (err: any, data?: UpdateFirewallDescriptionCommandOutput) => void): void;
    updateFirewallDescription(args: UpdateFirewallDescriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFirewallDescriptionCommandOutput) => void): void;
    /**
     * <p>Updates the properties of the specified firewall policy.</p>
     */
    updateFirewallPolicy(args: UpdateFirewallPolicyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFirewallPolicyCommandOutput>;
    updateFirewallPolicy(args: UpdateFirewallPolicyCommandInput, cb: (err: any, data?: UpdateFirewallPolicyCommandOutput) => void): void;
    updateFirewallPolicy(args: UpdateFirewallPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFirewallPolicyCommandOutput) => void): void;
    /**
     * <p></p>
     */
    updateFirewallPolicyChangeProtection(args: UpdateFirewallPolicyChangeProtectionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput>;
    updateFirewallPolicyChangeProtection(args: UpdateFirewallPolicyChangeProtectionCommandInput, cb: (err: any, data?: UpdateFirewallPolicyChangeProtectionCommandOutput) => void): void;
    updateFirewallPolicyChangeProtection(args: UpdateFirewallPolicyChangeProtectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFirewallPolicyChangeProtectionCommandOutput) => void): void;
    /**
     * <p>Sets the logging configuration for the specified firewall. </p>
     *          <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide
     *          the modified object to this update call. You must change the logging configuration one
     *             <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p>
     *          <p>You can perform only one of the following actions in any call to
     *             <code>UpdateLoggingConfiguration</code>: </p>
     *          <ul>
     *             <li>
     *                <p>Create a new log destination object by adding a single
     *                   <code>LogDestinationConfig</code> array element to
     *                   <code>LogDestinationConfigs</code>.</p>
     *             </li>
     *             <li>
     *                <p>Delete a log destination object by removing a single
     *                   <code>LogDestinationConfig</code> array element from
     *                   <code>LogDestinationConfigs</code>.</p>
     *             </li>
     *             <li>
     *                <p>Change the <code>LogDestination</code> setting in a single
     *                   <code>LogDestinationConfig</code> array element.</p>
     *             </li>
     *          </ul>
     *          <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a
     *             <code>LogDestinationConfig</code>. To change these settings, delete the existing
     *             <code>LogDestinationConfig</code> object and create a new one, using two separate calls
     *          to this update operation.</p>
     */
    updateLoggingConfiguration(args: UpdateLoggingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLoggingConfigurationCommandOutput>;
    updateLoggingConfiguration(args: UpdateLoggingConfigurationCommandInput, cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void): void;
    updateLoggingConfiguration(args: UpdateLoggingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates the rule settings for the specified rule group. You use a rule group by
     *          reference in one or more firewall policies. When you modify a rule group, you modify all
     *          firewall policies that use the rule group. </p>
     *          <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the
     *          current <a>RuleGroup</a> object, update the object as needed, and then provide
     *          the updated object to this call. </p>
     */
    updateRuleGroup(args: UpdateRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleGroupCommandOutput>;
    updateRuleGroup(args: UpdateRuleGroupCommandInput, cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void): void;
    updateRuleGroup(args: UpdateRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void): void;
    /**
     * <p></p>
     */
    updateSubnetChangeProtection(args: UpdateSubnetChangeProtectionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSubnetChangeProtectionCommandOutput>;
    updateSubnetChangeProtection(args: UpdateSubnetChangeProtectionCommandInput, cb: (err: any, data?: UpdateSubnetChangeProtectionCommandOutput) => void): void;
    updateSubnetChangeProtection(args: UpdateSubnetChangeProtectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSubnetChangeProtectionCommandOutput) => void): void;
}
