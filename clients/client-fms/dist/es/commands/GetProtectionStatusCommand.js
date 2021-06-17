import { __extends } from "tslib";
import { GetProtectionStatusRequest, GetProtectionStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1GetProtectionStatusCommand, serializeAws_json1_1GetProtectionStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>If you created a Shield Advanced policy, returns policy-level attack summary information
 *          in the event of a potential DDoS attack. Other policy types are currently unsupported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetProtectionStatusCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetProtectionStatusCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetProtectionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProtectionStatusCommandInput} for command's `input` shape.
 * @see {@link GetProtectionStatusCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProtectionStatusCommand = /** @class */ (function (_super) {
    __extends(GetProtectionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetProtectionStatusCommand(input) {
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
    GetProtectionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "GetProtectionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetProtectionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetProtectionStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetProtectionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetProtectionStatusCommand(input, context);
    };
    GetProtectionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetProtectionStatusCommand(output, context);
    };
    return GetProtectionStatusCommand;
}($Command));
export { GetProtectionStatusCommand };
//# sourceMappingURL=GetProtectionStatusCommand.js.map