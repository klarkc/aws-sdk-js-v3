import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { StartOnDemandAppReplicationRequest, StartOnDemandAppReplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartOnDemandAppReplicationCommandInput extends StartOnDemandAppReplicationRequest {
}
export interface StartOnDemandAppReplicationCommandOutput extends StartOnDemandAppReplicationResponse, __MetadataBearer {
}
/**
 * <p>Starts an on-demand replication run for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StartOnDemandAppReplicationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StartOnDemandAppReplicationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new StartOnDemandAppReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartOnDemandAppReplicationCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandAppReplicationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartOnDemandAppReplicationCommand extends $Command<StartOnDemandAppReplicationCommandInput, StartOnDemandAppReplicationCommandOutput, SMSClientResolvedConfig> {
    readonly input: StartOnDemandAppReplicationCommandInput;
    constructor(input: StartOnDemandAppReplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartOnDemandAppReplicationCommandInput, StartOnDemandAppReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
