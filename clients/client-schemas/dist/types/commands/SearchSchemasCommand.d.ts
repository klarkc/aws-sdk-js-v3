import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { SearchSchemasRequest, SearchSchemasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchSchemasCommandInput extends SearchSchemasRequest {
}
export interface SearchSchemasCommandOutput extends SearchSchemasResponse, __MetadataBearer {
}
/**
 * <p>Search the schemas</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, SearchSchemasCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, SearchSchemasCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new SearchSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchSchemasCommandInput} for command's `input` shape.
 * @see {@link SearchSchemasCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchSchemasCommand extends $Command<SearchSchemasCommandInput, SearchSchemasCommandOutput, SchemasClientResolvedConfig> {
    readonly input: SearchSchemasCommandInput;
    constructor(input: SearchSchemasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchSchemasCommandInput, SearchSchemasCommandOutput>;
    private serialize;
    private deserialize;
}
