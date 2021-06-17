import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { StopMonitoringMembersRequest, StopMonitoringMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopMonitoringMembersCommandInput extends StopMonitoringMembersRequest {
}
export interface StopMonitoringMembersCommandOutput extends StopMonitoringMembersResponse, __MetadataBearer {
}
/**
 * <p>Stops GuardDuty monitoring for the specified member accounts. Use the
 *         <code>StartMonitoringMembers</code> operation to restart monitoring for those
 *       accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, StopMonitoringMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, StopMonitoringMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new StopMonitoringMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMonitoringMembersCommandInput} for command's `input` shape.
 * @see {@link StopMonitoringMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopMonitoringMembersCommand extends $Command<StopMonitoringMembersCommandInput, StopMonitoringMembersCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: StopMonitoringMembersCommandInput;
    constructor(input: StopMonitoringMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopMonitoringMembersCommandInput, StopMonitoringMembersCommandOutput>;
    private serialize;
    private deserialize;
}
