import { __extends } from "tslib";
import { StartEngagementRequest, StartEngagementResult } from "../models/models_0";
import { deserializeAws_json1_1StartEngagementCommand, serializeAws_json1_1StartEngagementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an engagement to a contact or escalation plan. The engagement engages each
 *          contact specified in the incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, StartEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, StartEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new StartEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartEngagementCommandInput} for command's `input` shape.
 * @see {@link StartEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartEngagementCommand = /** @class */ (function (_super) {
    __extends(StartEngagementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartEngagementCommand(input) {
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
    StartEngagementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "StartEngagementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartEngagementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartEngagementResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartEngagementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartEngagementCommand(input, context);
    };
    StartEngagementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartEngagementCommand(output, context);
    };
    return StartEngagementCommand;
}($Command));
export { StartEngagementCommand };
//# sourceMappingURL=StartEngagementCommand.js.map