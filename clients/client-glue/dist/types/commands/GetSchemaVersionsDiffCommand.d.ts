import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSchemaVersionsDiffInput, GetSchemaVersionsDiffResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSchemaVersionsDiffCommandInput extends GetSchemaVersionsDiffInput {
}
export interface GetSchemaVersionsDiffCommandOutput extends GetSchemaVersionsDiffResponse, __MetadataBearer {
}
/**
 * <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p>
 *          <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaVersionsDiffCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaVersionsDiffCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetSchemaVersionsDiffCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaVersionsDiffCommandInput} for command's `input` shape.
 * @see {@link GetSchemaVersionsDiffCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSchemaVersionsDiffCommand extends $Command<GetSchemaVersionsDiffCommandInput, GetSchemaVersionsDiffCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetSchemaVersionsDiffCommandInput;
    constructor(input: GetSchemaVersionsDiffCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSchemaVersionsDiffCommandInput, GetSchemaVersionsDiffCommandOutput>;
    private serialize;
    private deserialize;
}
