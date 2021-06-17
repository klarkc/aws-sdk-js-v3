import { __extends } from "tslib";
import { StopSolutionVersionCreationRequest } from "../models/models_0";
import { deserializeAws_json1_1StopSolutionVersionCreationCommand, serializeAws_json1_1StopSolutionVersionCreationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var StopSolutionVersionCreationCommand = /** @class */ (function (_super) {
    __extends(StopSolutionVersionCreationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopSolutionVersionCreationCommand(input) {
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
    StopSolutionVersionCreationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "StopSolutionVersionCreationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopSolutionVersionCreationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopSolutionVersionCreationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopSolutionVersionCreationCommand(input, context);
    };
    StopSolutionVersionCreationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopSolutionVersionCreationCommand(output, context);
    };
    return StopSolutionVersionCreationCommand;
}($Command));
export { StopSolutionVersionCreationCommand };
//# sourceMappingURL=StopSolutionVersionCreationCommand.js.map