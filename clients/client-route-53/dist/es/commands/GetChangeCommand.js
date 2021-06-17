import { __extends } from "tslib";
import { GetChangeRequest, GetChangeResponse } from "../models/models_0";
import { deserializeAws_restXmlGetChangeCommand, serializeAws_restXmlGetChangeCommand } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the current status of a change batch request. The status is one of the
 * 			following values:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>PENDING</code> indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers.
 * 					This is the initial status of all change batch requests.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>INSYNC</code> indicates that the changes have propagated to all Route 53 DNS servers. </p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetChangeCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetChangeCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChangeCommandInput} for command's `input` shape.
 * @see {@link GetChangeCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetChangeCommand = /** @class */ (function (_super) {
    __extends(GetChangeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetChangeCommand(input) {
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
    GetChangeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetChangeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetChangeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetChangeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetChangeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetChangeCommand(input, context);
    };
    GetChangeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetChangeCommand(output, context);
    };
    return GetChangeCommand;
}($Command));
export { GetChangeCommand };
//# sourceMappingURL=GetChangeCommand.js.map