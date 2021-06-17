import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateSolutionVersionRequest, CreateSolutionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSolutionVersionCommandInput extends CreateSolutionVersionRequest {
}
export interface CreateSolutionVersionCommandOutput extends CreateSolutionVersionResponse, __MetadataBearer {
}
/**
 * <p>Trains or retrains an active solution. A solution is created using the <a>CreateSolution</a> operation and must be in the ACTIVE state before calling
 *         <code>CreateSolutionVersion</code>. A new version of the solution is created every time you
 *       call this operation.</p>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A solution version can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING</p>
 *             </li>
 *             <li>
 *                <p>CREATE IN_PROGRESS</p>
 *             </li>
 *             <li>
 *                <p>ACTIVE</p>
 *             </li>
 *             <li>
 *                <p>CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>CREATE STOPPING</p>
 *             </li>
 *             <li>
 *                <p>CREATE STOPPED</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the version, call <a>DescribeSolutionVersion</a>. Wait
 *       until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p>
 *          <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code>
 *       key, which describes why the job failed.</p>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListSolutionVersions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSolutionVersion</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListSolutions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSolution</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSolution</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteSolution</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateSolutionVersionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateSolutionVersionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateSolutionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSolutionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSolutionVersionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSolutionVersionCommand extends $Command<CreateSolutionVersionCommandInput, CreateSolutionVersionCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateSolutionVersionCommandInput;
    constructor(input: CreateSolutionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSolutionVersionCommandInput, CreateSolutionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
