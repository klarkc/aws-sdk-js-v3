import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateUserDefinedFunctionRequest, CreateUserDefinedFunctionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUserDefinedFunctionCommandInput extends CreateUserDefinedFunctionRequest {
}
export interface CreateUserDefinedFunctionCommandOutput extends CreateUserDefinedFunctionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new function definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUserDefinedFunctionCommand extends $Command<CreateUserDefinedFunctionCommandInput, CreateUserDefinedFunctionCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateUserDefinedFunctionCommandInput;
    constructor(input: CreateUserDefinedFunctionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserDefinedFunctionCommandInput, CreateUserDefinedFunctionCommandOutput>;
    private serialize;
    private deserialize;
}
