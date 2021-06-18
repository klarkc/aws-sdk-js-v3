import {
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "../commands/DeleteScalingPolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "../commands/DeleteScheduledActionCommand";
import {
  DeregisterScalableTargetCommandInput,
  DeregisterScalableTargetCommandOutput,
} from "../commands/DeregisterScalableTargetCommand";
import {
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput,
} from "../commands/DescribeScalableTargetsCommand";
import {
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "../commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "../commands/DescribeScalingPoliciesCommand";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "../commands/PutScalingPolicyCommand";
import { PutScheduledActionCommandInput, PutScheduledActionCommandOutput } from "../commands/PutScheduledActionCommand";
import {
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput,
} from "../commands/RegisterScalableTargetCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1DeleteScalingPolicyCommand: (
  input: DeleteScalingPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteScheduledActionCommand: (
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeregisterScalableTargetCommand: (
  input: DeregisterScalableTargetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeScalableTargetsCommand: (
  input: DescribeScalableTargetsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeScalingActivitiesCommand: (
  input: DescribeScalingActivitiesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeScalingPoliciesCommand: (
  input: DescribeScalingPoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeScheduledActionsCommand: (
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutScalingPolicyCommand: (
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutScheduledActionCommand: (
  input: PutScheduledActionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RegisterScalableTargetCommand: (
  input: RegisterScalableTargetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1DeleteScalingPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteScalingPolicyCommandOutput>;
export declare const deserializeAws_json1_1DeleteScheduledActionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteScheduledActionCommandOutput>;
export declare const deserializeAws_json1_1DeregisterScalableTargetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeregisterScalableTargetCommandOutput>;
export declare const deserializeAws_json1_1DescribeScalableTargetsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeScalableTargetsCommandOutput>;
export declare const deserializeAws_json1_1DescribeScalingActivitiesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeScalingActivitiesCommandOutput>;
export declare const deserializeAws_json1_1DescribeScalingPoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeScalingPoliciesCommandOutput>;
export declare const deserializeAws_json1_1DescribeScheduledActionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeScheduledActionsCommandOutput>;
export declare const deserializeAws_json1_1PutScalingPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutScalingPolicyCommandOutput>;
export declare const deserializeAws_json1_1PutScheduledActionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutScheduledActionCommandOutput>;
export declare const deserializeAws_json1_1RegisterScalableTargetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RegisterScalableTargetCommandOutput>;
