import { __extends } from "tslib";
import { SubmitContainerStateChangeRequest, SubmitContainerStateChangeResponse } from "../models/models_0";
import { deserializeAws_json1_1SubmitContainerStateChangeCommand, serializeAws_json1_1SubmitContainerStateChangeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to
 * 			acknowledge that a container changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitContainerStateChangeCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitContainerStateChangeCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new SubmitContainerStateChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitContainerStateChangeCommandInput} for command's `input` shape.
 * @see {@link SubmitContainerStateChangeCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SubmitContainerStateChangeCommand = /** @class */ (function (_super) {
    __extends(SubmitContainerStateChangeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SubmitContainerStateChangeCommand(input) {
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
    SubmitContainerStateChangeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "SubmitContainerStateChangeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SubmitContainerStateChangeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SubmitContainerStateChangeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SubmitContainerStateChangeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SubmitContainerStateChangeCommand(input, context);
    };
    SubmitContainerStateChangeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SubmitContainerStateChangeCommand(output, context);
    };
    return SubmitContainerStateChangeCommand;
}($Command));
export { SubmitContainerStateChangeCommand };
//# sourceMappingURL=SubmitContainerStateChangeCommand.js.map