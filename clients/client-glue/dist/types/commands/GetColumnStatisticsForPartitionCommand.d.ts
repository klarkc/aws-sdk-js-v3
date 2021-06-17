import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetColumnStatisticsForPartitionRequest, GetColumnStatisticsForPartitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetColumnStatisticsForPartitionCommandInput extends GetColumnStatisticsForPartitionRequest {
}
export interface GetColumnStatisticsForPartitionCommandOutput extends GetColumnStatisticsForPartitionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves partition statistics of columns.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetColumnStatisticsForPartitionCommand extends $Command<GetColumnStatisticsForPartitionCommandInput, GetColumnStatisticsForPartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetColumnStatisticsForPartitionCommandInput;
    constructor(input: GetColumnStatisticsForPartitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetColumnStatisticsForPartitionCommandInput, GetColumnStatisticsForPartitionCommandOutput>;
    private serialize;
    private deserialize;
}
