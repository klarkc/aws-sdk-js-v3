import { __extends } from "tslib";
import { LoggingStatus } from "../models/models_0";
import { DisableLoggingMessage } from "../models/models_1";
import { deserializeAws_queryDisableLoggingCommand, serializeAws_queryDisableLoggingCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DisableLoggingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DisableLoggingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DisableLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableLoggingCommandInput} for command's `input` shape.
 * @see {@link DisableLoggingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableLoggingCommand = /** @class */ (function (_super) {
    __extends(DisableLoggingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableLoggingCommand(input) {
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
    DisableLoggingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DisableLoggingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableLoggingMessage.filterSensitiveLog,
            outputFilterSensitiveLog: LoggingStatus.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableLoggingCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDisableLoggingCommand(input, context);
    };
    DisableLoggingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDisableLoggingCommand(output, context);
    };
    return DisableLoggingCommand;
}($Command));
export { DisableLoggingCommand };
//# sourceMappingURL=DisableLoggingCommand.js.map