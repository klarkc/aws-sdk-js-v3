import { __extends } from "tslib";
import { GetContainerAPIMetadataRequest, GetContainerAPIMetadataResult } from "../models/models_0";
import { deserializeAws_json1_1GetContainerAPIMetadataCommand, serializeAws_json1_1GetContainerAPIMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about Amazon Lightsail containers, such as the current version of the
 *       Lightsail Control (lightsailctl) plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerAPIMetadataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerAPIMetadataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerAPIMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerAPIMetadataCommandInput} for command's `input` shape.
 * @see {@link GetContainerAPIMetadataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContainerAPIMetadataCommand = /** @class */ (function (_super) {
    __extends(GetContainerAPIMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContainerAPIMetadataCommand(input) {
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
    GetContainerAPIMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetContainerAPIMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContainerAPIMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContainerAPIMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContainerAPIMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContainerAPIMetadataCommand(input, context);
    };
    GetContainerAPIMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContainerAPIMetadataCommand(output, context);
    };
    return GetContainerAPIMetadataCommand;
}($Command));
export { GetContainerAPIMetadataCommand };
//# sourceMappingURL=GetContainerAPIMetadataCommand.js.map