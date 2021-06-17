import { __extends } from "tslib";
import { UpdateTrialComponentRequest, UpdateTrialComponentResponse } from "../models/models_3";
import { deserializeAws_json1_1UpdateTrialComponentCommand, serializeAws_json1_1UpdateTrialComponentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates one or more properties of a trial component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrialComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTrialComponentCommand = /** @class */ (function (_super) {
    __extends(UpdateTrialComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTrialComponentCommand(input) {
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
    UpdateTrialComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateTrialComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTrialComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTrialComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTrialComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTrialComponentCommand(input, context);
    };
    UpdateTrialComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTrialComponentCommand(output, context);
    };
    return UpdateTrialComponentCommand;
}($Command));
export { UpdateTrialComponentCommand };
//# sourceMappingURL=UpdateTrialComponentCommand.js.map