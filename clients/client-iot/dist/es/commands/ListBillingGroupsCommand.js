import { __extends } from "tslib";
import { ListBillingGroupsRequest, ListBillingGroupsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListBillingGroupsCommand, serializeAws_restJson1ListBillingGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the billing groups you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListBillingGroupsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListBillingGroupsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListBillingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBillingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListBillingGroupsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBillingGroupsCommand = /** @class */ (function (_super) {
    __extends(ListBillingGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBillingGroupsCommand(input) {
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
    ListBillingGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListBillingGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBillingGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBillingGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBillingGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBillingGroupsCommand(input, context);
    };
    ListBillingGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBillingGroupsCommand(output, context);
    };
    return ListBillingGroupsCommand;
}($Command));
export { ListBillingGroupsCommand };
//# sourceMappingURL=ListBillingGroupsCommand.js.map