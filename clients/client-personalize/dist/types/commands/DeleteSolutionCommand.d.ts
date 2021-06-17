import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteSolutionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSolutionCommandInput extends DeleteSolutionRequest {
}
export interface DeleteSolutionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes all versions of a solution and the <code>Solution</code> object itself.
 *       Before deleting a solution, you must delete all campaigns based on
 *       the solution. To determine what campaigns are using the solution, call
 *       <a>ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution.
 *       You can't delete a solution if an associated <code>SolutionVersion</code> is in the
 *       CREATE PENDING or IN PROGRESS state.
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteSolutionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteSolutionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DeleteSolutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSolutionCommandInput} for command's `input` shape.
 * @see {@link DeleteSolutionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSolutionCommand extends $Command<DeleteSolutionCommandInput, DeleteSolutionCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DeleteSolutionCommandInput;
    constructor(input: DeleteSolutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSolutionCommandInput, DeleteSolutionCommandOutput>;
    private serialize;
    private deserialize;
}
