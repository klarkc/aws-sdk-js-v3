import { __extends } from "tslib";
import { DescribeSolutionRequest, DescribeSolutionResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeSolutionCommand, serializeAws_json1_1DescribeSolutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a solution.
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeSolutionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeSolutionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeSolutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSolutionCommandInput} for command's `input` shape.
 * @see {@link DescribeSolutionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSolutionCommand = /** @class */ (function (_super) {
    __extends(DescribeSolutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSolutionCommand(input) {
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
    DescribeSolutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DescribeSolutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSolutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSolutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSolutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSolutionCommand(input, context);
    };
    DescribeSolutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSolutionCommand(output, context);
    };
    return DescribeSolutionCommand;
}($Command));
export { DescribeSolutionCommand };
//# sourceMappingURL=DescribeSolutionCommand.js.map