import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListDatasetsRequest, ListDatasetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDatasetsCommandInput extends ListDatasetsRequest {
}
export interface ListDatasetsCommandOutput extends ListDatasetsResponse, __MetadataBearer {
}
/**
 * <p>Returns the list of datasets contained in the given dataset group. The response provides
 *       the properties for each dataset, including the Amazon Resource Name (ARN). For more
 *       information on datasets, see <a>CreateDataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDatasetsCommand extends $Command<ListDatasetsCommandInput, ListDatasetsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListDatasetsCommandInput;
    constructor(input: ListDatasetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetsCommandInput, ListDatasetsCommandOutput>;
    private serialize;
    private deserialize;
}
