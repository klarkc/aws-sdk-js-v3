import { __extends } from "tslib";
import { ListSigningPlatformsRequest, ListSigningPlatformsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSigningPlatformsCommand, serializeAws_restJson1ListSigningPlatformsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all signing platforms available in code signing that match the request parameters. If
 * 			additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use
 * 			this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining
 * 			values. You can continue calling <code>ListSigningJobs</code> with your
 * 				<code>maxResults</code> parameter and with new values that code signing returns in the
 * 				<code>nextToken</code> parameter until all of your signing jobs have been
 * 			returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningPlatformsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningPlatformsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListSigningPlatformsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningPlatformsCommandInput} for command's `input` shape.
 * @see {@link ListSigningPlatformsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSigningPlatformsCommand = /** @class */ (function (_super) {
    __extends(ListSigningPlatformsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSigningPlatformsCommand(input) {
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
    ListSigningPlatformsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "ListSigningPlatformsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSigningPlatformsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSigningPlatformsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSigningPlatformsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSigningPlatformsCommand(input, context);
    };
    ListSigningPlatformsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSigningPlatformsCommand(output, context);
    };
    return ListSigningPlatformsCommand;
}($Command));
export { ListSigningPlatformsCommand };
//# sourceMappingURL=ListSigningPlatformsCommand.js.map