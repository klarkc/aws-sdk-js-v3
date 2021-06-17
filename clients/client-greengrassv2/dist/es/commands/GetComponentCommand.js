import { __extends } from "tslib";
import { GetComponentRequest, GetComponentResponse } from "../models/models_0";
import { deserializeAws_restJson1GetComponentCommand, serializeAws_restJson1GetComponentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the recipe for a version of a component. Core devices can call this operation to
 *       identify the artifacts and requirements to install a component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetComponentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetComponentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new GetComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComponentCommandInput} for command's `input` shape.
 * @see {@link GetComponentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetComponentCommand = /** @class */ (function (_super) {
    __extends(GetComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetComponentCommand(input) {
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
    GetComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "GetComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetComponentCommand(input, context);
    };
    GetComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetComponentCommand(output, context);
    };
    return GetComponentCommand;
}($Command));
export { GetComponentCommand };
//# sourceMappingURL=GetComponentCommand.js.map