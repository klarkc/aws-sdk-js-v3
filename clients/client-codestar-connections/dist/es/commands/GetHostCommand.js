import { __extends } from "tslib";
import { GetHostInput, GetHostOutput } from "../models/models_0";
import { deserializeAws_json1_0GetHostCommand, serializeAws_json1_0GetHostCommand } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the host ARN and details such as status, provider type, endpoint, and, if
 *       applicable, the VPC configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, GetHostCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new GetHostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostCommandInput} for command's `input` shape.
 * @see {@link GetHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHostCommand = /** @class */ (function (_super) {
    __extends(GetHostCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetHostCommand(input) {
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
    GetHostCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarConnectionsClient";
        var commandName = "GetHostCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetHostInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetHostOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetHostCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetHostCommand(input, context);
    };
    GetHostCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetHostCommand(output, context);
    };
    return GetHostCommand;
}($Command));
export { GetHostCommand };
//# sourceMappingURL=GetHostCommand.js.map