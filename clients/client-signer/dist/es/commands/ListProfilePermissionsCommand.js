import { __extends } from "tslib";
import { ListProfilePermissionsRequest, ListProfilePermissionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListProfilePermissionsCommand, serializeAws_restJson1ListProfilePermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the cross-account permissions associated with a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListProfilePermissionsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListProfilePermissionsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListProfilePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfilePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListProfilePermissionsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProfilePermissionsCommand = /** @class */ (function (_super) {
    __extends(ListProfilePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProfilePermissionsCommand(input) {
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
    ListProfilePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "ListProfilePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProfilePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProfilePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProfilePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProfilePermissionsCommand(input, context);
    };
    ListProfilePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProfilePermissionsCommand(output, context);
    };
    return ListProfilePermissionsCommand;
}($Command));
export { ListProfilePermissionsCommand };
//# sourceMappingURL=ListProfilePermissionsCommand.js.map