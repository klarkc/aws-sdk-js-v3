import { __extends } from "tslib";
import { OpenInstancePublicPortsRequest, OpenInstancePublicPortsResult } from "../models/models_1";
import { deserializeAws_json1_1OpenInstancePublicPortsCommand, serializeAws_json1_1OpenInstancePublicPortsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses
 *       allowed to connect to the instance through the ports, and the protocol.</p>
 *          <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instanceName</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, OpenInstancePublicPortsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, OpenInstancePublicPortsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new OpenInstancePublicPortsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OpenInstancePublicPortsCommandInput} for command's `input` shape.
 * @see {@link OpenInstancePublicPortsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var OpenInstancePublicPortsCommand = /** @class */ (function (_super) {
    __extends(OpenInstancePublicPortsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function OpenInstancePublicPortsCommand(input) {
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
    OpenInstancePublicPortsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "OpenInstancePublicPortsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: OpenInstancePublicPortsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: OpenInstancePublicPortsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    OpenInstancePublicPortsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1OpenInstancePublicPortsCommand(input, context);
    };
    OpenInstancePublicPortsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1OpenInstancePublicPortsCommand(output, context);
    };
    return OpenInstancePublicPortsCommand;
}($Command));
export { OpenInstancePublicPortsCommand };
//# sourceMappingURL=OpenInstancePublicPortsCommand.js.map