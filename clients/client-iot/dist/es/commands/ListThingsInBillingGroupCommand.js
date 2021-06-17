import { __extends } from "tslib";
import { ListThingsInBillingGroupRequest, ListThingsInBillingGroupResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThingsInBillingGroupCommand, serializeAws_restJson1ListThingsInBillingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the things you have added to the given billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingsInBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingsInBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingsInBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingsInBillingGroupCommandInput} for command's `input` shape.
 * @see {@link ListThingsInBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThingsInBillingGroupCommand = /** @class */ (function (_super) {
    __extends(ListThingsInBillingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThingsInBillingGroupCommand(input) {
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
    ListThingsInBillingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListThingsInBillingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThingsInBillingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThingsInBillingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThingsInBillingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThingsInBillingGroupCommand(input, context);
    };
    ListThingsInBillingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThingsInBillingGroupCommand(output, context);
    };
    return ListThingsInBillingGroupCommand;
}($Command));
export { ListThingsInBillingGroupCommand };
//# sourceMappingURL=ListThingsInBillingGroupCommand.js.map