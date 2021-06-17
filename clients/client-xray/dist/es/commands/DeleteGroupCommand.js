import { __extends } from "tslib";
import { DeleteGroupRequest, DeleteGroupResult } from "../models/models_0";
import { deserializeAws_restJson1DeleteGroupCommand, serializeAws_restJson1DeleteGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a group resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, DeleteGroupCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, DeleteGroupCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new DeleteGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGroupCommand(input) {
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
    DeleteGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "DeleteGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteGroupCommand(input, context);
    };
    DeleteGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteGroupCommand(output, context);
    };
    return DeleteGroupCommand;
}($Command));
export { DeleteGroupCommand };
//# sourceMappingURL=DeleteGroupCommand.js.map