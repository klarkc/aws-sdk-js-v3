import { __extends } from "tslib";
import { DeleteUserByPrincipalIdRequest, DeleteUserByPrincipalIdResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteUserByPrincipalIdCommand, serializeAws_restJson1DeleteUserByPrincipalIdCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a user identified by its principal ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteUserByPrincipalIdCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteUserByPrincipalIdCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteUserByPrincipalIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserByPrincipalIdCommandInput} for command's `input` shape.
 * @see {@link DeleteUserByPrincipalIdCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserByPrincipalIdCommand = /** @class */ (function (_super) {
    __extends(DeleteUserByPrincipalIdCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserByPrincipalIdCommand(input) {
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
    DeleteUserByPrincipalIdCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteUserByPrincipalIdCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserByPrincipalIdRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteUserByPrincipalIdResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserByPrincipalIdCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteUserByPrincipalIdCommand(input, context);
    };
    DeleteUserByPrincipalIdCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteUserByPrincipalIdCommand(output, context);
    };
    return DeleteUserByPrincipalIdCommand;
}($Command));
export { DeleteUserByPrincipalIdCommand };
//# sourceMappingURL=DeleteUserByPrincipalIdCommand.js.map