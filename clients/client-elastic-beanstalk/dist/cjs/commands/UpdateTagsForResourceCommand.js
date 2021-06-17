"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagsForResourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code>
 *       for tags to add or update, and <code>TagsToRemove</code>.</p>
 *          <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see
 *       <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application
 *         Resources</a>.</p>
 *          <p>If you create a custom IAM user policy to control permission to this operation, specify
 *       one of the following two virtual actions (or both) instead of the API operation name:</p>
 *          <dl>
 *             <dt>elasticbeanstalk:AddTags</dt>
 *             <dd>
 *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code>
 *           parameter.</p>
 *             </dd>
 *             <dt>elasticbeanstalk:RemoveTags</dt>
 *             <dd>
 *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code>
 *           parameter.</p>
 *             </dd>
 *          </dl>
 *          <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateTagsForResourceCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateTagsForResourceCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateTagsForResourceCommand extends smithy_client_1.Command {
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
        const clientName = "ElasticBeanstalkClient";
        const commandName = "UpdateTagsForResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateTagsForResourceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryUpdateTagsForResourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryUpdateTagsForResourceCommand(output, context);
    }
}
exports.UpdateTagsForResourceCommand = UpdateTagsForResourceCommand;
//# sourceMappingURL=UpdateTagsForResourceCommand.js.map