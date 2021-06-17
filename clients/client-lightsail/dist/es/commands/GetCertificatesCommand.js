import { __extends } from "tslib";
import { GetCertificatesRequest, GetCertificatesResult } from "../models/models_0";
import { deserializeAws_json1_1GetCertificatesCommand, serializeAws_json1_1GetCertificatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p>
 *          <note>
 *             <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from
 *         your request. The response will include only the certificate Amazon Resource Name (ARN),
 *         certificate name, domain name, and tags.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetCertificatesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetCertificatesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCertificatesCommandInput} for command's `input` shape.
 * @see {@link GetCertificatesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCertificatesCommand = /** @class */ (function (_super) {
    __extends(GetCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCertificatesCommand(input) {
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
    GetCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCertificatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCertificatesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCertificatesCommand(input, context);
    };
    GetCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCertificatesCommand(output, context);
    };
    return GetCertificatesCommand;
}($Command));
export { GetCertificatesCommand };
//# sourceMappingURL=GetCertificatesCommand.js.map