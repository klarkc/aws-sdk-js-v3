"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInstanceExportTaskCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Exports a running or stopped instance to an Amazon S3 bucket.</p>
 *          <p>For information about the supported operating systems, image formats, and known limitations
 *    for the types of instances you can export, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html">Exporting an instance as a VM Using VM Import/Export</a>
 *    in the <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateInstanceExportTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateInstanceExportTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateInstanceExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceExportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceExportTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateInstanceExportTaskCommand extends smithy_client_1.Command {
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
        const commandName = "CreateInstanceExportTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateInstanceExportTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateInstanceExportTaskResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateInstanceExportTaskCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateInstanceExportTaskCommand(output, context);
    }
}
exports.CreateInstanceExportTaskCommand = CreateInstanceExportTaskCommand;
//# sourceMappingURL=CreateInstanceExportTaskCommand.js.map