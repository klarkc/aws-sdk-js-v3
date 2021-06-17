import { MarketplaceCommerceAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceCommerceAnalyticsClient";
import { StartSupportDataExportRequest, StartSupportDataExportResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartSupportDataExportCommandInput extends StartSupportDataExportRequest {
}
export interface StartSupportDataExportCommandOutput extends StartSupportDataExportResult, __MetadataBearer {
}
/**
 * Given a data set type and a from date, asynchronously publishes the requested customer support data
 *         to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request
 *         identifier that can be used to correlate requests with notifications from the SNS topic.
 *         Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv.
 *         If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
 *         be overwritten by the new file.
 *         Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
 *         s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCommerceAnalyticsClient, StartSupportDataExportCommand } from "@aws-sdk/client-marketplace-commerce-analytics"; // ES Modules import
 * // const { MarketplaceCommerceAnalyticsClient, StartSupportDataExportCommand } = require("@aws-sdk/client-marketplace-commerce-analytics"); // CommonJS import
 * const client = new MarketplaceCommerceAnalyticsClient(config);
 * const command = new StartSupportDataExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSupportDataExportCommandInput} for command's `input` shape.
 * @see {@link StartSupportDataExportCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCommerceAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSupportDataExportCommand extends $Command<StartSupportDataExportCommandInput, StartSupportDataExportCommandOutput, MarketplaceCommerceAnalyticsClientResolvedConfig> {
    readonly input: StartSupportDataExportCommandInput;
    constructor(input: StartSupportDataExportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceCommerceAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSupportDataExportCommandInput, StartSupportDataExportCommandOutput>;
    private serialize;
    private deserialize;
}
