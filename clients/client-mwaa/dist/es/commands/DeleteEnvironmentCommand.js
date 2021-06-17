import { __extends } from "tslib";
import { DeleteEnvironmentInput, DeleteEnvironmentOutput } from "../models/models_0";
import { deserializeAws_restJson1DeleteEnvironmentCommand, serializeAws_restJson1DeleteEnvironmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, DeleteEnvironmentCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, DeleteEnvironmentCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new DeleteEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEnvironmentCommand = /** @class */ (function (_super) {
    __extends(DeleteEnvironmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEnvironmentCommand(input) {
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
    DeleteEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MWAAClient";
        var commandName = "DeleteEnvironmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEnvironmentInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEnvironmentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEnvironmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteEnvironmentCommand(input, context);
    };
    DeleteEnvironmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteEnvironmentCommand(output, context);
    };
    return DeleteEnvironmentCommand;
}($Command));
export { DeleteEnvironmentCommand };
//# sourceMappingURL=DeleteEnvironmentCommand.js.map