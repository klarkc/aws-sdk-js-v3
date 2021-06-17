import { __extends } from "tslib";
import { ListAppImageConfigsRequest, ListAppImageConfigsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListAppImageConfigsCommand, serializeAws_json1_1ListAppImageConfigsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the AppImageConfigs in your account and their properties. The list can be
 *         filtered by creation time or modified time, and whether the AppImageConfig name contains
 *         a specified string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAppImageConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAppImageConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListAppImageConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppImageConfigsCommandInput} for command's `input` shape.
 * @see {@link ListAppImageConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAppImageConfigsCommand = /** @class */ (function (_super) {
    __extends(ListAppImageConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAppImageConfigsCommand(input) {
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
    ListAppImageConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListAppImageConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAppImageConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAppImageConfigsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAppImageConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAppImageConfigsCommand(input, context);
    };
    ListAppImageConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAppImageConfigsCommand(output, context);
    };
    return ListAppImageConfigsCommand;
}($Command));
export { ListAppImageConfigsCommand };
//# sourceMappingURL=ListAppImageConfigsCommand.js.map