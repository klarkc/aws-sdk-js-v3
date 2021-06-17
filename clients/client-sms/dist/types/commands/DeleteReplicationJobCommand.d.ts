import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteReplicationJobRequest, DeleteReplicationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReplicationJobCommandInput extends DeleteReplicationJobRequest {
}
export interface DeleteReplicationJobCommandOutput extends DeleteReplicationJobResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified replication job.</p>
 *         <p>After you delete a replication job, there are no further replication runs. AWS
 *             deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created
 *             by the replication runs are not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteReplicationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationJobCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReplicationJobCommand extends $Command<DeleteReplicationJobCommandInput, DeleteReplicationJobCommandOutput, SMSClientResolvedConfig> {
    readonly input: DeleteReplicationJobCommandInput;
    constructor(input: DeleteReplicationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReplicationJobCommandInput, DeleteReplicationJobCommandOutput>;
    private serialize;
    private deserialize;
}
