import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetTraceGraphRequest, GetTraceGraphResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTraceGraphCommandInput extends GetTraceGraphRequest {
}
export interface GetTraceGraphCommandOutput extends GetTraceGraphResult, __MetadataBearer {
}
/**
 * <p>Retrieves a service graph for one or more specific trace IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTraceGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTraceGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetTraceGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTraceGraphCommandInput} for command's `input` shape.
 * @see {@link GetTraceGraphCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTraceGraphCommand extends $Command<GetTraceGraphCommandInput, GetTraceGraphCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetTraceGraphCommandInput;
    constructor(input: GetTraceGraphCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTraceGraphCommandInput, GetTraceGraphCommandOutput>;
    private serialize;
    private deserialize;
}
