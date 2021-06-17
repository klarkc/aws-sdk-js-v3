import { __extends } from "tslib";
import { GetLifecyclePolicyPreviewRequest, GetLifecyclePolicyPreviewResponse } from "../models/models_0";
import { deserializeAws_json1_1GetLifecyclePolicyPreviewCommand, serializeAws_json1_1GetLifecyclePolicyPreviewCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the results of the lifecycle policy preview request for the specified
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetLifecyclePolicyPreviewCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetLifecyclePolicyPreviewCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetLifecyclePolicyPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePolicyPreviewCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyPreviewCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLifecyclePolicyPreviewCommand = /** @class */ (function (_super) {
    __extends(GetLifecyclePolicyPreviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLifecyclePolicyPreviewCommand(input) {
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
    GetLifecyclePolicyPreviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "GetLifecyclePolicyPreviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLifecyclePolicyPreviewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLifecyclePolicyPreviewResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLifecyclePolicyPreviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLifecyclePolicyPreviewCommand(input, context);
    };
    GetLifecyclePolicyPreviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLifecyclePolicyPreviewCommand(output, context);
    };
    return GetLifecyclePolicyPreviewCommand;
}($Command));
export { GetLifecyclePolicyPreviewCommand };
//# sourceMappingURL=GetLifecyclePolicyPreviewCommand.js.map