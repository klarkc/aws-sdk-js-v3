import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { GetInsightResultsRequest, GetInsightResultsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInsightResultsCommandInput extends GetInsightResultsRequest {
}
export interface GetInsightResultsCommandOutput extends GetInsightResultsResponse, __MetadataBearer {
}
/**
 * <p>Lists the results of the Security Hub insight specified by the insight ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInsightResultsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInsightResultsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetInsightResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightResultsCommandInput} for command's `input` shape.
 * @see {@link GetInsightResultsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInsightResultsCommand extends $Command<GetInsightResultsCommandInput, GetInsightResultsCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: GetInsightResultsCommandInput;
    constructor(input: GetInsightResultsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInsightResultsCommandInput, GetInsightResultsCommandOutput>;
    private serialize;
    private deserialize;
}
