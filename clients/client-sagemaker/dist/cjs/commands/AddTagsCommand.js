"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTagsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add
 *             tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform
 *             jobs, models, labeling jobs, work teams, endpoint configurations, and
 *             endpoints.</p>
 *         <p>Each tag consists of a key and an optional value. Tag keys must be unique per
 *             resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
 *                 Tagging Strategies</a>.</p>
 *         <note>
 *             <p>Tags that you add to a hyperparameter tuning job by calling this API are also
 *                 added to any training jobs that the hyperparameter tuning job launches after you
 *                 call this API, but not to training jobs that the hyperparameter tuning job launched
 *                 before you called this API. To make sure that the tags associated with a
 *                 hyperparameter tuning job are also added to all training jobs that the
 *                 hyperparameter tuning job launches, add the tags when you first create the tuning
 *                 job by specifying them in the <code>Tags</code> parameter of <a>CreateHyperParameterTuningJob</a>
 *             </p>
 *         </note>
 *         <note>
 *             <p>Tags that you add to a SageMaker Studio Domain or User Profile by calling this API are also
 *                 added to any Apps that the Domain or User Profile launches after you
 *                 call this API, but not to Apps that the Domain or User Profile launched
 *                 before you called this API. To make sure that the tags associated with a
 *                 Domain or User Profile are also added to all Apps that the
 *                 Domain or User Profile launches, add the tags when you first create the Domain or User Profile by specifying them in the <code>Tags</code> parameter of <a>CreateDomain</a> or <a>CreateUserProfile</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AddTagsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AddTagsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddTagsCommand extends smithy_client_1.Command {
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
        const clientName = "SageMakerClient";
        const commandName = "AddTagsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddTagsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AddTagsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AddTagsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AddTagsCommand(output, context);
    }
}
exports.AddTagsCommand = AddTagsCommand;
//# sourceMappingURL=AddTagsCommand.js.map