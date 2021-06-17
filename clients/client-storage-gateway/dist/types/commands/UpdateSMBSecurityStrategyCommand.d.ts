import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateSMBSecurityStrategyInput, UpdateSMBSecurityStrategyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSMBSecurityStrategyCommandInput extends UpdateSMBSecurityStrategyInput {
}
export interface UpdateSMBSecurityStrategyCommandOutput extends UpdateSMBSecurityStrategyOutput, __MetadataBearer {
}
/**
 * <p>Updates the SMB security strategy on a file gateway. This action is only supported in
 *          file gateways.</p>
 *
 *          <note>
 *             <p>This API is called Security level in the User Guide.</p>
 *
 *             <p>A higher security level can affect performance of the gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateSMBSecurityStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSMBSecurityStrategyCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBSecurityStrategyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSMBSecurityStrategyCommand extends $Command<UpdateSMBSecurityStrategyCommandInput, UpdateSMBSecurityStrategyCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateSMBSecurityStrategyCommandInput;
    constructor(input: UpdateSMBSecurityStrategyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSMBSecurityStrategyCommandInput, UpdateSMBSecurityStrategyCommandOutput>;
    private serialize;
    private deserialize;
}
