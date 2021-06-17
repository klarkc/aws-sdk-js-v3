import { __extends } from "tslib";
import { UpdateTrialRequest, UpdateTrialResponse } from "../models/models_3";
import { deserializeAws_json1_1UpdateTrialCommand, serializeAws_json1_1UpdateTrialCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the display name of a trial.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateTrialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrialCommandInput} for command's `input` shape.
 * @see {@link UpdateTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTrialCommand = /** @class */ (function (_super) {
    __extends(UpdateTrialCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTrialCommand(input) {
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
    UpdateTrialCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateTrialCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTrialRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTrialResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTrialCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTrialCommand(input, context);
    };
    UpdateTrialCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTrialCommand(output, context);
    };
    return UpdateTrialCommand;
}($Command));
export { UpdateTrialCommand };
//# sourceMappingURL=UpdateTrialCommand.js.map