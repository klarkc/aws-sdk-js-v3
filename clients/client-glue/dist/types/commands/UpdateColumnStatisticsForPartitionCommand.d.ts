import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateColumnStatisticsForPartitionRequest, UpdateColumnStatisticsForPartitionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateColumnStatisticsForPartitionCommandInput extends UpdateColumnStatisticsForPartitionRequest {
}
export interface UpdateColumnStatisticsForPartitionCommandOutput extends UpdateColumnStatisticsForPartitionResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates partition statistics of columns.</p>
 *
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link UpdateColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateColumnStatisticsForPartitionCommand extends $Command<UpdateColumnStatisticsForPartitionCommandInput, UpdateColumnStatisticsForPartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateColumnStatisticsForPartitionCommandInput;
    constructor(input: UpdateColumnStatisticsForPartitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateColumnStatisticsForPartitionCommandInput, UpdateColumnStatisticsForPartitionCommandOutput>;
    private serialize;
    private deserialize;
}
