import { __extends } from "tslib";
import { GetSecurityConfigurationRequest, GetSecurityConfigurationResponse } from "../models/models_1";
import { deserializeAws_json1_1GetSecurityConfigurationCommand, serializeAws_json1_1GetSecurityConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a specified security configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSecurityConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSecurityConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSecurityConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetSecurityConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSecurityConfigurationCommand(input) {
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
    GetSecurityConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetSecurityConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSecurityConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSecurityConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSecurityConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSecurityConfigurationCommand(input, context);
    };
    GetSecurityConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSecurityConfigurationCommand(output, context);
    };
    return GetSecurityConfigurationCommand;
}($Command));
export { GetSecurityConfigurationCommand };
//# sourceMappingURL=GetSecurityConfigurationCommand.js.map