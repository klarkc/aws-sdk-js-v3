import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { SetSMBGuestPasswordInput, SetSMBGuestPasswordOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetSMBGuestPasswordCommandInput extends SetSMBGuestPasswordInput {
}
export interface SetSMBGuestPasswordCommandOutput extends SetSMBGuestPasswordOutput, __MetadataBearer {
}
/**
 * <p>Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code>
 *          user is the user when the authentication method for the file share is set to
 *             <code>GuestAccess</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, SetSMBGuestPasswordCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, SetSMBGuestPasswordCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new SetSMBGuestPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSMBGuestPasswordCommandInput} for command's `input` shape.
 * @see {@link SetSMBGuestPasswordCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetSMBGuestPasswordCommand extends $Command<SetSMBGuestPasswordCommandInput, SetSMBGuestPasswordCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: SetSMBGuestPasswordCommandInput;
    constructor(input: SetSMBGuestPasswordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetSMBGuestPasswordCommandInput, SetSMBGuestPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
