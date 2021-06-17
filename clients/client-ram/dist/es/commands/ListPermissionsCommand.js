import { __extends } from "tslib";
import { ListPermissionsRequest, ListPermissionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPermissionsCommand, serializeAws_restJson1ListPermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the AWS RAM permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPermissionsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPermissionsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPermissionsCommand = /** @class */ (function (_super) {
    __extends(ListPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPermissionsCommand(input) {
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
    ListPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "ListPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPermissionsCommand(input, context);
    };
    ListPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPermissionsCommand(output, context);
    };
    return ListPermissionsCommand;
}($Command));
export { ListPermissionsCommand };
//# sourceMappingURL=ListPermissionsCommand.js.map