import { __extends } from "tslib";
import { GenerateRandomRequest, GenerateRandomResponse } from "../models/models_0";
import { deserializeAws_json1_1GenerateRandomCommand, serializeAws_json1_1GenerateRandomCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a random byte string that is cryptographically secure.</p>
 *          <p>By default, the random byte string is generated in AWS KMS. To generate the byte string in
 *       the AWS CloudHSM cluster that is associated with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, specify the custom key store
 *       ID.</p>
 *          <p>For more information about entropy and random number generation, see the <a href="https://d0.awsstatic.com/whitepapers/KMS-Cryptographic-Details.pdf">AWS Key Management Service
 *       Cryptographic Details</a> whitepaper.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateRandom</a> (IAM policy)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateRandomCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateRandomCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GenerateRandomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateRandomCommandInput} for command's `input` shape.
 * @see {@link GenerateRandomCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GenerateRandomCommand = /** @class */ (function (_super) {
    __extends(GenerateRandomCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GenerateRandomCommand(input) {
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
    GenerateRandomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "GenerateRandomCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GenerateRandomRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GenerateRandomResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GenerateRandomCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GenerateRandomCommand(input, context);
    };
    GenerateRandomCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GenerateRandomCommand(output, context);
    };
    return GenerateRandomCommand;
}($Command));
export { GenerateRandomCommand };
//# sourceMappingURL=GenerateRandomCommand.js.map