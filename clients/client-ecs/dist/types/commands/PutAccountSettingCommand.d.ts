import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutAccountSettingRequest, PutAccountSettingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAccountSettingCommandInput extends PutAccountSettingRequest {
}
export interface PutAccountSettingCommandOutput extends PutAccountSettingResponse, __MetadataBearer {
}
/**
 * <p>Modifies an account setting. Account settings are set on a per-Region basis.</p>
 * 		       <p>If you change the account setting for the root user, the default settings for all of
 * 			the IAM users and roles for which no individual account setting has been specified are
 * 			reset. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account
 * 				Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or
 * 				<code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name
 * 			(ARN) and resource ID format of the resource type for a specified IAM user, IAM role, or
 * 			the root user for an account is affected. The opt-in and opt-out account setting must be
 * 			set for each Amazon ECS resource separately. The ARN and resource ID format of a resource
 * 			will be defined by the opt-in status of the IAM user or role that created the resource.
 * 			You must enable this setting to use Amazon ECS features such as resource tagging.</p>
 * 		       <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI)
 * 			limit for any new container instances that support the feature is changed. If
 * 				<code>awsvpcTrunking</code> is enabled, any new container instances that support the
 * 			feature are launched have the increased ENI limits available to them. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network
 * 				Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>When <code>containerInsights</code> is specified, the default setting indicating
 * 			whether CloudWatch Container Insights is enabled for your clusters is changed. If
 * 				<code>containerInsights</code> is enabled, any new clusters that are created will
 * 			have Container Insights enabled unless you disable it during cluster creation. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch
 * 				Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAccountSettingCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAccountSettingCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new PutAccountSettingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountSettingCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAccountSettingCommand extends $Command<PutAccountSettingCommandInput, PutAccountSettingCommandOutput, ECSClientResolvedConfig> {
    readonly input: PutAccountSettingCommandInput;
    constructor(input: PutAccountSettingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAccountSettingCommandInput, PutAccountSettingCommandOutput>;
    private serialize;
    private deserialize;
}
