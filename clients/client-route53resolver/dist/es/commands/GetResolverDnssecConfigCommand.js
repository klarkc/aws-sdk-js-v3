import { __extends } from "tslib";
import { GetResolverDnssecConfigRequest, GetResolverDnssecConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1GetResolverDnssecConfigCommand, serializeAws_json1_1GetResolverDnssecConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets DNSSEC validation information for a specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverDnssecConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverDnssecConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverDnssecConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverDnssecConfigCommandInput} for command's `input` shape.
 * @see {@link GetResolverDnssecConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResolverDnssecConfigCommand = /** @class */ (function (_super) {
    __extends(GetResolverDnssecConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResolverDnssecConfigCommand(input) {
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
    GetResolverDnssecConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetResolverDnssecConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResolverDnssecConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResolverDnssecConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResolverDnssecConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResolverDnssecConfigCommand(input, context);
    };
    GetResolverDnssecConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResolverDnssecConfigCommand(output, context);
    };
    return GetResolverDnssecConfigCommand;
}($Command));
export { GetResolverDnssecConfigCommand };
//# sourceMappingURL=GetResolverDnssecConfigCommand.js.map