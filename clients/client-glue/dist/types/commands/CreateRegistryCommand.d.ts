import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateRegistryInput, CreateRegistryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRegistryCommandInput extends CreateRegistryInput {
}
export interface CreateRegistryCommandOutput extends CreateRegistryResponse, __MetadataBearer {
}
/**
 * <p>Creates a new registry which may be used to hold a collection of schemas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateRegistryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateRegistryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRegistryCommandInput} for command's `input` shape.
 * @see {@link CreateRegistryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRegistryCommand extends $Command<CreateRegistryCommandInput, CreateRegistryCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateRegistryCommandInput;
    constructor(input: CreateRegistryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRegistryCommandInput, CreateRegistryCommandOutput>;
    private serialize;
    private deserialize;
}
