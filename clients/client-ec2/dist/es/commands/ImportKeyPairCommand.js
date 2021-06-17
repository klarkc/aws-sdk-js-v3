import { __extends } from "tslib";
import { ImportKeyPairRequest, ImportKeyPairResult } from "../models/models_4";
import { deserializeAws_ec2ImportKeyPairCommand, serializeAws_ec2ImportKeyPairCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports the public key from an RSA key pair that you created with a third-party tool.
 *         Compare this with <a>CreateKeyPair</a>, in which AWS creates the key pair and gives the keys to you
 *         (AWS keeps a copy of the public key). With ImportKeyPair, you create the key pair and give AWS just the public key.
 *         The private key is never transferred between you and AWS.</p>
 *          <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a>
 * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportKeyPairCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportKeyPairCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportKeyPairCommandInput} for command's `input` shape.
 * @see {@link ImportKeyPairCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportKeyPairCommand = /** @class */ (function (_super) {
    __extends(ImportKeyPairCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportKeyPairCommand(input) {
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
    ImportKeyPairCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ImportKeyPairCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportKeyPairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportKeyPairResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportKeyPairCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ImportKeyPairCommand(input, context);
    };
    ImportKeyPairCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ImportKeyPairCommand(output, context);
    };
    return ImportKeyPairCommand;
}($Command));
export { ImportKeyPairCommand };
//# sourceMappingURL=ImportKeyPairCommand.js.map