import { __extends } from "tslib";
import { GetSecurityConfigurationsRequest, GetSecurityConfigurationsResponse } from "../models/models_1";
import { deserializeAws_json1_1GetSecurityConfigurationsCommand, serializeAws_json1_1GetSecurityConfigurationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of all security configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSecurityConfigurationsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSecurityConfigurationsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetSecurityConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSecurityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetSecurityConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSecurityConfigurationsCommand = /** @class */ (function (_super) {
    __extends(GetSecurityConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSecurityConfigurationsCommand(input) {
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
    GetSecurityConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetSecurityConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSecurityConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSecurityConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSecurityConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSecurityConfigurationsCommand(input, context);
    };
    GetSecurityConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSecurityConfigurationsCommand(output, context);
    };
    return GetSecurityConfigurationsCommand;
}($Command));
export { GetSecurityConfigurationsCommand };
//# sourceMappingURL=GetSecurityConfigurationsCommand.js.map