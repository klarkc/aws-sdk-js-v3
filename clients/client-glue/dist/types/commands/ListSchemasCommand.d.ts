import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListSchemasInput, ListSchemasResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSchemasCommandInput extends ListSchemasInput {
}
export interface ListSchemasCommandOutput extends ListSchemasResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p>
 *          <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListSchemasCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListSchemasCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemasCommandInput} for command's `input` shape.
 * @see {@link ListSchemasCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSchemasCommand extends $Command<ListSchemasCommandInput, ListSchemasCommandOutput, GlueClientResolvedConfig> {
    readonly input: ListSchemasCommandInput;
    constructor(input: ListSchemasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSchemasCommandInput, ListSchemasCommandOutput>;
    private serialize;
    private deserialize;
}
