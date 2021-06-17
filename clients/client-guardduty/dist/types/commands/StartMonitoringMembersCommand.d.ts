import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { StartMonitoringMembersRequest, StartMonitoringMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMonitoringMembersCommandInput extends StartMonitoringMembersRequest {
}
export interface StartMonitoringMembersCommandOutput extends StartMonitoringMembersResponse, __MetadataBearer {
}
/**
 * <p>Turns on GuardDuty monitoring of the specified member accounts. Use this operation to
 *       restart monitoring of accounts that you stopped monitoring with the
 *         <code>StopMonitoringMembers</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, StartMonitoringMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, StartMonitoringMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new StartMonitoringMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMonitoringMembersCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMonitoringMembersCommand extends $Command<StartMonitoringMembersCommandInput, StartMonitoringMembersCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: StartMonitoringMembersCommandInput;
    constructor(input: StartMonitoringMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMonitoringMembersCommandInput, StartMonitoringMembersCommandOutput>;
    private serialize;
    private deserialize;
}
