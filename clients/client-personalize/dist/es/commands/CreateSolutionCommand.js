import { __extends } from "tslib";
import { CreateSolutionRequest, CreateSolutionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateSolutionCommand, serializeAws_json1_1CreateSolutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the configuration for training a model. A trained model is known as
 *       a solution. After the configuration is created, you train the model (create a solution)
 *       by calling the <a>CreateSolutionVersion</a> operation. Every time you call
 *       <code>CreateSolutionVersion</code>, a new version of the solution is created.</p>
 *          <p>After creating a solution version, you check its accuracy by calling
 *       <a>GetSolutionMetrics</a>. When you are satisfied with the version, you
 *       deploy it using <a>CreateCampaign</a>. The campaign provides recommendations
 *       to a client through the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
 *          <p>To train a model, Amazon Personalize requires training data and a recipe. The training data
 *       comes from the dataset group that you provide in the request. A recipe specifies
 *       the training algorithm and a feature transformation. You can specify one of the predefined
 *       recipes provided by Amazon Personalize. Alternatively, you can specify
 *       <code>performAutoML</code> and Amazon Personalize will analyze your data and select the
 *       optimum USER_PERSONALIZATION recipe for you.</p>
 *          <note>
 *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
 *         for solution hyperparameter optimization at this time.</p>
 *          </note>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A solution can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the solution, call <a>DescribeSolution</a>. Wait
 *       until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p>
 *
 *
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListSolutions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSolutionVersion</a>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateSolutionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateSolutionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateSolutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSolutionCommandInput} for command's `input` shape.
 * @see {@link CreateSolutionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSolutionCommand = /** @class */ (function (_super) {
    __extends(CreateSolutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSolutionCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateSolutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "CreateSolutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSolutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSolutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSolutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSolutionCommand(input, context);
    };
    CreateSolutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSolutionCommand(output, context);
    };
    return CreateSolutionCommand;
}($Command));
export { CreateSolutionCommand };
//# sourceMappingURL=CreateSolutionCommand.js.map