import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteJobRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteJobCommandInput extends DeleteJobRequest {
}
export interface DeleteJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a job and its related job executions.</p>
 *          <p>Deleting a job may take time, depending on the number of job
 *         executions created for the job and various other factors. While the job
 *         is being deleted, the status of the job will be shown as
 *         "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status
 *         is already "DELETION_IN_PROGRESS" will result in an error.</p>
 *          <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or
 *         a LimitExceededException will occur.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteJobCommand extends $Command<DeleteJobCommandInput, DeleteJobCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteJobCommandInput;
    constructor(input: DeleteJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteJobCommandInput, DeleteJobCommandOutput>;
    private serialize;
    private deserialize;
}
