import { __extends } from "tslib";
import { SendCommandRequest, SendCommandResult } from "../models/models_0";
import { deserializeAws_json1_0SendCommandCommand, serializeAws_json1_0SendCommandCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a command to an Amazon QLDB ledger.</p>
 *          <note>
 *             <p>Instead of interacting directly with this API, we recommend using the QLDB driver
 *             or the QLDB shell to execute data transactions on a ledger.</p>
 *             <ul>
 *                <li>
 *                   <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides
 *                   a high-level abstraction layer above this <i>QLDB Session</i> data
 *                   plane and manages <code>SendCommand</code> API calls for you. For information and
 *                   a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started
 *                      with the driver</a> in the <i>Amazon QLDB Developer
 *                   Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>If you are working with the AWS Command Line Interface (AWS CLI), use the
 *                   QLDB shell. The shell is a command line interface that uses the QLDB driver to
 *                   interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the
 *                      QLDB shell</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBSessionClient, SendCommandCommand } from "@aws-sdk/client-qldb-session"; // ES Modules import
 * // const { QLDBSessionClient, SendCommandCommand } = require("@aws-sdk/client-qldb-session"); // CommonJS import
 * const client = new QLDBSessionClient(config);
 * const command = new SendCommandCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendCommandCommandInput} for command's `input` shape.
 * @see {@link SendCommandCommandOutput} for command's `response` shape.
 * @see {@link QLDBSessionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendCommandCommand = /** @class */ (function (_super) {
    __extends(SendCommandCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendCommandCommand(input) {
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
    SendCommandCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBSessionClient";
        var commandName = "SendCommandCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendCommandRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendCommandResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendCommandCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0SendCommandCommand(input, context);
    };
    SendCommandCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0SendCommandCommand(output, context);
    };
    return SendCommandCommand;
}($Command));
export { SendCommandCommand };
//# sourceMappingURL=SendCommandCommand.js.map