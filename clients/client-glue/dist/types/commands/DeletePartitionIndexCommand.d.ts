import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeletePartitionIndexRequest, DeletePartitionIndexResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePartitionIndexCommandInput extends DeletePartitionIndexRequest {
}
export interface DeletePartitionIndexCommandOutput extends DeletePartitionIndexResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specified partition index from an existing table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeletePartitionIndexCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeletePartitionIndexCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeletePartitionIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePartitionIndexCommandInput} for command's `input` shape.
 * @see {@link DeletePartitionIndexCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePartitionIndexCommand extends $Command<DeletePartitionIndexCommandInput, DeletePartitionIndexCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeletePartitionIndexCommandInput;
    constructor(input: DeletePartitionIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePartitionIndexCommandInput, DeletePartitionIndexCommandOutput>;
    private serialize;
    private deserialize;
}
