import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { CreateServerRequest, CreateServerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateServerCommandInput extends CreateServerRequest {
}
export interface CreateServerCommandOutput extends CreateServerResponse, __MetadataBearer {
}
/**
 * <p>Instantiates an auto-scaling virtual server based on the selected file transfer protocol
 *       in AWS. When you make updates to your file transfer protocol-enabled server or when you work
 *       with users, use the service-generated <code>ServerId</code> property that is assigned to the
 *       newly created server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new CreateServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServerCommandInput} for command's `input` shape.
 * @see {@link CreateServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateServerCommand extends $Command<CreateServerCommandInput, CreateServerCommandOutput, TransferClientResolvedConfig> {
    readonly input: CreateServerCommandInput;
    constructor(input: CreateServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateServerCommandInput, CreateServerCommandOutput>;
    private serialize;
    private deserialize;
}
