import { __extends } from "tslib";
import { RemoveRegionRequest, RemoveRegionResult } from "../models/models_0";
import { deserializeAws_json1_1RemoveRegionCommand, serializeAws_json1_1RemoveRegionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops all replication and removes the domain controllers from the specified Region. You
 *       cannot remove the primary Region with this operation. Instead, use the
 *         <code>DeleteDirectory</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RemoveRegionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RemoveRegionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RemoveRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveRegionCommandInput} for command's `input` shape.
 * @see {@link RemoveRegionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveRegionCommand = /** @class */ (function (_super) {
    __extends(RemoveRegionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveRegionCommand(input) {
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
    RemoveRegionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "RemoveRegionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveRegionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveRegionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveRegionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveRegionCommand(input, context);
    };
    RemoveRegionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveRegionCommand(output, context);
    };
    return RemoveRegionCommand;
}($Command));
export { RemoveRegionCommand };
//# sourceMappingURL=RemoveRegionCommand.js.map