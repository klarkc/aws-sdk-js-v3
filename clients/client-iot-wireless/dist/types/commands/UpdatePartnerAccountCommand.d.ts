import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdatePartnerAccountRequest, UpdatePartnerAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePartnerAccountCommandInput extends UpdatePartnerAccountRequest {
}
export interface UpdatePartnerAccountCommandOutput extends UpdatePartnerAccountResponse, __MetadataBearer {
}
/**
 * <p>Updates properties of a partner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdatePartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdatePartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdatePartnerAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePartnerAccountCommandInput} for command's `input` shape.
 * @see {@link UpdatePartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePartnerAccountCommand extends $Command<UpdatePartnerAccountCommandInput, UpdatePartnerAccountCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: UpdatePartnerAccountCommandInput;
    constructor(input: UpdatePartnerAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePartnerAccountCommandInput, UpdatePartnerAccountCommandOutput>;
    private serialize;
    private deserialize;
}
