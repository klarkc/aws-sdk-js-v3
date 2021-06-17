import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetFindingStatisticsRequest, GetFindingStatisticsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFindingStatisticsCommandInput extends GetFindingStatisticsRequest {
}
export interface GetFindingStatisticsCommandOutput extends GetFindingStatisticsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves (queries) aggregated statistical data about findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetFindingStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetFindingStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFindingStatisticsCommand extends $Command<GetFindingStatisticsCommandInput, GetFindingStatisticsCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetFindingStatisticsCommandInput;
    constructor(input: GetFindingStatisticsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFindingStatisticsCommandInput, GetFindingStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
