import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTrafficMirrorFilterRuleRequest, CreateTrafficMirrorFilterRuleResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTrafficMirrorFilterRuleCommandInput extends CreateTrafficMirrorFilterRuleRequest {
}
export interface CreateTrafficMirrorFilterRuleCommandOutput extends CreateTrafficMirrorFilterRuleResult, __MetadataBearer {
}
/**
 * <p>Creates a Traffic Mirror filter rule. </p>
 *          <p>A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.</p>
 *          <p>You need the Traffic Mirror filter ID when you create the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTrafficMirrorFilterRuleCommand extends $Command<CreateTrafficMirrorFilterRuleCommandInput, CreateTrafficMirrorFilterRuleCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTrafficMirrorFilterRuleCommandInput;
    constructor(input: CreateTrafficMirrorFilterRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficMirrorFilterRuleCommandInput, CreateTrafficMirrorFilterRuleCommandOutput>;
    private serialize;
    private deserialize;
}
