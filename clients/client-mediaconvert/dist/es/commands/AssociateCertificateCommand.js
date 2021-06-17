import { __extends } from "tslib";
import { AssociateCertificateRequest, AssociateCertificateResponse } from "../models/models_1";
import { deserializeAws_restJson1AssociateCertificateCommand, serializeAws_restJson1AssociateCertificateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, AssociateCertificateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, AssociateCertificateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new AssociateCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateCertificateCommandInput} for command's `input` shape.
 * @see {@link AssociateCertificateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateCertificateCommand = /** @class */ (function (_super) {
    __extends(AssociateCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateCertificateCommand(input) {
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
    AssociateCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "AssociateCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateCertificateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateCertificateCommand(input, context);
    };
    AssociateCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateCertificateCommand(output, context);
    };
    return AssociateCertificateCommand;
}($Command));
export { AssociateCertificateCommand };
//# sourceMappingURL=AssociateCertificateCommand.js.map