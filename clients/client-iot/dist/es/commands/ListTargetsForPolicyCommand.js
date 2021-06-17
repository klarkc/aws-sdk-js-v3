import { __extends } from "tslib";
import { ListTargetsForPolicyRequest, ListTargetsForPolicyResponse } from "../models/models_1";
import { deserializeAws_restJson1ListTargetsForPolicyCommand, serializeAws_restJson1ListTargetsForPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List targets for the specified policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTargetsForPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTargetsForPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListTargetsForPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTargetsForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListTargetsForPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTargetsForPolicyCommand = /** @class */ (function (_super) {
    __extends(ListTargetsForPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTargetsForPolicyCommand(input) {
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
    ListTargetsForPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListTargetsForPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTargetsForPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTargetsForPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTargetsForPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTargetsForPolicyCommand(input, context);
    };
    ListTargetsForPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTargetsForPolicyCommand(output, context);
    };
    return ListTargetsForPolicyCommand;
}($Command));
export { ListTargetsForPolicyCommand };
//# sourceMappingURL=ListTargetsForPolicyCommand.js.map