import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetMasterAccountRequest, GetMasterAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMasterAccountCommandInput extends GetMasterAccountRequest {
}
export interface GetMasterAccountCommandOutput extends GetMasterAccountResponse, __MetadataBearer {
}
/**
 * <p>Provides the details for the GuardDuty administrator account associated with the current
 *       GuardDuty member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetMasterAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetMasterAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetMasterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMasterAccountCommandInput} for command's `input` shape.
 * @see {@link GetMasterAccountCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMasterAccountCommand extends $Command<GetMasterAccountCommandInput, GetMasterAccountCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: GetMasterAccountCommandInput;
    constructor(input: GetMasterAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMasterAccountCommandInput, GetMasterAccountCommandOutput>;
    private serialize;
    private deserialize;
}
