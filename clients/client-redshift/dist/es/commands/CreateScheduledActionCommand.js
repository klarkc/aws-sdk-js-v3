import { __extends } from "tslib";
import { CreateScheduledActionMessage, ScheduledAction } from "../models/models_0";
import { deserializeAws_queryCreateScheduledActionCommand, serializeAws_queryCreateScheduledActionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action.
 *             For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateScheduledActionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateScheduledActionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateScheduledActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScheduledActionCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateScheduledActionCommand = /** @class */ (function (_super) {
    __extends(CreateScheduledActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateScheduledActionCommand(input) {
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
    CreateScheduledActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateScheduledActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateScheduledActionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ScheduledAction.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateScheduledActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateScheduledActionCommand(input, context);
    };
    CreateScheduledActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateScheduledActionCommand(output, context);
    };
    return CreateScheduledActionCommand;
}($Command));
export { CreateScheduledActionCommand };
//# sourceMappingURL=CreateScheduledActionCommand.js.map