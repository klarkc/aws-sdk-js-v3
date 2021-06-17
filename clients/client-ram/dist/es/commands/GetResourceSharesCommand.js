import { __extends } from "tslib";
import { GetResourceSharesRequest, GetResourceSharesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetResourceSharesCommand, serializeAws_restJson1GetResourceSharesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the resource shares that you own or the resource shares that are shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceSharesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceSharesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetResourceSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceSharesCommandInput} for command's `input` shape.
 * @see {@link GetResourceSharesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceSharesCommand = /** @class */ (function (_super) {
    __extends(GetResourceSharesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourceSharesCommand(input) {
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
    GetResourceSharesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "GetResourceSharesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourceSharesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourceSharesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourceSharesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetResourceSharesCommand(input, context);
    };
    GetResourceSharesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetResourceSharesCommand(output, context);
    };
    return GetResourceSharesCommand;
}($Command));
export { GetResourceSharesCommand };
//# sourceMappingURL=GetResourceSharesCommand.js.map