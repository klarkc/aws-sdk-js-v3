import { __extends } from "tslib";
import { ListSuiteRunsRequest, ListSuiteRunsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSuiteRunsCommand, serializeAws_restJson1ListSuiteRunsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the runs of the specified Device Advisor test suite.
 *             You can list all runs of the test suite, or the runs of a specific version of the test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, ListSuiteRunsCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, ListSuiteRunsCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new ListSuiteRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSuiteRunsCommandInput} for command's `input` shape.
 * @see {@link ListSuiteRunsCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSuiteRunsCommand = /** @class */ (function (_super) {
    __extends(ListSuiteRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSuiteRunsCommand(input) {
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
    ListSuiteRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IotDeviceAdvisorClient";
        var commandName = "ListSuiteRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSuiteRunsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSuiteRunsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSuiteRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSuiteRunsCommand(input, context);
    };
    ListSuiteRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSuiteRunsCommand(output, context);
    };
    return ListSuiteRunsCommand;
}($Command));
export { ListSuiteRunsCommand };
//# sourceMappingURL=ListSuiteRunsCommand.js.map