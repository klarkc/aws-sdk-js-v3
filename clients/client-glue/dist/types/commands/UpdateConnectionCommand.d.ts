import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateConnectionRequest, UpdateConnectionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateConnectionCommandInput extends UpdateConnectionRequest {
}
export interface UpdateConnectionCommandOutput extends UpdateConnectionResponse, __MetadataBearer {
}
/**
 * <p>Updates a connection definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateConnectionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateConnectionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateConnectionCommand extends $Command<UpdateConnectionCommandInput, UpdateConnectionCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateConnectionCommandInput;
    constructor(input: UpdateConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConnectionCommandInput, UpdateConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
