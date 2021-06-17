import { MarketplaceCommerceAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceCommerceAnalyticsClient";
import { GenerateDataSetRequest, GenerateDataSetResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GenerateDataSetCommandInput extends GenerateDataSetRequest {
}
export interface GenerateDataSetCommandOutput extends GenerateDataSetResult, __MetadataBearer {
}
/**
 * Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified
 *         S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that
 *         can be used to correlate requests with notifications from the SNS topic.
 *         Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv.
 *         If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
 *         be overwritten by the new file.
 *         Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
 *         s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCommerceAnalyticsClient, GenerateDataSetCommand } from "@aws-sdk/client-marketplace-commerce-analytics"; // ES Modules import
 * // const { MarketplaceCommerceAnalyticsClient, GenerateDataSetCommand } = require("@aws-sdk/client-marketplace-commerce-analytics"); // CommonJS import
 * const client = new MarketplaceCommerceAnalyticsClient(config);
 * const command = new GenerateDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateDataSetCommandInput} for command's `input` shape.
 * @see {@link GenerateDataSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCommerceAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GenerateDataSetCommand extends $Command<GenerateDataSetCommandInput, GenerateDataSetCommandOutput, MarketplaceCommerceAnalyticsClientResolvedConfig> {
    readonly input: GenerateDataSetCommandInput;
    constructor(input: GenerateDataSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceCommerceAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateDataSetCommandInput, GenerateDataSetCommandOutput>;
    private serialize;
    private deserialize;
}
