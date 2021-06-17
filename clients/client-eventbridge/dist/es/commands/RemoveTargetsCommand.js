import { __extends } from "tslib";
import { RemoveTargetsRequest, RemoveTargetsResponse } from "../models/models_0";
import { deserializeAws_json1_1RemoveTargetsCommand, serializeAws_json1_1RemoveTargetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified targets from the specified rule. When the rule is triggered, those
 *       targets are no longer be invoked.</p>
 *
 *          <p>When you remove a target, when the associated rule triggers, removed targets might
 *       continue to be invoked. Allow a short period of time for changes to take effect.</p>
 *
 *          <p>This action can partially fail if too many requests are made at the same time. If that
 *       happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in
 *         <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, RemoveTargetsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, RemoveTargetsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new RemoveTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTargetsCommandInput} for command's `input` shape.
 * @see {@link RemoveTargetsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveTargetsCommand = /** @class */ (function (_super) {
    __extends(RemoveTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveTargetsCommand(input) {
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
    RemoveTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "RemoveTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveTargetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveTargetsCommand(input, context);
    };
    RemoveTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveTargetsCommand(output, context);
    };
    return RemoveTargetsCommand;
}($Command));
export { RemoveTargetsCommand };
//# sourceMappingURL=RemoveTargetsCommand.js.map