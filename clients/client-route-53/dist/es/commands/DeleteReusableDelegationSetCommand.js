import { __extends } from "tslib";
import { DeleteReusableDelegationSetRequest, DeleteReusableDelegationSetResponse } from "../models/models_0";
import { deserializeAws_restXmlDeleteReusableDelegationSetCommand, serializeAws_restXmlDeleteReusableDelegationSetCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a reusable delegation set.</p>
 * 		       <important>
 * 			         <p>You can delete a reusable delegation set only if it isn't associated with any hosted zones.</p>
 * 		       </important>
 * 		       <p>To verify that the reusable delegation set is not associated with any hosted zones, submit a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a>
 * 			request and specify the ID of the reusable delegation set that you want to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReusableDelegationSetCommand = /** @class */ (function (_super) {
    __extends(DeleteReusableDelegationSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteReusableDelegationSetCommand(input) {
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
    DeleteReusableDelegationSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "DeleteReusableDelegationSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteReusableDelegationSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteReusableDelegationSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteReusableDelegationSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteReusableDelegationSetCommand(input, context);
    };
    DeleteReusableDelegationSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteReusableDelegationSetCommand(output, context);
    };
    return DeleteReusableDelegationSetCommand;
}($Command));
export { DeleteReusableDelegationSetCommand };
//# sourceMappingURL=DeleteReusableDelegationSetCommand.js.map