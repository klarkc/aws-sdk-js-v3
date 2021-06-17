import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { CreateSamplingRuleRequest, CreateSamplingRuleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSamplingRuleCommandInput extends CreateSamplingRuleRequest {
}
export interface CreateSamplingRuleCommandOutput extends CreateSamplingRuleResult, __MetadataBearer {
}
/**
 * <p>Creates a rule to control sampling behavior for instrumented applications. Services
 *          retrieve rules with <a>GetSamplingRules</a>, and evaluate each rule in ascending
 *          order of <i>priority</i> for each request. If a rule matches, the service
 *          records a trace, borrowing it from the reservoir size. After 10 seconds, the service
 *          reports back to X-Ray with <a>GetSamplingTargets</a> to get updated versions of
 *          each in-use rule. The updated rule contains a trace quota that the service can use instead
 *          of borrowing from the reservoir.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, CreateSamplingRuleCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, CreateSamplingRuleCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new CreateSamplingRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSamplingRuleCommandInput} for command's `input` shape.
 * @see {@link CreateSamplingRuleCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSamplingRuleCommand extends $Command<CreateSamplingRuleCommandInput, CreateSamplingRuleCommandOutput, XRayClientResolvedConfig> {
    readonly input: CreateSamplingRuleCommandInput;
    constructor(input: CreateSamplingRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSamplingRuleCommandInput, CreateSamplingRuleCommandOutput>;
    private serialize;
    private deserialize;
}
