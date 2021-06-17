import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteNamespaceRequest, DeleteNamespaceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNamespaceCommandInput extends DeleteNamespaceRequest {
}
export interface DeleteNamespaceCommandOutput extends DeleteNamespaceResponse, __MetadataBearer {
}
/**
 * <p>Deletes a namespace and the users and groups that are associated with the namespace.
 *         This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not
 *         deleted. To delete these assets, you use the API operations for the relevant asset. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteNamespaceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteNamespaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteNamespaceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNamespaceCommand extends $Command<DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DeleteNamespaceCommandInput;
    constructor(input: DeleteNamespaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
