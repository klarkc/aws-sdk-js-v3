import { __extends } from "tslib";
import { UpdateModelVersionRequest, UpdateModelVersionResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateModelVersionCommand, serializeAws_json1_1UpdateModelVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateModelVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateModelVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateModelVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateModelVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateModelVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateModelVersionCommand(input) {
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
    UpdateModelVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "UpdateModelVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateModelVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateModelVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateModelVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateModelVersionCommand(input, context);
    };
    UpdateModelVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateModelVersionCommand(output, context);
    };
    return UpdateModelVersionCommand;
}($Command));
export { UpdateModelVersionCommand };
//# sourceMappingURL=UpdateModelVersionCommand.js.map