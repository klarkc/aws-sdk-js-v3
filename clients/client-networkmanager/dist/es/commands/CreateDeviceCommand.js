import { __extends } from "tslib";
import { CreateDeviceRequest, CreateDeviceResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDeviceCommand, serializeAws_restJson1CreateDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new device in a global network. If you specify both a site ID and a
 *             location, the location of the site is used for visualization in the Network Manager console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateDeviceCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateDeviceCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeviceCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeviceCommand = /** @class */ (function (_super) {
    __extends(CreateDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeviceCommand(input) {
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
    CreateDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "CreateDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDeviceCommand(input, context);
    };
    CreateDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDeviceCommand(output, context);
    };
    return CreateDeviceCommand;
}($Command));
export { CreateDeviceCommand };
//# sourceMappingURL=CreateDeviceCommand.js.map