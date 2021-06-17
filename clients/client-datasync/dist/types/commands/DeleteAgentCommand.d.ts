import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DeleteAgentRequest, DeleteAgentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAgentCommandInput extends DeleteAgentRequest {
}
export interface DeleteAgentCommandOutput extends DeleteAgentResponse, __MetadataBearer {
}
/**
 * <p>Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN)
 *       of the agent in your request. The operation disassociates the agent from your AWS account.
 *       However, it doesn't delete the agent virtual machine (VM) from your on-premises
 *       environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DeleteAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DeleteAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DeleteAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAgentCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAgentCommand extends $Command<DeleteAgentCommandInput, DeleteAgentCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DeleteAgentCommandInput;
    constructor(input: DeleteAgentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAgentCommandInput, DeleteAgentCommandOutput>;
    private serialize;
    private deserialize;
}
