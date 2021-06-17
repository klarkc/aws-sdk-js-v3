import { __extends } from "tslib";
import { UpdateConnectivityInfoRequest, UpdateConnectivityInfoResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateConnectivityInfoCommand, serializeAws_restJson1UpdateConnectivityInfoCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateConnectivityInfoCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateConnectivityInfoCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateConnectivityInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectivityInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectivityInfoCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConnectivityInfoCommand = /** @class */ (function (_super) {
    __extends(UpdateConnectivityInfoCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateConnectivityInfoCommand(input) {
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
    UpdateConnectivityInfoCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "UpdateConnectivityInfoCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateConnectivityInfoRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateConnectivityInfoResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateConnectivityInfoCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateConnectivityInfoCommand(input, context);
    };
    UpdateConnectivityInfoCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateConnectivityInfoCommand(output, context);
    };
    return UpdateConnectivityInfoCommand;
}($Command));
export { UpdateConnectivityInfoCommand };
//# sourceMappingURL=UpdateConnectivityInfoCommand.js.map