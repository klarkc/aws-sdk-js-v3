import { __extends } from "tslib";
import { AssociateMacSecKeyRequest, AssociateMacSecKeyResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateMacSecKeyCommand, serializeAws_json1_1AssociateMacSecKeyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an  AWS Direct Connect dedicated connection.</p>
 *          <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p>
 *          <p>For information about MAC Security (MACsec) key considerations, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>AWS Direct Connect User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateMacSecKeyCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateMacSecKeyCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateMacSecKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateMacSecKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateMacSecKeyCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateMacSecKeyCommand = /** @class */ (function (_super) {
    __extends(AssociateMacSecKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateMacSecKeyCommand(input) {
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
    AssociateMacSecKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "AssociateMacSecKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateMacSecKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateMacSecKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateMacSecKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateMacSecKeyCommand(input, context);
    };
    AssociateMacSecKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateMacSecKeyCommand(output, context);
    };
    return AssociateMacSecKeyCommand;
}($Command));
export { AssociateMacSecKeyCommand };
//# sourceMappingURL=AssociateMacSecKeyCommand.js.map