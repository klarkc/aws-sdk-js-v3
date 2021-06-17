import { __extends } from "tslib";
import { ListBundlesRequest, ListBundlesResult } from "../models/models_0";
import { deserializeAws_restJson1ListBundlesCommand, serializeAws_restJson1ListBundlesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             List all available bundles.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ListBundlesCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ListBundlesCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ListBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBundlesCommandInput} for command's `input` shape.
 * @see {@link ListBundlesCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBundlesCommand = /** @class */ (function (_super) {
    __extends(ListBundlesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBundlesCommand(input) {
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
    ListBundlesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MobileClient";
        var commandName = "ListBundlesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBundlesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBundlesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBundlesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBundlesCommand(input, context);
    };
    ListBundlesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBundlesCommand(output, context);
    };
    return ListBundlesCommand;
}($Command));
export { ListBundlesCommand };
//# sourceMappingURL=ListBundlesCommand.js.map