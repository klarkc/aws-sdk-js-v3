import { __extends } from "tslib";
import { PromoteResourceShareCreatedFromPolicyRequest, PromoteResourceShareCreatedFromPolicyResponse, } from "../models/models_0";
import { deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand, serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resource shares that were created by attaching a policy to a resource are visible only to
 * 			the resource share owner, and the resource share cannot be modified in AWS RAM.</p>
 *
 *     	    <p>Use this API action to promote the resource share. When you promote the resource share,
 * 			it becomes:</p>
 *     	    <ul>
 *             <li>
 *     			        <p>Visible to all principals that it is shared with.</p>
 *     		      </li>
 *             <li>
 *     			        <p>Modifiable in AWS RAM.</p>
 *     		      </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, PromoteResourceShareCreatedFromPolicyCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, PromoteResourceShareCreatedFromPolicyCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new PromoteResourceShareCreatedFromPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PromoteResourceShareCreatedFromPolicyCommandInput} for command's `input` shape.
 * @see {@link PromoteResourceShareCreatedFromPolicyCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PromoteResourceShareCreatedFromPolicyCommand = /** @class */ (function (_super) {
    __extends(PromoteResourceShareCreatedFromPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PromoteResourceShareCreatedFromPolicyCommand(input) {
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
    PromoteResourceShareCreatedFromPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "PromoteResourceShareCreatedFromPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PromoteResourceShareCreatedFromPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PromoteResourceShareCreatedFromPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PromoteResourceShareCreatedFromPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand(input, context);
    };
    PromoteResourceShareCreatedFromPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand(output, context);
    };
    return PromoteResourceShareCreatedFromPolicyCommand;
}($Command));
export { PromoteResourceShareCreatedFromPolicyCommand };
//# sourceMappingURL=PromoteResourceShareCreatedFromPolicyCommand.js.map