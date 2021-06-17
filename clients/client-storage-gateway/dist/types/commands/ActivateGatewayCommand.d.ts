import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ActivateGatewayInput, ActivateGatewayOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ActivateGatewayCommandInput extends ActivateGatewayInput {
}
export interface ActivateGatewayCommandOutput extends ActivateGatewayOutput, __MetadataBearer {
}
/**
 * <p>Activates the gateway you previously deployed on your host. In the activation process,
 *          you specify information such as the AWS Region that you want to use for storing snapshots
 *          or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an
 *          activation key, and a name for your gateway. The activation process also associates your
 *          gateway with your account. For more information, see <a>UpdateGatewayInformation</a>.</p>
 *          <note>
 *             <p>You must turn on the gateway VM before you can activate your gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ActivateGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ActivateGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ActivateGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateGatewayCommandInput} for command's `input` shape.
 * @see {@link ActivateGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ActivateGatewayCommand extends $Command<ActivateGatewayCommandInput, ActivateGatewayCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ActivateGatewayCommandInput;
    constructor(input: ActivateGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ActivateGatewayCommandInput, ActivateGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
