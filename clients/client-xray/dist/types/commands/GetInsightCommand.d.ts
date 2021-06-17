import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetInsightRequest, GetInsightResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInsightCommandInput extends GetInsightRequest {
}
export interface GetInsightCommandOutput extends GetInsightResult, __MetadataBearer {
}
/**
 * <p>Retrieves the summary information of an insight. This includes impact to clients and
 *          root cause services, the top anomalous services, the category, the state of the insight,
 *          and the start and end time of the insight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightCommandInput} for command's `input` shape.
 * @see {@link GetInsightCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInsightCommand extends $Command<GetInsightCommandInput, GetInsightCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetInsightCommandInput;
    constructor(input: GetInsightCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInsightCommandInput, GetInsightCommandOutput>;
    private serialize;
    private deserialize;
}
