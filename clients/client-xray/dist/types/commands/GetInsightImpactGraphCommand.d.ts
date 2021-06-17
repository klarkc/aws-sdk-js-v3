import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetInsightImpactGraphRequest, GetInsightImpactGraphResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInsightImpactGraphCommandInput extends GetInsightImpactGraphRequest {
}
export interface GetInsightImpactGraphCommandOutput extends GetInsightImpactGraphResult, __MetadataBearer {
}
/**
 * <p>Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
 *          structural information. For a complete service graph, use this API with the GetServiceGraph API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightImpactGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightImpactGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightImpactGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightImpactGraphCommandInput} for command's `input` shape.
 * @see {@link GetInsightImpactGraphCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInsightImpactGraphCommand extends $Command<GetInsightImpactGraphCommandInput, GetInsightImpactGraphCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetInsightImpactGraphCommandInput;
    constructor(input: GetInsightImpactGraphCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInsightImpactGraphCommandInput, GetInsightImpactGraphCommandOutput>;
    private serialize;
    private deserialize;
}
