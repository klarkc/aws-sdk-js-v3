"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStoreImageTaskCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Stores an AMI as a single object in an S3 bucket.</p>
 *          <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using S3</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using
 *         S3</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateStoreImageTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateStoreImageTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateStoreImageTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStoreImageTaskCommandInput} for command's `input` shape.
 * @see {@link CreateStoreImageTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateStoreImageTaskCommand extends smithy_client_1.Command {
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
        const commandName = "CreateStoreImageTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateStoreImageTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateStoreImageTaskResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateStoreImageTaskCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateStoreImageTaskCommand(output, context);
    }
}
exports.CreateStoreImageTaskCommand = CreateStoreImageTaskCommand;
//# sourceMappingURL=CreateStoreImageTaskCommand.js.map