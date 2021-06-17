import { __extends } from "tslib";
import { ListAddonsRequest, ListAddonsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAddonsCommand, serializeAws_restJson1ListAddonsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the available add-ons.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListAddonsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListAddonsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListAddonsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAddonsCommandInput} for command's `input` shape.
 * @see {@link ListAddonsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAddonsCommand = /** @class */ (function (_super) {
    __extends(ListAddonsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAddonsCommand(input) {
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
    ListAddonsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "ListAddonsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAddonsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAddonsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAddonsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAddonsCommand(input, context);
    };
    ListAddonsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAddonsCommand(output, context);
    };
    return ListAddonsCommand;
}($Command));
export { ListAddonsCommand };
//# sourceMappingURL=ListAddonsCommand.js.map