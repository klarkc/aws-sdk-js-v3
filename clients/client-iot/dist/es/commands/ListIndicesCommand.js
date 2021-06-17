import { __extends } from "tslib";
import { ListIndicesRequest, ListIndicesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListIndicesCommand, serializeAws_restJson1ListIndicesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the search indices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListIndicesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListIndicesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListIndicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIndicesCommandInput} for command's `input` shape.
 * @see {@link ListIndicesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIndicesCommand = /** @class */ (function (_super) {
    __extends(ListIndicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIndicesCommand(input) {
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
    ListIndicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListIndicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIndicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIndicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIndicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListIndicesCommand(input, context);
    };
    ListIndicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListIndicesCommand(output, context);
    };
    return ListIndicesCommand;
}($Command));
export { ListIndicesCommand };
//# sourceMappingURL=ListIndicesCommand.js.map