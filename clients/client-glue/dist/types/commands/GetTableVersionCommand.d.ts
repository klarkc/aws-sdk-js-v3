import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTableVersionRequest, GetTableVersionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTableVersionCommandInput extends GetTableVersionRequest {
}
export interface GetTableVersionCommandOutput extends GetTableVersionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a specified version of a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTableVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTableVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTableVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTableVersionCommandInput} for command's `input` shape.
 * @see {@link GetTableVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTableVersionCommand extends $Command<GetTableVersionCommandInput, GetTableVersionCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTableVersionCommandInput;
    constructor(input: GetTableVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTableVersionCommandInput, GetTableVersionCommandOutput>;
    private serialize;
    private deserialize;
}
