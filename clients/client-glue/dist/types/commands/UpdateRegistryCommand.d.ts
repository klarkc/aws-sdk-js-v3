import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateRegistryInput, UpdateRegistryResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRegistryCommandInput extends UpdateRegistryInput {
}
export interface UpdateRegistryCommandOutput extends UpdateRegistryResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateRegistryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateRegistryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRegistryCommandInput} for command's `input` shape.
 * @see {@link UpdateRegistryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRegistryCommand extends $Command<UpdateRegistryCommandInput, UpdateRegistryCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateRegistryCommandInput;
    constructor(input: UpdateRegistryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRegistryCommandInput, UpdateRegistryCommandOutput>;
    private serialize;
    private deserialize;
}
