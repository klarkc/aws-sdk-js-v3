import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchCreatePartitionRequest, BatchCreatePartitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchCreatePartitionCommandInput extends BatchCreatePartitionRequest {
}
export interface BatchCreatePartitionCommandOutput extends BatchCreatePartitionResponse, __MetadataBearer {
}
/**
 * <p>Creates one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchCreatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchCreatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchCreatePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreatePartitionCommandInput} for command's `input` shape.
 * @see {@link BatchCreatePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchCreatePartitionCommand extends $Command<BatchCreatePartitionCommandInput, BatchCreatePartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchCreatePartitionCommandInput;
    constructor(input: BatchCreatePartitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchCreatePartitionCommandInput, BatchCreatePartitionCommandOutput>;
    private serialize;
    private deserialize;
}
