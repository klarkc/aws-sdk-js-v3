import { __extends } from "tslib";
import { DeleteUsageLimitMessage } from "../models/models_0";
import { deserializeAws_queryDeleteUsageLimitCommand, serializeAws_queryDeleteUsageLimitCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a usage limit from a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteUsageLimitCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteUsageLimitCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteUsageLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUsageLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUsageLimitCommand = /** @class */ (function (_super) {
    __extends(DeleteUsageLimitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUsageLimitCommand(input) {
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
    DeleteUsageLimitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeleteUsageLimitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUsageLimitMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUsageLimitCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteUsageLimitCommand(input, context);
    };
    DeleteUsageLimitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteUsageLimitCommand(output, context);
    };
    return DeleteUsageLimitCommand;
}($Command));
export { DeleteUsageLimitCommand };
//# sourceMappingURL=DeleteUsageLimitCommand.js.map