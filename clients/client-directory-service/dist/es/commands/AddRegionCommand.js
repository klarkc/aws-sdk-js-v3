import { __extends } from "tslib";
import { AddRegionRequest, AddRegionResult } from "../models/models_0";
import { deserializeAws_json1_1AddRegionCommand, serializeAws_json1_1AddRegionCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds two domain controllers in the specified Region for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, AddRegionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, AddRegionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new AddRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddRegionCommandInput} for command's `input` shape.
 * @see {@link AddRegionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddRegionCommand = /** @class */ (function (_super) {
    __extends(AddRegionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddRegionCommand(input) {
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
    AddRegionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "AddRegionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddRegionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddRegionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddRegionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddRegionCommand(input, context);
    };
    AddRegionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddRegionCommand(output, context);
    };
    return AddRegionCommand;
}($Command));
export { AddRegionCommand };
//# sourceMappingURL=AddRegionCommand.js.map