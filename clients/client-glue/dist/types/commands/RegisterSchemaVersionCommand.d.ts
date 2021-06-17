import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { RegisterSchemaVersionInput, RegisterSchemaVersionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterSchemaVersionCommandInput extends RegisterSchemaVersionInput {
}
export interface RegisterSchemaVersionCommandOutput extends RegisterSchemaVersionResponse, __MetadataBearer {
}
/**
 * <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p>
 *          <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p>
 * 	        <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RegisterSchemaVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RegisterSchemaVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new RegisterSchemaVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link RegisterSchemaVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterSchemaVersionCommand extends $Command<RegisterSchemaVersionCommandInput, RegisterSchemaVersionCommandOutput, GlueClientResolvedConfig> {
    readonly input: RegisterSchemaVersionCommandInput;
    constructor(input: RegisterSchemaVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterSchemaVersionCommandInput, RegisterSchemaVersionCommandOutput>;
    private serialize;
    private deserialize;
}
