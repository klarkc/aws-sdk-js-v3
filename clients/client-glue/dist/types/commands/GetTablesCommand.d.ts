import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTablesRequest, GetTablesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTablesCommandInput extends GetTablesRequest {
}
export interface GetTablesCommandOutput extends GetTablesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the definitions of some or all of the tables in a given
 *       <code>Database</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTablesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTablesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTablesCommandInput} for command's `input` shape.
 * @see {@link GetTablesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTablesCommand extends $Command<GetTablesCommandInput, GetTablesCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTablesCommandInput;
    constructor(input: GetTablesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTablesCommandInput, GetTablesCommandOutput>;
    private serialize;
    private deserialize;
}
