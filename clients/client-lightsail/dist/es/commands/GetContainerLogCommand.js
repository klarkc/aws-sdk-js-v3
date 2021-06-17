import { __extends } from "tslib";
import { GetContainerLogRequest, GetContainerLogResult } from "../models/models_0";
import { deserializeAws_json1_1GetContainerLogCommand, serializeAws_json1_1GetContainerLogCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the log events of a container of your Amazon Lightsail container service.</p>
 *
 *          <p>If your container service has more than one node (i.e., a scale greater than 1), then the
 *       log events that are returned for the specified container are merged from all nodes on your
 *       container service.</p>
 *
 *          <note>
 *             <p>Container logs are retained for a certain amount of time. For more information, see
 *           <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail
 *           endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerLogCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerLogCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerLogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerLogCommandInput} for command's `input` shape.
 * @see {@link GetContainerLogCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContainerLogCommand = /** @class */ (function (_super) {
    __extends(GetContainerLogCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContainerLogCommand(input) {
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
    GetContainerLogCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetContainerLogCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContainerLogRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContainerLogResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContainerLogCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContainerLogCommand(input, context);
    };
    GetContainerLogCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContainerLogCommand(output, context);
    };
    return GetContainerLogCommand;
}($Command));
export { GetContainerLogCommand };
//# sourceMappingURL=GetContainerLogCommand.js.map