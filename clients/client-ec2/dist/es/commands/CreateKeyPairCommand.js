import { __extends } from "tslib";
import { CreateKeyPairRequest, KeyPair } from "../models/models_0";
import { deserializeAws_ec2CreateKeyPairCommand, serializeAws_ec2CreateKeyPairCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a 2048-bit RSA key pair with the specified name. Amazon EC2 stores the public
 *             key and displays the private key for you to save to a file. The private key is returned
 *             as an unencrypted PEM encoded PKCS#1 private key. If a key with the specified name
 *             already exists, Amazon EC2 returns an error.</p>
 *          <p>You can have up to five thousand key pairs per Region.</p>
 * 		       <p>The key pair returned to you is available only in the Region in which you create it.
 *             If you prefer, you can create your own key pair using a third-party tool and upload it
 *             to any Region using <a>ImportKeyPair</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateKeyPairCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateKeyPairCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeyPairCommandInput} for command's `input` shape.
 * @see {@link CreateKeyPairCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateKeyPairCommand = /** @class */ (function (_super) {
    __extends(CreateKeyPairCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateKeyPairCommand(input) {
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
    CreateKeyPairCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateKeyPairCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateKeyPairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: KeyPair.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateKeyPairCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateKeyPairCommand(input, context);
    };
    CreateKeyPairCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateKeyPairCommand(output, context);
    };
    return CreateKeyPairCommand;
}($Command));
export { CreateKeyPairCommand };
//# sourceMappingURL=CreateKeyPairCommand.js.map