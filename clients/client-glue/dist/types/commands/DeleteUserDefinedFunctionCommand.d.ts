import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteUserDefinedFunctionRequest, DeleteUserDefinedFunctionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUserDefinedFunctionCommandInput extends DeleteUserDefinedFunctionRequest {
}
export interface DeleteUserDefinedFunctionCommandOutput extends DeleteUserDefinedFunctionResponse, __MetadataBearer {
}
/**
 * <p>Deletes an existing function definition from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUserDefinedFunctionCommand extends $Command<DeleteUserDefinedFunctionCommandInput, DeleteUserDefinedFunctionCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteUserDefinedFunctionCommandInput;
    constructor(input: DeleteUserDefinedFunctionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserDefinedFunctionCommandInput, DeleteUserDefinedFunctionCommandOutput>;
    private serialize;
    private deserialize;
}
