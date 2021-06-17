import { __extends } from "tslib";
import { UpdateUserHierarchyRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateUserHierarchyCommand, serializeAws_restJson1UpdateUserHierarchyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns the specified hierarchy group to the specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserHierarchyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserHierarchyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserHierarchyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserHierarchyCommandInput} for command's `input` shape.
 * @see {@link UpdateUserHierarchyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserHierarchyCommand = /** @class */ (function (_super) {
    __extends(UpdateUserHierarchyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserHierarchyCommand(input) {
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
    UpdateUserHierarchyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateUserHierarchyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserHierarchyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserHierarchyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateUserHierarchyCommand(input, context);
    };
    UpdateUserHierarchyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateUserHierarchyCommand(output, context);
    };
    return UpdateUserHierarchyCommand;
}($Command));
export { UpdateUserHierarchyCommand };
//# sourceMappingURL=UpdateUserHierarchyCommand.js.map