import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { ListDiscoverersRequest, ListDiscoverersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDiscoverersCommandInput extends ListDiscoverersRequest {
}
export interface ListDiscoverersCommandOutput extends ListDiscoverersResponse, __MetadataBearer {
}
/**
 * <p>List the discoverers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListDiscoverersCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListDiscoverersCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new ListDiscoverersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDiscoverersCommandInput} for command's `input` shape.
 * @see {@link ListDiscoverersCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDiscoverersCommand extends $Command<ListDiscoverersCommandInput, ListDiscoverersCommandOutput, SchemasClientResolvedConfig> {
    readonly input: ListDiscoverersCommandInput;
    constructor(input: ListDiscoverersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDiscoverersCommandInput, ListDiscoverersCommandOutput>;
    private serialize;
    private deserialize;
}
