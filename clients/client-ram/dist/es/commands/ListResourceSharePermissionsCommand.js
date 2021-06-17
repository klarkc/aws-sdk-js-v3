import { __extends } from "tslib";
import { ListResourceSharePermissionsRequest, ListResourceSharePermissionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListResourceSharePermissionsCommand, serializeAws_restJson1ListResourceSharePermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the AWS RAM permissions that are associated with a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListResourceSharePermissionsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListResourceSharePermissionsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListResourceSharePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceSharePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceSharePermissionsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceSharePermissionsCommand = /** @class */ (function (_super) {
    __extends(ListResourceSharePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceSharePermissionsCommand(input) {
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
    ListResourceSharePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "ListResourceSharePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceSharePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceSharePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceSharePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListResourceSharePermissionsCommand(input, context);
    };
    ListResourceSharePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListResourceSharePermissionsCommand(output, context);
    };
    return ListResourceSharePermissionsCommand;
}($Command));
export { ListResourceSharePermissionsCommand };
//# sourceMappingURL=ListResourceSharePermissionsCommand.js.map