import { __extends } from "tslib";
import { CreateInstanceProfileRequest, CreateInstanceProfileResult } from "../models/models_0";
import { deserializeAws_json1_1CreateInstanceProfileCommand, serializeAws_json1_1CreateInstanceProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a profile that can be applied to one or more private fleet device
 *             instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateInstanceProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateInstanceProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(CreateInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInstanceProfileCommand(input) {
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
    CreateInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "CreateInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInstanceProfileResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateInstanceProfileCommand(input, context);
    };
    CreateInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateInstanceProfileCommand(output, context);
    };
    return CreateInstanceProfileCommand;
}($Command));
export { CreateInstanceProfileCommand };
//# sourceMappingURL=CreateInstanceProfileCommand.js.map