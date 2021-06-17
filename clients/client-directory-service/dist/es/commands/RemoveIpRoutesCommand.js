import { __extends } from "tslib";
import { RemoveIpRoutesRequest, RemoveIpRoutesResult } from "../models/models_0";
import { deserializeAws_json1_1RemoveIpRoutesCommand, serializeAws_json1_1RemoveIpRoutesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes IP address blocks from a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RemoveIpRoutesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RemoveIpRoutesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RemoveIpRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveIpRoutesCommandInput} for command's `input` shape.
 * @see {@link RemoveIpRoutesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveIpRoutesCommand = /** @class */ (function (_super) {
    __extends(RemoveIpRoutesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveIpRoutesCommand(input) {
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
    RemoveIpRoutesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "RemoveIpRoutesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveIpRoutesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveIpRoutesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveIpRoutesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveIpRoutesCommand(input, context);
    };
    RemoveIpRoutesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveIpRoutesCommand(output, context);
    };
    return RemoveIpRoutesCommand;
}($Command));
export { RemoveIpRoutesCommand };
//# sourceMappingURL=RemoveIpRoutesCommand.js.map