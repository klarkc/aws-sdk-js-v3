import { __extends } from "tslib";
import { UpdateUserHierarchyStructureRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateUserHierarchyStructureCommand, serializeAws_restJson1UpdateUserHierarchyStructureCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserHierarchyStructureCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserHierarchyStructureCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserHierarchyStructureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserHierarchyStructureCommandInput} for command's `input` shape.
 * @see {@link UpdateUserHierarchyStructureCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserHierarchyStructureCommand = /** @class */ (function (_super) {
    __extends(UpdateUserHierarchyStructureCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserHierarchyStructureCommand(input) {
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
    UpdateUserHierarchyStructureCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateUserHierarchyStructureCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserHierarchyStructureRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserHierarchyStructureCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateUserHierarchyStructureCommand(input, context);
    };
    UpdateUserHierarchyStructureCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateUserHierarchyStructureCommand(output, context);
    };
    return UpdateUserHierarchyStructureCommand;
}($Command));
export { UpdateUserHierarchyStructureCommand };
//# sourceMappingURL=UpdateUserHierarchyStructureCommand.js.map