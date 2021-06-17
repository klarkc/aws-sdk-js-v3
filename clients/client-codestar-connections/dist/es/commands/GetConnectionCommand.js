import { __extends } from "tslib";
import { GetConnectionInput, GetConnectionOutput } from "../models/models_0";
import { deserializeAws_json1_0GetConnectionCommand, serializeAws_json1_0GetConnectionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the connection ARN and details such as status, owner, and provider type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, GetConnectionCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetConnectionCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new GetConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectionCommandInput} for command's `input` shape.
 * @see {@link GetConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConnectionCommand = /** @class */ (function (_super) {
    __extends(GetConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConnectionCommand(input) {
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
    GetConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarConnectionsClient";
        var commandName = "GetConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConnectionInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetConnectionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetConnectionCommand(input, context);
    };
    GetConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetConnectionCommand(output, context);
    };
    return GetConnectionCommand;
}($Command));
export { GetConnectionCommand };
//# sourceMappingURL=GetConnectionCommand.js.map