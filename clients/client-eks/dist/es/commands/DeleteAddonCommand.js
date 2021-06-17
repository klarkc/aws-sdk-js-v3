import { __extends } from "tslib";
import { DeleteAddonRequest, DeleteAddonResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAddonCommand, serializeAws_restJson1DeleteAddonCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete an Amazon EKS add-on.</p>
 *         <p>When you remove the add-on, it will also be deleted from the cluster. You can always
 *             manually start an add-on on the cluster using the Kubernetes API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DeleteAddonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAddonCommandInput} for command's `input` shape.
 * @see {@link DeleteAddonCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAddonCommand = /** @class */ (function (_super) {
    __extends(DeleteAddonCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAddonCommand(input) {
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
    DeleteAddonCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "DeleteAddonCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAddonRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAddonResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAddonCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAddonCommand(input, context);
    };
    DeleteAddonCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAddonCommand(output, context);
    };
    return DeleteAddonCommand;
}($Command));
export { DeleteAddonCommand };
//# sourceMappingURL=DeleteAddonCommand.js.map