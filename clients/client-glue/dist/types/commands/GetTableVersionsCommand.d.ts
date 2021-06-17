import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTableVersionsRequest, GetTableVersionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTableVersionsCommandInput extends GetTableVersionsRequest {
}
export interface GetTableVersionsCommandOutput extends GetTableVersionsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of strings that identify available versions of
 *       a specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTableVersionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTableVersionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTableVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTableVersionsCommandInput} for command's `input` shape.
 * @see {@link GetTableVersionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTableVersionsCommand extends $Command<GetTableVersionsCommandInput, GetTableVersionsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTableVersionsCommandInput;
    constructor(input: GetTableVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTableVersionsCommandInput, GetTableVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
