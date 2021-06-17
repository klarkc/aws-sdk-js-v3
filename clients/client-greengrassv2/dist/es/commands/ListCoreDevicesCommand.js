import { __extends } from "tslib";
import { ListCoreDevicesRequest, ListCoreDevicesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListCoreDevicesCommand, serializeAws_restJson1ListCoreDevicesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of AWS IoT Greengrass core devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListCoreDevicesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListCoreDevicesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListCoreDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCoreDevicesCommandInput} for command's `input` shape.
 * @see {@link ListCoreDevicesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCoreDevicesCommand = /** @class */ (function (_super) {
    __extends(ListCoreDevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCoreDevicesCommand(input) {
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
    ListCoreDevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "ListCoreDevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCoreDevicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCoreDevicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCoreDevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListCoreDevicesCommand(input, context);
    };
    ListCoreDevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListCoreDevicesCommand(output, context);
    };
    return ListCoreDevicesCommand;
}($Command));
export { ListCoreDevicesCommand };
//# sourceMappingURL=ListCoreDevicesCommand.js.map