import { __extends } from "tslib";
import { GetDomainRequest, GetDomainResult } from "../models/models_0";
import { deserializeAws_json1_1GetDomainCommand, serializeAws_json1_1GetDomainCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific domain recordset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDomainCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDomainCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainCommandInput} for command's `input` shape.
 * @see {@link GetDomainCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDomainCommand = /** @class */ (function (_super) {
    __extends(GetDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDomainCommand(input) {
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
    GetDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDomainResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDomainCommand(input, context);
    };
    GetDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDomainCommand(output, context);
    };
    return GetDomainCommand;
}($Command));
export { GetDomainCommand };
//# sourceMappingURL=GetDomainCommand.js.map