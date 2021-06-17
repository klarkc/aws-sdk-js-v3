import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { RemoveSchemaVersionMetadataInput, RemoveSchemaVersionMetadataResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveSchemaVersionMetadataCommandInput extends RemoveSchemaVersionMetadataInput {
}
export interface RemoveSchemaVersionMetadataCommandOutput extends RemoveSchemaVersionMetadataResponse, __MetadataBearer {
}
/**
 * <p>Removes a key value pair from the schema version metadata for the specified schema version ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RemoveSchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RemoveSchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new RemoveSchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveSchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link RemoveSchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveSchemaVersionMetadataCommand extends $Command<RemoveSchemaVersionMetadataCommandInput, RemoveSchemaVersionMetadataCommandOutput, GlueClientResolvedConfig> {
    readonly input: RemoveSchemaVersionMetadataCommandInput;
    constructor(input: RemoveSchemaVersionMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveSchemaVersionMetadataCommandInput, RemoveSchemaVersionMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
