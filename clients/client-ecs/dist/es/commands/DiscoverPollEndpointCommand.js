import { __extends } from "tslib";
import { DiscoverPollEndpointRequest, DiscoverPollEndpointResponse } from "../models/models_0";
import { deserializeAws_json1_1DiscoverPollEndpointCommand, serializeAws_json1_1DiscoverPollEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Returns an endpoint for
 * 			the Amazon ECS agent to poll for updates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DiscoverPollEndpointCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DiscoverPollEndpointCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DiscoverPollEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DiscoverPollEndpointCommandInput} for command's `input` shape.
 * @see {@link DiscoverPollEndpointCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DiscoverPollEndpointCommand = /** @class */ (function (_super) {
    __extends(DiscoverPollEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DiscoverPollEndpointCommand(input) {
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
    DiscoverPollEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DiscoverPollEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DiscoverPollEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DiscoverPollEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DiscoverPollEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DiscoverPollEndpointCommand(input, context);
    };
    DiscoverPollEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DiscoverPollEndpointCommand(output, context);
    };
    return DiscoverPollEndpointCommand;
}($Command));
export { DiscoverPollEndpointCommand };
//# sourceMappingURL=DiscoverPollEndpointCommand.js.map