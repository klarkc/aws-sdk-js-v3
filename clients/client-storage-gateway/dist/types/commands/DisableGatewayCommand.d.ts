import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DisableGatewayInput, DisableGatewayOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableGatewayCommandInput extends DisableGatewayInput {
}
export interface DisableGatewayCommandOutput extends DisableGatewayOutput, __MetadataBearer {
}
/**
 * <p>Disables a tape gateway when the gateway is no longer functioning. For example, if your
 *          gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p>
 *
 *          <p>Use this operation for a tape gateway that is not reachable or not functioning. This
 *          operation is only supported in the tape gateway type.</p>
 *
 *          <important>
 *             <p>After a gateway is disabled, it cannot be enabled.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DisableGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DisableGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DisableGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableGatewayCommandInput} for command's `input` shape.
 * @see {@link DisableGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableGatewayCommand extends $Command<DisableGatewayCommandInput, DisableGatewayCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DisableGatewayCommandInput;
    constructor(input: DisableGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableGatewayCommandInput, DisableGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
