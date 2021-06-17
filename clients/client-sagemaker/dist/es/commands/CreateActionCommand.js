import { __extends } from "tslib";
import { CreateActionRequest, CreateActionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateActionCommand, serializeAws_json1_1CreateActionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an <i>action</i>. An action is a lineage tracking entity that
 *         represents an action or activity. For example, a model deployment or an HPO job.
 *         Generally, an action involves at least one input or output artifact. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 *          <note>
 *             <p>
 *                <code>CreateAction</code> can only be invoked from within an SageMaker managed
 *           environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
 *           notebooks. A call to <code>CreateAction</code> from outside one of these
 *           environments results in an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateActionCommandInput} for command's `input` shape.
 * @see {@link CreateActionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateActionCommand = /** @class */ (function (_super) {
    __extends(CreateActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateActionCommand(input) {
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
    CreateActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateActionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateActionCommand(input, context);
    };
    CreateActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateActionCommand(output, context);
    };
    return CreateActionCommand;
}($Command));
export { CreateActionCommand };
//# sourceMappingURL=CreateActionCommand.js.map