import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { StopSolutionVersionCreationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopSolutionVersionCreationCommandInput extends StopSolutionVersionCreationRequest {
}
export interface StopSolutionVersionCreationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS.
 *       </p>
 *          <p>Depending on the current state of the solution version, the solution version state changes as follows:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE_PENDING > CREATE_STOPPED</p>
 *                <p>or</p>
 *             </li>
 *             <li>
 *                <p>CREATE_IN_PROGRESS > CREATE_STOPPING > CREATE_STOPPED</p>
 *             </li>
 *          </ul>
 *          <p>You are billed for all of the training completed up
 *       until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, StopSolutionVersionCreationCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, StopSolutionVersionCreationCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new StopSolutionVersionCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopSolutionVersionCreationCommandInput} for command's `input` shape.
 * @see {@link StopSolutionVersionCreationCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopSolutionVersionCreationCommand extends $Command<StopSolutionVersionCreationCommandInput, StopSolutionVersionCreationCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: StopSolutionVersionCreationCommandInput;
    constructor(input: StopSolutionVersionCreationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopSolutionVersionCreationCommandInput, StopSolutionVersionCreationCommandOutput>;
    private serialize;
    private deserialize;
}
