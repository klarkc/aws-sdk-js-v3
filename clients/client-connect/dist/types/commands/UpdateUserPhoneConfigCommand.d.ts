import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateUserPhoneConfigRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserPhoneConfigCommandInput extends UpdateUserPhoneConfigRequest {
}
export interface UpdateUserPhoneConfigCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the phone configuration settings for the specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserPhoneConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserPhoneConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserPhoneConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserPhoneConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPhoneConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserPhoneConfigCommand extends $Command<UpdateUserPhoneConfigCommandInput, UpdateUserPhoneConfigCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateUserPhoneConfigCommandInput;
    constructor(input: UpdateUserPhoneConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserPhoneConfigCommandInput, UpdateUserPhoneConfigCommandOutput>;
    private serialize;
    private deserialize;
}
