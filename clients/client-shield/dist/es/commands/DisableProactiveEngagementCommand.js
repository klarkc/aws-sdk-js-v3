import { __extends } from "tslib";
import { DisableProactiveEngagementRequest, DisableProactiveEngagementResponse } from "../models/models_0";
import { deserializeAws_json1_1DisableProactiveEngagementCommand, serializeAws_json1_1DisableProactiveEngagementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes authorization from the DDoS Response Team (DRT) to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisableProactiveEngagementCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisableProactiveEngagementCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisableProactiveEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableProactiveEngagementCommandInput} for command's `input` shape.
 * @see {@link DisableProactiveEngagementCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableProactiveEngagementCommand = /** @class */ (function (_super) {
    __extends(DisableProactiveEngagementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableProactiveEngagementCommand(input) {
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
    DisableProactiveEngagementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "DisableProactiveEngagementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableProactiveEngagementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableProactiveEngagementResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableProactiveEngagementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableProactiveEngagementCommand(input, context);
    };
    DisableProactiveEngagementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableProactiveEngagementCommand(output, context);
    };
    return DisableProactiveEngagementCommand;
}($Command));
export { DisableProactiveEngagementCommand };
//# sourceMappingURL=DisableProactiveEngagementCommand.js.map