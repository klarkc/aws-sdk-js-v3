import { __extends } from "tslib";
import { UpdateImageRequest, UpdateImageResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateImageCommand, serializeAws_json1_1UpdateImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the properties of a SageMaker image. To change the image's tags, use the
 *         <a>AddTags</a> and <a>DeleteTags</a> APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateImageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateImageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateImageCommandInput} for command's `input` shape.
 * @see {@link UpdateImageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateImageCommand = /** @class */ (function (_super) {
    __extends(UpdateImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateImageCommand(input) {
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
    UpdateImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateImageCommand(input, context);
    };
    UpdateImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateImageCommand(output, context);
    };
    return UpdateImageCommand;
}($Command));
export { UpdateImageCommand };
//# sourceMappingURL=UpdateImageCommand.js.map