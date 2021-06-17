import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDatabasesRequest, GetDatabasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDatabasesCommandInput extends GetDatabasesRequest {
}
export interface GetDatabasesCommandOutput extends GetDatabasesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves all databases defined in a given Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDatabasesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDatabasesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDatabasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDatabasesCommandInput} for command's `input` shape.
 * @see {@link GetDatabasesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDatabasesCommand extends $Command<GetDatabasesCommandInput, GetDatabasesCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetDatabasesCommandInput;
    constructor(input: GetDatabasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDatabasesCommandInput, GetDatabasesCommandOutput>;
    private serialize;
    private deserialize;
}
