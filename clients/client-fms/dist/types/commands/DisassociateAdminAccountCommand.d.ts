import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DisassociateAdminAccountRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateAdminAccountCommandInput extends DisassociateAdminAccountRequest {
}
export interface DisassociateAdminAccountCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disassociates the account that has been set as the AWS Firewall Manager administrator
 *       account. To set a different account as the administrator account, you must submit an
 *         <code>AssociateAdminAccount</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DisassociateAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DisassociateAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DisassociateAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateAdminAccountCommand extends $Command<DisassociateAdminAccountCommandInput, DisassociateAdminAccountCommandOutput, FMSClientResolvedConfig> {
    readonly input: DisassociateAdminAccountCommandInput;
    constructor(input: DisassociateAdminAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateAdminAccountCommandInput, DisassociateAdminAccountCommandOutput>;
    private serialize;
    private deserialize;
}
