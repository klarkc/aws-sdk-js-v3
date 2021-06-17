import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DisassociateAwsAccountFromPartnerAccountRequest, DisassociateAwsAccountFromPartnerAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateAwsAccountFromPartnerAccountCommandInput extends DisassociateAwsAccountFromPartnerAccountRequest {
}
export interface DisassociateAwsAccountFromPartnerAccountCommandOutput extends DisassociateAwsAccountFromPartnerAccountResponse, __MetadataBearer {
}
/**
 * <p>Disassociates your AWS account from a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, disassociates your AWS account from all partner accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateAwsAccountFromPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateAwsAccountFromPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DisassociateAwsAccountFromPartnerAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateAwsAccountFromPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateAwsAccountFromPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateAwsAccountFromPartnerAccountCommand extends $Command<DisassociateAwsAccountFromPartnerAccountCommandInput, DisassociateAwsAccountFromPartnerAccountCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: DisassociateAwsAccountFromPartnerAccountCommandInput;
    constructor(input: DisassociateAwsAccountFromPartnerAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateAwsAccountFromPartnerAccountCommandInput, DisassociateAwsAccountFromPartnerAccountCommandOutput>;
    private serialize;
    private deserialize;
}
