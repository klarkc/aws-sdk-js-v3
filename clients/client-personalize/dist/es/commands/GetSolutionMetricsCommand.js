import { __extends } from "tslib";
import { GetSolutionMetricsRequest, GetSolutionMetricsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetSolutionMetricsCommand, serializeAws_json1_1GetSolutionMetricsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the metrics for the specified solution version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, GetSolutionMetricsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, GetSolutionMetricsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new GetSolutionMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSolutionMetricsCommandInput} for command's `input` shape.
 * @see {@link GetSolutionMetricsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSolutionMetricsCommand = /** @class */ (function (_super) {
    __extends(GetSolutionMetricsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSolutionMetricsCommand(input) {
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
    GetSolutionMetricsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "GetSolutionMetricsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSolutionMetricsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSolutionMetricsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSolutionMetricsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSolutionMetricsCommand(input, context);
    };
    GetSolutionMetricsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSolutionMetricsCommand(output, context);
    };
    return GetSolutionMetricsCommand;
}($Command));
export { GetSolutionMetricsCommand };
//# sourceMappingURL=GetSolutionMetricsCommand.js.map