import { __extends } from "tslib";
import { UpdateTrafficPolicyCommentRequest, UpdateTrafficPolicyCommentResponse } from "../models/models_0";
import { deserializeAws_restXmlUpdateTrafficPolicyCommentCommand, serializeAws_restXmlUpdateTrafficPolicyCommentCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the comment for a specified traffic policy version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateTrafficPolicyCommentCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateTrafficPolicyCommentCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateTrafficPolicyCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrafficPolicyCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficPolicyCommentCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTrafficPolicyCommentCommand = /** @class */ (function (_super) {
    __extends(UpdateTrafficPolicyCommentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTrafficPolicyCommentCommand(input) {
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
    UpdateTrafficPolicyCommentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "UpdateTrafficPolicyCommentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTrafficPolicyCommentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTrafficPolicyCommentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTrafficPolicyCommentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlUpdateTrafficPolicyCommentCommand(input, context);
    };
    UpdateTrafficPolicyCommentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlUpdateTrafficPolicyCommentCommand(output, context);
    };
    return UpdateTrafficPolicyCommentCommand;
}($Command));
export { UpdateTrafficPolicyCommentCommand };
//# sourceMappingURL=UpdateTrafficPolicyCommentCommand.js.map