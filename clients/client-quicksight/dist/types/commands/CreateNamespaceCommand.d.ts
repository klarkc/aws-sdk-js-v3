import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateNamespaceRequest, CreateNamespaceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNamespaceCommandInput extends CreateNamespaceRequest {
}
export interface CreateNamespaceCommandOutput extends CreateNamespaceResponse, __MetadataBearer {
}
/**
 * <p>(Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight.</p>
 *         <p>A namespace allows you to isolate the QuickSight users and groups that are registered
 *             for that namespace. Users that access the namespace can share assets only with other
 *             users or groups in the same namespace. They can't see users and groups in other
 *             namespaces. You can create a namespace after your AWS account is subscribed to
 *             QuickSight. The namespace must be unique within the AWS account. By default, there is a
 *             limit of 100 namespaces per AWS account. To increase your limit, create a ticket with
 *             AWS Support. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateNamespaceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateNamespaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateNamespaceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNamespaceCommand extends $Command<CreateNamespaceCommandInput, CreateNamespaceCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: CreateNamespaceCommandInput;
    constructor(input: CreateNamespaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNamespaceCommandInput, CreateNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
