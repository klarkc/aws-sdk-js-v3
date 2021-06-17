import { __extends } from "tslib";
import { StartSessionRequest, StartSessionResponse } from "../models/models_1";
import { deserializeAws_json1_1StartSessionCommand, serializeAws_json1_1StartSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a
 *    URL and token that can be used to open a WebSocket connection for sending input and receiving
 *    outputs.</p>
 *          <note>
 *             <p>AWS CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager
 *     plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install
 *      the Session Manager plugin for the AWS CLI</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *             <p>AWS Tools for PowerShell usage: Start-SSMSession is not currently supported by AWS Tools
 *     for PowerShell on Windows local machines.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSessionCommandInput} for command's `input` shape.
 * @see {@link StartSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartSessionCommand = /** @class */ (function (_super) {
    __extends(StartSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartSessionCommand(input) {
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
    StartSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "StartSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartSessionCommand(input, context);
    };
    StartSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartSessionCommand(output, context);
    };
    return StartSessionCommand;
}($Command));
export { StartSessionCommand };
//# sourceMappingURL=StartSessionCommand.js.map