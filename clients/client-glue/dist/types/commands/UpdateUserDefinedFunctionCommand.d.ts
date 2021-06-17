import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateUserDefinedFunctionRequest, UpdateUserDefinedFunctionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserDefinedFunctionCommandInput extends UpdateUserDefinedFunctionRequest {
}
export interface UpdateUserDefinedFunctionCommandOutput extends UpdateUserDefinedFunctionResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing function definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link UpdateUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserDefinedFunctionCommand extends $Command<UpdateUserDefinedFunctionCommandInput, UpdateUserDefinedFunctionCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateUserDefinedFunctionCommandInput;
    constructor(input: UpdateUserDefinedFunctionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserDefinedFunctionCommandInput, UpdateUserDefinedFunctionCommandOutput>;
    private serialize;
    private deserialize;
}
