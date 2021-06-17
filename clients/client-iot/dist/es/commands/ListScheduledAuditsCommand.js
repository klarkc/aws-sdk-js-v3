import { __extends } from "tslib";
import { ListScheduledAuditsRequest, ListScheduledAuditsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListScheduledAuditsCommand, serializeAws_restJson1ListScheduledAuditsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of your scheduled audits.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListScheduledAuditsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListScheduledAuditsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListScheduledAuditsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListScheduledAuditsCommandInput} for command's `input` shape.
 * @see {@link ListScheduledAuditsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListScheduledAuditsCommand = /** @class */ (function (_super) {
    __extends(ListScheduledAuditsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListScheduledAuditsCommand(input) {
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
    ListScheduledAuditsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListScheduledAuditsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListScheduledAuditsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListScheduledAuditsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListScheduledAuditsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListScheduledAuditsCommand(input, context);
    };
    ListScheduledAuditsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListScheduledAuditsCommand(output, context);
    };
    return ListScheduledAuditsCommand;
}($Command));
export { ListScheduledAuditsCommand };
//# sourceMappingURL=ListScheduledAuditsCommand.js.map