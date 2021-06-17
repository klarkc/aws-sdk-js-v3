import { __extends } from "tslib";
import { GetResolverQueryLogConfigAssociationRequest, GetResolverQueryLogConfigAssociationResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommand, serializeAws_json1_1GetResolverQueryLogConfigAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC
 * 			with a query logging configuration, Resolver logs DNS queries that originate in that VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverQueryLogConfigAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverQueryLogConfigAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverQueryLogConfigAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverQueryLogConfigAssociationCommandInput} for command's `input` shape.
 * @see {@link GetResolverQueryLogConfigAssociationCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResolverQueryLogConfigAssociationCommand = /** @class */ (function (_super) {
    __extends(GetResolverQueryLogConfigAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResolverQueryLogConfigAssociationCommand(input) {
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
    GetResolverQueryLogConfigAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetResolverQueryLogConfigAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResolverQueryLogConfigAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResolverQueryLogConfigAssociationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResolverQueryLogConfigAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResolverQueryLogConfigAssociationCommand(input, context);
    };
    GetResolverQueryLogConfigAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommand(output, context);
    };
    return GetResolverQueryLogConfigAssociationCommand;
}($Command));
export { GetResolverQueryLogConfigAssociationCommand };
//# sourceMappingURL=GetResolverQueryLogConfigAssociationCommand.js.map