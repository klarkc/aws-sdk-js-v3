import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetInsightEventsRequest, GetInsightEventsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInsightEventsCommandInput extends GetInsightEventsRequest {
}
export interface GetInsightEventsCommandOutput extends GetInsightEventsResult, __MetadataBearer {
}
/**
 * <p>X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
 *          event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray
 *          console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightEventsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightEventsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightEventsCommandInput} for command's `input` shape.
 * @see {@link GetInsightEventsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInsightEventsCommand extends $Command<GetInsightEventsCommandInput, GetInsightEventsCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetInsightEventsCommandInput;
    constructor(input: GetInsightEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInsightEventsCommandInput, GetInsightEventsCommandOutput>;
    private serialize;
    private deserialize;
}
