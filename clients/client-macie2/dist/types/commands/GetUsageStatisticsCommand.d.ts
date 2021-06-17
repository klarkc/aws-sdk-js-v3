import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetUsageStatisticsRequest, GetUsageStatisticsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetUsageStatisticsCommandInput extends GetUsageStatisticsRequest {
}
export interface GetUsageStatisticsCommandOutput extends GetUsageStatisticsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves (queries) quotas and aggregated usage data for one or more accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetUsageStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetUsageStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetUsageStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetUsageStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUsageStatisticsCommand extends $Command<GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetUsageStatisticsCommandInput;
    constructor(input: GetUsageStatisticsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
