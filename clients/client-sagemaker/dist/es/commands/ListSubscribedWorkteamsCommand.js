import { __extends } from "tslib";
import { ListSubscribedWorkteamsRequest, ListSubscribedWorkteamsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListSubscribedWorkteamsCommand, serializeAws_json1_1ListSubscribedWorkteamsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of the work teams that you are subscribed to in the AWS Marketplace. The
 *             list may be empty if no work team satisfies the filter specified in the
 *                 <code>NameContains</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListSubscribedWorkteamsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListSubscribedWorkteamsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListSubscribedWorkteamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSubscribedWorkteamsCommandInput} for command's `input` shape.
 * @see {@link ListSubscribedWorkteamsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSubscribedWorkteamsCommand = /** @class */ (function (_super) {
    __extends(ListSubscribedWorkteamsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSubscribedWorkteamsCommand(input) {
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
    ListSubscribedWorkteamsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListSubscribedWorkteamsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSubscribedWorkteamsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSubscribedWorkteamsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSubscribedWorkteamsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSubscribedWorkteamsCommand(input, context);
    };
    ListSubscribedWorkteamsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSubscribedWorkteamsCommand(output, context);
    };
    return ListSubscribedWorkteamsCommand;
}($Command));
export { ListSubscribedWorkteamsCommand };
//# sourceMappingURL=ListSubscribedWorkteamsCommand.js.map