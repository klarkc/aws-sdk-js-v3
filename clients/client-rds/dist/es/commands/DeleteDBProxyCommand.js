import { __extends } from "tslib";
import { DeleteDBProxyRequest, DeleteDBProxyResponse } from "../models/models_0";
import { deserializeAws_queryDeleteDBProxyCommand, serializeAws_queryDeleteDBProxyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBProxyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBProxyCommandInput} for command's `input` shape.
 * @see {@link DeleteDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBProxyCommand = /** @class */ (function (_super) {
    __extends(DeleteDBProxyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBProxyCommand(input) {
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
    DeleteDBProxyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteDBProxyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBProxyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDBProxyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBProxyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBProxyCommand(input, context);
    };
    DeleteDBProxyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBProxyCommand(output, context);
    };
    return DeleteDBProxyCommand;
}($Command));
export { DeleteDBProxyCommand };
//# sourceMappingURL=DeleteDBProxyCommand.js.map