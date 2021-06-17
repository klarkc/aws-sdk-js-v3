import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListDatasetGroupsRequest, ListDatasetGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDatasetGroupsCommandInput extends ListDatasetGroupsRequest {
}
export interface ListDatasetGroupsCommandOutput extends ListDatasetGroupsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of dataset groups. The response provides the properties for each dataset
 *       group, including the Amazon Resource Name (ARN). For more information on dataset groups, see
 *         <a>CreateDatasetGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetGroupsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetGroupsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListDatasetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetGroupsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDatasetGroupsCommand extends $Command<ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListDatasetGroupsCommandInput;
    constructor(input: ListDatasetGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
