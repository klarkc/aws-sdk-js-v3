import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetSamplingStatisticSummariesRequest, GetSamplingStatisticSummariesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSamplingStatisticSummariesCommandInput extends GetSamplingStatisticSummariesRequest {
}
export interface GetSamplingStatisticSummariesCommandOutput extends GetSamplingStatisticSummariesResult, __MetadataBearer {
}
/**
 * <p>Retrieves information about recent sampling results for all sampling rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingStatisticSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingStatisticSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetSamplingStatisticSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSamplingStatisticSummariesCommandInput} for command's `input` shape.
 * @see {@link GetSamplingStatisticSummariesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSamplingStatisticSummariesCommand extends $Command<GetSamplingStatisticSummariesCommandInput, GetSamplingStatisticSummariesCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetSamplingStatisticSummariesCommandInput;
    constructor(input: GetSamplingStatisticSummariesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSamplingStatisticSummariesCommandInput, GetSamplingStatisticSummariesCommandOutput>;
    private serialize;
    private deserialize;
}
