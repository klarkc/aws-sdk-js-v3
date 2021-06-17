import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { UpdateSamplingRuleRequest, UpdateSamplingRuleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSamplingRuleCommandInput extends UpdateSamplingRuleRequest {
}
export interface UpdateSamplingRuleCommandOutput extends UpdateSamplingRuleResult, __MetadataBearer {
}
/**
 * <p>Modifies a sampling rule's configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, UpdateSamplingRuleCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, UpdateSamplingRuleCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new UpdateSamplingRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSamplingRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateSamplingRuleCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSamplingRuleCommand extends $Command<UpdateSamplingRuleCommandInput, UpdateSamplingRuleCommandOutput, XRayClientResolvedConfig> {
    readonly input: UpdateSamplingRuleCommandInput;
    constructor(input: UpdateSamplingRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSamplingRuleCommandInput, UpdateSamplingRuleCommandOutput>;
    private serialize;
    private deserialize;
}
