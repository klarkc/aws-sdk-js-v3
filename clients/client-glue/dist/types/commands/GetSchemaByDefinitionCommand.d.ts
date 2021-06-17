import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSchemaByDefinitionInput, GetSchemaByDefinitionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSchemaByDefinitionCommandInput extends GetSchemaByDefinitionInput {
}
export interface GetSchemaByDefinitionCommandOutput extends GetSchemaByDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaByDefinitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaByDefinitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetSchemaByDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaByDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSchemaByDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSchemaByDefinitionCommand extends $Command<GetSchemaByDefinitionCommandInput, GetSchemaByDefinitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetSchemaByDefinitionCommandInput;
    constructor(input: GetSchemaByDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSchemaByDefinitionCommandInput, GetSchemaByDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
