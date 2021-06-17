import { __extends } from "tslib";
import { UpdateProfileJobRequest, UpdateProfileJobResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateProfileJobCommand, serializeAws_restJson1UpdateProfileJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the definition of an existing profile job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateProfileJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateProfileJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new UpdateProfileJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProfileJobCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProfileJobCommand = /** @class */ (function (_super) {
    __extends(UpdateProfileJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateProfileJobCommand(input) {
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
    UpdateProfileJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "UpdateProfileJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProfileJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProfileJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateProfileJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateProfileJobCommand(input, context);
    };
    UpdateProfileJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateProfileJobCommand(output, context);
    };
    return UpdateProfileJobCommand;
}($Command));
export { UpdateProfileJobCommand };
//# sourceMappingURL=UpdateProfileJobCommand.js.map