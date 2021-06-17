import { __extends } from "tslib";
import { DisassociateCertificateRequest, DisassociateCertificateResponse } from "../models/models_1";
import { deserializeAws_restJson1DisassociateCertificateCommand, serializeAws_restJson1DisassociateCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DisassociateCertificateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DisassociateCertificateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new DisassociateCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateCertificateCommandInput} for command's `input` shape.
 * @see {@link DisassociateCertificateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateCertificateCommand = /** @class */ (function (_super) {
    __extends(DisassociateCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateCertificateCommand(input) {
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
    DisassociateCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "DisassociateCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateCertificateCommand(input, context);
    };
    DisassociateCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateCertificateCommand(output, context);
    };
    return DisassociateCertificateCommand;
}($Command));
export { DisassociateCertificateCommand };
//# sourceMappingURL=DisassociateCertificateCommand.js.map