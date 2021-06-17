import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetServiceGraphRequest, GetServiceGraphResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetServiceGraphCommandInput extends GetServiceGraphRequest {
}
export interface GetServiceGraphCommandOutput extends GetServiceGraphResult, __MetadataBearer {
}
/**
 * <p>Retrieves a document that describes services that process incoming requests, and
 *       downstream services that they call as a result. Root services process incoming requests and
 *       make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">AWS X-Ray SDK</a>.
 *       Downstream services can be other applications, AWS resources, HTTP web APIs, or SQL
 *       databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetServiceGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetServiceGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetServiceGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceGraphCommandInput} for command's `input` shape.
 * @see {@link GetServiceGraphCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetServiceGraphCommand extends $Command<GetServiceGraphCommandInput, GetServiceGraphCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetServiceGraphCommandInput;
    constructor(input: GetServiceGraphCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceGraphCommandInput, GetServiceGraphCommandOutput>;
    private serialize;
    private deserialize;
}
