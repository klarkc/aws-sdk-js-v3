import { __extends } from "tslib";
import { StopEngagementRequest, StopEngagementResult } from "../models/models_0";
import { deserializeAws_json1_1StopEngagementCommand, serializeAws_json1_1StopEngagementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops an engagement before it finishes the final stage of the escalation plan or
 *          engagement plan. Further contacts aren't engaged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, StopEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, StopEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new StopEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopEngagementCommandInput} for command's `input` shape.
 * @see {@link StopEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopEngagementCommand = /** @class */ (function (_super) {
    __extends(StopEngagementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopEngagementCommand(input) {
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
    StopEngagementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "StopEngagementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopEngagementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopEngagementResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopEngagementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopEngagementCommand(input, context);
    };
    StopEngagementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopEngagementCommand(output, context);
    };
    return StopEngagementCommand;
}($Command));
export { StopEngagementCommand };
//# sourceMappingURL=StopEngagementCommand.js.map