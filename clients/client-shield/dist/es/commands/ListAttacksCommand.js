import { __extends } from "tslib";
import { ListAttacksRequest, ListAttacksResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAttacksCommand, serializeAws_json1_1ListAttacksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all ongoing DDoS attacks or all DDoS attacks during a specified time
 *          period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListAttacksCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListAttacksCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new ListAttacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttacksCommandInput} for command's `input` shape.
 * @see {@link ListAttacksCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAttacksCommand = /** @class */ (function (_super) {
    __extends(ListAttacksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAttacksCommand(input) {
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
    ListAttacksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "ListAttacksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAttacksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAttacksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAttacksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAttacksCommand(input, context);
    };
    ListAttacksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAttacksCommand(output, context);
    };
    return ListAttacksCommand;
}($Command));
export { ListAttacksCommand };
//# sourceMappingURL=ListAttacksCommand.js.map