import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { StopAppReplicationRequest, StopAppReplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopAppReplicationCommandInput extends StopAppReplicationRequest {
}
export interface StopAppReplicationCommandOutput extends StopAppReplicationResponse, __MetadataBearer {
}
/**
 * <p>Stops replicating the specified application by deleting the replication job for each server in
 *             the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StopAppReplicationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StopAppReplicationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new StopAppReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopAppReplicationCommandInput} for command's `input` shape.
 * @see {@link StopAppReplicationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopAppReplicationCommand extends $Command<StopAppReplicationCommandInput, StopAppReplicationCommandOutput, SMSClientResolvedConfig> {
    readonly input: StopAppReplicationCommandInput;
    constructor(input: StopAppReplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopAppReplicationCommandInput, StopAppReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
