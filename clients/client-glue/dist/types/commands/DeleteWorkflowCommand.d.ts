import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteWorkflowRequest, DeleteWorkflowResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWorkflowCommandInput extends DeleteWorkflowRequest {
}
export interface DeleteWorkflowCommandOutput extends DeleteWorkflowResponse, __MetadataBearer {
}
/**
 * <p>Deletes a workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteWorkflowCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteWorkflowCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteWorkflowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkflowCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWorkflowCommand extends $Command<DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteWorkflowCommandInput;
    constructor(input: DeleteWorkflowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput>;
    private serialize;
    private deserialize;
}
