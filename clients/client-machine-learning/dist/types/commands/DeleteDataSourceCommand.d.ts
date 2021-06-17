import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteDataSourceInput, DeleteDataSourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDataSourceCommandInput extends DeleteDataSourceInput {
}
export interface DeleteDataSourceCommandOutput extends DeleteDataSourceOutput, __MetadataBearer {
}
/**
 * <p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p>
 *         <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p>
 *         <p>
 *             <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteDataSourceCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteDataSourceCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DeleteDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSourceCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDataSourceCommand extends $Command<DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DeleteDataSourceCommandInput;
    constructor(input: DeleteDataSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
