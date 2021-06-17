import { __extends } from "tslib";
import { UpdateResolverDnssecConfigRequest, UpdateResolverDnssecConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateResolverDnssecConfigCommand, serializeAws_json1_1UpdateResolverDnssecConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverDnssecConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverDnssecConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateResolverDnssecConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResolverDnssecConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverDnssecConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResolverDnssecConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateResolverDnssecConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResolverDnssecConfigCommand(input) {
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
    UpdateResolverDnssecConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "UpdateResolverDnssecConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResolverDnssecConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResolverDnssecConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResolverDnssecConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateResolverDnssecConfigCommand(input, context);
    };
    UpdateResolverDnssecConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateResolverDnssecConfigCommand(output, context);
    };
    return UpdateResolverDnssecConfigCommand;
}($Command));
export { UpdateResolverDnssecConfigCommand };
//# sourceMappingURL=UpdateResolverDnssecConfigCommand.js.map