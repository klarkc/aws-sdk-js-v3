import { __extends } from "tslib";
import { GetCheckerIpRangesRequest, GetCheckerIpRangesResponse } from "../models/models_0";
import { deserializeAws_restXmlGetCheckerIpRangesCommand, serializeAws_restXmlGetCheckerIpRangesCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p>
 * 	        <important>
 * 			         <p>
 *                <code>GetCheckerIpRanges</code> still works, but we recommend that you download
 * 			ip-ranges.json, which includes IP address ranges for all AWS services. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-ip-addresses.html">IP Address Ranges of Amazon Route 53 Servers</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetCheckerIpRangesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetCheckerIpRangesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetCheckerIpRangesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCheckerIpRangesCommandInput} for command's `input` shape.
 * @see {@link GetCheckerIpRangesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCheckerIpRangesCommand = /** @class */ (function (_super) {
    __extends(GetCheckerIpRangesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCheckerIpRangesCommand(input) {
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
    GetCheckerIpRangesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetCheckerIpRangesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCheckerIpRangesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCheckerIpRangesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCheckerIpRangesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetCheckerIpRangesCommand(input, context);
    };
    GetCheckerIpRangesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetCheckerIpRangesCommand(output, context);
    };
    return GetCheckerIpRangesCommand;
}($Command));
export { GetCheckerIpRangesCommand };
//# sourceMappingURL=GetCheckerIpRangesCommand.js.map