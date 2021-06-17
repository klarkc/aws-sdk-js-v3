import { __extends } from "tslib";
import { DeleteProtectionGroupRequest, DeleteProtectionGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteProtectionGroupCommand, serializeAws_json1_1DeleteProtectionGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified protection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DeleteProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DeleteProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DeleteProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProtectionGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteProtectionGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProtectionGroupCommand(input) {
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
    DeleteProtectionGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "DeleteProtectionGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProtectionGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProtectionGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProtectionGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteProtectionGroupCommand(input, context);
    };
    DeleteProtectionGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteProtectionGroupCommand(output, context);
    };
    return DeleteProtectionGroupCommand;
}($Command));
export { DeleteProtectionGroupCommand };
//# sourceMappingURL=DeleteProtectionGroupCommand.js.map