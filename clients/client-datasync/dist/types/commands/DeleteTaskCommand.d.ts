import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DeleteTaskRequest, DeleteTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTaskCommandInput extends DeleteTaskRequest {
}
export interface DeleteTaskCommandOutput extends DeleteTaskResponse, __MetadataBearer {
}
/**
 * <p>Deletes a task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DeleteTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DeleteTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DeleteTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTaskCommand extends $Command<DeleteTaskCommandInput, DeleteTaskCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DeleteTaskCommandInput;
    constructor(input: DeleteTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTaskCommandInput, DeleteTaskCommandOutput>;
    private serialize;
    private deserialize;
}
