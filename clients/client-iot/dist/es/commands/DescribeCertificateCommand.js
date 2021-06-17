import { __extends } from "tslib";
import { DescribeCertificateRequest, DescribeCertificateResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeCertificateCommand, serializeAws_restJson1DescribeCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCertificateCommand = /** @class */ (function (_super) {
    __extends(DescribeCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCertificateCommand(input) {
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
    DescribeCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeCertificateCommand(input, context);
    };
    DescribeCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeCertificateCommand(output, context);
    };
    return DescribeCertificateCommand;
}($Command));
export { DescribeCertificateCommand };
//# sourceMappingURL=DescribeCertificateCommand.js.map