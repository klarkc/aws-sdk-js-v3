import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { MarkAsArchivedRequest, SourceServer } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface MarkAsArchivedCommandInput extends MarkAsArchivedRequest {
}
export interface MarkAsArchivedCommandOutput extends SourceServer, __MetadataBearer {
}
/**
 * <p>Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle.state which equals DISCONNECTED or CUTOVER.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, MarkAsArchivedCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, MarkAsArchivedCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new MarkAsArchivedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MarkAsArchivedCommandInput} for command's `input` shape.
 * @see {@link MarkAsArchivedCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class MarkAsArchivedCommand extends $Command<MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput, MgnClientResolvedConfig> {
    readonly input: MarkAsArchivedCommandInput;
    constructor(input: MarkAsArchivedCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput>;
    private serialize;
    private deserialize;
}
