import { __extends } from "tslib";
import { GetKMSEncryptionKeyResult } from "../models/models_0";
import { deserializeAws_json1_1GetKMSEncryptionKeyCommand, serializeAws_json1_1GetKMSEncryptionKeyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the encryption key if a Key Management Service (KMS) customer master key (CMK) has been specified to be used to encrypt content in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetKMSEncryptionKeyCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetKMSEncryptionKeyCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetKMSEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKMSEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link GetKMSEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetKMSEncryptionKeyCommand = /** @class */ (function (_super) {
    __extends(GetKMSEncryptionKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetKMSEncryptionKeyCommand(input) {
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
    GetKMSEncryptionKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "GetKMSEncryptionKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: GetKMSEncryptionKeyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetKMSEncryptionKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetKMSEncryptionKeyCommand(input, context);
    };
    GetKMSEncryptionKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetKMSEncryptionKeyCommand(output, context);
    };
    return GetKMSEncryptionKeyCommand;
}($Command));
export { GetKMSEncryptionKeyCommand };
//# sourceMappingURL=GetKMSEncryptionKeyCommand.js.map