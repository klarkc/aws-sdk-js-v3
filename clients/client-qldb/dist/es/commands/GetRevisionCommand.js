import { __extends } from "tslib";
import { GetRevisionRequest, GetRevisionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetRevisionCommand, serializeAws_restJson1GetRevisionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a revision data object for a specified document ID and block address. Also
 *          returns a proof of the specified revision for verification if <code>DigestTipAddress</code>
 *          is provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetRevisionCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetRevisionCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new GetRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRevisionCommandInput} for command's `input` shape.
 * @see {@link GetRevisionCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRevisionCommand = /** @class */ (function (_super) {
    __extends(GetRevisionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRevisionCommand(input) {
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
    GetRevisionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "GetRevisionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRevisionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRevisionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRevisionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRevisionCommand(input, context);
    };
    GetRevisionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRevisionCommand(output, context);
    };
    return GetRevisionCommand;
}($Command));
export { GetRevisionCommand };
//# sourceMappingURL=GetRevisionCommand.js.map