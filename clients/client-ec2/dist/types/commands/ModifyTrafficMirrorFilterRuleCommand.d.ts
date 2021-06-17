import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTrafficMirrorFilterRuleRequest, ModifyTrafficMirrorFilterRuleResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyTrafficMirrorFilterRuleCommandInput extends ModifyTrafficMirrorFilterRuleRequest {
}
export interface ModifyTrafficMirrorFilterRuleCommandOutput extends ModifyTrafficMirrorFilterRuleResult, __MetadataBearer {
}
/**
 * <p>Modifies the specified Traffic Mirror rule.</p>
 *          <p>
 *             <code>DestinationCidrBlock</code> and <code>SourceCidrBlock</code> must both be an IPv4
 *          range or an IPv6 range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyTrafficMirrorFilterRuleCommand extends $Command<ModifyTrafficMirrorFilterRuleCommandInput, ModifyTrafficMirrorFilterRuleCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyTrafficMirrorFilterRuleCommandInput;
    constructor(input: ModifyTrafficMirrorFilterRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTrafficMirrorFilterRuleCommandInput, ModifyTrafficMirrorFilterRuleCommandOutput>;
    private serialize;
    private deserialize;
}
