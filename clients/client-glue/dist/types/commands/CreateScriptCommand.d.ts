import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateScriptRequest, CreateScriptResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateScriptCommandInput extends CreateScriptRequest {
}
export interface CreateScriptCommandOutput extends CreateScriptResponse, __MetadataBearer {
}
/**
 * <p>Transforms a directed acyclic graph (DAG) into code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateScriptCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateScriptCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateScriptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScriptCommandInput} for command's `input` shape.
 * @see {@link CreateScriptCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateScriptCommand extends $Command<CreateScriptCommandInput, CreateScriptCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateScriptCommandInput;
    constructor(input: CreateScriptCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateScriptCommandInput, CreateScriptCommandOutput>;
    private serialize;
    private deserialize;
}
