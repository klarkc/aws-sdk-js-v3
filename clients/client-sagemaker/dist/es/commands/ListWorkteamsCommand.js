import { __extends } from "tslib";
import { ListWorkteamsRequest, ListWorkteamsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListWorkteamsCommand, serializeAws_json1_1ListWorkteamsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of private work teams that you have defined in a region. The list may be empty if
 *             no work team satisfies the filter specified in the <code>NameContains</code>
 *             parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListWorkteamsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListWorkteamsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListWorkteamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkteamsCommandInput} for command's `input` shape.
 * @see {@link ListWorkteamsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorkteamsCommand = /** @class */ (function (_super) {
    __extends(ListWorkteamsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWorkteamsCommand(input) {
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
    ListWorkteamsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListWorkteamsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWorkteamsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListWorkteamsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWorkteamsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListWorkteamsCommand(input, context);
    };
    ListWorkteamsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListWorkteamsCommand(output, context);
    };
    return ListWorkteamsCommand;
}($Command));
export { ListWorkteamsCommand };
//# sourceMappingURL=ListWorkteamsCommand.js.map