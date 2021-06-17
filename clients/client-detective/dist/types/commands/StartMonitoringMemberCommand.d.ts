import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { StartMonitoringMemberRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMonitoringMemberCommandInput extends StartMonitoringMemberRequest {
}
export interface StartMonitoringMemberCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sends a request to enable data ingest for a member account that has a status of
 *             <code>ACCEPTED_BUT_DISABLED</code>.</p>
 *          <p>For valid member accounts, the status is updated as follows.</p>
 *          <ul>
 *             <li>
 *                <p>If Detective enabled the member account, then the new status is
 *                <code>ENABLED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Detective cannot enable the member account, the status remains
 *                   <code>ACCEPTED_BUT_DISABLED</code>. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, StartMonitoringMemberCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, StartMonitoringMemberCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new StartMonitoringMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMonitoringMemberCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringMemberCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMonitoringMemberCommand extends $Command<StartMonitoringMemberCommandInput, StartMonitoringMemberCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: StartMonitoringMemberCommandInput;
    constructor(input: StartMonitoringMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMonitoringMemberCommandInput, StartMonitoringMemberCommandOutput>;
    private serialize;
    private deserialize;
}
