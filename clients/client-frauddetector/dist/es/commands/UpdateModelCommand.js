import { __extends } from "tslib";
import { UpdateModelRequest, UpdateModelResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateModelCommand, serializeAws_json1_1UpdateModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a model. You can update the description attribute using this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateModelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateModelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateModelCommandInput} for command's `input` shape.
 * @see {@link UpdateModelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateModelCommand = /** @class */ (function (_super) {
    __extends(UpdateModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateModelCommand(input) {
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
    UpdateModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "UpdateModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateModelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateModelCommand(input, context);
    };
    UpdateModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateModelCommand(output, context);
    };
    return UpdateModelCommand;
}($Command));
export { UpdateModelCommand };
//# sourceMappingURL=UpdateModelCommand.js.map