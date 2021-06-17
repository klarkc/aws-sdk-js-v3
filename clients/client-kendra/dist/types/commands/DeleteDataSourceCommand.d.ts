import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DeleteDataSourceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDataSourceCommandInput extends DeleteDataSourceRequest {
}
export interface DeleteDataSourceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an Amazon Kendra data source. An exception is not thrown if the
 *       data source is already being deleted. While the data source is being
 *       deleted, the <code>Status</code> field returned by a call to the
 *         <code>DescribeDataSource</code> operation is set to
 *         <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteDataSourceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteDataSourceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeleteDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDataSourceCommand extends $Command<DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput, KendraClientResolvedConfig> {
    readonly input: DeleteDataSourceCommandInput;
    constructor(input: DeleteDataSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
