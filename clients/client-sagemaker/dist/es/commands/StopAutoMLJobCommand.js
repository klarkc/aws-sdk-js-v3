import { __extends } from "tslib";
import { StopAutoMLJobRequest } from "../models/models_2";
import { deserializeAws_json1_1StopAutoMLJobCommand, serializeAws_json1_1StopAutoMLJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A method for forcing the termination of a running job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopAutoMLJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopAutoMLJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopAutoMLJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopAutoMLJobCommandInput} for command's `input` shape.
 * @see {@link StopAutoMLJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopAutoMLJobCommand = /** @class */ (function (_super) {
    __extends(StopAutoMLJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopAutoMLJobCommand(input) {
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
    StopAutoMLJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopAutoMLJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopAutoMLJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopAutoMLJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopAutoMLJobCommand(input, context);
    };
    StopAutoMLJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopAutoMLJobCommand(output, context);
    };
    return StopAutoMLJobCommand;
}($Command));
export { StopAutoMLJobCommand };
//# sourceMappingURL=StopAutoMLJobCommand.js.map