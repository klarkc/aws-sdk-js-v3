import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { DeleteWorkerBlockRequest, DeleteWorkerBlockResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWorkerBlockCommandInput extends DeleteWorkerBlockRequest {
}
export interface DeleteWorkerBlockCommandOutput extends DeleteWorkerBlockResponse, __MetadataBearer {
}
/**
 * <p>The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DeleteWorkerBlockCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DeleteWorkerBlockCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DeleteWorkerBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkerBlockCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkerBlockCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWorkerBlockCommand extends $Command<DeleteWorkerBlockCommandInput, DeleteWorkerBlockCommandOutput, MTurkClientResolvedConfig> {
    readonly input: DeleteWorkerBlockCommandInput;
    constructor(input: DeleteWorkerBlockCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkerBlockCommandInput, DeleteWorkerBlockCommandOutput>;
    private serialize;
    private deserialize;
}
