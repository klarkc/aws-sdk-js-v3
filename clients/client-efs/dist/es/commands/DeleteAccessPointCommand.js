import { __extends } from "tslib";
import { DeleteAccessPointRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteAccessPointCommand, serializeAws_restJson1DeleteAccessPointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified access point. After deletion is complete, new clients can no
 *       longer connect to the access points. Clients connected to the access point at the time of
 *       deletion will continue to function until they terminate their connection.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteAccessPoint</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteAccessPointCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteAccessPointCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DeleteAccessPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessPointCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccessPointCommand = /** @class */ (function (_super) {
    __extends(DeleteAccessPointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccessPointCommand(input) {
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
    DeleteAccessPointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "DeleteAccessPointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccessPointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccessPointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAccessPointCommand(input, context);
    };
    DeleteAccessPointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAccessPointCommand(output, context);
    };
    return DeleteAccessPointCommand;
}($Command));
export { DeleteAccessPointCommand };
//# sourceMappingURL=DeleteAccessPointCommand.js.map