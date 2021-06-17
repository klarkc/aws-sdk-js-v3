import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { AssociateAwsAccountWithPartnerAccountRequest, AssociateAwsAccountWithPartnerAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateAwsAccountWithPartnerAccountCommandInput extends AssociateAwsAccountWithPartnerAccountRequest {
}
export interface AssociateAwsAccountWithPartnerAccountCommandOutput extends AssociateAwsAccountWithPartnerAccountResponse, __MetadataBearer {
}
/**
 * <p>Associates a partner account with your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new AssociateAwsAccountWithPartnerAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAwsAccountWithPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateAwsAccountWithPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateAwsAccountWithPartnerAccountCommand extends $Command<AssociateAwsAccountWithPartnerAccountCommandInput, AssociateAwsAccountWithPartnerAccountCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: AssociateAwsAccountWithPartnerAccountCommandInput;
    constructor(input: AssociateAwsAccountWithPartnerAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateAwsAccountWithPartnerAccountCommandInput, AssociateAwsAccountWithPartnerAccountCommandOutput>;
    private serialize;
    private deserialize;
}
