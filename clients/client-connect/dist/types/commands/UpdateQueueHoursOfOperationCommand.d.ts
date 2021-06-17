import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateQueueHoursOfOperationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateQueueHoursOfOperationCommandInput extends UpdateQueueHoursOfOperationRequest {
}
export interface UpdateQueueHoursOfOperationCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the hours of operation for the specified queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateQueueHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQueueHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueHoursOfOperationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateQueueHoursOfOperationCommand extends $Command<UpdateQueueHoursOfOperationCommandInput, UpdateQueueHoursOfOperationCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateQueueHoursOfOperationCommandInput;
    constructor(input: UpdateQueueHoursOfOperationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateQueueHoursOfOperationCommandInput, UpdateQueueHoursOfOperationCommandOutput>;
    private serialize;
    private deserialize;
}
