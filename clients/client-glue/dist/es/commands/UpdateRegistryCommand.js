import { __extends } from "tslib";
import { UpdateRegistryInput, UpdateRegistryResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateRegistryCommand, serializeAws_json1_1UpdateRegistryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateRegistryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateRegistryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRegistryCommandInput} for command's `input` shape.
 * @see {@link UpdateRegistryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRegistryCommand = /** @class */ (function (_super) {
    __extends(UpdateRegistryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRegistryCommand(input) {
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
    UpdateRegistryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateRegistryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRegistryInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRegistryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRegistryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRegistryCommand(input, context);
    };
    UpdateRegistryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRegistryCommand(output, context);
    };
    return UpdateRegistryCommand;
}($Command));
export { UpdateRegistryCommand };
//# sourceMappingURL=UpdateRegistryCommand.js.map