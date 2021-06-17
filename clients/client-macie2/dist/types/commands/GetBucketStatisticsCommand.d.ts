import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetBucketStatisticsRequest, GetBucketStatisticsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBucketStatisticsCommandInput extends GetBucketStatisticsRequest {
}
export interface GetBucketStatisticsCommandOutput extends GetBucketStatisticsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetBucketStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetBucketStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetBucketStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetBucketStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBucketStatisticsCommand extends $Command<GetBucketStatisticsCommandInput, GetBucketStatisticsCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetBucketStatisticsCommandInput;
    constructor(input: GetBucketStatisticsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketStatisticsCommandInput, GetBucketStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
