import { __extends } from "tslib";
import { DescribeCACertificateRequest, DescribeCACertificateResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeCACertificateCommand, serializeAws_restJson1DescribeCACertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a registered CA certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeCACertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCACertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCACertificateCommand = /** @class */ (function (_super) {
    __extends(DescribeCACertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCACertificateCommand(input) {
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
    DescribeCACertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeCACertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCACertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCACertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCACertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeCACertificateCommand(input, context);
    };
    DescribeCACertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeCACertificateCommand(output, context);
    };
    return DescribeCACertificateCommand;
}($Command));
export { DescribeCACertificateCommand };
//# sourceMappingURL=DescribeCACertificateCommand.js.map