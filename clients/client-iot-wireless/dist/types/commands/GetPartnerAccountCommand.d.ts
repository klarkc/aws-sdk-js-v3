import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetPartnerAccountRequest, GetPartnerAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPartnerAccountCommandInput extends GetPartnerAccountRequest {
}
export interface GetPartnerAccountCommandOutput extends GetPartnerAccountResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, returns all partner accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetPartnerAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link GetPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPartnerAccountCommand extends $Command<GetPartnerAccountCommandInput, GetPartnerAccountCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetPartnerAccountCommandInput;
    constructor(input: GetPartnerAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPartnerAccountCommandInput, GetPartnerAccountCommandOutput>;
    private serialize;
    private deserialize;
}
