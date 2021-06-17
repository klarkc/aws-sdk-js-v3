"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSolutionVersionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateSolutionVersionCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PersonalizeClient";
        const commandName = "CreateSolutionVersionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateSolutionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateSolutionVersionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateSolutionVersionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateSolutionVersionCommand(output, context);
    }
}
exports.CreateSolutionVersionCommand = CreateSolutionVersionCommand;
//# sourceMappingURL=CreateSolutionVersionCommand.js.map