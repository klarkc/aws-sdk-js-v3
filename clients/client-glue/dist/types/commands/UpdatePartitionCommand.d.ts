import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdatePartitionRequest, UpdatePartitionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePartitionCommandInput extends UpdatePartitionRequest {
}
export interface UpdatePartitionCommandOutput extends UpdatePartitionResponse, __MetadataBearer {
}
/**
 * <p>Updates a partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdatePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePartitionCommandInput} for command's `input` shape.
 * @see {@link UpdatePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePartitionCommand extends $Command<UpdatePartitionCommandInput, UpdatePartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdatePartitionCommandInput;
    constructor(input: UpdatePartitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePartitionCommandInput, UpdatePartitionCommandOutput>;
    private serialize;
    private deserialize;
}
