import { __extends } from "tslib";
import { PutKMSEncryptionKeyRequest, PutKMSEncryptionKeyResult } from "../models/models_0";
import { deserializeAws_json1_1PutKMSEncryptionKeyCommand, serializeAws_json1_1PutKMSEncryptionKeyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specifies the Key Management Service (KMS) customer master key (CMK) to be used to encrypt content in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutKMSEncryptionKeyCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutKMSEncryptionKeyCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutKMSEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutKMSEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link PutKMSEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutKMSEncryptionKeyCommand = /** @class */ (function (_super) {
    __extends(PutKMSEncryptionKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutKMSEncryptionKeyCommand(input) {
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
    PutKMSEncryptionKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "PutKMSEncryptionKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutKMSEncryptionKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutKMSEncryptionKeyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutKMSEncryptionKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutKMSEncryptionKeyCommand(input, context);
    };
    PutKMSEncryptionKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutKMSEncryptionKeyCommand(output, context);
    };
    return PutKMSEncryptionKeyCommand;
}($Command));
export { PutKMSEncryptionKeyCommand };
//# sourceMappingURL=PutKMSEncryptionKeyCommand.js.map