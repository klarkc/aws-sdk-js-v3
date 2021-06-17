import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetSamplingRulesRequest, GetSamplingRulesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSamplingRulesCommandInput extends GetSamplingRulesRequest {
}
export interface GetSamplingRulesCommandOutput extends GetSamplingRulesResult, __MetadataBearer {
}
/**
 * <p>Retrieves all sampling rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingRulesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingRulesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetSamplingRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSamplingRulesCommandInput} for command's `input` shape.
 * @see {@link GetSamplingRulesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSamplingRulesCommand extends $Command<GetSamplingRulesCommandInput, GetSamplingRulesCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetSamplingRulesCommandInput;
    constructor(input: GetSamplingRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSamplingRulesCommandInput, GetSamplingRulesCommandOutput>;
    private serialize;
    private deserialize;
}
