import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetSamplingTargetsRequest, GetSamplingTargetsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSamplingTargetsCommandInput extends GetSamplingTargetsRequest {
}
export interface GetSamplingTargetsCommandOutput extends GetSamplingTargetsResult, __MetadataBearer {
}
/**
 * <p>Requests a sampling quota for rules that the service is using to sample requests.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingTargetsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingTargetsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetSamplingTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSamplingTargetsCommandInput} for command's `input` shape.
 * @see {@link GetSamplingTargetsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSamplingTargetsCommand extends $Command<GetSamplingTargetsCommandInput, GetSamplingTargetsCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetSamplingTargetsCommandInput;
    constructor(input: GetSamplingTargetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSamplingTargetsCommandInput, GetSamplingTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
