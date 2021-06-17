import { __extends } from "tslib";
import { ListAttachedPoliciesRequest, ListAttachedPoliciesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListAttachedPoliciesCommand, serializeAws_restJson1ListAttachedPoliciesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the policies attached to the specified thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAttachedPoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAttachedPoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAttachedPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttachedPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAttachedPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListAttachedPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAttachedPoliciesCommand(input) {
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
    ListAttachedPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListAttachedPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAttachedPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAttachedPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAttachedPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAttachedPoliciesCommand(input, context);
    };
    ListAttachedPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAttachedPoliciesCommand(output, context);
    };
    return ListAttachedPoliciesCommand;
}($Command));
export { ListAttachedPoliciesCommand };
//# sourceMappingURL=ListAttachedPoliciesCommand.js.map