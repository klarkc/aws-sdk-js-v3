import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteColumnStatisticsForPartitionRequest, DeleteColumnStatisticsForPartitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteColumnStatisticsForPartitionCommandInput extends DeleteColumnStatisticsForPartitionRequest {
}
export interface DeleteColumnStatisticsForPartitionCommandOutput extends DeleteColumnStatisticsForPartitionResponse, __MetadataBearer {
}
/**
 * <p>Delete the partition column statistics of a column.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link DeleteColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteColumnStatisticsForPartitionCommand extends $Command<DeleteColumnStatisticsForPartitionCommandInput, DeleteColumnStatisticsForPartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteColumnStatisticsForPartitionCommandInput;
    constructor(input: DeleteColumnStatisticsForPartitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteColumnStatisticsForPartitionCommandInput, DeleteColumnStatisticsForPartitionCommandOutput>;
    private serialize;
    private deserialize;
}
