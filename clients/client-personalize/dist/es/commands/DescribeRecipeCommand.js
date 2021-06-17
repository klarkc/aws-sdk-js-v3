import { __extends } from "tslib";
import { DescribeRecipeRequest, DescribeRecipeResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeRecipeCommand, serializeAws_json1_1DescribeRecipeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a recipe.</p>
 *          <p>A recipe contains three items:</p>
 *          <ul>
 *             <li>
 *                <p>An algorithm that trains a model.</p>
 *             </li>
 *             <li>
 *                <p>Hyperparameters that govern the training.</p>
 *             </li>
 *             <li>
 *                <p>Feature transformation information for modifying the input data before training.</p>
 *             </li>
 *          </ul>
 *          <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a
 *       solution with the <a>CreateSolution</a> API.
 *       <code>CreateSolution</code> trains a model by using the algorithm
 *       in the specified recipe and a training dataset. The solution, when deployed as a campaign,
 *       can provide recommendations using the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeRecipeCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeRecipeCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecipeCommandInput} for command's `input` shape.
 * @see {@link DescribeRecipeCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRecipeCommand = /** @class */ (function (_super) {
    __extends(DescribeRecipeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRecipeCommand(input) {
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
    DescribeRecipeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DescribeRecipeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRecipeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRecipeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRecipeCommand(input, context);
    };
    DescribeRecipeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRecipeCommand(output, context);
    };
    return DescribeRecipeCommand;
}($Command));
export { DescribeRecipeCommand };
//# sourceMappingURL=DescribeRecipeCommand.js.map