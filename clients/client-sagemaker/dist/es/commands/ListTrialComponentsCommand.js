import { __extends } from "tslib";
import { ListTrialComponentsRequest, ListTrialComponentsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListTrialComponentsCommand, serializeAws_json1_1ListTrialComponentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the trial components in your account. You can sort the list by trial component name
 *       or creation time. You can filter the list to show only components that were created in a
 *       specific time range. You can also filter on one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ExperimentName</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SourceArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TrialName</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrialComponentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrialComponentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTrialComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrialComponentsCommandInput} for command's `input` shape.
 * @see {@link ListTrialComponentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrialComponentsCommand = /** @class */ (function (_super) {
    __extends(ListTrialComponentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrialComponentsCommand(input) {
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
    ListTrialComponentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListTrialComponentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrialComponentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrialComponentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrialComponentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTrialComponentsCommand(input, context);
    };
    ListTrialComponentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTrialComponentsCommand(output, context);
    };
    return ListTrialComponentsCommand;
}($Command));
export { ListTrialComponentsCommand };
//# sourceMappingURL=ListTrialComponentsCommand.js.map