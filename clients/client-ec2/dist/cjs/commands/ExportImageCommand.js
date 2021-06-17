"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportImageCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Exports an Amazon Machine Image (AMI) to a VM file. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html">Exporting a VM
 *     directly from an Amazon Machine Image (AMI)</a> in the
 *     <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportImageCommandInput} for command's `input` shape.
 * @see {@link ExportImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ExportImageCommand extends smithy_client_1.Command {
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
        const commandName = "ExportImageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ExportImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ExportImageResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ExportImageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ExportImageCommand(output, context);
    }
}
exports.ExportImageCommand = ExportImageCommand;
//# sourceMappingURL=ExportImageCommand.js.map