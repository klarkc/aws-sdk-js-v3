import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteTableVersionRequest, DeleteTableVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTableVersionCommandInput extends DeleteTableVersionRequest {
}
export interface DeleteTableVersionCommandOutput extends DeleteTableVersionResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specified version of a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteTableVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteTableVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteTableVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTableVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteTableVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTableVersionCommand extends $Command<DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteTableVersionCommandInput;
    constructor(input: DeleteTableVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput>;
    private serialize;
    private deserialize;
}
