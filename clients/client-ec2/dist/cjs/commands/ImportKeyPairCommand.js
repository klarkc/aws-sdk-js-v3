"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportKeyPairCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class ImportKeyPairCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "ImportKeyPairCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ImportKeyPairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ImportKeyPairResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ImportKeyPairCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ImportKeyPairCommand(output, context);
    }
}
exports.ImportKeyPairCommand = ImportKeyPairCommand;
//# sourceMappingURL=ImportKeyPairCommand.js.map