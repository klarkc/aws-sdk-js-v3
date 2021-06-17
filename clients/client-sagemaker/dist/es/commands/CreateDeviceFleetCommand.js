import { __extends } from "tslib";
import { CreateDeviceFleetRequest } from "../models/models_0";
import { deserializeAws_json1_1CreateDeviceFleetCommand, serializeAws_json1_1CreateDeviceFleetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a device fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateDeviceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeviceFleetCommand = /** @class */ (function (_super) {
    __extends(CreateDeviceFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeviceFleetCommand(input) {
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
    CreateDeviceFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateDeviceFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeviceFleetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeviceFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDeviceFleetCommand(input, context);
    };
    CreateDeviceFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDeviceFleetCommand(output, context);
    };
    return CreateDeviceFleetCommand;
}($Command));
export { CreateDeviceFleetCommand };
//# sourceMappingURL=CreateDeviceFleetCommand.js.map