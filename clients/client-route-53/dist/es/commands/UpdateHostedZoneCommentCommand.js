import { __extends } from "tslib";
import { UpdateHostedZoneCommentRequest, UpdateHostedZoneCommentResponse } from "../models/models_0";
import { deserializeAws_restXmlUpdateHostedZoneCommentCommand, serializeAws_restXmlUpdateHostedZoneCommentCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the comment for a specified hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateHostedZoneCommentCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateHostedZoneCommentCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateHostedZoneCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHostedZoneCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateHostedZoneCommentCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateHostedZoneCommentCommand = /** @class */ (function (_super) {
    __extends(UpdateHostedZoneCommentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateHostedZoneCommentCommand(input) {
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
    UpdateHostedZoneCommentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "UpdateHostedZoneCommentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateHostedZoneCommentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateHostedZoneCommentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateHostedZoneCommentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlUpdateHostedZoneCommentCommand(input, context);
    };
    UpdateHostedZoneCommentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlUpdateHostedZoneCommentCommand(output, context);
    };
    return UpdateHostedZoneCommentCommand;
}($Command));
export { UpdateHostedZoneCommentCommand };
//# sourceMappingURL=UpdateHostedZoneCommentCommand.js.map