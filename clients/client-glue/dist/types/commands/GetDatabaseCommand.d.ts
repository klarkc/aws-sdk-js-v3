import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDatabaseRequest, GetDatabaseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDatabaseCommandInput extends GetDatabaseRequest {
}
export interface GetDatabaseCommandOutput extends GetDatabaseResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the definition of a specified database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDatabaseCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDatabaseCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetDatabaseCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDatabaseCommand extends $Command<GetDatabaseCommandInput, GetDatabaseCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetDatabaseCommandInput;
    constructor(input: GetDatabaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDatabaseCommandInput, GetDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
