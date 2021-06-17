import { __extends } from "tslib";
import { RegisterContainerImageRequest, RegisterContainerImageResult } from "../models/models_1";
import { deserializeAws_json1_1RegisterContainerImageCommand, serializeAws_json1_1RegisterContainerImageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a container image to your Amazon Lightsail container service.</p>
 *
 *          <note>
 *             <p>This action is not required if you install and use the Lightsail Control
 *         (lightsailctl) plugin to push container images to your Lightsail container service. For
 *         more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a>
 *         in the <i>Lightsail Dev Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, RegisterContainerImageCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, RegisterContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new RegisterContainerImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterContainerImageCommandInput} for command's `input` shape.
 * @see {@link RegisterContainerImageCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterContainerImageCommand = /** @class */ (function (_super) {
    __extends(RegisterContainerImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterContainerImageCommand(input) {
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
    RegisterContainerImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "RegisterContainerImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterContainerImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterContainerImageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterContainerImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterContainerImageCommand(input, context);
    };
    RegisterContainerImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterContainerImageCommand(output, context);
    };
    return RegisterContainerImageCommand;
}($Command));
export { RegisterContainerImageCommand };
//# sourceMappingURL=RegisterContainerImageCommand.js.map