import { AddListenerCertificatesCommandInput, AddListenerCertificatesCommandOutput } from "../commands/AddListenerCertificatesCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "../commands/CreateListenerCommand";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "../commands/CreateLoadBalancerCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "../commands/CreateRuleCommand";
import { CreateTargetGroupCommandInput, CreateTargetGroupCommandOutput } from "../commands/CreateTargetGroupCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "../commands/DeleteListenerCommand";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "../commands/DeleteLoadBalancerCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import { DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput } from "../commands/DeleteTargetGroupCommand";
import { DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput } from "../commands/DeregisterTargetsCommand";
import { DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput } from "../commands/DescribeAccountLimitsCommand";
import { DescribeListenerCertificatesCommandInput, DescribeListenerCertificatesCommandOutput } from "../commands/DescribeListenerCertificatesCommand";
import { DescribeListenersCommandInput, DescribeListenersCommandOutput } from "../commands/DescribeListenersCommand";
import { DescribeLoadBalancerAttributesCommandInput, DescribeLoadBalancerAttributesCommandOutput } from "../commands/DescribeLoadBalancerAttributesCommand";
import { DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput } from "../commands/DescribeLoadBalancersCommand";
import { DescribeRulesCommandInput, DescribeRulesCommandOutput } from "../commands/DescribeRulesCommand";
import { DescribeSSLPoliciesCommandInput, DescribeSSLPoliciesCommandOutput } from "../commands/DescribeSSLPoliciesCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import { DescribeTargetGroupAttributesCommandInput, DescribeTargetGroupAttributesCommandOutput } from "../commands/DescribeTargetGroupAttributesCommand";
import { DescribeTargetGroupsCommandInput, DescribeTargetGroupsCommandOutput } from "../commands/DescribeTargetGroupsCommand";
import { DescribeTargetHealthCommandInput, DescribeTargetHealthCommandOutput } from "../commands/DescribeTargetHealthCommand";
import { ModifyListenerCommandInput, ModifyListenerCommandOutput } from "../commands/ModifyListenerCommand";
import { ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput } from "../commands/ModifyLoadBalancerAttributesCommand";
import { ModifyRuleCommandInput, ModifyRuleCommandOutput } from "../commands/ModifyRuleCommand";
import { ModifyTargetGroupAttributesCommandInput, ModifyTargetGroupAttributesCommandOutput } from "../commands/ModifyTargetGroupAttributesCommand";
import { ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput } from "../commands/ModifyTargetGroupCommand";
import { RegisterTargetsCommandInput, RegisterTargetsCommandOutput } from "../commands/RegisterTargetsCommand";
import { RemoveListenerCertificatesCommandInput, RemoveListenerCertificatesCommandOutput } from "../commands/RemoveListenerCertificatesCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
import { SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput } from "../commands/SetIpAddressTypeCommand";
import { SetRulePrioritiesCommandInput, SetRulePrioritiesCommandOutput } from "../commands/SetRulePrioritiesCommand";
import { SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput } from "../commands/SetSecurityGroupsCommand";
import { SetSubnetsCommandInput, SetSubnetsCommandOutput } from "../commands/SetSubnetsCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_queryAddListenerCertificatesCommand: (input: AddListenerCertificatesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryAddTagsCommand: (input: AddTagsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryCreateListenerCommand: (input: CreateListenerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryCreateLoadBalancerCommand: (input: CreateLoadBalancerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryCreateRuleCommand: (input: CreateRuleCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryCreateTargetGroupCommand: (input: CreateTargetGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDeleteListenerCommand: (input: DeleteListenerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDeleteLoadBalancerCommand: (input: DeleteLoadBalancerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDeleteRuleCommand: (input: DeleteRuleCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDeleteTargetGroupCommand: (input: DeleteTargetGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDeregisterTargetsCommand: (input: DeregisterTargetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeAccountLimitsCommand: (input: DescribeAccountLimitsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeListenerCertificatesCommand: (input: DescribeListenerCertificatesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeListenersCommand: (input: DescribeListenersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeLoadBalancerAttributesCommand: (input: DescribeLoadBalancerAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeLoadBalancersCommand: (input: DescribeLoadBalancersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeRulesCommand: (input: DescribeRulesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeSSLPoliciesCommand: (input: DescribeSSLPoliciesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeTagsCommand: (input: DescribeTagsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeTargetGroupAttributesCommand: (input: DescribeTargetGroupAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeTargetGroupsCommand: (input: DescribeTargetGroupsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeTargetHealthCommand: (input: DescribeTargetHealthCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryModifyListenerCommand: (input: ModifyListenerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryModifyLoadBalancerAttributesCommand: (input: ModifyLoadBalancerAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryModifyRuleCommand: (input: ModifyRuleCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryModifyTargetGroupCommand: (input: ModifyTargetGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryModifyTargetGroupAttributesCommand: (input: ModifyTargetGroupAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryRegisterTargetsCommand: (input: RegisterTargetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryRemoveListenerCertificatesCommand: (input: RemoveListenerCertificatesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_queryRemoveTagsCommand: (input: RemoveTagsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_querySetIpAddressTypeCommand: (input: SetIpAddressTypeCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_querySetRulePrioritiesCommand: (input: SetRulePrioritiesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_querySetSecurityGroupsCommand: (input: SetSecurityGroupsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_querySetSubnetsCommand: (input: SetSubnetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_queryAddListenerCertificatesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AddListenerCertificatesCommandOutput>;
export declare const deserializeAws_queryAddTagsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AddTagsCommandOutput>;
export declare const deserializeAws_queryCreateListenerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateListenerCommandOutput>;
export declare const deserializeAws_queryCreateLoadBalancerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLoadBalancerCommandOutput>;
export declare const deserializeAws_queryCreateRuleCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateRuleCommandOutput>;
export declare const deserializeAws_queryCreateTargetGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateTargetGroupCommandOutput>;
export declare const deserializeAws_queryDeleteListenerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteListenerCommandOutput>;
export declare const deserializeAws_queryDeleteLoadBalancerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLoadBalancerCommandOutput>;
export declare const deserializeAws_queryDeleteRuleCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteRuleCommandOutput>;
export declare const deserializeAws_queryDeleteTargetGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteTargetGroupCommandOutput>;
export declare const deserializeAws_queryDeregisterTargetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeregisterTargetsCommandOutput>;
export declare const deserializeAws_queryDescribeAccountLimitsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeAccountLimitsCommandOutput>;
export declare const deserializeAws_queryDescribeListenerCertificatesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeListenerCertificatesCommandOutput>;
export declare const deserializeAws_queryDescribeListenersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeListenersCommandOutput>;
export declare const deserializeAws_queryDescribeLoadBalancerAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeLoadBalancerAttributesCommandOutput>;
export declare const deserializeAws_queryDescribeLoadBalancersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeLoadBalancersCommandOutput>;
export declare const deserializeAws_queryDescribeRulesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeRulesCommandOutput>;
export declare const deserializeAws_queryDescribeSSLPoliciesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeSSLPoliciesCommandOutput>;
export declare const deserializeAws_queryDescribeTagsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeTagsCommandOutput>;
export declare const deserializeAws_queryDescribeTargetGroupAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeTargetGroupAttributesCommandOutput>;
export declare const deserializeAws_queryDescribeTargetGroupsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeTargetGroupsCommandOutput>;
export declare const deserializeAws_queryDescribeTargetHealthCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeTargetHealthCommandOutput>;
export declare const deserializeAws_queryModifyListenerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ModifyListenerCommandOutput>;
export declare const deserializeAws_queryModifyLoadBalancerAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ModifyLoadBalancerAttributesCommandOutput>;
export declare const deserializeAws_queryModifyRuleCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ModifyRuleCommandOutput>;
export declare const deserializeAws_queryModifyTargetGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ModifyTargetGroupCommandOutput>;
export declare const deserializeAws_queryModifyTargetGroupAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ModifyTargetGroupAttributesCommandOutput>;
export declare const deserializeAws_queryRegisterTargetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RegisterTargetsCommandOutput>;
export declare const deserializeAws_queryRemoveListenerCertificatesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RemoveListenerCertificatesCommandOutput>;
export declare const deserializeAws_queryRemoveTagsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RemoveTagsCommandOutput>;
export declare const deserializeAws_querySetIpAddressTypeCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetIpAddressTypeCommandOutput>;
export declare const deserializeAws_querySetRulePrioritiesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetRulePrioritiesCommandOutput>;
export declare const deserializeAws_querySetSecurityGroupsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetSecurityGroupsCommandOutput>;
export declare const deserializeAws_querySetSubnetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetSubnetsCommandOutput>;
