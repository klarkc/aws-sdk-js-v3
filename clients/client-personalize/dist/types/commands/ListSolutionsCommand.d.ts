import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListSolutionsRequest, ListSolutionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSolutionsCommandInput extends ListSolutionsRequest {
}
export interface ListSolutionsCommandOutput extends ListSolutionsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of solutions that use the given dataset group.
 *       When a dataset group is not specified, all the solutions associated with the account are listed.
 *       The response provides the properties for each solution, including the Amazon Resource Name (ARN).
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListSolutionsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListSolutionsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListSolutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSolutionsCommandInput} for command's `input` shape.
 * @see {@link ListSolutionsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSolutionsCommand extends $Command<ListSolutionsCommandInput, ListSolutionsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListSolutionsCommandInput;
    constructor(input: ListSolutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSolutionsCommandInput, ListSolutionsCommandOutput>;
    private serialize;
    private deserialize;
}
