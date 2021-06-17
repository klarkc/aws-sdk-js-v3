import { __extends } from "tslib";
import { DescribeWebsiteCertificateAuthorityRequest, DescribeWebsiteCertificateAuthorityResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand, serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about the certificate authority.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeWebsiteCertificateAuthorityCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeWebsiteCertificateAuthorityCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeWebsiteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWebsiteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DescribeWebsiteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWebsiteCertificateAuthorityCommand = /** @class */ (function (_super) {
    __extends(DescribeWebsiteCertificateAuthorityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWebsiteCertificateAuthorityCommand(input) {
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
    DescribeWebsiteCertificateAuthorityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "DescribeWebsiteCertificateAuthorityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWebsiteCertificateAuthorityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWebsiteCertificateAuthorityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWebsiteCertificateAuthorityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand(input, context);
    };
    DescribeWebsiteCertificateAuthorityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand(output, context);
    };
    return DescribeWebsiteCertificateAuthorityCommand;
}($Command));
export { DescribeWebsiteCertificateAuthorityCommand };
//# sourceMappingURL=DescribeWebsiteCertificateAuthorityCommand.js.map