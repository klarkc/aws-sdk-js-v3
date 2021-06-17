import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteJobRequest, DeleteJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteJobCommandInput extends DeleteJobRequest {
}
export interface DeleteJobCommandOutput extends DeleteJobResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specified job definition. If the job definition
 *       is not found, no exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteJobCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteJobCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteJobCommand extends $Command<DeleteJobCommandInput, DeleteJobCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteJobCommandInput;
    constructor(input: DeleteJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteJobCommandInput, DeleteJobCommandOutput>;
    private serialize;
    private deserialize;
}
