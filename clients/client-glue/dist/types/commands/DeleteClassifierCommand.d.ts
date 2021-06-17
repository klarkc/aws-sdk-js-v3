import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteClassifierRequest, DeleteClassifierResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteClassifierCommandInput extends DeleteClassifierRequest {
}
export interface DeleteClassifierCommandOutput extends DeleteClassifierResponse, __MetadataBearer {
}
/**
 * <p>Removes a classifier from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClassifierCommandInput} for command's `input` shape.
 * @see {@link DeleteClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteClassifierCommand extends $Command<DeleteClassifierCommandInput, DeleteClassifierCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteClassifierCommandInput;
    constructor(input: DeleteClassifierCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClassifierCommandInput, DeleteClassifierCommandOutput>;
    private serialize;
    private deserialize;
}
