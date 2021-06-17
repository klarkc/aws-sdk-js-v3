import { __extends } from "tslib";
import { CertificateMessage, DescribeCertificatesMessage } from "../models/models_0";
import { deserializeAws_queryDescribeCertificatesCommand, serializeAws_queryDescribeCertificatesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the set of CA certificates provided by Amazon RDS for this AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeCertificatesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeCertificatesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCertificatesCommand = /** @class */ (function (_super) {
    __extends(DescribeCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCertificatesCommand(input) {
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
    DescribeCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCertificatesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CertificateMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeCertificatesCommand(input, context);
    };
    DescribeCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeCertificatesCommand(output, context);
    };
    return DescribeCertificatesCommand;
}($Command));
export { DescribeCertificatesCommand };
//# sourceMappingURL=DescribeCertificatesCommand.js.map