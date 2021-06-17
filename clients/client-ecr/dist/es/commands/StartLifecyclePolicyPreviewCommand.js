import { __extends } from "tslib";
import { StartLifecyclePolicyPreviewRequest, StartLifecyclePolicyPreviewResponse } from "../models/models_0";
import { deserializeAws_json1_1StartLifecyclePolicyPreviewCommand, serializeAws_json1_1StartLifecyclePolicyPreviewCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a preview of a lifecycle policy for the specified repository. This allows you
 *             to see the results before associating the lifecycle policy with the repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StartLifecyclePolicyPreviewCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StartLifecyclePolicyPreviewCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new StartLifecyclePolicyPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartLifecyclePolicyPreviewCommandInput} for command's `input` shape.
 * @see {@link StartLifecyclePolicyPreviewCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartLifecyclePolicyPreviewCommand = /** @class */ (function (_super) {
    __extends(StartLifecyclePolicyPreviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartLifecyclePolicyPreviewCommand(input) {
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
    StartLifecyclePolicyPreviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "StartLifecyclePolicyPreviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartLifecyclePolicyPreviewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartLifecyclePolicyPreviewResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartLifecyclePolicyPreviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartLifecyclePolicyPreviewCommand(input, context);
    };
    StartLifecyclePolicyPreviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartLifecyclePolicyPreviewCommand(output, context);
    };
    return StartLifecyclePolicyPreviewCommand;
}($Command));
export { StartLifecyclePolicyPreviewCommand };
//# sourceMappingURL=StartLifecyclePolicyPreviewCommand.js.map