import { __extends } from "tslib";
import { RejectSharedDirectoryRequest, RejectSharedDirectoryResult } from "../models/models_0";
import { deserializeAws_json1_1RejectSharedDirectoryCommand, serializeAws_json1_1RejectSharedDirectoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rejects a directory sharing request that was sent from the directory owner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RejectSharedDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RejectSharedDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RejectSharedDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectSharedDirectoryCommandInput} for command's `input` shape.
 * @see {@link RejectSharedDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectSharedDirectoryCommand = /** @class */ (function (_super) {
    __extends(RejectSharedDirectoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectSharedDirectoryCommand(input) {
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
    RejectSharedDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "RejectSharedDirectoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectSharedDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectSharedDirectoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectSharedDirectoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RejectSharedDirectoryCommand(input, context);
    };
    RejectSharedDirectoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RejectSharedDirectoryCommand(output, context);
    };
    return RejectSharedDirectoryCommand;
}($Command));
export { RejectSharedDirectoryCommand };
//# sourceMappingURL=RejectSharedDirectoryCommand.js.map