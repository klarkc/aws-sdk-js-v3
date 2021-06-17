"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeBundleTasksCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the specified bundle tasks or all of your bundle tasks.</p>
 *          <note>
 *             <p>Completed bundle tasks are listed for only a limited time. If your bundle task is no longer in the list, you can still register an AMI from it. Just use <code>RegisterImage</code> with the Amazon S3 bucket name and image manifest name you provided to the bundle task.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeBundleTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeBundleTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeBundleTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBundleTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeBundleTasksCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeBundleTasksCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DescribeBundleTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DescribeBundleTasksResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeBundleTasksCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeBundleTasksCommand(output, context);
    }
}
exports.DescribeBundleTasksCommand = DescribeBundleTasksCommand;
//# sourceMappingURL=DescribeBundleTasksCommand.js.map