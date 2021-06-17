import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { SetLocalConsolePasswordInput, SetLocalConsolePasswordOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetLocalConsolePasswordCommandInput extends SetLocalConsolePasswordInput {
}
export interface SetLocalConsolePasswordCommandOutput extends SetLocalConsolePasswordOutput, __MetadataBearer {
}
/**
 * <p>Sets the password for your VM local console. When you log in to the local console for
 *          the first time, you log in to the VM with the default credentials. We recommend that you
 *          set a new password. You don't need to know the default password to set a new
 *          password.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, SetLocalConsolePasswordCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, SetLocalConsolePasswordCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new SetLocalConsolePasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLocalConsolePasswordCommandInput} for command's `input` shape.
 * @see {@link SetLocalConsolePasswordCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetLocalConsolePasswordCommand extends $Command<SetLocalConsolePasswordCommandInput, SetLocalConsolePasswordCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: SetLocalConsolePasswordCommandInput;
    constructor(input: SetLocalConsolePasswordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetLocalConsolePasswordCommandInput, SetLocalConsolePasswordCommandOutput>;
    private serialize;
    private deserialize;
}
