import { __extends } from "tslib";
import { SubmitTaskStateChangeRequest, SubmitTaskStateChangeResponse } from "../models/models_0";
import { deserializeAws_json1_1SubmitTaskStateChangeCommand, serializeAws_json1_1SubmitTaskStateChangeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to acknowledge
 * 			that a task changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitTaskStateChangeCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitTaskStateChangeCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new SubmitTaskStateChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitTaskStateChangeCommandInput} for command's `input` shape.
 * @see {@link SubmitTaskStateChangeCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SubmitTaskStateChangeCommand = /** @class */ (function (_super) {
    __extends(SubmitTaskStateChangeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SubmitTaskStateChangeCommand(input) {
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
    SubmitTaskStateChangeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "SubmitTaskStateChangeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SubmitTaskStateChangeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SubmitTaskStateChangeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SubmitTaskStateChangeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SubmitTaskStateChangeCommand(input, context);
    };
    SubmitTaskStateChangeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SubmitTaskStateChangeCommand(output, context);
    };
    return SubmitTaskStateChangeCommand;
}($Command));
export { SubmitTaskStateChangeCommand };
//# sourceMappingURL=SubmitTaskStateChangeCommand.js.map