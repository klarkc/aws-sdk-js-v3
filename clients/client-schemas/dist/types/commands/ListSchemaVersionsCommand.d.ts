import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { ListSchemaVersionsRequest, ListSchemaVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSchemaVersionsCommandInput extends ListSchemaVersionsRequest {
}
export interface ListSchemaVersionsCommandOutput extends ListSchemaVersionsResponse, __MetadataBearer {
}
/**
 * <p>Provides a list of the schema versions and related information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListSchemaVersionsCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListSchemaVersionsCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new ListSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemaVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaVersionsCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSchemaVersionsCommand extends $Command<ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput, SchemasClientResolvedConfig> {
    readonly input: ListSchemaVersionsCommandInput;
    constructor(input: ListSchemaVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
