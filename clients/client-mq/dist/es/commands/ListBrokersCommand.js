import { __extends } from "tslib";
import { ListBrokersRequest, ListBrokersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListBrokersCommand, serializeAws_restJson1ListBrokersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns a list of all brokers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, ListBrokersCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, ListBrokersCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new ListBrokersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBrokersCommandInput} for command's `input` shape.
 * @see {@link ListBrokersCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBrokersCommand = /** @class */ (function (_super) {
    __extends(ListBrokersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBrokersCommand(input) {
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
    ListBrokersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "ListBrokersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBrokersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBrokersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBrokersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBrokersCommand(input, context);
    };
    ListBrokersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBrokersCommand(output, context);
    };
    return ListBrokersCommand;
}($Command));
export { ListBrokersCommand };
//# sourceMappingURL=ListBrokersCommand.js.map