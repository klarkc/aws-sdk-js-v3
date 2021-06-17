import { __extends } from "tslib";
import { DeleteAccessRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteAccessCommand, serializeAws_json1_1DeleteAccessCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows you to delete the access specified in the <code>ServerID</code> and
 *       <code>ExternalID</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DeleteAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccessCommand = /** @class */ (function (_super) {
    __extends(DeleteAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccessCommand(input) {
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
    DeleteAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "DeleteAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAccessCommand(input, context);
    };
    DeleteAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAccessCommand(output, context);
    };
    return DeleteAccessCommand;
}($Command));
export { DeleteAccessCommand };
//# sourceMappingURL=DeleteAccessCommand.js.map