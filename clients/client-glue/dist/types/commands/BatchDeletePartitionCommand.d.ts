import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchDeletePartitionRequest, BatchDeletePartitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDeletePartitionCommandInput extends BatchDeletePartitionRequest {
}
export interface BatchDeletePartitionCommandOutput extends BatchDeletePartitionResponse, __MetadataBearer {
}
/**
 * <p>Deletes one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeletePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeletePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchDeletePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeletePartitionCommandInput} for command's `input` shape.
 * @see {@link BatchDeletePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDeletePartitionCommand extends $Command<BatchDeletePartitionCommandInput, BatchDeletePartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchDeletePartitionCommandInput;
    constructor(input: BatchDeletePartitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeletePartitionCommandInput, BatchDeletePartitionCommandOutput>;
    private serialize;
    private deserialize;
}
