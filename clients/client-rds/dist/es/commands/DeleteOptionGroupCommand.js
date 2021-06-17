import { __extends } from "tslib";
import { DeleteOptionGroupMessage } from "../models/models_0";
import { deserializeAws_queryDeleteOptionGroupCommand, serializeAws_queryDeleteOptionGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOptionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOptionGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteOptionGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOptionGroupCommand(input) {
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
    DeleteOptionGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteOptionGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOptionGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOptionGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteOptionGroupCommand(input, context);
    };
    DeleteOptionGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteOptionGroupCommand(output, context);
    };
    return DeleteOptionGroupCommand;
}($Command));
export { DeleteOptionGroupCommand };
//# sourceMappingURL=DeleteOptionGroupCommand.js.map