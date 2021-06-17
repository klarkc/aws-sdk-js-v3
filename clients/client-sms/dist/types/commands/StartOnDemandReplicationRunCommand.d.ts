import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { StartOnDemandReplicationRunRequest, StartOnDemandReplicationRunResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartOnDemandReplicationRunCommandInput extends StartOnDemandReplicationRunRequest {
}
export interface StartOnDemandReplicationRunCommandOutput extends StartOnDemandReplicationRunResponse, __MetadataBearer {
}
/**
 * <p>Starts an on-demand replication run for the specified replication job. This
 *             replication run starts immediately. This replication run is in addition to the ones
 *             already scheduled.</p>
 *         <p>There is a limit on the number of on-demand replications runs that you can request
 *             in a 24-hour period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StartOnDemandReplicationRunCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StartOnDemandReplicationRunCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new StartOnDemandReplicationRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartOnDemandReplicationRunCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandReplicationRunCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartOnDemandReplicationRunCommand extends $Command<StartOnDemandReplicationRunCommandInput, StartOnDemandReplicationRunCommandOutput, SMSClientResolvedConfig> {
    readonly input: StartOnDemandReplicationRunCommandInput;
    constructor(input: StartOnDemandReplicationRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartOnDemandReplicationRunCommandInput, StartOnDemandReplicationRunCommandOutput>;
    private serialize;
    private deserialize;
}
