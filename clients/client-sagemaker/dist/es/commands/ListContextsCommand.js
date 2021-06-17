import { __extends } from "tslib";
import { ListContextsRequest, ListContextsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListContextsCommand, serializeAws_json1_1ListContextsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the contexts in your account and their properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListContextsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListContextsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListContextsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContextsCommandInput} for command's `input` shape.
 * @see {@link ListContextsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListContextsCommand = /** @class */ (function (_super) {
    __extends(ListContextsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListContextsCommand(input) {
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
    ListContextsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListContextsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListContextsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListContextsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListContextsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListContextsCommand(input, context);
    };
    ListContextsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListContextsCommand(output, context);
    };
    return ListContextsCommand;
}($Command));
export { ListContextsCommand };
//# sourceMappingURL=ListContextsCommand.js.map