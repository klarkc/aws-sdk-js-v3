import { __extends } from "tslib";
import { PutInstancePublicPortsRequest, PutInstancePublicPortsResult } from "../models/models_1";
import { deserializeAws_json1_1PutInstancePublicPortsCommand, serializeAws_json1_1PutInstancePublicPortsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses
 *       allowed to connect to the instance through the ports, and the protocol. This action also
 *       closes all currently open ports that are not included in the request. Include all of the ports
 *       and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use
 *       the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open
 *       ports.</p>
 *          <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instanceName</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, PutInstancePublicPortsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, PutInstancePublicPortsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new PutInstancePublicPortsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInstancePublicPortsCommandInput} for command's `input` shape.
 * @see {@link PutInstancePublicPortsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutInstancePublicPortsCommand = /** @class */ (function (_super) {
    __extends(PutInstancePublicPortsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutInstancePublicPortsCommand(input) {
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
    PutInstancePublicPortsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "PutInstancePublicPortsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutInstancePublicPortsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutInstancePublicPortsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutInstancePublicPortsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutInstancePublicPortsCommand(input, context);
    };
    PutInstancePublicPortsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutInstancePublicPortsCommand(output, context);
    };
    return PutInstancePublicPortsCommand;
}($Command));
export { PutInstancePublicPortsCommand };
//# sourceMappingURL=PutInstancePublicPortsCommand.js.map