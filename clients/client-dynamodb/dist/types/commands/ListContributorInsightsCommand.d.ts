import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListContributorInsightsInput, ListContributorInsightsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListContributorInsightsCommandInput extends ListContributorInsightsInput {
}
export interface ListContributorInsightsCommandOutput extends ListContributorInsightsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListContributorInsightsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListContributorInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link ListContributorInsightsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListContributorInsightsCommand extends $Command<ListContributorInsightsCommandInput, ListContributorInsightsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListContributorInsightsCommandInput;
    constructor(input: ListContributorInsightsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContributorInsightsCommandInput, ListContributorInsightsCommandOutput>;
    private serialize;
    private deserialize;
}
