import { __extends } from "tslib";
import { UnshareDirectoryRequest, UnshareDirectoryResult } from "../models/models_0";
import { deserializeAws_json1_1UnshareDirectoryCommand, serializeAws_json1_1UnshareDirectoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the directory sharing between the directory owner and consumer accounts. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UnshareDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UnshareDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UnshareDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnshareDirectoryCommandInput} for command's `input` shape.
 * @see {@link UnshareDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnshareDirectoryCommand = /** @class */ (function (_super) {
    __extends(UnshareDirectoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnshareDirectoryCommand(input) {
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
    UnshareDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "UnshareDirectoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnshareDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UnshareDirectoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnshareDirectoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UnshareDirectoryCommand(input, context);
    };
    UnshareDirectoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UnshareDirectoryCommand(output, context);
    };
    return UnshareDirectoryCommand;
}($Command));
export { UnshareDirectoryCommand };
//# sourceMappingURL=UnshareDirectoryCommand.js.map