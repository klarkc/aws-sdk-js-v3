import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeContributorInsightsInput, DescribeContributorInsightsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeContributorInsightsCommandInput extends DescribeContributorInsightsInput {
}
export interface DescribeContributorInsightsCommandOutput extends DescribeContributorInsightsOutput, __MetadataBearer {
}
/**
 * <p>Returns information about contributor insights, for a given table or global secondary index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeContributorInsightsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeContributorInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link DescribeContributorInsightsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeContributorInsightsCommand extends $Command<DescribeContributorInsightsCommandInput, DescribeContributorInsightsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeContributorInsightsCommandInput;
    constructor(input: DescribeContributorInsightsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContributorInsightsCommandInput, DescribeContributorInsightsCommandOutput>;
    private serialize;
    private deserialize;
}
