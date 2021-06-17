import { __extends } from "tslib";
import { GetContainerServicePowersRequest, GetContainerServicePowersResult } from "../models/models_0";
import { deserializeAws_json1_1GetContainerServicePowersCommand, serializeAws_json1_1GetContainerServicePowersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of powers that can be specified for your Amazon Lightsail container
 *       services.</p>
 *
 *          <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the
 *       container service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServicePowersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServicePowersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServicePowersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServicePowersCommandInput} for command's `input` shape.
 * @see {@link GetContainerServicePowersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContainerServicePowersCommand = /** @class */ (function (_super) {
    __extends(GetContainerServicePowersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContainerServicePowersCommand(input) {
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
    GetContainerServicePowersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetContainerServicePowersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContainerServicePowersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContainerServicePowersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContainerServicePowersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContainerServicePowersCommand(input, context);
    };
    GetContainerServicePowersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContainerServicePowersCommand(output, context);
    };
    return GetContainerServicePowersCommand;
}($Command));
export { GetContainerServicePowersCommand };
//# sourceMappingURL=GetContainerServicePowersCommand.js.map