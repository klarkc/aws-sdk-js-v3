import { __extends } from "tslib";
import { DeleteTagsInput, DeleteTagsOutput } from "../models/models_1";
import { deserializeAws_json1_1DeleteTagsCommand, serializeAws_json1_1DeleteTagsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified tags from an Amazon SageMaker resource.</p>
 *         <p>To list a resource's tags, use the <code>ListTags</code> API. </p>
 *         <note>
 *             <p>When you call this API to delete tags from a hyperparameter tuning job, the
 *                 deleted tags are not removed from training jobs that the hyperparameter tuning job
 *                 launched before you called this API.</p>
 *         </note>
 *         <note>
 *             <p>When you call this API to delete tags from a SageMaker Studio Domain or User Profile, the
 *                 deleted tags are not removed from Apps that the SageMaker Studio Domain or User Profile
 *                 launched before you called this API.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTagsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTagsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTagsCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTagsCommand = /** @class */ (function (_super) {
    __extends(DeleteTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTagsCommand(input) {
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
    DeleteTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTagsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTagsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTagsCommand(input, context);
    };
    DeleteTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTagsCommand(output, context);
    };
    return DeleteTagsCommand;
}($Command));
export { DeleteTagsCommand };
//# sourceMappingURL=DeleteTagsCommand.js.map