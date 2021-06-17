import { __extends } from "tslib";
import { CloseInstancePublicPortsRequest, CloseInstancePublicPortsResult } from "../models/models_0";
import { deserializeAws_json1_1CloseInstancePublicPortsCommand, serializeAws_json1_1CloseInstancePublicPortsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Closes ports for a specific Amazon Lightsail instance.</p>
 *          <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instanceName</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CloseInstancePublicPortsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CloseInstancePublicPortsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CloseInstancePublicPortsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CloseInstancePublicPortsCommandInput} for command's `input` shape.
 * @see {@link CloseInstancePublicPortsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CloseInstancePublicPortsCommand = /** @class */ (function (_super) {
    __extends(CloseInstancePublicPortsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CloseInstancePublicPortsCommand(input) {
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
    CloseInstancePublicPortsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CloseInstancePublicPortsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CloseInstancePublicPortsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CloseInstancePublicPortsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CloseInstancePublicPortsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CloseInstancePublicPortsCommand(input, context);
    };
    CloseInstancePublicPortsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CloseInstancePublicPortsCommand(output, context);
    };
    return CloseInstancePublicPortsCommand;
}($Command));
export { CloseInstancePublicPortsCommand };
//# sourceMappingURL=CloseInstancePublicPortsCommand.js.map