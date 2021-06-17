import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { UpdateServerRequest, UpdateServerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateServerCommandInput extends UpdateServerRequest {
}
export interface UpdateServerCommandOutput extends UpdateServerResponse, __MetadataBearer {
}
/**
 * <p>Updates the file transfer protocol-enabled server's properties after that server has
 *       been created.</p>
 *
 *          <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you
 *       updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new UpdateServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServerCommandInput} for command's `input` shape.
 * @see {@link UpdateServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateServerCommand extends $Command<UpdateServerCommandInput, UpdateServerCommandOutput, TransferClientResolvedConfig> {
    readonly input: UpdateServerCommandInput;
    constructor(input: UpdateServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServerCommandInput, UpdateServerCommandOutput>;
    private serialize;
    private deserialize;
}
