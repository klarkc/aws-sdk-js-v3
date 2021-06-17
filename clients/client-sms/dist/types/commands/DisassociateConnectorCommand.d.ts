import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DisassociateConnectorRequest, DisassociateConnectorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateConnectorCommandInput extends DisassociateConnectorRequest {
}
export interface DisassociateConnectorCommandOutput extends DisassociateConnectorResponse, __MetadataBearer {
}
/**
 * <p>Disassociates the specified connector from AWS SMS.</p>
 *         <p>After you disassociate a connector, it is no longer available to support
 *             replication jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DisassociateConnectorCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DisassociateConnectorCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DisassociateConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateConnectorCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectorCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateConnectorCommand extends $Command<DisassociateConnectorCommandInput, DisassociateConnectorCommandOutput, SMSClientResolvedConfig> {
    readonly input: DisassociateConnectorCommandInput;
    constructor(input: DisassociateConnectorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateConnectorCommandInput, DisassociateConnectorCommandOutput>;
    private serialize;
    private deserialize;
}
