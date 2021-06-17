import { __extends } from "tslib";
import { GetBlockRequest, GetBlockResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBlockCommand, serializeAws_restJson1GetBlockCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a block object at a specified address in a journal. Also returns a proof of the
 *          specified block for verification if <code>DigestTipAddress</code> is provided.</p>
 *          <p>For information about the data contents in a block, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/journal-contents.html">Journal contents</a> in the
 *             <i>Amazon QLDB Developer Guide</i>.</p>
 *          <p>If the specified ledger doesn't exist or is in <code>DELETING</code> status, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the specified ledger is in <code>CREATING</code> status, then throws
 *             <code>ResourcePreconditionNotMetException</code>.</p>
 *          <p>If no block exists with the specified address, then throws
 *             <code>InvalidParameterException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetBlockCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetBlockCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new GetBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlockCommandInput} for command's `input` shape.
 * @see {@link GetBlockCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBlockCommand = /** @class */ (function (_super) {
    __extends(GetBlockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBlockCommand(input) {
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
    GetBlockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "GetBlockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBlockResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBlockCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBlockCommand(input, context);
    };
    GetBlockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBlockCommand(output, context);
    };
    return GetBlockCommand;
}($Command));
export { GetBlockCommand };
//# sourceMappingURL=GetBlockCommand.js.map