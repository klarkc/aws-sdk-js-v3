import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetInsightSummariesRequest, GetInsightSummariesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInsightSummariesCommandInput extends GetInsightSummariesRequest {
}
export interface GetInsightSummariesCommandOutput extends GetInsightSummariesResult, __MetadataBearer {
}
/**
 * <p>Retrieves the summaries of all insights in the specified group matching the provided filter values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightSummariesCommandInput} for command's `input` shape.
 * @see {@link GetInsightSummariesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInsightSummariesCommand extends $Command<GetInsightSummariesCommandInput, GetInsightSummariesCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetInsightSummariesCommandInput;
    constructor(input: GetInsightSummariesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInsightSummariesCommandInput, GetInsightSummariesCommandOutput>;
    private serialize;
    private deserialize;
}
