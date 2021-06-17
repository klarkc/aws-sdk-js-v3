import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetPartitionRequest, BatchGetPartitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetPartitionCommandInput extends BatchGetPartitionRequest {
}
export interface BatchGetPartitionCommandOutput extends BatchGetPartitionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves partitions in a batch request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetPartitionCommandInput} for command's `input` shape.
 * @see {@link BatchGetPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetPartitionCommand extends $Command<BatchGetPartitionCommandInput, BatchGetPartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetPartitionCommandInput;
    constructor(input: BatchGetPartitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetPartitionCommandInput, BatchGetPartitionCommandOutput>;
    private serialize;
    private deserialize;
}
