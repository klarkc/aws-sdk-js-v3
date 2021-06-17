import { __extends } from "tslib";
import { ListModelPackageGroupsInput, ListModelPackageGroupsOutput } from "../models/models_2";
import { deserializeAws_json1_1ListModelPackageGroupsCommand, serializeAws_json1_1ListModelPackageGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of the model groups in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelPackageGroupsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelPackageGroupsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListModelPackageGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelPackageGroupsCommandInput} for command's `input` shape.
 * @see {@link ListModelPackageGroupsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListModelPackageGroupsCommand = /** @class */ (function (_super) {
    __extends(ListModelPackageGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListModelPackageGroupsCommand(input) {
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
    ListModelPackageGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListModelPackageGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListModelPackageGroupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListModelPackageGroupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListModelPackageGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListModelPackageGroupsCommand(input, context);
    };
    ListModelPackageGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListModelPackageGroupsCommand(output, context);
    };
    return ListModelPackageGroupsCommand;
}($Command));
export { ListModelPackageGroupsCommand };
//# sourceMappingURL=ListModelPackageGroupsCommand.js.map