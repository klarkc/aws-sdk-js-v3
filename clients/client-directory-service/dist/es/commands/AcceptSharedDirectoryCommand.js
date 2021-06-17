import { __extends } from "tslib";
import { AcceptSharedDirectoryRequest, AcceptSharedDirectoryResult } from "../models/models_0";
import { deserializeAws_json1_1AcceptSharedDirectoryCommand, serializeAws_json1_1AcceptSharedDirectoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts a directory sharing request that was sent from the directory owner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, AcceptSharedDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, AcceptSharedDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new AcceptSharedDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptSharedDirectoryCommandInput} for command's `input` shape.
 * @see {@link AcceptSharedDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptSharedDirectoryCommand = /** @class */ (function (_super) {
    __extends(AcceptSharedDirectoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptSharedDirectoryCommand(input) {
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
    AcceptSharedDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "AcceptSharedDirectoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptSharedDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptSharedDirectoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptSharedDirectoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AcceptSharedDirectoryCommand(input, context);
    };
    AcceptSharedDirectoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AcceptSharedDirectoryCommand(output, context);
    };
    return AcceptSharedDirectoryCommand;
}($Command));
export { AcceptSharedDirectoryCommand };
//# sourceMappingURL=AcceptSharedDirectoryCommand.js.map