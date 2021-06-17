import { __extends } from "tslib";
import { PutComponentPolicyRequest, PutComponentPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1PutComponentPolicyCommand, serializeAws_restJson1PutComponentPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API
 *         <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to
 *       all principals with whom the resource is shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, PutComponentPolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, PutComponentPolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new PutComponentPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutComponentPolicyCommandInput} for command's `input` shape.
 * @see {@link PutComponentPolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutComponentPolicyCommand = /** @class */ (function (_super) {
    __extends(PutComponentPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutComponentPolicyCommand(input) {
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
    PutComponentPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "PutComponentPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutComponentPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutComponentPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutComponentPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutComponentPolicyCommand(input, context);
    };
    PutComponentPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutComponentPolicyCommand(output, context);
    };
    return PutComponentPolicyCommand;
}($Command));
export { PutComponentPolicyCommand };
//# sourceMappingURL=PutComponentPolicyCommand.js.map