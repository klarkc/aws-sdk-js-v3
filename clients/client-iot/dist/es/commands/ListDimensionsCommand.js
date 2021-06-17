import { __extends } from "tslib";
import { ListDimensionsRequest, ListDimensionsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListDimensionsCommand, serializeAws_restJson1ListDimensionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the set of dimensions that are defined for your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDimensionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDimensionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListDimensionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDimensionsCommandInput} for command's `input` shape.
 * @see {@link ListDimensionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDimensionsCommand = /** @class */ (function (_super) {
    __extends(ListDimensionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDimensionsCommand(input) {
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
    ListDimensionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListDimensionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDimensionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDimensionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDimensionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDimensionsCommand(input, context);
    };
    ListDimensionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDimensionsCommand(output, context);
    };
    return ListDimensionsCommand;
}($Command));
export { ListDimensionsCommand };
//# sourceMappingURL=ListDimensionsCommand.js.map