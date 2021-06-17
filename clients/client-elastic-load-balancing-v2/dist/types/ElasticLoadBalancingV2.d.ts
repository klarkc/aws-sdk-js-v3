import { ElasticLoadBalancingV2Client } from "./ElasticLoadBalancingV2Client";
import { AddListenerCertificatesCommandInput, AddListenerCertificatesCommandOutput } from "./commands/AddListenerCertificatesCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "./commands/CreateListenerCommand";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "./commands/CreateLoadBalancerCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import { CreateTargetGroupCommandInput, CreateTargetGroupCommandOutput } from "./commands/CreateTargetGroupCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "./commands/DeleteListenerCommand";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "./commands/DeleteLoadBalancerCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import { DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput } from "./commands/DeleteTargetGroupCommand";
import { DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput } from "./commands/DeregisterTargetsCommand";
import { DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput } from "./commands/DescribeAccountLimitsCommand";
import { DescribeListenerCertificatesCommandInput, DescribeListenerCertificatesCommandOutput } from "./commands/DescribeListenerCertificatesCommand";
import { DescribeListenersCommandInput, DescribeListenersCommandOutput } from "./commands/DescribeListenersCommand";
import { DescribeLoadBalancerAttributesCommandInput, DescribeLoadBalancerAttributesCommandOutput } from "./commands/DescribeLoadBalancerAttributesCommand";
import { DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput } from "./commands/DescribeLoadBalancersCommand";
import { DescribeRulesCommandInput, DescribeRulesCommandOutput } from "./commands/DescribeRulesCommand";
import { DescribeSSLPoliciesCommandInput, DescribeSSLPoliciesCommandOutput } from "./commands/DescribeSSLPoliciesCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import { DescribeTargetGroupAttributesCommandInput, DescribeTargetGroupAttributesCommandOutput } from "./commands/DescribeTargetGroupAttributesCommand";
import { DescribeTargetGroupsCommandInput, DescribeTargetGroupsCommandOutput } from "./commands/DescribeTargetGroupsCommand";
import { DescribeTargetHealthCommandInput, DescribeTargetHealthCommandOutput } from "./commands/DescribeTargetHealthCommand";
import { ModifyListenerCommandInput, ModifyListenerCommandOutput } from "./commands/ModifyListenerCommand";
import { ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput } from "./commands/ModifyLoadBalancerAttributesCommand";
import { ModifyRuleCommandInput, ModifyRuleCommandOutput } from "./commands/ModifyRuleCommand";
import { ModifyTargetGroupAttributesCommandInput, ModifyTargetGroupAttributesCommandOutput } from "./commands/ModifyTargetGroupAttributesCommand";
import { ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput } from "./commands/ModifyTargetGroupCommand";
import { RegisterTargetsCommandInput, RegisterTargetsCommandOutput } from "./commands/RegisterTargetsCommand";
import { RemoveListenerCertificatesCommandInput, RemoveListenerCertificatesCommandOutput } from "./commands/RemoveListenerCertificatesCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import { SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput } from "./commands/SetIpAddressTypeCommand";
import { SetRulePrioritiesCommandInput, SetRulePrioritiesCommandOutput } from "./commands/SetRulePrioritiesCommand";
import { SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput } from "./commands/SetSecurityGroupsCommand";
import { SetSubnetsCommandInput, SetSubnetsCommandOutput } from "./commands/SetSubnetsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Elastic Load Balancing</fullname>
 *
 *          <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances.
 *       This enables you to increase the availability of your application. The load balancer also
 *       monitors the health of its registered targets and ensures that it routes traffic only to
 *       healthy targets. You configure your load balancer to accept incoming traffic by specifying one
 *       or more listeners, which are configured with a protocol and port number for connections from
 *       clients to the load balancer. You configure a target group with a protocol and port number for
 *       connections from the load balancer to the targets, and with health check settings to be used
 *       when checking the health status of the targets.</p>
 *
 *          <p>Elastic Load Balancing supports the following types of load balancers: Application Load
 *       Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This
 *       reference covers the following load balancer types:</p>
 *          <ul>
 *             <li>
 *                <p>Application Load Balancer - Operates at the application layer (layer 7) and supports
 *           HTTP and HTTPS.</p>
 *             </li>
 *             <li>
 *                <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP,
 *           TLS, and UDP.</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p>
 *             </li>
 *          </ul>
 *
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User
 *       Guide</a>.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>All Elastic Load Balancing operations are idempotent, which means that they complete at
 *       most one time. If you repeat an operation, it succeeds.</p>
 */
export declare class ElasticLoadBalancingV2 extends ElasticLoadBalancingV2Client {
    /**
     * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS
     *       or TLS listener.</p>
     *          <p>If the certificate in already in the certificate list, the call is successful but the
     *       certificate is not added again.</p>
     *
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS
     *         listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS
     *         listeners</a> in the <i>Network Load Balancers Guide</i>.</p>
     */
    addListenerCertificates(args: AddListenerCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<AddListenerCertificatesCommandOutput>;
    addListenerCertificates(args: AddListenerCertificatesCommandInput, cb: (err: any, data?: AddListenerCertificatesCommandOutput) => void): void;
    addListenerCertificates(args: AddListenerCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddListenerCertificatesCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your
     *       Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups,
     *       listeners, and rules.</p>
     *          <p>Each tag consists of a key and an optional value. If a resource already has a tag with the
     *       same key, <code>AddTags</code> updates its value.</p>
     */
    addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
    addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    addTags(args: AddTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    /**
     * <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or
     *       Gateway Load Balancer.</p>
     *
     *
     *          <p>For more information, see the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for
     *             your Application Load Balancers</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for
     *             your Network Load Balancers</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your
     *             Gateway Load Balancers</a>
     *                </p>
     *             </li>
     *          </ul>
     *
     *          <p>This operation is idempotent, which means that it completes at most one time. If you
     *       attempt to create multiple listeners with the same settings, each call succeeds.</p>
     */
    createListener(args: CreateListenerCommandInput, options?: __HttpHandlerOptions): Promise<CreateListenerCommandOutput>;
    createListener(args: CreateListenerCommandInput, cb: (err: any, data?: CreateListenerCommandOutput) => void): void;
    createListener(args: CreateListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateListenerCommandOutput) => void): void;
    /**
     * <p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load
     *       Balancer.</p>
     *
     *
     *
     *          <p>For more information, see the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load
     *             Balancers</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load
     *             Balancers</a>
     *                </p>
     *             </li>
     *          </ul>
     *
     *          <p>This operation is idempotent, which means that it completes at most one time. If you
     *       attempt to create multiple load balancers with the same settings, each call succeeds.</p>
     */
    createLoadBalancer(args: CreateLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<CreateLoadBalancerCommandOutput>;
    createLoadBalancer(args: CreateLoadBalancerCommandInput, cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void): void;
    createLoadBalancer(args: CreateLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Creates a rule for the specified listener. The listener must be associated with an
     *       Application Load Balancer.</p>
     *          <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules
     *       are evaluated in priority order, from the lowest value to the highest value. When the
     *       conditions for a rule are met, its actions are performed. If the conditions for no rules are
     *       met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>
     */
    createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
    createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
    createRule(args: CreateRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
    /**
     * <p>Creates a target group.</p>
     *
     *
     *
     *          <p>For more information, see the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target
     *             groups for your Application Load Balancers</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups
     *             for your Network Load Balancers</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your
     *             Gateway Load Balancers</a>
     *                </p>
     *             </li>
     *          </ul>
     *
     *          <p>This operation is idempotent, which means that it completes at most one time. If you
     *       attempt to create multiple target groups with the same settings, each call succeeds.</p>
     */
    createTargetGroup(args: CreateTargetGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateTargetGroupCommandOutput>;
    createTargetGroup(args: CreateTargetGroupCommandInput, cb: (err: any, data?: CreateTargetGroupCommandOutput) => void): void;
    createTargetGroup(args: CreateTargetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTargetGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified listener.</p>
     *          <p>Alternatively, your listener is deleted when you delete the load balancer to which it is
     *         attached.</p>
     */
    deleteListener(args: DeleteListenerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteListenerCommandOutput>;
    deleteListener(args: DeleteListenerCommandInput, cb: (err: any, data?: DeleteListenerCommandOutput) => void): void;
    deleteListener(args: DeleteListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteListenerCommandOutput) => void): void;
    /**
     * <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load
     *       Balancer. Deleting a load balancer also deletes its listeners.</p>
     *          <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer
     *       does not exist or has already been deleted, the call succeeds.</p>
     *          <p>Deleting a load balancer does not affect its registered targets. For example, your EC2
     *       instances continue to run and are still registered to their target groups. If you no longer
     *       need these EC2 instances, you can stop or terminate them.</p>
     */
    deleteLoadBalancer(args: DeleteLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLoadBalancerCommandOutput>;
    deleteLoadBalancer(args: DeleteLoadBalancerCommandInput, cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void): void;
    deleteLoadBalancer(args: DeleteLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Deletes the specified rule.</p>
     *          <p>You can't delete the default rule.</p>
     */
    deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
    deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
    deleteRule(args: DeleteRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
    /**
     * <p>Deletes the specified target group.</p>
     *          <p>You can delete a target group if it is not referenced by any actions. Deleting a target
     *       group also deletes any associated health checks. Deleting a target group does not affect its
     *       registered targets. For example, any EC2 instances continue to run until you stop or terminate
     *       them.</p>
     */
    deleteTargetGroup(args: DeleteTargetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTargetGroupCommandOutput>;
    deleteTargetGroup(args: DeleteTargetGroupCommandInput, cb: (err: any, data?: DeleteTargetGroupCommandOutput) => void): void;
    deleteTargetGroup(args: DeleteTargetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTargetGroupCommandOutput) => void): void;
    /**
     * <p>Deregisters the specified targets from the specified target group. After the targets are
     *       deregistered, they no longer receive traffic from the load balancer.</p>
     */
    deregisterTargets(args: DeregisterTargetsCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterTargetsCommandOutput>;
    deregisterTargets(args: DeregisterTargetsCommandInput, cb: (err: any, data?: DeregisterTargetsCommandOutput) => void): void;
    deregisterTargets(args: DeregisterTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterTargetsCommandOutput) => void): void;
    /**
     * <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p>
     *          <p>For more information, see the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your
     *             Application Load Balancers</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your
     *             Network Load Balancers</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway
     *             Load Balancers</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    describeAccountLimits(args: DescribeAccountLimitsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountLimitsCommandOutput>;
    describeAccountLimits(args: DescribeAccountLimitsCommandInput, cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void): void;
    describeAccountLimits(args: DescribeAccountLimitsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void): void;
    /**
     * <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS
     *       listener.</p>
     *          <p>If the default certificate is also in the certificate list, it appears twice in the
     *       results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set
     *       to false).</p>
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or
     *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers
     *       Guide</i>.</p>
     */
    describeListenerCertificates(args: DescribeListenerCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeListenerCertificatesCommandOutput>;
    describeListenerCertificates(args: DescribeListenerCertificatesCommandInput, cb: (err: any, data?: DescribeListenerCertificatesCommandOutput) => void): void;
    describeListenerCertificates(args: DescribeListenerCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeListenerCertificatesCommandOutput) => void): void;
    /**
     * <p>Describes the specified listeners or the listeners for the specified Application Load
     *       Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load
     *       balancer or one or more listeners.</p>
     */
    describeListeners(args: DescribeListenersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeListenersCommandOutput>;
    describeListeners(args: DescribeListenersCommandInput, cb: (err: any, data?: DescribeListenersCommandOutput) => void): void;
    describeListeners(args: DescribeListenersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeListenersCommandOutput) => void): void;
    /**
     * <p>Describes the attributes for the specified Application Load Balancer, Network Load
     *       Balancer, or Gateway Load Balancer.</p>
     *
     *          <p>For more information, see the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers
     *             Guide</i>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers
     *             Guide</i>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers
     *             Guide</i>
     *                </p>
     *             </li>
     *          </ul>
     */
    describeLoadBalancerAttributes(args: DescribeLoadBalancerAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoadBalancerAttributesCommandOutput>;
    describeLoadBalancerAttributes(args: DescribeLoadBalancerAttributesCommandInput, cb: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void): void;
    describeLoadBalancerAttributes(args: DescribeLoadBalancerAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void): void;
    /**
     * <p>Describes the specified load balancers or all of your load balancers.</p>
     */
    describeLoadBalancers(args: DescribeLoadBalancersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoadBalancersCommandOutput>;
    describeLoadBalancers(args: DescribeLoadBalancersCommandInput, cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void): void;
    describeLoadBalancers(args: DescribeLoadBalancersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void): void;
    /**
     * <p>Describes the specified rules or the rules for the specified listener. You must specify
     *       either a listener or one or more rules.</p>
     */
    describeRules(args: DescribeRulesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRulesCommandOutput>;
    describeRules(args: DescribeRulesCommandInput, cb: (err: any, data?: DescribeRulesCommandOutput) => void): void;
    describeRules(args: DescribeRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRulesCommandOutput) => void): void;
    /**
     * <p>Describes the specified policies or all policies used for SSL negotiation.</p>
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or
     *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
     */
    describeSSLPolicies(args: DescribeSSLPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSSLPoliciesCommandOutput>;
    describeSSLPolicies(args: DescribeSSLPoliciesCommandInput, cb: (err: any, data?: DescribeSSLPoliciesCommandOutput) => void): void;
    describeSSLPolicies(args: DescribeSSLPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSSLPoliciesCommandOutput) => void): void;
    /**
     * <p>Describes the tags for the specified Elastic Load Balancing resources. You can describe
     *       the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load
     *       Balancers, target groups, listeners, or rules.</p>
     */
    describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
    describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    describeTags(args: DescribeTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    /**
     * <p>Describes the attributes for the specified target group.</p>
     *          <p>For more information, see the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers
     *             Guide</i>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers
     *             Guide</i>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers
     *             Guide</i>
     *                </p>
     *             </li>
     *          </ul>
     */
    describeTargetGroupAttributes(args: DescribeTargetGroupAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTargetGroupAttributesCommandOutput>;
    describeTargetGroupAttributes(args: DescribeTargetGroupAttributesCommandInput, cb: (err: any, data?: DescribeTargetGroupAttributesCommandOutput) => void): void;
    describeTargetGroupAttributes(args: DescribeTargetGroupAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTargetGroupAttributesCommandOutput) => void): void;
    /**
     * <p>Describes the specified target groups or all of your target groups. By default, all target
     *       groups are described. Alternatively, you can specify one of the following to filter the
     *       results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of
     *       one or more target groups.</p>
     */
    describeTargetGroups(args: DescribeTargetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTargetGroupsCommandOutput>;
    describeTargetGroups(args: DescribeTargetGroupsCommandInput, cb: (err: any, data?: DescribeTargetGroupsCommandOutput) => void): void;
    describeTargetGroups(args: DescribeTargetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTargetGroupsCommandOutput) => void): void;
    /**
     * <p>Describes the health of the specified targets or all of your targets.</p>
     */
    describeTargetHealth(args: DescribeTargetHealthCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTargetHealthCommandOutput>;
    describeTargetHealth(args: DescribeTargetHealthCommandInput, cb: (err: any, data?: DescribeTargetHealthCommandOutput) => void): void;
    describeTargetHealth(args: DescribeTargetHealthCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTargetHealthCommandOutput) => void): void;
    /**
     * <p>Replaces the specified properties of the specified listener. Any properties that you do
     *       not specify remain unchanged.</p>
     *          <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy
     *       and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP
     *       to TLS, you must add the security policy and default certificate properties.</p>
     *          <p>To add an item to a list, remove an item from a list, or update an item in a list, you
     *       must provide the entire list. For example, to add an action, specify a list with the current
     *       actions plus the new action.</p>
     */
    modifyListener(args: ModifyListenerCommandInput, options?: __HttpHandlerOptions): Promise<ModifyListenerCommandOutput>;
    modifyListener(args: ModifyListenerCommandInput, cb: (err: any, data?: ModifyListenerCommandOutput) => void): void;
    modifyListener(args: ModifyListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyListenerCommandOutput) => void): void;
    /**
     * <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load
     *       Balancer, or Gateway Load Balancer.</p>
     *          <p>If any of the specified attributes can't be modified as requested, the call fails. Any
     *       existing attributes that you do not modify retain their current values.</p>
     */
    modifyLoadBalancerAttributes(args: ModifyLoadBalancerAttributesCommandInput, options?: __HttpHandlerOptions): Promise<ModifyLoadBalancerAttributesCommandOutput>;
    modifyLoadBalancerAttributes(args: ModifyLoadBalancerAttributesCommandInput, cb: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void): void;
    modifyLoadBalancerAttributes(args: ModifyLoadBalancerAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void): void;
    /**
     * <p>Replaces the specified properties of the specified rule. Any properties that you do not
     *       specify are unchanged.</p>
     *          <p>To add an item to a list, remove an item from a list, or update an item in a list, you
     *       must provide the entire list. For example, to add an action, specify a list with the current
     *       actions plus the new action.</p>
     */
    modifyRule(args: ModifyRuleCommandInput, options?: __HttpHandlerOptions): Promise<ModifyRuleCommandOutput>;
    modifyRule(args: ModifyRuleCommandInput, cb: (err: any, data?: ModifyRuleCommandOutput) => void): void;
    modifyRule(args: ModifyRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyRuleCommandOutput) => void): void;
    /**
     * <p>Modifies the health checks used when evaluating the health state of the targets in the
     *       specified target group.</p>
     */
    modifyTargetGroup(args: ModifyTargetGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyTargetGroupCommandOutput>;
    modifyTargetGroup(args: ModifyTargetGroupCommandInput, cb: (err: any, data?: ModifyTargetGroupCommandOutput) => void): void;
    modifyTargetGroup(args: ModifyTargetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyTargetGroupCommandOutput) => void): void;
    /**
     * <p>Modifies the specified attributes of the specified target group.</p>
     */
    modifyTargetGroupAttributes(args: ModifyTargetGroupAttributesCommandInput, options?: __HttpHandlerOptions): Promise<ModifyTargetGroupAttributesCommandOutput>;
    modifyTargetGroupAttributes(args: ModifyTargetGroupAttributesCommandInput, cb: (err: any, data?: ModifyTargetGroupAttributesCommandOutput) => void): void;
    modifyTargetGroupAttributes(args: ModifyTargetGroupAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyTargetGroupAttributesCommandOutput) => void): void;
    /**
     * <p>Registers the specified targets with the specified target group.</p>
     *
     *          <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you
     *       register it.</p>
     *
     *          <p>By default, the load balancer routes requests to registered targets using the protocol and
     *       port for the target group. Alternatively, you can override the port for a target when you
     *       register it. You can register each EC2 instance or IP address with the same target group
     *       multiple times using different ports.</p>
     *
     *          <p>With a Network Load Balancer, you cannot register instances by instance ID if they have
     *       the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3,
     *       and T1. You can register instances of these types by IP address.</p>
     */
    registerTargets(args: RegisterTargetsCommandInput, options?: __HttpHandlerOptions): Promise<RegisterTargetsCommandOutput>;
    registerTargets(args: RegisterTargetsCommandInput, cb: (err: any, data?: RegisterTargetsCommandOutput) => void): void;
    registerTargets(args: RegisterTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterTargetsCommandOutput) => void): void;
    /**
     * <p>Removes the specified certificate from the certificate list for the specified HTTPS or TLS
     *       listener.</p>
     */
    removeListenerCertificates(args: RemoveListenerCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<RemoveListenerCertificatesCommandOutput>;
    removeListenerCertificates(args: RemoveListenerCertificatesCommandInput, cb: (err: any, data?: RemoveListenerCertificatesCommandOutput) => void): void;
    removeListenerCertificates(args: RemoveListenerCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveListenerCertificatesCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified Elastic Load Balancing resources. You can
     *       remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway
     *       Load Balancers, target groups, listeners, or rules.</p>
     */
    removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
    removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
    removeTags(args: RemoveTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
    /**
     * <p>Sets the type of IP addresses used by the subnets of the specified Application Load
     *       Balancer or Network Load Balancer.</p>
     */
    setIpAddressType(args: SetIpAddressTypeCommandInput, options?: __HttpHandlerOptions): Promise<SetIpAddressTypeCommandOutput>;
    setIpAddressType(args: SetIpAddressTypeCommandInput, cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void): void;
    setIpAddressType(args: SetIpAddressTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void): void;
    /**
     * <p>Sets the priorities of the specified rules.</p>
     *          <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any
     *       existing rules that you do not specify retain their current priority.</p>
     */
    setRulePriorities(args: SetRulePrioritiesCommandInput, options?: __HttpHandlerOptions): Promise<SetRulePrioritiesCommandOutput>;
    setRulePriorities(args: SetRulePrioritiesCommandInput, cb: (err: any, data?: SetRulePrioritiesCommandOutput) => void): void;
    setRulePriorities(args: SetRulePrioritiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetRulePrioritiesCommandOutput) => void): void;
    /**
     * <p>Associates the specified security groups with the specified Application Load Balancer. The
     *       specified security groups override the previously associated security groups.</p>
     *          <p>You can't specify a security group for a Network Load Balancer or Gateway Load
     *       Balancer.</p>
     */
    setSecurityGroups(args: SetSecurityGroupsCommandInput, options?: __HttpHandlerOptions): Promise<SetSecurityGroupsCommandOutput>;
    setSecurityGroups(args: SetSecurityGroupsCommandInput, cb: (err: any, data?: SetSecurityGroupsCommandOutput) => void): void;
    setSecurityGroups(args: SetSecurityGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetSecurityGroupsCommandOutput) => void): void;
    /**
     * <p>Enables the Availability Zones for the specified public subnets for the specified
     *       Application Load Balancer or Network Load Balancer. The specified subnets replace the
     *       previously enabled subnets.</p>
     *          <p>When you specify subnets for a Network Load Balancer, you must include all subnets that
     *       were enabled previously, with their existing configurations, plus any additional
     *       subnets.</p>
     */
    setSubnets(args: SetSubnetsCommandInput, options?: __HttpHandlerOptions): Promise<SetSubnetsCommandOutput>;
    setSubnets(args: SetSubnetsCommandInput, cb: (err: any, data?: SetSubnetsCommandOutput) => void): void;
    setSubnets(args: SetSubnetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetSubnetsCommandOutput) => void): void;
}
