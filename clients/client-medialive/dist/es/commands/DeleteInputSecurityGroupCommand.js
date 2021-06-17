import { __extends } from "tslib";
import { DeleteInputSecurityGroupRequest, DeleteInputSecurityGroupResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteInputSecurityGroupCommand, serializeAws_restJson1DeleteInputSecurityGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes an Input Security Group
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInputSecurityGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteInputSecurityGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInputSecurityGroupCommand(input) {
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
    DeleteInputSecurityGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DeleteInputSecurityGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInputSecurityGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInputSecurityGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInputSecurityGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteInputSecurityGroupCommand(input, context);
    };
    DeleteInputSecurityGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteInputSecurityGroupCommand(output, context);
    };
    return DeleteInputSecurityGroupCommand;
}($Command));
export { DeleteInputSecurityGroupCommand };
//# sourceMappingURL=DeleteInputSecurityGroupCommand.js.map