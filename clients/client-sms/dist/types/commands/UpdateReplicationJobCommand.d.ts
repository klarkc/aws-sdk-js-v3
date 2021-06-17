import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { UpdateReplicationJobRequest, UpdateReplicationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateReplicationJobCommandInput extends UpdateReplicationJobRequest {
}
export interface UpdateReplicationJobCommandOutput extends UpdateReplicationJobResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified settings for the specified replication job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, UpdateReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, UpdateReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new UpdateReplicationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReplicationJobCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateReplicationJobCommand extends $Command<UpdateReplicationJobCommandInput, UpdateReplicationJobCommandOutput, SMSClientResolvedConfig> {
    readonly input: UpdateReplicationJobCommandInput;
    constructor(input: UpdateReplicationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateReplicationJobCommandInput, UpdateReplicationJobCommandOutput>;
    private serialize;
    private deserialize;
}
