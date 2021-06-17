import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { UpdateDatasetGroupRequest, UpdateDatasetGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDatasetGroupCommandInput extends UpdateDatasetGroupRequest {
}
export interface UpdateDatasetGroupCommandOutput extends UpdateDatasetGroupResponse, __MetadataBearer {
}
/**
 * <p>Replaces the datasets in a dataset group with the specified datasets.</p>
 *          <note>
 *             <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can
 *         use the dataset group to create a predictor. Use the <a>DescribeDatasetGroup</a>
 *         operation to get the status.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, UpdateDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, UpdateDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new UpdateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDatasetGroupCommand extends $Command<UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput, ForecastClientResolvedConfig> {
    readonly input: UpdateDatasetGroupCommandInput;
    constructor(input: UpdateDatasetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
