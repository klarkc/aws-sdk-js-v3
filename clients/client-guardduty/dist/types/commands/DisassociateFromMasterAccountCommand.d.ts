import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DisassociateFromMasterAccountRequest, DisassociateFromMasterAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateFromMasterAccountCommandInput extends DisassociateFromMasterAccountRequest {
}
export interface DisassociateFromMasterAccountCommandOutput extends DisassociateFromMasterAccountResponse, __MetadataBearer {
}
/**
 * <p>Disassociates the current GuardDuty member account from its administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DisassociateFromMasterAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DisassociateFromMasterAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DisassociateFromMasterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFromMasterAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromMasterAccountCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateFromMasterAccountCommand extends $Command<DisassociateFromMasterAccountCommandInput, DisassociateFromMasterAccountCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: DisassociateFromMasterAccountCommandInput;
    constructor(input: DisassociateFromMasterAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateFromMasterAccountCommandInput, DisassociateFromMasterAccountCommandOutput>;
    private serialize;
    private deserialize;
}
