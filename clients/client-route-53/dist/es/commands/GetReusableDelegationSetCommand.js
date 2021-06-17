import { __extends } from "tslib";
import { GetReusableDelegationSetRequest, GetReusableDelegationSetResponse } from "../models/models_0";
import { deserializeAws_restXmlGetReusableDelegationSetCommand, serializeAws_restXmlGetReusableDelegationSetCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a specified reusable delegation set, including the four name servers that are assigned
 * 			to the delegation set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link GetReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReusableDelegationSetCommand = /** @class */ (function (_super) {
    __extends(GetReusableDelegationSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReusableDelegationSetCommand(input) {
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
    GetReusableDelegationSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetReusableDelegationSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReusableDelegationSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetReusableDelegationSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReusableDelegationSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetReusableDelegationSetCommand(input, context);
    };
    GetReusableDelegationSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetReusableDelegationSetCommand(output, context);
    };
    return GetReusableDelegationSetCommand;
}($Command));
export { GetReusableDelegationSetCommand };
//# sourceMappingURL=GetReusableDelegationSetCommand.js.map