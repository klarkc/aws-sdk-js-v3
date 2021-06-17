import { __extends } from "tslib";
import { ContainerServicesListResult, GetContainerServicesRequest } from "../models/models_0";
import { deserializeAws_json1_1GetContainerServicesCommand, serializeAws_json1_1GetContainerServicesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about one or more of your Amazon Lightsail container services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServicesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServicesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServicesCommandInput} for command's `input` shape.
 * @see {@link GetContainerServicesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContainerServicesCommand = /** @class */ (function (_super) {
    __extends(GetContainerServicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContainerServicesCommand(input) {
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
    GetContainerServicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetContainerServicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContainerServicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ContainerServicesListResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContainerServicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContainerServicesCommand(input, context);
    };
    GetContainerServicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContainerServicesCommand(output, context);
    };
    return GetContainerServicesCommand;
}($Command));
export { GetContainerServicesCommand };
//# sourceMappingURL=GetContainerServicesCommand.js.map