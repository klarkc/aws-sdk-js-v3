import { __extends } from "tslib";
import { RemoveListenerCertificatesInput, RemoveListenerCertificatesOutput } from "../models/models_0";
import { deserializeAws_queryRemoveListenerCertificatesCommand, serializeAws_queryRemoveListenerCertificatesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified certificate from the certificate list for the specified HTTPS or TLS
 *       listener.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, RemoveListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, RemoveListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new RemoveListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link RemoveListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveListenerCertificatesCommand = /** @class */ (function (_super) {
    __extends(RemoveListenerCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveListenerCertificatesCommand(input) {
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
    RemoveListenerCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "RemoveListenerCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveListenerCertificatesInput.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveListenerCertificatesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveListenerCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemoveListenerCertificatesCommand(input, context);
    };
    RemoveListenerCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemoveListenerCertificatesCommand(output, context);
    };
    return RemoveListenerCertificatesCommand;
}($Command));
export { RemoveListenerCertificatesCommand };
//# sourceMappingURL=RemoveListenerCertificatesCommand.js.map