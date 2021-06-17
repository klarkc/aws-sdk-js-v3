import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListDatasetGroupsRequest, ListDatasetGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDatasetGroupsCommandInput extends ListDatasetGroupsRequest {
}
export interface ListDatasetGroupsCommandOutput extends ListDatasetGroupsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of dataset groups created using the <a>CreateDatasetGroup</a>
 *       operation. For each dataset group, this operation returns a summary of its properties,
 *       including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by
 *       using the dataset group ARN with the <a>DescribeDatasetGroup</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListDatasetGroupsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListDatasetGroupsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListDatasetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDatasetGroupsCommand extends $Command<ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput, ForecastClientResolvedConfig> {
    readonly input: ListDatasetGroupsCommandInput;
    constructor(input: ListDatasetGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
