import { __extends } from "tslib";
import { CreateTrialRequest, CreateTrialResponse } from "../models/models_1";
import { deserializeAws_json1_1CreateTrialCommand, serializeAws_json1_1CreateTrialCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an SageMaker <i>trial</i>. A trial is a set of steps called
 *         <i>trial components</i> that produce a machine learning model. A trial is part
 *       of a single SageMaker <i>experiment</i>.</p>
 *          <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial
 *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
 *       must use the logging APIs provided by the SDK.</p>
 *          <p>You can add tags to a trial and then use the <a>Search</a> API to search for
 *       the tags.</p>
 *          <p>To get a list of all your trials, call the <a>ListTrials</a> API. To view a
 *       trial's properties, call the <a>DescribeTrial</a> API. To create a trial component,
 *       call the <a>CreateTrialComponent</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateTrialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrialCommandInput} for command's `input` shape.
 * @see {@link CreateTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrialCommand = /** @class */ (function (_super) {
    __extends(CreateTrialCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrialCommand(input) {
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
    CreateTrialCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateTrialCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrialRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrialResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrialCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTrialCommand(input, context);
    };
    CreateTrialCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTrialCommand(output, context);
    };
    return CreateTrialCommand;
}($Command));
export { CreateTrialCommand };
//# sourceMappingURL=CreateTrialCommand.js.map