import { __extends } from "tslib";
import { ListHostedZonesByVPCRequest, ListHostedZonesByVPCResponse } from "../models/models_0";
import { deserializeAws_restXmlListHostedZonesByVPCCommand, serializeAws_restXmlListHostedZonesByVPCCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the private hosted zones that a specified VPC is associated with, regardless of which AWS account or AWS service owns the
 * 			hosted zones. The <code>HostedZoneOwner</code> structure in the response contains one of the following values:</p>
 * 		       <ul>
 *             <li>
 *                <p>An <code>OwningAccount</code> element, which contains the account number of either the current AWS account or
 * 				another AWS account. Some services, such as AWS Cloud Map, create hosted zones using the current account. </p>
 * 			         </li>
 *             <li>
 *                <p>An <code>OwningService</code> element, which identifies the AWS service that created and owns the hosted zone.
 * 				For example, if a hosted zone was created by Amazon Elastic File System (Amazon EFS), the value of <code>Owner</code> is
 * 				<code>efs.amazonaws.com</code>. </p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesByVPCCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesByVPCCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHostedZonesByVPCCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostedZonesByVPCCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesByVPCCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHostedZonesByVPCCommand = /** @class */ (function (_super) {
    __extends(ListHostedZonesByVPCCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHostedZonesByVPCCommand(input) {
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
    ListHostedZonesByVPCCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListHostedZonesByVPCCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHostedZonesByVPCRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHostedZonesByVPCResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHostedZonesByVPCCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListHostedZonesByVPCCommand(input, context);
    };
    ListHostedZonesByVPCCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListHostedZonesByVPCCommand(output, context);
    };
    return ListHostedZonesByVPCCommand;
}($Command));
export { ListHostedZonesByVPCCommand };
//# sourceMappingURL=ListHostedZonesByVPCCommand.js.map