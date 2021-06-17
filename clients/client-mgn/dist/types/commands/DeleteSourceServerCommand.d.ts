import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DeleteSourceServerRequest, DeleteSourceServerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSourceServerCommandInput extends DeleteSourceServerRequest {
}
export interface DeleteSourceServerCommandOutput extends DeleteSourceServerResponse, __MetadataBearer {
}
/**
 * <p>Deletes a single source server by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteSourceServerCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteSourceServerCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DeleteSourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSourceServerCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceServerCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSourceServerCommand extends $Command<DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput, MgnClientResolvedConfig> {
    readonly input: DeleteSourceServerCommandInput;
    constructor(input: DeleteSourceServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput>;
    private serialize;
    private deserialize;
}
