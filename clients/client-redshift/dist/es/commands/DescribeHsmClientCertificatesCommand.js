import { __extends } from "tslib";
import { DescribeHsmClientCertificatesMessage, HsmClientCertificateMessage } from "../models/models_0";
import { deserializeAws_queryDescribeHsmClientCertificatesCommand, serializeAws_queryDescribeHsmClientCertificatesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the specified HSM client certificate. If no certificate
 *             ID is specified, returns information about all the HSM certificates owned by your AWS
 *             customer account.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all HSM client certificates that match any combination of the specified keys and values.
 *             For example, if you have <code>owner</code> and <code>environment</code> for tag keys,
 *             and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates
 *             that have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, HSM client certificates
 *             are returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeHsmClientCertificatesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeHsmClientCertificatesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeHsmClientCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHsmClientCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmClientCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHsmClientCertificatesCommand = /** @class */ (function (_super) {
    __extends(DescribeHsmClientCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHsmClientCertificatesCommand(input) {
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
    DescribeHsmClientCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeHsmClientCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHsmClientCertificatesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: HsmClientCertificateMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHsmClientCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeHsmClientCertificatesCommand(input, context);
    };
    DescribeHsmClientCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeHsmClientCertificatesCommand(output, context);
    };
    return DescribeHsmClientCertificatesCommand;
}($Command));
export { DescribeHsmClientCertificatesCommand };
//# sourceMappingURL=DescribeHsmClientCertificatesCommand.js.map