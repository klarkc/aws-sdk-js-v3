import { __extends } from "tslib";
import { DeleteProjectRequest, DeleteProjectResult } from "../models/models_0";
import { deserializeAws_restJson1DeleteProjectCommand, serializeAws_restJson1DeleteProjectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Delets a project in AWS Mobile Hub.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, DeleteProjectCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, DeleteProjectCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new DeleteProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProjectCommand = /** @class */ (function (_super) {
    __extends(DeleteProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProjectCommand(input) {
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
    DeleteProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MobileClient";
        var commandName = "DeleteProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteProjectCommand(input, context);
    };
    DeleteProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteProjectCommand(output, context);
    };
    return DeleteProjectCommand;
}($Command));
export { DeleteProjectCommand };
//# sourceMappingURL=DeleteProjectCommand.js.map