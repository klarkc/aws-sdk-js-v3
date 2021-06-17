import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListSolutionVersionsRequest, ListSolutionVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSolutionVersionsCommandInput extends ListSolutionVersionsRequest {
}
export interface ListSolutionVersionsCommandOutput extends ListSolutionVersionsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of solution versions for the given solution. When a solution is not
 *       specified, all the solution versions associated with the account are listed. The response
 *       provides the properties for each solution version, including the Amazon Resource Name (ARN).
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListSolutionVersionsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListSolutionVersionsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListSolutionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSolutionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSolutionVersionsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSolutionVersionsCommand extends $Command<ListSolutionVersionsCommandInput, ListSolutionVersionsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListSolutionVersionsCommandInput;
    constructor(input: ListSolutionVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSolutionVersionsCommandInput, ListSolutionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
