import { __extends } from "tslib";
import { ListServiceProfilesRequest, ListServiceProfilesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListServiceProfilesCommand, serializeAws_restJson1ListServiceProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the service profiles registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListServiceProfilesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListServiceProfilesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListServiceProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListServiceProfilesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServiceProfilesCommand = /** @class */ (function (_super) {
    __extends(ListServiceProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListServiceProfilesCommand(input) {
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
    ListServiceProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "ListServiceProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListServiceProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListServiceProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListServiceProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListServiceProfilesCommand(input, context);
    };
    ListServiceProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListServiceProfilesCommand(output, context);
    };
    return ListServiceProfilesCommand;
}($Command));
export { ListServiceProfilesCommand };
//# sourceMappingURL=ListServiceProfilesCommand.js.map