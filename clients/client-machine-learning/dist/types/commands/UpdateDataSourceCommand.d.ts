import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { UpdateDataSourceInput, UpdateDataSourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDataSourceCommandInput extends UpdateDataSourceInput {
}
export interface UpdateDataSourceCommandOutput extends UpdateDataSourceOutput, __MetadataBearer {
}
/**
 * <p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p>
 *         <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateDataSourceCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateDataSourceCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDataSourceCommand extends $Command<UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: UpdateDataSourceCommandInput;
    constructor(input: UpdateDataSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
