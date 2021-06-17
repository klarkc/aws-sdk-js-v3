import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { GetInsightsRequest, GetInsightsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInsightsCommandInput extends GetInsightsRequest {
}
export interface GetInsightsCommandOutput extends GetInsightsResponse, __MetadataBearer {
}
/**
 * <p>Lists and describes insights for the specified insight ARNs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInsightsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInsightsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightsCommandInput} for command's `input` shape.
 * @see {@link GetInsightsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInsightsCommand extends $Command<GetInsightsCommandInput, GetInsightsCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: GetInsightsCommandInput;
    constructor(input: GetInsightsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInsightsCommandInput, GetInsightsCommandOutput>;
    private serialize;
    private deserialize;
}
