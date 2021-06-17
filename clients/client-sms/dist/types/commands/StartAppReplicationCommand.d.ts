import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { StartAppReplicationRequest, StartAppReplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartAppReplicationCommandInput extends StartAppReplicationRequest {
}
export interface StartAppReplicationCommandOutput extends StartAppReplicationResponse, __MetadataBearer {
}
/**
 * <p>Starts replicating the specified application by creating replication jobs for each server in the
 *             application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StartAppReplicationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StartAppReplicationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new StartAppReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAppReplicationCommandInput} for command's `input` shape.
 * @see {@link StartAppReplicationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartAppReplicationCommand extends $Command<StartAppReplicationCommandInput, StartAppReplicationCommandOutput, SMSClientResolvedConfig> {
    readonly input: StartAppReplicationCommandInput;
    constructor(input: StartAppReplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAppReplicationCommandInput, StartAppReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
