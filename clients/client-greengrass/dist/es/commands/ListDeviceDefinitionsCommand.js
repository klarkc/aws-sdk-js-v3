import { __extends } from "tslib";
import { ListDeviceDefinitionsRequest, ListDeviceDefinitionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDeviceDefinitionsCommand, serializeAws_restJson1ListDeviceDefinitionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves a list of device definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListDeviceDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListDeviceDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListDeviceDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeviceDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeviceDefinitionsCommand(input) {
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
    ListDeviceDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListDeviceDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeviceDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeviceDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeviceDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDeviceDefinitionsCommand(input, context);
    };
    ListDeviceDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDeviceDefinitionsCommand(output, context);
    };
    return ListDeviceDefinitionsCommand;
}($Command));
export { ListDeviceDefinitionsCommand };
//# sourceMappingURL=ListDeviceDefinitionsCommand.js.map