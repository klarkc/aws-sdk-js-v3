import { __extends } from "tslib";
import { GetAggregateResourceConfigRequest, GetAggregateResourceConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAggregateResourceConfigCommand, serializeAws_json1_1GetAggregateResourceConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns configuration item that is aggregated for your specific resource in a specific source account and region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetAggregateResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAggregateResourceConfigCommandInput} for command's `input` shape.
 * @see {@link GetAggregateResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAggregateResourceConfigCommand = /** @class */ (function (_super) {
    __extends(GetAggregateResourceConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAggregateResourceConfigCommand(input) {
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
    GetAggregateResourceConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetAggregateResourceConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAggregateResourceConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAggregateResourceConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAggregateResourceConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAggregateResourceConfigCommand(input, context);
    };
    GetAggregateResourceConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAggregateResourceConfigCommand(output, context);
    };
    return GetAggregateResourceConfigCommand;
}($Command));
export { GetAggregateResourceConfigCommand };
//# sourceMappingURL=GetAggregateResourceConfigCommand.js.map