import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DeleteServerRequest, DeleteServerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteServerCommandInput extends DeleteServerRequest {
}
export interface DeleteServerCommandOutput extends DeleteServerResponse, __MetadataBearer {
}
/**
 * <p>
 *       Deletes the server and the underlying AWS CloudFormation stacks
 *       (including the server's EC2 instance). When you run this command, the server state is updated
 *       to <code>DELETING</code>. After the server is deleted, it is no longer returned by
 *       <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted.
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       An <code>InvalidStateException</code> is thrown when a server deletion is already in progress.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 *          <p>
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DeleteServerCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DeleteServerCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new DeleteServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServerCommandInput} for command's `input` shape.
 * @see {@link DeleteServerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteServerCommand extends $Command<DeleteServerCommandInput, DeleteServerCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: DeleteServerCommandInput;
    constructor(input: DeleteServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServerCommandInput, DeleteServerCommandOutput>;
    private serialize;
    private deserialize;
}
