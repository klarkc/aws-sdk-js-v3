import { __extends } from "tslib";
import { ListArtifactsRequest, ListArtifactsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListArtifactsCommand, serializeAws_json1_1ListArtifactsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the artifacts in your account and their properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListArtifactsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListArtifactsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListArtifactsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListArtifactsCommand = /** @class */ (function (_super) {
    __extends(ListArtifactsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListArtifactsCommand(input) {
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
    ListArtifactsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListArtifactsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListArtifactsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListArtifactsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListArtifactsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListArtifactsCommand(input, context);
    };
    ListArtifactsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListArtifactsCommand(output, context);
    };
    return ListArtifactsCommand;
}($Command));
export { ListArtifactsCommand };
//# sourceMappingURL=ListArtifactsCommand.js.map