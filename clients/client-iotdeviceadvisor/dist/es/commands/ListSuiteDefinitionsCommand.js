import { __extends } from "tslib";
import { ListSuiteDefinitionsRequest, ListSuiteDefinitionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSuiteDefinitionsCommand, serializeAws_restJson1ListSuiteDefinitionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Device Advisor test suites you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, ListSuiteDefinitionsCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, ListSuiteDefinitionsCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new ListSuiteDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSuiteDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListSuiteDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSuiteDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListSuiteDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSuiteDefinitionsCommand(input) {
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
    ListSuiteDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IotDeviceAdvisorClient";
        var commandName = "ListSuiteDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSuiteDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSuiteDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSuiteDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSuiteDefinitionsCommand(input, context);
    };
    ListSuiteDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSuiteDefinitionsCommand(output, context);
    };
    return ListSuiteDefinitionsCommand;
}($Command));
export { ListSuiteDefinitionsCommand };
//# sourceMappingURL=ListSuiteDefinitionsCommand.js.map