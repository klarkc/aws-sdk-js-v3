import { __extends } from "tslib";
import { EnableProactiveEngagementRequest, EnableProactiveEngagementResponse } from "../models/models_0";
import { deserializeAws_json1_1EnableProactiveEngagementCommand, serializeAws_json1_1EnableProactiveEngagementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Authorizes the DDoS Response Team (DRT) to use email and phone to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, EnableProactiveEngagementCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, EnableProactiveEngagementCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new EnableProactiveEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableProactiveEngagementCommandInput} for command's `input` shape.
 * @see {@link EnableProactiveEngagementCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableProactiveEngagementCommand = /** @class */ (function (_super) {
    __extends(EnableProactiveEngagementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableProactiveEngagementCommand(input) {
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
    EnableProactiveEngagementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "EnableProactiveEngagementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableProactiveEngagementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableProactiveEngagementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableProactiveEngagementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableProactiveEngagementCommand(input, context);
    };
    EnableProactiveEngagementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableProactiveEngagementCommand(output, context);
    };
    return EnableProactiveEngagementCommand;
}($Command));
export { EnableProactiveEngagementCommand };
//# sourceMappingURL=EnableProactiveEngagementCommand.js.map