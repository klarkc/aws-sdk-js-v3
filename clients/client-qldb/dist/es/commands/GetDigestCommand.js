import { __extends } from "tslib";
import { GetDigestRequest, GetDigestResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDigestCommand, serializeAws_restJson1GetDigestCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the digest of a ledger at the latest committed block in the journal. The
 *          response includes a 256-bit hash value and a block address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetDigestCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetDigestCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new GetDigestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDigestCommandInput} for command's `input` shape.
 * @see {@link GetDigestCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDigestCommand = /** @class */ (function (_super) {
    __extends(GetDigestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDigestCommand(input) {
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
    GetDigestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "GetDigestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDigestRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDigestResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDigestCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDigestCommand(input, context);
    };
    GetDigestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDigestCommand(output, context);
    };
    return GetDigestCommand;
}($Command));
export { GetDigestCommand };
//# sourceMappingURL=GetDigestCommand.js.map