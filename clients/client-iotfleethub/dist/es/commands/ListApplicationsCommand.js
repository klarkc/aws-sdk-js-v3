import { __extends } from "tslib";
import { ListApplicationsRequest, ListApplicationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListApplicationsCommand, serializeAws_restJson1ListApplicationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of Fleet Hub for AWS IoT Device Management web applications for the current account.</p>
 *          <note>
 *             <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetHubClient, ListApplicationsCommand } from "@aws-sdk/client-iotfleethub"; // ES Modules import
 * // const { IoTFleetHubClient, ListApplicationsCommand } = require("@aws-sdk/client-iotfleethub"); // CommonJS import
 * const client = new IoTFleetHubClient(config);
 * const command = new ListApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationsCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApplicationsCommand = /** @class */ (function (_super) {
    __extends(ListApplicationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApplicationsCommand(input) {
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
    ListApplicationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTFleetHubClient";
        var commandName = "ListApplicationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApplicationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListApplicationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApplicationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListApplicationsCommand(input, context);
    };
    ListApplicationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListApplicationsCommand(output, context);
    };
    return ListApplicationsCommand;
}($Command));
export { ListApplicationsCommand };
//# sourceMappingURL=ListApplicationsCommand.js.map