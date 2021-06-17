import { __extends } from "tslib";
import { ListVPCAssociationAuthorizationsRequest, ListVPCAssociationAuthorizationsResponse } from "../models/models_0";
import { deserializeAws_restXmlListVPCAssociationAuthorizationsCommand, serializeAws_restXmlListVPCAssociationAuthorizationsCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of the VPCs that were created by other accounts and that can be associated with a
 * 			specified hosted zone because you've submitted one or more <code>CreateVPCAssociationAuthorization</code> requests. </p>
 * 		       <p>The response includes a <code>VPCs</code> element with a <code>VPC</code> child element for each VPC
 * 			that can be associated with the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListVPCAssociationAuthorizationsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListVPCAssociationAuthorizationsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListVPCAssociationAuthorizationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVPCAssociationAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link ListVPCAssociationAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVPCAssociationAuthorizationsCommand = /** @class */ (function (_super) {
    __extends(ListVPCAssociationAuthorizationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVPCAssociationAuthorizationsCommand(input) {
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
    ListVPCAssociationAuthorizationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListVPCAssociationAuthorizationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVPCAssociationAuthorizationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListVPCAssociationAuthorizationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVPCAssociationAuthorizationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListVPCAssociationAuthorizationsCommand(input, context);
    };
    ListVPCAssociationAuthorizationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListVPCAssociationAuthorizationsCommand(output, context);
    };
    return ListVPCAssociationAuthorizationsCommand;
}($Command));
export { ListVPCAssociationAuthorizationsCommand };
//# sourceMappingURL=ListVPCAssociationAuthorizationsCommand.js.map