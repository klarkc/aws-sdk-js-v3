import { __extends } from "tslib";
import { PreviewAgentsRequest, PreviewAgentsResponse } from "../models/models_0";
import { deserializeAws_json1_1PreviewAgentsCommand, serializeAws_json1_1PreviewAgentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Previews the agents installed on the EC2 instances that are part of the specified
 *          assessment target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, PreviewAgentsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, PreviewAgentsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new PreviewAgentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PreviewAgentsCommandInput} for command's `input` shape.
 * @see {@link PreviewAgentsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PreviewAgentsCommand = /** @class */ (function (_super) {
    __extends(PreviewAgentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PreviewAgentsCommand(input) {
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
    PreviewAgentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "PreviewAgentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PreviewAgentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PreviewAgentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PreviewAgentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PreviewAgentsCommand(input, context);
    };
    PreviewAgentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PreviewAgentsCommand(output, context);
    };
    return PreviewAgentsCommand;
}($Command));
export { PreviewAgentsCommand };
//# sourceMappingURL=PreviewAgentsCommand.js.map