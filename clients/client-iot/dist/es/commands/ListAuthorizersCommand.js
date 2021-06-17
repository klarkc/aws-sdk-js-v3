import { __extends } from "tslib";
import { ListAuthorizersRequest, ListAuthorizersResponse } from "../models/models_1";
import { deserializeAws_restJson1ListAuthorizersCommand, serializeAws_restJson1ListAuthorizersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the authorizers registered in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuthorizersCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuthorizersCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuthorizersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuthorizersCommandInput} for command's `input` shape.
 * @see {@link ListAuthorizersCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAuthorizersCommand = /** @class */ (function (_super) {
    __extends(ListAuthorizersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAuthorizersCommand(input) {
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
    ListAuthorizersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListAuthorizersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAuthorizersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAuthorizersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAuthorizersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAuthorizersCommand(input, context);
    };
    ListAuthorizersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAuthorizersCommand(output, context);
    };
    return ListAuthorizersCommand;
}($Command));
export { ListAuthorizersCommand };
//# sourceMappingURL=ListAuthorizersCommand.js.map