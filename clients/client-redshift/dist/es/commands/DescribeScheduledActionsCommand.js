import { __extends } from "tslib";
import { DescribeScheduledActionsMessage, ScheduledActionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeScheduledActionsCommand, serializeAws_queryDescribeScheduledActionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes properties of scheduled actions.
 *              </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeScheduledActionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeScheduledActionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScheduledActionsCommand = /** @class */ (function (_super) {
    __extends(DescribeScheduledActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeScheduledActionsCommand(input) {
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
    DescribeScheduledActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeScheduledActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeScheduledActionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ScheduledActionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeScheduledActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeScheduledActionsCommand(input, context);
    };
    DescribeScheduledActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeScheduledActionsCommand(output, context);
    };
    return DescribeScheduledActionsCommand;
}($Command));
export { DescribeScheduledActionsCommand };
//# sourceMappingURL=DescribeScheduledActionsCommand.js.map