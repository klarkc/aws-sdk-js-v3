import { __extends } from "tslib";
import { CreateRemoteAccessSessionRequest, CreateRemoteAccessSessionResult } from "../models/models_0";
import { deserializeAws_json1_1CreateRemoteAccessSessionCommand, serializeAws_json1_1CreateRemoteAccessSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specifies and starts a remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link CreateRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRemoteAccessSessionCommand = /** @class */ (function (_super) {
    __extends(CreateRemoteAccessSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRemoteAccessSessionCommand(input) {
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
    CreateRemoteAccessSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "CreateRemoteAccessSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRemoteAccessSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRemoteAccessSessionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRemoteAccessSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateRemoteAccessSessionCommand(input, context);
    };
    CreateRemoteAccessSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateRemoteAccessSessionCommand(output, context);
    };
    return CreateRemoteAccessSessionCommand;
}($Command));
export { CreateRemoteAccessSessionCommand };
//# sourceMappingURL=CreateRemoteAccessSessionCommand.js.map