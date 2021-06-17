import { __extends } from "tslib";
import { UpdateContextRequest, UpdateContextResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateContextCommand, serializeAws_json1_1UpdateContextCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a context.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateContextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContextCommandInput} for command's `input` shape.
 * @see {@link UpdateContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateContextCommand = /** @class */ (function (_super) {
    __extends(UpdateContextCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateContextCommand(input) {
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
    UpdateContextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateContextCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateContextRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateContextResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateContextCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateContextCommand(input, context);
    };
    UpdateContextCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateContextCommand(output, context);
    };
    return UpdateContextCommand;
}($Command));
export { UpdateContextCommand };
//# sourceMappingURL=UpdateContextCommand.js.map