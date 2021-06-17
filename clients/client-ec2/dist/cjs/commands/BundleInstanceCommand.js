"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleInstanceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Bundles an Amazon instance store-backed Windows instance.</p>
 *          <p>During bundling, only the root device volume (C:\) is bundled. Data on other instance store volumes is not preserved.</p>
 *          <note>
 *             <p>This action is not applicable for Linux/Unix instances or Windows instances that are backed by Amazon EBS.</p>
 * 			      </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, BundleInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, BundleInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new BundleInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BundleInstanceCommandInput} for command's `input` shape.
 * @see {@link BundleInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BundleInstanceCommand extends smithy_client_1.Command {
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
        const commandName = "BundleInstanceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BundleInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BundleInstanceResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2BundleInstanceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2BundleInstanceCommand(output, context);
    }
}
exports.BundleInstanceCommand = BundleInstanceCommand;
//# sourceMappingURL=BundleInstanceCommand.js.map