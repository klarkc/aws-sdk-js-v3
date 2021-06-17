import { __extends } from "tslib";
import { GetInstancesRequest, GetInstancesResult } from "../models/models_0";
import { deserializeAws_json1_1GetInstancesCommand, serializeAws_json1_1GetInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all Amazon Lightsail virtual private servers, or
 *         <i>instances</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstancesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstancesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstancesCommandInput} for command's `input` shape.
 * @see {@link GetInstancesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInstancesCommand = /** @class */ (function (_super) {
    __extends(GetInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInstancesCommand(input) {
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
    GetInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInstancesCommand(input, context);
    };
    GetInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInstancesCommand(output, context);
    };
    return GetInstancesCommand;
}($Command));
export { GetInstancesCommand };
//# sourceMappingURL=GetInstancesCommand.js.map