import { __extends } from "tslib";
import { ListImageVersionsRequest, ListImageVersionsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListImageVersionsCommand, serializeAws_json1_1ListImageVersionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the versions of a specified image and their properties. The list can be filtered
 *         by creation time or modified time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListImageVersionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListImageVersionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListImageVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImageVersionsCommandInput} for command's `input` shape.
 * @see {@link ListImageVersionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListImageVersionsCommand = /** @class */ (function (_super) {
    __extends(ListImageVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListImageVersionsCommand(input) {
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
    ListImageVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListImageVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListImageVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListImageVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListImageVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListImageVersionsCommand(input, context);
    };
    ListImageVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListImageVersionsCommand(output, context);
    };
    return ListImageVersionsCommand;
}($Command));
export { ListImageVersionsCommand };
//# sourceMappingURL=ListImageVersionsCommand.js.map