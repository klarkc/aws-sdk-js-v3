import { __extends } from "tslib";
import { DescribeHandshakeRequest, DescribeHandshakeResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeHandshakeCommand, serializeAws_json1_1DescribeHandshakeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a previously requested handshake. The handshake ID comes
 *             from the response to the original <a>InviteAccountToOrganization</a>
 *             operation that generated the handshake.</p>
 *         <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or
 *                 <code>CANCELED</code> for only 30 days after they change to that state. They're then
 *             deleted and no longer accessible.</p>
 *         <p>This operation can be called from any account in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHandshakeCommandInput} for command's `input` shape.
 * @see {@link DescribeHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHandshakeCommand = /** @class */ (function (_super) {
    __extends(DescribeHandshakeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHandshakeCommand(input) {
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
    DescribeHandshakeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DescribeHandshakeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHandshakeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHandshakeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHandshakeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeHandshakeCommand(input, context);
    };
    DescribeHandshakeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeHandshakeCommand(output, context);
    };
    return DescribeHandshakeCommand;
}($Command));
export { DescribeHandshakeCommand };
//# sourceMappingURL=DescribeHandshakeCommand.js.map