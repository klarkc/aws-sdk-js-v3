import { __extends } from "tslib";
import { GetResolverQueryLogConfigRequest, GetResolverQueryLogConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1GetResolverQueryLogConfigCommand, serializeAws_json1_1GetResolverQueryLogConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration
 * 			is logging queries for and the location that logs are sent to. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link GetResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResolverQueryLogConfigCommand = /** @class */ (function (_super) {
    __extends(GetResolverQueryLogConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResolverQueryLogConfigCommand(input) {
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
    GetResolverQueryLogConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetResolverQueryLogConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResolverQueryLogConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResolverQueryLogConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResolverQueryLogConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResolverQueryLogConfigCommand(input, context);
    };
    GetResolverQueryLogConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResolverQueryLogConfigCommand(output, context);
    };
    return GetResolverQueryLogConfigCommand;
}($Command));
export { GetResolverQueryLogConfigCommand };
//# sourceMappingURL=GetResolverQueryLogConfigCommand.js.map